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

const IKDM = z.object({
  paramters: z.union([
    KDMF32Parameter.schema,
    KDMU32Parameter.schema
  ]).array()
});

type IKDM = z.infer<typeof IKDM>;

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

  public readonly arrays: Array<KDMArray> = [];
  public readonly sections: Array<number> = [];
  public readonly strings: Array<KDMString> = [];
  public readonly parameters: Array<KDMF32Parameter | KDMU32Parameter> = [];

  public createEntity(data: unknown): KDMEntity {
    assert(data !== null && typeof data === "object");
    assert("$typeid" in data);

    const typeid = data.$typeid;

    if (typeid === KDMStructArray.typeid) {
      return new KDMStructArray(this);
    }

    if (typeid === KDMF32Parameter.typeid) {
      return new KDMF32Parameter(this);
    }

    if (typeid === KDMU32Parameter.typeid) {
      return new KDMU32Parameter(this);
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
    const names: Array<KDMStringPointer> = [];

    for (let i = 0; i < count; i += 1) {
      const name = new KDMStringPointer(this);
      names.push(name);

      name.parse(buffer);
    }
  }

  private parseSection5(buffer: RBuffer): void {
    buffer.offset = this.sections.at(5)!;
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) { }
  }

  private parseSection6(buffer: RBuffer): void {
    buffer.offset = this.sections.at(6)!;
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) { }
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
      parameters: this.parameters.map((p) => p.get())
    });
  }
}

export default KDM;
