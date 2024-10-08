import z from "zod";
import Link from "#kdm/link-data/link";
import RBuffer from "#buffer/r-buffer";
import WBuffer from "#buffer/w-buffer";
import assert from "node:assert/strict";
import KDMF32 from "#kdm/common/kdm-f32";
import KDMU16 from "#kdm/common/kdm-u16";
import KDMU32 from "#kdm/common/kdm-u32";
import MapData from "#kdm/mapdata/mapdata";
import ShopEntry from "#kdm/shop/shop-entry";
import KDMString from "#kdm/common/kdm-string";
import LinkData from "#kdm/link-data/link-data";
import KDMStructure from "#kdm/common/kdm-structure";
import type KDMArray from "#kdm/common/array/kdm-array";
import KDMPadding from "#kdm/common/padding/kdm-padding";
import KDMUnknownType0 from "#kdm/common/kdm-unknown-type0";
import KDMGenericArray from "#kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#kdm/common/pointer/kdm-string-pointer";
import KDMU32Parameter from "#kdm/common/parameter/kdm-u32-parameter";
import KDMF32ArrayPointer from "#kdm/common/pointer/kdm-f32-array-pointer";
import KDMGenericArrayPointer from "#kdm/common/pointer/kdm-generic-array-pointer";
import KDMGenericPointerArrayPointer from "#kdm/common/pointer/kdm-generic-pointer-array-pointer";
import BattleBGMData from "./sound/battle-bgm-data";
import ChangeBGMData from "./sound/change-bgm-data";
import EffectData from "./sound/effect-data";
import GroupData from "./sound/group-data";
import Setup3Data from "./sound/setup3-data";
import TownWorldMapData from "./sound/town-world-map-data";
import TrackVolumeData from "./sound/track-volume-data";
import UnusedSoundData0 from "./sound/unused-sound-data0";
import UnusedSoundData2 from "./sound/unused-sound-data2";
import UnusedSoundData1 from "./sound/unused-sound-data1";
import KDMBoolean from "./common/kdm-boolean";

type KDMStructureConstructor = (new (kdm: KDM) => KDMStructure);

const ALL_TYPES: KDMStructureConstructor[] = [
  // kdm_shop.bin
  ShopEntry,
  // kdm_sound.bin
  BattleBGMData,
  ChangeBGMData,
  EffectData,
  GroupData,
  Setup3Data,
  TownWorldMapData,
  TrackVolumeData,
  UnusedSoundData0,
  UnusedSoundData1,
  UnusedSoundData2,
  // kdm_mapdata.bin
  MapData,
  // kdm_link_data.bin
  LinkData,
  Link
];

const IKDM = z.object({
  tables: z.union([
    // kdm_shop.bin
    z.tuple([z.literal("SHOP_DOR"), ShopEntry.schema.array().array()]),
    z.tuple([z.literal("SHOP_IWA"), ShopEntry.schema.array().array()]),
    z.tuple([z.literal("SHOP_MONO"), ShopEntry.schema.array().array()]),
    z.tuple([z.literal("SHOP_SNOW"), ShopEntry.schema.array().array()]),
    z.tuple([z.literal("SHOP_TOWN"), ShopEntry.schema.array().array()]),
    z.tuple([z.literal("SHOP_KAZAN"), ShopEntry.schema.array().array()]),
    z.tuple([z.literal("SHOP_KOOPA"), ShopEntry.schema.array().array()]),
    // kdm_sound.bin
    z.tuple([z.literal("groupDataTable"), GroupData.schema.array().array()]),
    z.tuple([z.literal("effectDataTable"), EffectData.schema.array().array()]),
    z.tuple([z.literal("setup3DDataTable"), Setup3Data.schema.array().array()]),
    z.tuple([z.literal("battleBgmDataTable"), BattleBGMData.schema.array().array()]),
    z.tuple([z.literal("changeBGMDataTable"), ChangeBGMData.schema.array().array()]),
    z.tuple([z.literal("trackVolumeDataTable"), TrackVolumeData.schema.array().array()]),
    z.tuple([z.literal("townWorldMapDataTable"), TownWorldMapData.schema.array().array()]),
    // kdm_mapdata.bin
    z.tuple([z.literal("mapDataTable"), MapData.schema.array().array()]),
    // kdm_link_data.bin
    z.tuple([z.literal("link_data_all"), LinkData.schema.array().array()])
  ]).array()
});

