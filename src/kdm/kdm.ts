import PM4Buffer from "#/pm4-buffer";
import assert from "node:assert/strict";
import type KDMTable from "#/kdm/kdm-table";
import type KDMParameter from "#/kdm/kdm-parameter";

interface KDMString {
  offset: number;
  string: string;
}

abstract class KDM<T> {
  private static readonly SECTION_COUNT = 8;
  private static readonly SIGNATURE_SIZE = 8;
  private static readonly SIGNATURE_1 = 0x524D444B;
  private static readonly SIGNATURE_2 = 0x00010100;

  public static readonly PARAMETER_TYPE_F32 = "f32";
  public static readonly PARAMETER_TYPE_U32 = "u32";

  private readonly sections: number[];
  private readonly strings: KDMString[];
  private readonly parameters: KDMParameter[];
  private readonly tables: KDMTable<unknown>[];

  protected abstract get objectCount(): number;

  protected constructor() {
    this.tables = [];
    this.strings = [];
    this.sections = [];
    this.parameters = [];
  }

  public abstract toJSON(): T;

  protected defineTable<T>(_table: Omit<KDMTable<T>, "offsets" | "entries">): KDMTable<T> {
    const table = { ..._table, entries: [], offsets: [] };
    this.tables.push(table);
    return table;
  }

  protected defineParameter(parameter: KDMParameter): KDMParameter {
    this.parameters.push(parameter);
    return parameter;
  }

  private buildParameter(buffer: PM4Buffer, parameter: KDMParameter): void {
    buffer.setUInt32(parameter.unknownZ0);
    buffer.setUInt32(this.findOffsetOfString(parameter.name));
    buffer.setUInt32(parameter.unknownZ1);

    if (parameter.type === KDM.PARAMETER_TYPE_F32) {
      assert(typeof parameter.value === "number");
      buffer.setFloat32(parameter.value);
    }

    if (parameter.type === KDM.PARAMETER_TYPE_U32) {
      assert(typeof parameter.value === "number");
      buffer.setUInt32(parameter.value);
    }
  }

  private parseParameter(buffer: PM4Buffer): void {
    const unknownZ0 = buffer.getUInt32();
    const name = this.findStringAtOffset(buffer.getUInt32());
    const unknownZ1 = buffer.getUInt32();

    const parameter = this.parameters.find((p) => p.name === name);
    assert(parameter !== undefined);

    if (parameter.type === KDM.PARAMETER_TYPE_F32) {
      parameter.value = buffer.getFloat32();
    }

    if (parameter.type === KDM.PARAMETER_TYPE_U32) {
      parameter.value = buffer.getUInt32();
    }

    parameter.unknownZ0 = unknownZ0;
    parameter.unknownZ1 = unknownZ1;
  }

  protected isInSection(buffer: PM4Buffer, section: number): boolean {
    const current = this.sections.at(section);
    const next = this.sections.at(section + 1);
    assert(current !== undefined);

    if (next === undefined) {
      return buffer.offset >= current;
    }

    return buffer.offset >= current && buffer.offset < next;
  }

  protected abstract prebuild(): void;
  protected abstract buildSection4(buffer: PM4Buffer): void;
  protected abstract buildSection5(buffer: PM4Buffer): void;

  protected buildHeader(buffer: PM4Buffer): void {
    assert.equal(this.sections.length, KDM.SECTION_COUNT);

    buffer.setUInt32(KDM.SIGNATURE_1, KDM.SIGNATURE_2);

    this.sections.forEach((section) => {
      buffer.setUInt32(section / 4);
    });
  }

  private buildSection0(buffer: PM4Buffer): void {
    buffer.setUInt32(this.strings.length);

    this.strings.forEach((string) => {
      while (buffer.offset % 4 !== 0) {
        buffer.setUInt8(0x00);
      }

      string.offset = buffer.offset;
      buffer.setCString(string.string);

      while (buffer.offset % 4 !== 0) {
        buffer.setUInt8(0x00);
      }
    });
  }

  private buildSection1(buffer: PM4Buffer): void {
    buffer.setUInt32(0x00000000);
  }

  private buildSection2(buffer: PM4Buffer): void {
    buffer.setUInt32(0x00000000);
  }

  private buildSection3(buffer: PM4Buffer): void {
    buffer.setUInt32(this.parameters.length);

    this.parameters.forEach((parameter) => {
      this.buildParameter(buffer, parameter);
    });
  }

  private buildSection6(buffer: PM4Buffer): void {
    buffer.setUInt32(this.tables.length);

    this.tables.forEach((table) => {
      buffer.setUInt32(this.findOffsetOfString(table.name));
    });

    this.tables.forEach((table) => {
      table.build(buffer);
    });
  }

