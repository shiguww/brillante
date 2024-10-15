import z from "zod";
import RBuffer from "#/buffer/r-buffer";
import assert from "node:assert/strict";
import MapData from "#/kdm/mapdata/mapdata";
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
import KDMStructArrayPointerArray from "./common/array/kdm-struct-array-pointer-array";
import WBuffer from "#/buffer/w-buffer";
import KDMStruct from "./common/kdm-struct";
import LucieMSG from "./lucie/lucie-msg";

const ALL_STRUCTS = [
  // kdm_mapdata.bin
  MapData,
  // kdm_lucie.bin
  LucieMSG
] as const;

const IKDM = z.object({
  parameters: z.union([
    KDMF32Parameter.schema,
    KDMU32Parameter.schema
  ]).array(),
  arrays: KDMStructArray.schema().array(),
  tables: z.union([
    // kdm_mapdata.bin
    z.object({ name: z.literal("mapDataTable"), table: KDMStructArrayPointerArray.schema }),
    // kdm_lucie.bin
    z.object({ name: z.literal("lucieMsgTbl"), table: KDMStructArrayPointerArray.schema })
  ]).array()
});

type IKDM = z.infer<typeof IKDM>;
type IKDMTableName = IKDM["tables"][number]["name"];

interface KDMTable {
  name: string;
  table: KDMArray;
}

type KDMEntityConstructor = (new (kdm: KDM) => KDMEntity);

class KDM {
  private static readonly SECTION_COUNT = 8;
  private static readonly HEADING_SIZE = 40;
  private static readonly SIGNATURE_0 = 0x524D444B;
  private static readonly SIGNATURE_1 = 0x00010100;

  public readonly entities: Array<{
    uid: number;
    constructor: KDMEntityConstructor;
  }> = [
      { uid: 0x00, constructor: KDMF32 },
      { uid: 0x01, constructor: KDMU32 },
      { uid: 0x03, constructor: KDMStringPointer },
      { uid: 0x0F, constructor: KDMStructArrayPointer },
      { uid: 0x14, constructor: KDMStructArrayPointerArray }
    ];

  private _counter = 0;
  public readonly tables: Array<KDMTable> = [];
  public readonly arrays: Array<KDMArray> = [];
  public readonly sections: Array<number> = [];
  public readonly strings: Array<KDMString> = [];
  public readonly parameters: Array<KDMF32Parameter | KDMU32Parameter> = [];