type IKDM = z.infer<typeof IKDM>;
type IDKMTableName = IKDM["tables"][number][0];

class KDM {
  private static readonly SECTION_COUNT = 8;
  private static readonly HEADING_SIZE = 40;
  private static readonly SIGNATURE_1 = 0x524D444B;
  private static readonly SIGNATURE_2 = 0x00010100;

  public readonly types: Array<[
    number, KDMStructureConstructor
  ]> = [
      [0x00000000, KDMF32],
      [0x00000001, KDMU32],
      [0x00000003, KDMStringPointer],
      [0x00000004, KDMBoolean],
      [0x00000008, KDMU16],
      [0x0000000A, KDMF32ArrayPointer],
      [0x0000000D, KDMUnknownType0],
      [0x0000000F, KDMGenericArrayPointer],
      [0x00000014, KDMGenericPointerArrayPointer]
    ];

  public readonly tables: Array<[
    string, KDMArray
  ]> = [];

  public readonly sections: Array<number> = [];
  public readonly strings: Array<KDMString> = [];
  public readonly parameters: Array<KDMU32Parameter> = [];

  public createTable(name: string): KDMArray {
    const map = new Map<IDKMTableName, KDMArray>([
      // kdm_shop.bin
      ["SHOP_DOR", new KDMGenericArray(this).useNullTerminator(true)],
      ["SHOP_IWA", new KDMGenericArray(this).useNullTerminator(true)],
      ["SHOP_MONO", new KDMGenericArray(this).useNullTerminator(true)],
      ["SHOP_SNOW", new KDMGenericArray(this).useNullTerminator(true)],
      ["SHOP_TOWN", new KDMGenericArray(this).useNullTerminator(true)],
      ["SHOP_KAZAN", new KDMGenericArray(this).useNullTerminator(true)],
      ["SHOP_KOOPA", new KDMGenericArray(this).useNullTerminator(true)],
      // kdm_sound.bin
      ["groupDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      ["effectDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      ["setup3DDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      ["battleBgmDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      ["changeBGMDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      ["trackVolumeDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      ["townWorldMapDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      // kdm_mapdata.bin
      ["mapDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      // kdm_link_data.bin
      ["link_data_all", new KDMGenericArray(this).useNullTerminator(false)]
    ]);

    const table = map.get(name as IDKMTableName);
    assert(table !== undefined);

    return table;
  }

  public createStructure(data: unknown): KDMStructure {
    assert(data !== null && typeof data === "object");

    if (Array.isArray(data)) {
      return new KDMGenericArrayPointer(this).set(data);
    }

    assert("_structure" in data && typeof data._structure === "string");

    const map = new Map<string, KDMStructure>([
      // kdm_shop.bin
      ["ShopEntry", new ShopEntry(this)],
      // kdm_sound.bin
      ["GroupData", new GroupData(this)],
      ["EffectData", new EffectData(this)],
      ["Setup3Data", new Setup3Data(this)],
      ["ChangeBGMData", new ChangeBGMData(this)],
      ["BattleBGMData", new BattleBGMData(this)],
      ["TrackVolumeData", new TrackVolumeData(this)],
      ["TownWorldMapData", new TownWorldMapData(this)],
      // kdm_mapdata.bin
      ["MapData", new MapData(this)],
      // kdm_link_data.bin
      ["LinkData", new LinkData(this)],
      ["Link", new Link(this)]
    ]);

    const structure = map.get(data._structure);
    assert(structure !== undefined);

    structure.set(data);
    return structure;
  }

  private buildHeading(buffer: WBuffer): void {
    assert.equal(this.sections.length, KDM.SECTION_COUNT);

    buffer.setU32(KDM.SIGNATURE_1);
    buffer.setU32(KDM.SIGNATURE_2);

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
    const types = this.types.filter(([id]) => id >= 0x0015);
    this.sections.push(buffer.offset);

    buffer.setU32(types.length);

    types.forEach(([id, constructor]) => {
      const instance = new constructor(this);
      const fields = instance.fields.filter((field) => !(field instanceof KDMPadding));

      buffer.setU16(id);
      buffer.setU16(fields.length);

      assert(instance.unknownSection4Value0 !== null);
      buffer.setU32(instance.unknownSection4Value0);

      assert(instance.unknownSection4Value1 !== null);
      buffer.setU32(instance.unknownSection4Value1);

      const ids: number[] = [];

      fields.forEach((f) => {
        const id = this.findTypeID(f.constructor as KDMStructureConstructor);
        assert(id !== null);

        ids.push(id);
      });

      ids.forEach((id) => buffer.setU32(id));
    });
  }

  private buildSection5(buffer: WBuffer): void {
    this.sections.push(buffer.offset);

    const arrays = this.tables
      .map(([_, t]) => t.entries).flat()
      .map((e) => e.arrays).flat();

    buffer.setU32(arrays.length);

    arrays.sort((a, b) => a.uid.get() - b.uid.get())
      .forEach((arr) => arr.build(buffer));
  }

  private buildSection6(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(this.tables.length);

    this.tables.forEach(([name]) => new KDMStringPointer(this).set(name).build(buffer));
    this.tables.forEach(([_, table]) => table.build(buffer));
  }

  private buildSection7(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(0);
  }

  private prebuild(): void {
    // Registering types
    this.tables.forEach(([name]) => {
      // kdm_shop.bin
      if (name === "SHOP_DOR") {
        this.types.push([-1, ShopEntry]);
      }

      // kdm_sound.bin
      if (name === "groupDataTable") {
        this.types.push(
          [-1, Setup3Data],
          [-1, UnusedSoundData0],
          [-1, UnusedSoundData1],
          [-1, UnusedSoundData2],
          [-1, BattleBGMData],
          [-1, TrackVolumeData],
          [-1, GroupData],
          [-1, TownWorldMapData],
          [-1, EffectData],
          [-1, ChangeBGMData]
        );
      }

      // kdm_mapdata.bin
      if (name === "mapDataTable") {
        this.types.push([-1, MapData]);
      }

      // kdm_link_data.bin
      if (name === "link_data_all") {
        this.types.push([-1, Link], [-1, LinkData]);
      }
    });

    // Set parameters
    this.tables.forEach(([name, table]) => {
      // kdm_mapdata.bin
      if (name === "mapDataTable") {
        this.parameters.push(new KDMU32Parameter(this).set({
          unknown0: 0x00000000,
          name: "mapDataTableLen",
          value: table.entries.length + 1
        }));
      }

      // kdm_link_data.bin
      if (name === "link_data_all") {
        this.parameters.push(new KDMU32Parameter(this).set({
          unknown0: 0x00000000,
          name: "link_data_all_len",
          value: table.entries.length
        }));
      }
    });

    // Registering strings
    const registerStringIfNotExists = ((_string: string | KDMStringPointer) => {
      const string = (_string instanceof KDMStringPointer ? _string.get() : _string) || "";

      if (string !== "" && !this.strings.find((s) => s.get() === string)) {
        this.strings.push(new KDMString(this).set(string));
      }
    });

    // For some obscure reason, kdm_shop.bin registers strings in a different order.
    if (this.tables.map((t) => t[0]).find((s) => s === "SHOP_DOR")) {
      this.tables.forEach(([_, table]) => {
        table.entries
          .map((t) => t.arrays).flat()
          .map((arr) => arr.entries).flat()
          .map((e) => e.fields).flat()
          .filter((f) => f instanceof KDMStringPointer)
          .forEach((s) => registerStringIfNotExists(s));
      });

      this.tables.forEach(([name]) => registerStringIfNotExists(name));
    }

    this.tables.forEach(([name, table]) => {
      table.entries
        .map((t) => t.arrays).flat()
        .map((arr) => arr.entries).flat()
        .map((e) => e.fields).flat()
        .filter((f) => f instanceof KDMStringPointer)
        .forEach((s) => registerStringIfNotExists(s));

      registerStringIfNotExists(name);
    });

    this.parameters.forEach((p) => registerStringIfNotExists(p.name));

    // Assigning IDs
    let id = 0x0015;

    this.types.filter((t) => t[0] === -1).forEach((t) => t[0] = id++);

    // For some obscure reason, kdm_shop.bin assigns IDs in a different order.
    if (this.tables.map((t) => t[0]).find((s) => s === "SHOP_DOR")) {
      this.tables.forEach(([_, table]) => {
        table.entries
          .map((t) => t.arrays).flat()
          .forEach((arr) => arr.uid.set(id++));
      });

      this.tables.forEach(([_, table]) => {
        table.uid.set(id++);
      });

      this.parameters.forEach((p) => p.uid.set(id++));
    } else {
      this.tables.forEach(([_, table]) => {
        table.entries
          .map((t) => t.arrays).flat()
          .forEach((arr) => arr.uid.set(id++));

        table.uid.set(id++);
      });

      this.parameters.forEach((p) => p.uid.set(id++));
    }

    // Sorting tables
    this.tables.forEach(([_, table]) => {
      table.entries.sort((A, B) => {
        if (A instanceof KDMGenericArrayPointer && B instanceof KDMGenericArrayPointer) {
          const a = A.array.entries.at(0)!;
          const b = B.array.entries.at(0)!;

          // kdm_mapdata.bin // kdm_link_data.bin
          if (
            (a instanceof MapData && b instanceof MapData) ||
            (a instanceof LinkData && b instanceof LinkData)
          ) {
            const x = a.name.get() || "";
            const y = b.name.get() || "";

            if (x > y) return 1;
            if (x < y) return -1;
          }
        }

        return 0;
      });
    });
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

  private parseHeading(buffer: RBuffer): void {
    assert.equal(buffer.getU32(), KDM.SIGNATURE_1);
    assert.equal(buffer.getU32(), KDM.SIGNATURE_2);

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
      string.parse(buffer);

      this.strings.push(string);
    }
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
      buffer.offset += 1 * RBuffer.U16_SIZE;

      const typeid = new KDMU16(this).parse(buffer);
      buffer.offset -= 2 * RBuffer.U16_SIZE;

      const type = this.findTypeWIthID(typeid.get());

      if (type === KDMU32) {
        const parameter = new KDMU32Parameter(this).parse(buffer);
        this.parameters.push(parameter);
        continue;
      }

      assert.fail();
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

      const type = ALL_TYPES.find((constructor) => {
        const instance = new constructor(this);

        if (
          unknownSection4Value0 !== instance.unknownSection4Value0 ||
          unknownSection4Value1 !== instance.unknownSection4Value1
        ) {
          return false;
        }

        const realfields = instance.fields
          .filter((field) => !(field instanceof KDMPadding));

        if (fields.length !== realfields.length) {
          return false;
        }

        return realfields.every((realfield, index) => this.types.find(([uid, constructor]) => (
          constructor === realfield.constructor &&
          uid === fields.at(index)
        )));
      });

      assert(type !== undefined);
      this.types.push([uid, type]);
    }
  }

  private parseSection6(buffer: RBuffer): void {
    buffer.offset = this.sections.at(6)!;

    const count = buffer.getU32();
    const names: string[] = [];

    for (let i = 0; i < count; i += 1) {
      const name = new KDMStringPointer(this).parse(buffer);
      names.push(name.get() || "");
    }

    names.forEach((name) => this.tables.push([
      name, this.createTable(name).parse(buffer)
    ]));
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
    this.parseSection6(buffer);
    this.parseSection7(buffer);

    return this;
  }

  public get(): IKDM {
    const tables = this.tables.map(([name, table]) => [name, table.get()]);
    return IKDM.parse({ tables });
  }

  public set(_data: unknown): this {
    const data = IKDM.parse(_data);

    data.tables.forEach(([name, data]) => {
      const table = this.createTable(name).set(data);
      this.tables.push([name, table]);
    });

    return this;
  }

  public findTypeWIthID(id: number): null | KDMStructureConstructor {
    return this.types.find(([typeid]) => typeid === id)?.[1] ?? null;
  }

  public findTypeID(type: KDMStructureConstructor): null | number {
    return this.types.find(([_, constructor]) => type === constructor)?.[0] ?? null;
  }
}

export default KDM;
