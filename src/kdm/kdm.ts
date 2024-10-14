import z from "zod";
import RBuffer from "#/buffer/r-buffer";
import assert from "node:assert/strict";
import KDMArray from "#/kdm/common/array/kdm-array";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMString from "#/kdm/common/primitive/kdm-string";
import KDMStructArray from "#/kdm/common/array/kdm-struct-array";
import KDMF32Parameter from "#/kdm/common/parameter/kdm-f32-parameter";
import KDMU32Parameter from "#/kdm/common/parameter/kdm-u32-parameter";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/array/kdm-struct-array-pointer";
import MapData from "#/kdm/mapdata/mapdata";
import KDMStructArrayPointerArray from "./common/array/kdm-struct-array-pointer-array";

const ALL_STRUCTS = [
  MapData
] as const;

const IKDM = z.object({
  parameters: z.union([
    KDMF32Parameter.schema,
    KDMU32Parameter.schema
  ]).array(),
  arrays: z.union([
    KDMStructArray.schema(),
    KDMStructArray.schema(),
  ]).array(),
  tables: z.union([
    z.object({ name: z.literal("mapDataTable"), table: KDMStructArrayPointerArray.schema }),
    z.object({ name: z.literal("mapDataTable"), table: KDMStructArrayPointerArray.schema })
  ]).array()
});

type IKDM = z.infer<typeof IKDM>;
type IKDMTableName = IKDM["tables"][number]["name"];

interface KDMTable {
  name: string;
  table: KDMArray;
}

class KDM {
  private static readonly SECTION_COUNT = 8;
  private static readonly SIGNATURE_0 = 0x524D444B;
  private static readonly SIGNATURE_1 = 0x00010100;

  public readonly entities: Array<{
    uid: number;
    constructor: new (kdm: KDM) => KDMEntity;
  }> = [
      { uid: 0x00, constructor: KDMF32 },
      { uid: 0x01, constructor: KDMU32 },
      { uid: 0x03, constructor: KDMStringPointer },
      { uid: 0x0F, constructor: KDMStructArrayPointer }
    ];

  private _counter = 0;
  public readonly tables: Array<KDMTable> = [];
  public readonly arrays: Array<KDMArray> = [];
  public readonly sections: Array<number> = [];
  public readonly strings: Array<KDMString> = [];
  public readonly parameters: Array<KDMF32Parameter | KDMU32Parameter> = [];

  public createEntity(data: unknown): KDMEntity {
    assert(data !== null && typeof data === "object");
    assert("$typeid" in data);

    const typeid = data.$typeid;


    // Global
    if (typeid === "KDMF32Parameter") {
      return new KDMF32Parameter(this);
    }

    if (typeid === "KDMU32Parameter") {
      return new KDMU32Parameter(this);
    }

    if (typeid === "KDMStructArray") {
      return new KDMStructArray(this);
    }

    if (typeid === "KDMStructArrayPointerArray") {
      return new KDMStructArrayPointerArray(this);
    }

    // kdm_mapdata.bin
    if (typeid === "MapData") {
      return new MapData(this);
    }

    assert.fail();
  }

  private parseHeading(buffer: RBuffer): void {
    assert.equal(buffer.getU32(), KDM.SIGNATURE_0);
    assert.equal(buffer.getU32(), KDM.SIGNATURE_1);

    do {
      const section = buffer.getU32() * 4;
      this.sections.push(section);
    } while (buffer.offset < this.sections.at(0)!);

    assert.equal(this.sections.length, KDM.SECTION_COUNT);
  }

  private parseSection0(buffer: RBuffer): void {
    buffer.offset = this.sections.at(0)!;
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) {
      const string = new KDMString(this);
      this.strings.push(string);
    }

