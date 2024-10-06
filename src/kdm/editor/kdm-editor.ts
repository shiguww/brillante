import z from "zod";
import RBuffer from "#buffer/r-buffer";
import WBuffer from "#buffer/w-buffer";
import assert from "node:assert/strict";
import Link from "#kdm/editor/link-data/link";
import MapData from "#kdm/editor/mapdata/mapdata";
import ShopEntry from "#kdm/editor/shop/shop-entry";
import GroupData from "#kdm/editor/sound/group-data";
import KDMObject from "#kdm/editor/common/kdm-object";
import LinkData from "#kdm/editor/link-data/link-data";
import EffectData from "#kdm/editor/sound/effect-data";
import Setup3Data from "#kdm/editor/sound/setup3-data";
import type KDMTable from "#kdm/editor/common/kdm-table";
import KDMString from "#kdm/editor/common/global/kdm-string";
import BattleBGMData from "#kdm/editor/sound/battle-bgm-data";
import ChangeBGMData from "#kdm/editor/sound/change-bgm-data";
import TrackVolumeData from "#kdm/editor/sound/track-volume-data";
import UnusedSoundData0 from "#kdm/editor/sound/unused-sound-data0";
import UnusedSoundData1 from "#kdm/editor/sound/unused-sound-data1";
import UnusedSoundData2 from "#kdm/editor/sound/unused-sound-data2";
import TownWorldMapData from "#kdm/editor/sound/town-world-map-data";
import KDMPointerArray from "#kdm/editor/common/global/kdm-pointer-array";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";
import KDMU32Parameter from "#kdm/editor/common/global/parameter/kdm-u32-parameter";
import KDMPadding from "./common/primitive/kdm-padding";
import KDMF32Array from "./common/global/kdm-f32-array";

type KDMObjectConstructor = (new (kdm: KDMEditor) => KDMObject);

const IKDM = z.object({
  tables: z.union([
    z.tuple([z.literal("SHOP_IWA"), ShopEntry.schema.array()]),
    z.tuple([z.literal("SHOP_DOR"), ShopEntry.schema.array()]),
    z.tuple([z.literal("SHOP_SNOW"), ShopEntry.schema.array()]),
    z.tuple([z.literal("SHOP_MONO"), ShopEntry.schema.array()]),
    z.tuple([z.literal("SHOP_TOWN"), ShopEntry.schema.array()]),
    z.tuple([z.literal("mapDataTable"), MapData.schema.array()]),
    z.tuple([z.literal("SHOP_KAZAN"), ShopEntry.schema.array()]),
    z.tuple([z.literal("SHOP_KOOPA"), ShopEntry.schema.array()]),
    z.tuple([z.literal("link_data_all"), LinkData.schema.array()]),
    z.tuple([z.literal("groupDataTable"), GroupData.schema.array()]),
    z.tuple([z.literal("effectDataTable"), EffectData.schema.array()]),
    z.tuple([z.literal("setup3DDataTable"), Setup3Data.schema.array()]),
    z.tuple([z.literal("battleBgmDataTable"), BattleBGMData.schema.array()]),
    z.tuple([z.literal("changeBGMDataTable"), ChangeBGMData.schema.array()]),
    z.tuple([z.literal("trackVolumeDataTable"), TrackVolumeData.schema.array()]),
    z.tuple([z.literal("townWorldMapDataTable"), TownWorldMapData.schema.array()])
  ]).array()
});

type IKDM = z.infer<typeof IKDM>;
type IKDMTableName = IKDM["tables"][number][0];

type KDMParameter = KDMU32Parameter;

class KDMEditor {
  private static readonly TYPES: KDMObjectConstructor[] = [
    // kdm_mapdata.bin
    MapData,
    // kdm_link_data.bin
    Link,
    LinkData,
    // kdm_sound.bin
    Setup3Data,
    UnusedSoundData0,
    UnusedSoundData1,
    UnusedSoundData2,
    BattleBGMData,
    TrackVolumeData,
    GroupData,
    TownWorldMapData,
    EffectData,
    ChangeBGMData,
    // kdm_shop.bin
    ShopEntry
  ];

  private static readonly SECTION_COUNT = 8;
  private static readonly HEADING_SIZE = 40;
  private static readonly SIGNATURE_1 = 0x524D444B;
  private static readonly SIGNATURE_2 = 0x00010100;