  public createEntity(data: unknown): KDMEntity {
    const kind = (Object(data) as { _kind: unknown })._kind;

    // Global
    if (kind === "KDMF32Parameter") {
      return new KDMF32Parameter(this);
    }

    if (kind === "KDMU32Parameter") {
      return new KDMU32Parameter(this);
    }

    if (kind === "KDMStructArray") {
      return new KDMStructArray(this);
    }

    if (kind === "KDMStructArrayPointerArray") {
      return new KDMStructArrayPointerArray(this);
    }

    // kdm_mapdata.bin
    if (kind === "MapData") {
      return new MapData(this);
    }

    // kdm_lucie.bin
    if (kind === "LucieMSG") {
      return new LucieMSG(this);
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

    // kdm_mapdata.bin
    if (name === "mapDataTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_lucie.bin
    if (name === "lucieMsgTbl") {
      return new KDMStructArrayPointerArray(this);
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

      console.log(constructor.name);
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

  private buildHeading(buffer: WBuffer): void {
    assert.equal(this.sections.length, KDM.SECTION_COUNT);

    buffer.setU32(KDM.SIGNATURE_0);
    buffer.setU32(KDM.SIGNATURE_1);

    this.sections.forEach((section) => buffer.setU32(section / 4));
  }

  private buildSection0(buffer: WBuffer): void {
    this.sections.push(buffer.offset);

    buffer.setU32(this.strings.length);
    this.strings.forEach((s) => s.build(buffer));
  }

  private buildSection1(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(0);
  }

  private buildSection2(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(0);
  }

  private buildSection3(buffer: WBuffer): void {
    this.sections.push(buffer.offset);

    buffer.setU32(this.parameters.length);
    this.parameters.forEach((p) => p.build(buffer));
  }

  private buildSection4(buffer: WBuffer): void {
    this.sections.push(buffer.offset);

    const entities = this.entities.filter((e) => e.uid >= 0x15);
    buffer.setU32(entities.length);

    entities.forEach((e) => {
      const instance = new e.constructor(this);
      assert(instance instanceof KDMStruct);

      buffer.setU16(e.uid);
      buffer.setU16(instance.realfields.length);

      buffer.setU32(instance.unknownSection4Value0);
      buffer.setU32(instance.unknownSection4Value1);

      instance.realfields.forEach((f) => {
        const uid = this.entities.find((e) => e.constructor === f.constructor)?.uid;
        assert(uid !== undefined);

        buffer.setU32(uid);
      });
    });
  }

  private buildSection5(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(this.arrays.length);

    this.arrays.forEach((arr) => arr.build(buffer));
  }

  private buildSection6(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(this.tables.length);

    this.tables.map(({ name }) => new KDMStringPointer(this).set(name).build(buffer));
    this.tables.map(({ table }) => table.build(buffer));
  }

  private buildSection7(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(0);
  }

  private prebuild(): void {
    /* ------------------- */

    const registerStringIfNotExists = ((_string: string | KDMStringPointer) => {
      const string = _string instanceof KDMStringPointer ? _string.string : _string;

      if (string !== "" && !this.strings.find((s) => s.string === string)) {
        this.strings.push(new KDMString(this).set(string));
      }
    });

    this.arrays.map((arr) => arr.strings).flat().forEach((s) => registerStringIfNotExists(s));
    this.tables.forEach(({ name }) => registerStringIfNotExists(name));

    this.parameters.map((p) => p.strings).flat().forEach((s) => registerStringIfNotExists(s));

    /* ------------------- */

    let uid = 0x15;
    const assignUID = (() => uid++);

    this.entities.filter((e) => e.uid === -1).forEach((e) => e.uid = assignUID());

    this.arrays.map((arr) => arr.arrays).flat().forEach((arr) => arr.uid.set(assignUID()));
    this.tables.forEach(({ table }) => table.uid.set(assignUID()));
    this.parameters.forEach((p) => p.uid.set(assignUID()));
  }

  public build(): Buffer {
    const buffer = WBuffer.new(KDM.HEADING_SIZE);
    buffer.offset = KDM.HEADING_SIZE;

    this.prebuild();
    this.buildSection0(buffer);
    this.buildSection1(buffer);
    this.buildSection2(buffer);
    this.buildSection3(buffer);
    this.buildSection4(buffer);
    this.buildSection5(buffer);
    this.buildSection6(buffer);
    this.buildSection7(buffer);

    buffer.offset = 0;
    this.buildHeading(buffer);

    return buffer.buffer;
  }

  public get(): IKDM {
    const arrays = this.arrays.map((a) => a.get());
    const tables = this.tables.map((t) => ({ ...t, table: t.table.get() }));

    const parameters = this.parameters.filter((p) => ![
      "mapDataTableLen"
    ].includes(p.name.string)).map((p) => p.get());

    return IKDM.parse({ arrays, tables, parameters });
  }

  public set(_data: unknown): this {
    const kdm = IKDM.parse(_data);

    for (const { name } of kdm.tables) {
      let constructor: null | KDMEntityConstructor = null;

      // kdm_mapdata.bin
      if (name === "mapDataTable") {
        constructor = MapData;
      }

      // kdm_lucie.bin
      if (name === "lucieMsgTbl") {
        constructor = LucieMSG;
      }

      assert(constructor !== null);
      this.entities.push({ uid: -1, constructor });
    }

    for (const data of kdm.parameters) {
      const parameter = this.createEntity(data);
      assert(parameter instanceof KDMF32Parameter || parameter instanceof KDMU32Parameter);

      this.parameters.push(parameter);
      parameter.set(data);
    }

    for (const data of kdm.arrays) {
      const array = this.createEntity(data);
      assert(array instanceof KDMArray);

      this.arrays.push(array);
      array.set(data);
    }

    for (const data of kdm.tables) {
      if (data.name === "mapDataTable") {
        this.parameters.push(new KDMU32Parameter(this).set({
          unknown0: 0,
          name: "mapDataTableLen",
          value: data.table.entries.length + 1
        }));
      }

      this.tables.push({
        name: data.name,
        table: this.createTable(data.name).set(data.table)
      });
    }

    return this;
  }

  public generateID(): string {
    return `refkey-${this._counter++}`;
  }
}

export default KDM;