    this.strings.forEach((s) => s.parse(buffer));
  }

  private parseSection1(buffer: RBuffer): void {
    buffer.offset = this.sections.at(1)!;
    const count = buffer.getU32();

    assert.equal(count, 0);
  }

  private parseSection2(buffer: RBuffer): void {
    buffer.offset = this.sections.at(2)!;
    const count = buffer.getU32();

    assert.equal(count, 0);
  }

  private parseSection3(buffer: RBuffer): void {
    buffer.offset = this.sections.at(3)!;
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) {
      let parameter: null | KDMF32Parameter | KDMU32Parameter = null;

      const uid = buffer.getU16();
      const typeid = buffer.getU16();

      buffer.offset -= 2 * RBuffer.U16_SIZE;

      if (this.entities.find((e) => e.uid === typeid)?.constructor === KDMF32) {
        parameter = new KDMF32Parameter(this);
      }

      if (this.entities.find((e) => e.uid === typeid)?.constructor === KDMU32) {
        parameter = new KDMU32Parameter(this);
      }

      assert(parameter !== null);

      this.parameters.push(parameter);
      parameter.parse(buffer);

      assert.equal(parameter.uid.get(), uid);
    }
  }

  private parseSection4(buffer: RBuffer): void {
    buffer.offset = this.sections.at(4)!;

    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) {
      const uid = buffer.getU16();
      const size = buffer.getU16();

      const fields: number[] = [];
      const unknownSection4Value0 = buffer.getU32();
      const unknownSection4Value1 = buffer.getU32();

      for (let j = 0; j < size; j += 1) {
        fields.push(buffer.getU32());
      }

      const constructor = ALL_STRUCTS.find((constructor) => {
        const instance = new constructor(this);

        return (
          instance.realfields.length === size &&
          instance.unknownSection4Value0 === unknownSection4Value0 &&
          instance.unknownSection4Value1 === unknownSection4Value1
        );
      });

      assert(constructor !== undefined);
      this.entities.push({ uid, constructor });
    }
  }

  private createTable(_name: string): KDMArray {
    const name = _name as IKDMTableName;

    if (name === "mapDataTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    assert.fail();
  }

  private parseArray(buffer: RBuffer): KDMArray {
    let array: null | KDMArray = null;
    buffer.offset += 2 * RBuffer.U16_SIZE;

    const tid = buffer.getU16();
    buffer.offset -= 3 * RBuffer.U16_SIZE;

    if (tid >= 0x0015) {
      array = new KDMStructArray(this);
    } else {
      const constructor = this.entities.find((e) => e.uid === tid)?.constructor;
      assert(constructor !== undefined);

      if (constructor === KDMStructArrayPointer) {
        array = new KDMStructArrayPointerArray(this);
      }
    }

    assert(array !== null);
    this.arrays.push(array);

    array.parse(buffer);
    return array;
  }

  private parseSection5(buffer: RBuffer): void {
    buffer.offset = this.sections.at(5)!;
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) {
      this.parseArray(buffer);
    }
  }

  private parseSection6(buffer: RBuffer): void {
    buffer.offset = this.sections.at(6)!;

    const count = buffer.getU32();
    const names: Array<string> = [];

    for (let i = 0; i < count; i += 1) {
      const name = new KDMStringPointer(this);
      names.push(name.parse(buffer).get() || "");
    }

    names.forEach((name) => this.tables.push({
      name: name, table: this.createTable(name).parse(buffer)
    }));
  }

  private parseSection7(buffer: RBuffer): void {
    buffer.offset = this.sections.at(7)!;
    const count = buffer.getU32();

    assert.equal(count, 0);
  }

  public parse(_buffer: Buffer): this {
    const buffer = new RBuffer(_buffer);

    this.parseHeading(buffer);
    this.parseSection0(buffer);
    this.parseSection1(buffer);
    this.parseSection2(buffer);
    this.parseSection3(buffer);
    this.parseSection4(buffer);
    this.parseSection5(buffer);
    this.parseSection6(buffer);
    this.parseSection7(buffer);

    return this;
  }

  public get(): IKDM {
    return IKDM.parse({
      parameters: this.parameters.map((p) => p.get()),
      arrays: this.arrays.map((a) => a.get()),
      tables: this.tables.map((t) => ({
        name: t.name,
        table: t.table.get()
      }))
    });
  }

  public generateID(): string {
    return `refkey-${this._counter++}`;
  }
}

export default KDM;