  public readonly sections: Array<number> = [];
  public readonly strings: Array<KDMString> = [];
  public readonly parameters: Array<KDMParameter> = [];
  public readonly tables: Array<[string, KDMTable]> = [];
  public readonly types: Array<[number, KDMObjectConstructor]> = [
    [0x0000, KDMF32Array],
    [0x000F, KDMPointerArray]
  ];

  private setParameters(): void {
    this.tables.forEach(([name, table]) => {
      if (name === "mapDataTable") {
        this.parameters.push(new KDMU32Parameter(this).set({
          name: "mapDataTableLen",
          value: table.entries.length + 1
        }));
      }

      if (name === "link_data_all") {
        this.parameters.push(new KDMU32Parameter(this).set({
          name: "link_data_all_len",
          value: table.entries.length
        }));
      }
    });
  }

  private registerTypes(): void {
    this.tables.forEach(([_name]) => {
      const name = _name as IKDMTableName;

      // kdm_mapdata.bin
      if (name === "mapDataTable") {
        this.types.push([-1, MapData]);
      }

      // kdm_link_data.bin
      if (name === "link_data_all") {
        this.types.push([-1, Link], [-1, LinkData]);
      }

      // kdm_sound.bin
      if (name === "setup3DDataTable") {
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

      // kdm_shop.bin
      if (name === "SHOP_TOWN") {
        this.types.push([-1, ShopEntry]);
      }
    });
  }

  private createTable(name: string): KDMTable {
    const map = new Map<IKDMTableName, KDMTable>([
      // kdm_mapdata.bin
      ["mapDataTable", new KDMPointerArray(this).useNullTerminator(true)],
      // kdm_link_data.bin
      ["link_data_all", new KDMPointerArray(this).useNullTerminator(false)],
      // kdm_sound.bin
      ["groupDataTable", new KDMPointerArray(this).useNullTerminator(true)],
      ["effectDataTable", new KDMPointerArray(this).useNullTerminator(true)],
      ["setup3DDataTable", new KDMPointerArray(this).useNullTerminator(true)],
      ["battleBgmDataTable", new KDMPointerArray(this).useNullTerminator(true)],
      ["changeBGMDataTable", new KDMPointerArray(this).useNullTerminator(true)],
      ["trackVolumeDataTable", new KDMPointerArray(this).useNullTerminator(true)],
      ["townWorldMapDataTable", new KDMPointerArray(this).useNullTerminator(true)],
      // kdm_shop.bin
      ["SHOP_DOR", new KDMPointerArray(this).useNullTerminator(true)],
      ["SHOP_IWA", new KDMPointerArray(this).useNullTerminator(true)],
      ["SHOP_MONO", new KDMPointerArray(this).useNullTerminator(true)],
      ["SHOP_SNOW", new KDMPointerArray(this).useNullTerminator(true)],
      ["SHOP_TOWN", new KDMPointerArray(this).useNullTerminator(true)],
      ["SHOP_KAZAN", new KDMPointerArray(this).useNullTerminator(true)],
      ["SHOP_KOOPA", new KDMPointerArray(this).useNullTerminator(true)]
    ]);

    const table = map.get(name as IKDMTableName);
    assert(table !== undefined);

    return table;
  }

  public createObject(data: unknown): KDMObject {
    assert(
      data !== null && typeof data === "object" &&
      "_structure" in data && typeof data._structure === "string"
    );

    const map = new Map<string, KDMObject>([
      // kdm_mapdata.bin
      ["MapData", new MapData(this)],
      // kdm_link_data.bin
      ["Link", new Link(this)],
      ["LinkData", new LinkData(this)],
      // kdm_sound.bin
      ["GroupData", new GroupData(this)],
      ["EffectData", new EffectData(this)],
      ["Setup3Data", new Setup3Data(this)],
      ["ChangeBGMData", new ChangeBGMData(this)],
      ["BattleBGMData", new BattleBGMData(this)],
      ["TrackVolumeData", new TrackVolumeData(this)],
      ["TownWorldMapData", new TownWorldMapData(this)],
      // kdm_shop.bin
      ["ShopEntry", new ShopEntry(this)]
    ]);

    const object = map.get(data._structure);
    assert(object !== undefined);

    object.set(data);
    return object;
  }

  public parseObject(buffer: RBuffer): KDMObject {
    const ouid = buffer.getU16();
    buffer.getU16(); // size0
    const otid = buffer.getU16();
    buffer.getU16(); // size1

    const type = this.types.find((t) => t[0] === otid)?.[1];
    assert(type !== undefined);

    const object = new type(this);

    buffer.offset -= object.heading.sizeof;
    object.parse(buffer);

    assert.equal(object.heading.ouid.get(), ouid);
    return object;
  }

  public get(): IKDM {
    const tables = this.tables.map(([name, table]) => [name, table.get()] as const);
    return IKDM.parse({ tables });
  }

  public set(_data: unknown): this {
    const data = IKDM.parse(_data);

    data.tables.forEach(([name, data]) => {
      const table = this.createTable(name);
      table.set(data);

      this.tables.push([name, table]);
    });
    return this;
  }

  private parseHeading(buffer: RBuffer): void {
    assert.equal(buffer.getU32(), KDMEditor.SIGNATURE_1);
    assert.equal(buffer.getU32(), KDMEditor.SIGNATURE_2);

    do {
      const section = buffer.getU32() * 4;
      this.sections.push(section);
    } while (buffer.offset < this.sections.at(0)!);

    assert.equal(this.sections.length, KDMEditor.SECTION_COUNT);
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
      const uid = buffer.getU16();
      const type = buffer.getU16();
      let parameter: null | KDMParameter = null;

      if (type === KDMU32Parameter.TYPE) {
        parameter = new KDMU32Parameter(this);
      }

      assert(parameter !== null);

      buffer.offset -= parameter.heading.sizeof;
      parameter.parse(buffer);

      assert(parameter.heading.uid.get() === uid);
      this.parameters.push(parameter);
    }
  }

