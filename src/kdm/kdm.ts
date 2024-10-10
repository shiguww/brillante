import z from "zod";
import Link from "#/kdm/link-data/link";
import RBuffer from "#/buffer/r-buffer";
import WBuffer from "#/buffer/w-buffer";
import assert from "node:assert/strict";
import KDMF32 from "#/kdm/common/kdm-f32";
import KDMU16 from "#/kdm/common/kdm-u16";
import KDMU32 from "#/kdm/common/kdm-u32";
import MapData from "#/kdm/mapdata/mapdata";
import ShopEntry from "#/kdm/shop/shop-entry";
import KDMString from "#/kdm/common/kdm-string";
import LinkData from "#/kdm/link-data/link-data";
import KDMStructure from "#/kdm/common/kdm-structure";
import type KDMArray from "#/kdm/common/array/kdm-array";
import KDMPadding from "#/kdm/common/padding/kdm-padding";
import KDMUnknownType0 from "#/kdm/common/kdm-unknown-type0";
import KDMBoolean from "#/kdm/common/kdm-boolean";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32Parameter from "#/kdm/common/parameter/kdm-u32-parameter";
import KDMF32ArrayPointer from "#/kdm/common/pointer/kdm-f32-array-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import KDMGenericPointerArrayPointer from "#/kdm/common/pointer/kdm-generic-pointer-array-pointer";
import BattleBGMData from "#/kdm/sound/battle-bgm-data";
import ChangeBGMData from "#/kdm/sound/change-bgm-data";
import EffectData from "#/kdm/sound/effect-data";
import GroupData from "#/kdm/sound/group-data";
import Setup3Data from "#/kdm/sound/setup3-data";
import TownWorldMapData from "#/kdm/sound/town-world-map-data";
import TrackVolumeData from "#/kdm/sound/track-volume-data";
import UnusedSoundData0 from "#/kdm/sound/unused-sound-data0";
import UnusedSoundData2 from "#/kdm/sound/unused-sound-data2";
import UnusedSoundData1 from "#/kdm/sound/unused-sound-data1";
import LucieMSG from "#/kdm/lucie/lucie-msg";
import LockData from "#/kdm/pepalyze/lock-data";
import SecretData from "#/kdm/pepalyze/secret-data";
import SecretSealData from "#/kdm/pepalyze/secret-seal-data";
import MuseumLockData from "./pepalyze-museum/museum-lock-data";
import MuseumSecretSealData from "./pepalyze-museum/museum-secret-seal-data";
import MuseumSecretData from "./pepalyze-museum/museum-secret-data";
import DisposWorldMap from "./worldmap-data/dispos-worldmap";
import DisposWorldMapConnect from "./worldmap-data/dispos-worldmap-connect";
import DisposWorldMapConnectSubEntry from "./worldmap-data/dispos-worldmap-connect-subentry";
import DisposWorldMapSubEntry from "./worldmap-data/dispos-worldmap-subentry";
import KDMUnknownType1 from "#/kdm/common/kdm-unknown-type1";

import MapObjectData0 from "./mapobject/mapobject-data0";
import MapObjectData1 from "./mapobject/mapobject-data1";
import MapObjectData2 from "./mapobject/mapobject-data2";
import MapObjectData3 from "./mapobject/mapobject-data3";
import MapObjectData4 from "./mapobject/mapobject-data4";
import MapObjectData5 from "./mapobject/mapobject-data5";
import MapObjectData6 from "./mapobject/mapobject-data6";
import MapObjectData7 from "./mapobject/mapobject-data7";
import MapObjectData8 from "./mapobject/mapobject-data8";

type KDMStructureConstructor = (new (kdm: KDM) => KDMStructure);