  private buildSection7(buffer: PM4Buffer): void {
    buffer.setUInt32(0x00000000);
  }

  public build(): Buffer {
    const buffer = PM4Buffer.new();
    this.prebuild();

    this.tables.forEach((table) => {
      this.registerStringIfNotExists(table.name);
    });

    this.parameters.forEach((parameter) => {
      this.registerStringIfNotExists(parameter.name);
    });

    // Leave space for signature & header, these will be done later on.
    buffer.advance(KDM.SIGNATURE_SIZE);
    buffer.advance(KDM.SECTION_COUNT * PM4Buffer.POINTER_SIZE);

    this.sections.push(buffer.offset);
    this.buildSection0(buffer);

    this.sections.push(buffer.offset);
    this.buildSection1(buffer);

    this.sections.push(buffer.offset);
    this.buildSection2(buffer);

    this.sections.push(buffer.offset);
    this.buildSection3(buffer);

    this.sections.push(buffer.offset);
    this.buildSection4(buffer);

    this.sections.push(buffer.offset);
    this.buildSection5(buffer);

    this.sections.push(buffer.offset);
    this.buildSection6(buffer);

    this.sections.push(buffer.offset);
    this.buildSection7(buffer);

    buffer.seek(0);
    this.buildHeader(buffer);
    return buffer.buffer;
  }

  protected abstract parseSection4(buffer: PM4Buffer): void;
  protected abstract parseSection5(buffer: PM4Buffer): void;

  private parseHeader(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), KDM.SIGNATURE_1);
    assert.equal(buffer.getUInt32(), KDM.SIGNATURE_2);

    this.sections.length = 0;

    do {
      const offset = buffer.getUInt32() * 4;
      this.sections.push(offset);
    } while (buffer.offset < this.sections.at(0)!);
  }

  private parseSection0(buffer: PM4Buffer): void {
    buffer.getUInt32(); // ignore string count.

    while (buffer.offset < this.sections.at(1)!) {
      while(buffer.offset % 4 !== 0) {
        buffer.getUInt8();
      }
      
      const offset = buffer.offset;
      const string = buffer.getCString();

      this.registerString(string || "\0", offset);
      console.log(`${string} @ ${offset} (${string.length})`);
    }
  }

  private parseSection1(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x00000000);
  }

  private parseSection2(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x00000000);
  }

  private parseSection3(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), this.parameters.length);

    for (let i = 0; i < this.parameters.length; i += 1) {
      this.parseParameter(buffer);
    }
  }

  private parseSection6(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), this.tables.length);

    const tableNames: string[] = [];

    for (let i = 0; i < this.tables.length; i += 1) {
      tableNames.push(this.findStringAtOffset(
        buffer.getUInt32()
      ));
    }

    tableNames.forEach((tableName) => {
      const table = this.tables.find((t) => t.name === tableName);
      assert(table !== undefined);

      table.parse(buffer);
    });
  }

  private parseSection7(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x00000000);
  }

  public parse(_buffer: Buffer): this {
    const buffer = PM4Buffer.fromBuffer(_buffer);
    this.parseHeader(buffer);

    assert(this.sections.length === KDM.SECTION_COUNT);

    buffer.seek(this.sections.at(0)!);
    this.parseSection0(buffer);

    buffer.seek(this.sections.at(1)!);
    this.parseSection1(buffer);

    buffer.seek(this.sections.at(2)!);
    this.parseSection2(buffer);

    buffer.seek(this.sections.at(3)!);
    this.parseSection3(buffer);

    buffer.seek(this.sections.at(4)!);
    this.parseSection4(buffer);

    buffer.seek(this.sections.at(6)!);
    this.parseSection6(buffer);

    buffer.seek(this.sections.at(5)!);
    this.parseSection5(buffer);

    buffer.seek(this.sections.at(7)!);
    this.parseSection7(buffer);

    return this;
  }



  protected findOffsetOfString(string: string): number {
    const found = this.strings.find((s) => s.string === string);
    return found?.offset || 0;
  }

  protected findStringAtOffset(offset: number): string {
    const found = this.strings.find((s) => s.offset === offset);
    return found?.string || "";
  }

  protected registerString(string: string, offset?: number): void {
    this.strings.push({ string, offset: offset || 0 });
  }

  protected registerStringIfNotExists(string: string, offset?: number): void {
    if (!this.strings.find((s) => s.string === string) && string !== "") {
      this.registerString(string, offset);
    }
  }
}

export default KDM;