  private parseSection4(buffer: RBuffer): void {
    buffer.offset = this.sections.at(4)!;
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) {
      const otid = buffer.getU16();
      const size = buffer.getU16();

      const unknownValue0 = buffer.getU32();
      const unknownValue1 = buffer.getU32();

      const fields: number[] = [];

      for (let i = 0; i < size; i += 1) {
        fields.push(buffer.getU32());
      }

      const type = KDMEditor.TYPES.find((type) => {
        const inst = new type(this);

        if (
          inst.bodyfields.length !== size ||
          inst.unknownSection4Value0 !== unknownValue0 ||
          inst.unknownSection4Value1 !== unknownValue1
        ) {
          return false;
        }

        return inst.bodyfields.every((field, index) => field.ptid === fields.at(index));
      });

      assert(type !== undefined);
      this.types.push([otid, type]);
    }
  }

  private parseSection6(buffer: RBuffer): void {
    buffer.offset = this.sections.at(6)!;

    const names: string[] = [];
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) {
      const name = new KDMStringPointer(this);
      names.push(name.parse(buffer).get() || "");
    }

    names.forEach((name) => {
      const table = this.createTable(name);

      table.parse(buffer);
      this.tables.push([name, table]);
    });
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

  private registerStrings(): void {
    const registerStringIfNotExists = ((_string: string | KDMStringPointer) => {
      const string = (_string instanceof KDMStringPointer ? _string.get() : _string) || "";

      if (string !== "" && !this.strings.find((s) => s.get() === string)) {
        this.strings.push(new KDMString(this).set(string));
      }
    });

    if (this.tables.find(([name]) => name === "SHOP_TOWN")) {
      this.tables.forEach(([_, table]) => {
        table.entries.filter((e) => e instanceof KDMObject)
          .map((o) => o.objects).flat()
          .map((o) => o.fields).flat()
          .filter((f) => f instanceof KDMStringPointer)
          .forEach((s) => registerStringIfNotExists(s));

        table.entries.map((e) => e.fields)
          .flat()
          .filter((f) => f instanceof KDMStringPointer)
          .forEach((s) => registerStringIfNotExists(s));
      });

      this.tables.forEach(([name]) => {
        registerStringIfNotExists(name);
      });
    } else {
      this.tables.forEach(([name, table]) => {
        table.entries.filter((e) => e instanceof KDMObject)
          .map((o) => o.objects).flat()
          .map((o) => o.fields).flat()
          .filter((f) => f instanceof KDMStringPointer)
          .forEach((s) => registerStringIfNotExists(s));

        table.entries.map((e) => e.fields)
          .flat()
          .filter((f) => f instanceof KDMStringPointer)
          .forEach((s) => registerStringIfNotExists(s));

        registerStringIfNotExists(name);
      });
    }

    this.parameters.forEach((p) => registerStringIfNotExists(p.name));
  }

  private assignIDs(): void {
    let id = 0x015;

    this.types.forEach((t) => {
      // If the ID is already assigned (ie, globally defined types)
      if (t[0] !== -1) {
        return;
      }

      t[0] = id++;
    });

    if (this.tables.find(([name]) => name === "SHOP_TOWN")) {
      this.tables.map((t) => t[1]).forEach((t) => {
        t.entries.filter((e) => e instanceof KDMObject)
          .map((o) => o.objects).flat()
          .forEach((o) => o.heading.ouid.set(id++));
      });

      this.tables.map((t) => t[1]).forEach((t) => {
        t.heading.ouid.set(id++);
      });
    } else {
      this.tables.map((t) => t[1]).forEach((t) => {
        t.entries.filter((e) => e instanceof KDMObject)
          .map((o) => o.objects).flat()
          .forEach((o) => o.heading.ouid.set(id++));

        t.heading.ouid.set(id++);
      });
    }

    this.parameters.forEach((p) => p.heading.uid.set(id++));
  }

  private sortTables(): void {
    this.tables.map(([_, t]) => t.entries).forEach((entries) => {
      entries.sort((A, B) => {
        if (A instanceof MapData && B instanceof MapData) {
          const a = A.name.get() || "";
          const b = B.name.get() || "";

          if (a < b) return -1;
          if (a > b) return 1;
        }

        if (A instanceof LinkData && B instanceof LinkData) {
          const a = A.name.get() || "";
          const b = B.name.get() || "";

          if (a < b) return -1;
          if (a > b) return 1;
        }

        return 0;
      });
    });
  }

  private buildHeading(buffer: WBuffer): void {
    buffer.offset = 0;
    assert.equal(this.sections.length, KDMEditor.SECTION_COUNT);

    buffer.setU32(KDMEditor.SIGNATURE_1);
    buffer.setU32(KDMEditor.SIGNATURE_2);

    this.sections.forEach((section) => buffer.setU32(section / 4));
  }

  private buildSection0(buffer: WBuffer): void {
    this.sections.push(buffer.offset);

    buffer.setU32(this.strings.length);
    this.strings.forEach((s) => s.build(buffer));
  }

  private buildSection1(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(0x00000000);
  }

  private buildSection2(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(0x00000000);
  }

  private buildSection3(buffer: WBuffer): void {
    this.sections.push(buffer.offset);

    buffer.setU32(this.parameters.length);
    this.parameters.forEach((p) => p.build(buffer));
  }

  private buildSection4(buffer: WBuffer): void {
    const types = this.types.filter((t) => t[0] >= 0x0015);

    this.sections.push(buffer.offset);
    buffer.setU32(types.length);

    types.forEach(([otid, type]) => {
      const inst = new type(this);

      if (
        inst.unknownSection4Value0 === null ||
        inst.unknownSection4Value1 === null
      ) {
        return;
      }

      buffer.setU16(otid);
      buffer.setU16(inst.bodyfields.length);

      buffer.setU32(inst.unknownSection4Value0);
      buffer.setU32(inst.unknownSection4Value1);

      inst.bodyfields.forEach((f) => buffer.setU32(f.ptid));
    });
  }

  private buildSection5(buffer: WBuffer): void {
    this.sections.push(buffer.offset);

    const objects = this.tables.map((t) => t[1].entries).flat()
      .filter((e) => e instanceof KDMObject)
      .sort((a, b) => a.heading.ouid.get() - b.heading.ouid.get())
      .map((o) => o.objects).flat();

    buffer.setU32(objects.length);

    objects.forEach((o) => o.build(buffer));
  }

  private buildSection6(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(this.tables.length);

    this.tables.forEach(([name]) => new KDMStringPointer(this).set(name).build(buffer));
    this.tables.forEach(([_, table]) => table.build(buffer));
  }

  private buildSection7(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(0x00000000);
  }

  public build(): Buffer {
    this.registerTypes();
    this.setParameters();
    this.registerStrings();
    this.assignIDs();
    this.sortTables();

    const buffer = WBuffer.new(KDMEditor.HEADING_SIZE);
    buffer.offset = KDMEditor.HEADING_SIZE;

    this.buildSection0(buffer);
    this.buildSection1(buffer);
    this.buildSection2(buffer);
    this.buildSection3(buffer);
    this.buildSection4(buffer);
    this.buildSection5(buffer);
    this.buildSection6(buffer);
    this.buildSection7(buffer);
    this.buildHeading(buffer);

    return buffer.buffer;
  }

  public toJSON(): object {
    return {
      ...this,
      types: this.types.map(([otid, type]) => ({
        otid,
        name: type.name,
        fields: new type(this).fields.map((f) => f.constructor.name)
      }))
    };
  }
}

export default KDMEditor;