const ALL_TYPES: KDMStructureConstructor[] = [
  // kdm_shop.bin
  ShopEntry,
  // kdm_lucie.bin
  LucieMSG,
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
  // kdm_pepalyze.bin
  LockData,
  SecretData,
  SecretSealData,
  // kdm_link_data.bin
  LinkData,
  Link,
  // kdm_mapobject.bin
  MapObjectData0,
  MapObjectData1,
  MapObjectData2,
  MapObjectData3,
  MapObjectData4,
  MapObjectData5,
  MapObjectData6,
  MapObjectData7,
  MapObjectData8,
  // kdm_worldmap_data.bin
  DisposWorldMapSubEntry,
  DisposWorldMap,
  DisposWorldMapConnectSubEntry,
  DisposWorldMapConnect,
  // kdm_pepalyze_museum.bin
  MuseumLockData,
  MuseumSecretData,
  MuseumSecretSealData
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
    // kdm_lucie.bin
    z.tuple([z.literal("lucieMsgTbl"), LucieMSG.schema.array().array()]),
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
    // kdm_pepalyze.bin
    z.tuple([z.literal("lockDataTable"),
    z.union([
      LockData.schema.array().array(),
      MuseumLockData.schema.array().array()
    ])
    ]),
    z.tuple([z.literal("secretDataTable"),
    z.union([
      SecretData.schema.array().array(),
      MuseumSecretData.schema.array().array()
    ])
    ]),
    z.tuple([z.literal("secretSealDataTable"), z.union([
      SecretSealData.schema.array().array(),
      MuseumSecretSealData.schema.array().array()
    ])]),
    // kdm_link_data.bin
    z.tuple([z.literal("link_data_all"), LinkData.schema.array().array()]),
    // kdm_mapobject.bin
    z.tuple([z.literal("map_object_data_tbl"), MapObjectData8.schema.array().array()]),
    // kdm_worldmap_data.bin
    z.tuple([z.literal("disposWorldMapTable"), DisposWorldMap.schema.array().array()]),
    z.tuple([z.literal("disposWorldMapConnectTable"), DisposWorldMapConnect.schema.array().array()]),
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
      [0x00000002, KDMUnknownType1],
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
      // kdm_lucie.bin
      ["lucieMsgTbl", new KDMGenericArray(this).useNullTerminator(false)],
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
      // kdm_pepalyze.bin / kdm_pepalyze_museum.bin
      ["lockDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      ["secretDataTable", new KDMGenericArray(this).useNullTerminator(true)],
      ["secretSealDataTable", new KDMGenericArray(this).useNullTerminator(false)],
      // kdm_link_data.bin
      ["link_data_all", new KDMGenericArray(this).useNullTerminator(false)],
      // kdm_mapobject.bin
      ["map_object_data_tbl", new KDMGenericArray(this).useNullTerminator(false)],
      // kdm_worldmap_data.bin
      ["disposWorldMapTable", new KDMGenericArray(this).useNullTerminator(true)],
      ["disposWorldMapConnectTable", new KDMGenericArray(this).useNullTerminator(true)]
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
      // kdm_lucie.bin
      ["LucieMSG", new LucieMSG(this)],
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
      // kdm_pepalyze.bin
      ["LockData", new LockData(this)],
      ["SecretData", new SecretData(this)],
      ["SecretSealData", new SecretSealData(this)],
      // kdm_link_data.bin
      ["LinkData", new LinkData(this)],
      ["Link", new Link(this)],
      // kdm_mapobject.bin
      ["MapObjectData0", new MapObjectData0(this)],
      ["MapObjectData1", new MapObjectData1(this)],
      ["MapObjectData2", new MapObjectData2(this)],
      ["MapObjectData3", new MapObjectData3(this)],
      ["MapObjectData4", new MapObjectData4(this)],
      ["MapObjectData5", new MapObjectData5(this)],
      ["MapObjectData6", new MapObjectData6(this)],
      ["MapObjectData7", new MapObjectData7(this)],
      ["MapObjectData8", new MapObjectData8(this)],
      // kdm_worldmap_data.bin
      ["DisposWorldMapConnect", new DisposWorldMapConnect(this)],
      ["DisposWorldMapConnectSubEntry", new DisposWorldMapConnectSubEntry(this)],
      ["DisposWorldMapSubEntry", new DisposWorldMapSubEntry(this)],
      ["DisposWorldMap", new DisposWorldMap(this)],
      // kdm_pepalyze_museum.bin
      ["MuseumLockData", new MuseumLockData(this)],
      ["MuseumSecretData", new MuseumSecretData(this)],
      ["MuseumSecretSealData", new MuseumSecretSealData(this)],
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
    this.tables.forEach(([name, table]) => {
      const entry = table.entries.at(0);
      assert(entry !== undefined);

      // kdm_shop.bin
      if (name === "SHOP_DOR") {
        return this.types.push([-1, ShopEntry]);
      }

      // kdm_lucie.bin
      if (name === "lucieMsgTbl") {
        return this.types.push([-1, LucieMSG]);
      }

      // kdm_sound.bin
      if (name === "groupDataTable") {
        return this.types.push(
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
        return this.types.push([-1, MapData]);
      }

      // kdm_mapobject.bin
      if(name === "map_object_data_tbl") {
        return this.types.push(
          [-1, MapObjectData0],
          [-1, MapObjectData1],
          [-1, MapObjectData2],
          [-1, MapObjectData3],
          [-1, MapObjectData4],
          [-1, MapObjectData5],
          [-1, MapObjectData6],
          [-1, MapObjectData7],
          [-1, MapObjectData8]
        );
      }

      // kdm_pepalyze.bin
      if (
        name === "lockDataTable" &&
        entry instanceof KDMGenericArrayPointer &&
        entry.array.entries.at(0) instanceof LockData
      ) {
        return this.types.push(
          [-1, LockData],
          [-1, SecretData],
          [-1, SecretSealData]
        );
      }

      // kdm_link_data.bin
      if (name === "link_data_all") {
        return this.types.push([-1, Link], [-1, LinkData]);
      }

      // kdm_worldmap_data.bin
      if(name === "disposWorldMapTable") {
        return this.types.push(
          [-1, DisposWorldMapSubEntry],
          [-1, DisposWorldMap],
          [-1, DisposWorldMapConnectSubEntry],
          [-1, DisposWorldMapConnect]
        );
      }

      // kdm_pepalyze_museum.bin
      if (name === "lockDataTable") {
        return this.types.push(
          [-1, MuseumLockData],
          [-1, MuseumSecretData],
          [-1, MuseumSecretSealData]
        );
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

  public toJSON(): object {
    return ({
      ...this,
      types: this.types.filter((t) => t[0] >= 0x0015).map((t) => {
        const inst = new t[1](this);

        return ({
          id: t[0],
          name: t[1].name,
          fields: inst.fields.map((f) => f.constructor.name)
        });
      })
    });
  }
}

export default KDM;
