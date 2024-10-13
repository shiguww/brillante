import z from "zod";
import Link from "#/kdm/link-data/link";
import RBuffer from "#/buffer/r-buffer";
import WBuffer from "#/buffer/w-buffer";
import assert from "node:assert/strict";
import KDMF32 from "#/kdm/common/kdm-f32";
import KDMU16 from "#/kdm/common/kdm-u16";
import KDMU32 from "#/kdm/common/kdm-u32";
import MapData from "#/kdm/mapdata/mapdata";
import ShopListing from "#/kdm/shop/shop-listing";
import KDMString from "#/kdm/common/kdm-string";
import LinkData from "#/kdm/link-data/link-data";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMPadding from "#/kdm/common/padding/kdm-padding";
import KDMUnknownType0 from "#/kdm/common/kdm-unknown-type0";
import KDMBoolean from "#/kdm/common/kdm-boolean";
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
import MuseumLockData from "./pepalyze/museum/museum-lock-data";
import MuseumSecretSealData from "./pepalyze/museum/museum-secret-seal-data";
import MuseumSecretData from "./pepalyze/museum/museum-secret-data";
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
import LinkDataAll from "./link-data/link-data-all";
import MapDataTable from "./mapdata/mapdata-table";
import KDMTable from "./common/kdm-table";
import LucieMSGTbl from "./lucie/lucie-msg-tbl";
import LockDataTable from "./pepalyze/lock-data-table";
import SecretDataTable from "./pepalyze/secret-data-table";
import SecretSealDataTable from "./pepalyze/secret-seal-data-table";
import ShopDORTable from "./shop/shops/shop-dor-table";
import ShopIWATable from "./shop/shops/shop-iwa-table";
import ShopKAZANTable from "./shop/shops/shop-kazan-table";
import ShopKOOPATable from "./shop/shops/shop-koopa-table";
import ShopMONOTable from "./shop/shops/shop-mono-table";
import ShopSNOWTable from "./shop/shops/shop-snow-table";
import ShopTOWNTable from "./shop/shops/shop-town-table";
import ShopListingTable from "./shop/shop-listing-table";
import DisposWorldMapTable from "./worldmap-data/dispos-worldmap-table";
import DisposWorldMapConnectTable from "./worldmap-data/dispos-worldmap-connect-table";
import GroupDataTable from "./sound/group-data-table";
import EffectDataTable from "./sound/effect-data-table";
import Setup3DataTable from "./sound/setup3-data-table";
import BattleBGMDataTable from "./sound/battle-bgm-data-table";
import ChangeBGMDataTable from "./sound/change-bdm-data-table";
import TrackVolumeDataTable from "./sound/track-volume-data-table";
import TownWorldMapDataTable from "./sound/town-world-map-data-table";
import MapObjectDataTbl from "./mapobject/mapobject-data-tbl";

type KDMStructureConstructor = (new (kdm: KDM) => KDMStructure);

const ALL_TYPES: KDMStructureConstructor[] = [
  // kdm_shop.bin
  ShopListing,
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
    z.tuple([z.literal(ShopDORTable.name), ShopDORTable.schema]),
    z.tuple([z.literal(ShopIWATable.name), ShopIWATable.schema]),
    z.tuple([z.literal(ShopMONOTable.name), ShopMONOTable.schema]),
    z.tuple([z.literal(ShopSNOWTable.name), ShopSNOWTable.schema]),
    z.tuple([z.literal(ShopTOWNTable.name), ShopTOWNTable.schema]),
    z.tuple([z.literal(ShopKAZANTable.name), ShopKAZANTable.schema]),
    z.tuple([z.literal(ShopKOOPATable.name), ShopKOOPATable.schema]),
    // kdm_lucie.bin
    z.tuple([z.literal(LucieMSGTbl.name), LucieMSGTbl.schema]),
    // kdm_sound.bin
    z.tuple([z.literal(GroupDataTable.name), GroupDataTable.schema]),
    z.tuple([z.literal(EffectDataTable.name), EffectDataTable.schema]),
    z.tuple([z.literal(Setup3DataTable.name), Setup3DataTable.schema]),
    z.tuple([z.literal(BattleBGMDataTable.name), BattleBGMDataTable.schema]),
    z.tuple([z.literal(ChangeBGMDataTable.name), ChangeBGMDataTable.schema]),
    z.tuple([z.literal(TrackVolumeDataTable.name), TrackVolumeDataTable.schema]),
    z.tuple([z.literal(TownWorldMapDataTable.name), TownWorldMapDataTable.schema]),
    // kdm_mapdata.bin
    z.tuple([z.literal(MapDataTable.name), MapDataTable.schema]),
    // kdm_pepalyze.bin
    z.tuple([z.literal(LockDataTable.name), LockDataTable.schema]),
    z.tuple([z.literal(SecretDataTable.name), SecretDataTable.schema]),
    z.tuple([z.literal(SecretSealDataTable.name), SecretSealDataTable.schema]),
    // kdm_link_data.bin
    z.tuple([z.literal(LinkDataAll.name), LinkDataAll.schema]),
    // kdm_mapobject.bin
    z.tuple([z.literal(MapObjectDataTbl.name), MapObjectDataTbl.schema]),
    // kdm_worldmap_data.bin
    z.tuple([z.literal(DisposWorldMapTable.name), DisposWorldMapTable.schema]),
    z.tuple([z.literal(DisposWorldMapConnectTable.name), DisposWorldMapConnectTable.schema]),
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

  public readonly tables: Array<KDMTable> = [];
  public readonly sections: Array<number> = [];
  public readonly strings: Array<KDMString> = [];
  public readonly parameters: Array<KDMU32Parameter> = [];

  public createTable(name: string): KDMTable {
    const map = new Map<IDKMTableName, KDMTable>([
      // kdm_shop.bin
      [ShopDORTable.name, new ShopDORTable(this)],
      [ShopIWATable.name, new ShopIWATable(this)],
      [ShopMONOTable.name, new ShopMONOTable(this)],
      [ShopSNOWTable.name, new ShopSNOWTable(this)],
      [ShopTOWNTable.name, new ShopTOWNTable(this)],
      [ShopKAZANTable.name, new ShopKAZANTable(this)],
      [ShopKOOPATable.name, new ShopKOOPATable(this)],
      // kdm_lucie.bin
      [LucieMSGTbl.name, new LucieMSGTbl(this)],
      // kdm_sound.bin
      [GroupDataTable.name, new GroupDataTable(this)],
      [EffectDataTable.name, new EffectDataTable(this)],
      [Setup3DataTable.name, new Setup3DataTable(this)],
      [BattleBGMDataTable.name, new BattleBGMDataTable(this)],
      [ChangeBGMDataTable.name, new ChangeBGMDataTable(this)],
      [TrackVolumeDataTable.name, new TrackVolumeDataTable(this)],
      [TownWorldMapDataTable.name, new TownWorldMapDataTable(this)],
      // kdm_mapdata.bin
      [MapDataTable.name, new MapDataTable(this)],
      // kdm_pepalyze.bin / kdm_pepalyze_museum.bin
      [LockDataTable.name, new LockDataTable(this)],
      [SecretDataTable.name, new SecretDataTable(this)],
      [SecretSealDataTable.name, new SecretSealDataTable(this)],
      // kdm_link_data.bin
      [LinkDataAll.name, new LinkDataAll(this)],
      // kdm_mapobject.bin
      [MapObjectDataTbl.name, new MapObjectDataTbl(this)],
      // kdm_worldmap_data.bin
      [DisposWorldMapTable.name, new DisposWorldMapTable(this)],
      [DisposWorldMapConnectTable.name, new DisposWorldMapConnectTable(this)]
    ]);

    const table = map.get(name as IDKMTableName);
    assert(table !== undefined, `Bad table name '${name}'`);

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
      ["ShopListing", new ShopListing(this)],
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
    assert.equal(this.sections.length, KDM.SECTION_COUNT, "Bad KDM section count");

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
      .map((table) => table.arrays.filter((a) => a !== table.data))
      .flat().filter((a) => a.entries.length !== 0)
      .sort((a, b) => a.uid.get() - b.uid.get());

    buffer.setU32(arrays.length);
    arrays.forEach((arr) => arr.build(buffer));
  }

  private buildSection6(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(this.tables.length);

    this.tables.forEach((table) => table.name.build(buffer));
    this.tables.forEach((table) => table.build(buffer));
  }

  private buildSection7(buffer: WBuffer): void {
    this.sections.push(buffer.offset);
    buffer.setU32(0);
  }

  private prebuild(): void {
    // Registering types
    this.tables.forEach((table) => {
      // kdm_shop.bin
      if (table instanceof ShopDORTable) {
        return this.types.push([-1, ShopListing]);
      }

      // kdm_lucie.bin
      if (table instanceof LucieMSGTbl) {
        return this.types.push([-1, LucieMSG]);
      }

      // kdm_sound.bin
      if (table instanceof Setup3DataTable) {
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
      if (table instanceof MapDataTable) {
        return this.types.push([-1, MapData]);
      }

      // kdm_mapobject.bin
      if (table instanceof MapObjectDataTbl) {
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

      // kdm_pepalyze.bin / kdm_pepalyze_museum.bin
      if (table instanceof LockDataTable) {
        const entry = table.data.entries.at(0);
        assert(entry !== undefined);

        if (
          entry instanceof KDMGenericArrayPointer &&
          entry.array.entries.at(0) instanceof MuseumLockData
        ) {
          return this.types.push(
            [-1, MuseumLockData],
            [-1, MuseumSecretData],
            [-1, MuseumSecretSealData]
          );
        }

        return this.types.push(
          [-1, LockData],
          [-1, SecretData],
          [-1, SecretSealData]
        );
      }

      // kdm_link_data.bin
      if (table instanceof LinkDataAll) {
        return this.types.push([-1, Link], [-1, LinkData]);
      }

      // kdm_worldmap_data.bin
      if (table instanceof DisposWorldMapTable) {
        return this.types.push(
          [-1, DisposWorldMapSubEntry],
          [-1, DisposWorldMap],
          [-1, DisposWorldMapConnectSubEntry],
          [-1, DisposWorldMapConnect]
        );
      }
    });

    // Set parameters
    this.tables.forEach((table) => {
      // kdm_mapdata.bin
      if (table instanceof MapDataTable) {
        this.parameters.push(new KDMU32Parameter(this).set({
          unknown0: 0x00000000,
          name: "mapDataTableLen",
          value: table.data.entries.length + 1
        }));
      }

      // kdm_link_data.bin
      if (table instanceof LinkDataAll) {
        this.parameters.push(new KDMU32Parameter(this).set({
          unknown0: 0x00000000,
          name: "link_data_all_len",
          value: table.data.entries.length
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
    if (this.tables.find((table) => table instanceof ShopListingTable)) {
      this.tables.forEach((table) => {
        table.strings
          .filter((s) => s !== table.name)
          .forEach((s) => registerStringIfNotExists(s));
      });

      this.tables.forEach((table) => registerStringIfNotExists(table.name));
    }

    this.tables.forEach((table) => table.strings.forEach((s) => registerStringIfNotExists(s)));
    this.parameters.forEach((p) => registerStringIfNotExists(p.name));

    // Assigning IDs
    let id = 0x0015;

    this.types.filter((t) => t[0] === -1).forEach((t) => t[0] = id++);

    // For some obscure reason, kdm_shop.bin assigns IDs in a different order.
    if (this.tables.find((table) => table instanceof ShopListingTable)) {
      this.tables.forEach((table) => {
        table.arrays
          .filter((a) => a !== table.data)
          .filter((a) => a.entries.length !== 0)
          .forEach((a) => a.uid.set(id++));
      });

      this.tables.forEach((table) => table.data.uid.set(id++));
    } else {
      this.tables.forEach((table) => {
        table.arrays
          .filter((a) => a !== table.data)
          .filter((a) => a.entries.length !== 0)
          .forEach((arr) => arr.uid.set(id++));

        table.data.uid.set(id++);
      });
    }

    this.parameters.forEach((p) => p.uid.set(id++));
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
    assert.equal(buffer.getU32(), KDM.SIGNATURE_1, `Bad KDM signature @ ${buffer.offset}`);
    assert.equal(buffer.getU32(), KDM.SIGNATURE_2, `Bad KDM signature @ ${buffer.offset}`);

    do {
      const section = buffer.getU32() * 4;
      this.sections.push(section);
    } while (buffer.offset < this.sections.at(0)!);

    assert.equal(this.sections.length, KDM.SECTION_COUNT, "Bad KDM section count");
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

    assert.equal(count, 0, `Bad object count in section 1 @ ${buffer.offset - RBuffer.U32_SIZE}`);
  }

  private parseSection2(buffer: RBuffer): void {
    buffer.offset = this.sections.at(2)!;
    const count = buffer.getU32();

    assert.equal(count, 0, `Bad object count in section 2 @ ${buffer.offset - RBuffer.U32_SIZE}`);
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

      assert.fail(`Bad parameter type @ ${buffer.offset}`);
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

    names.forEach((name) => this.tables.push(
      this.createTable(name).parse(buffer)
    ));
  }

  private parseSection7(buffer: RBuffer): void {
    buffer.offset = this.sections.at(7)!;
    const count = buffer.getU32();
  
    assert.equal(count, 0, `Bad object count in section 2 @ ${buffer.offset - RBuffer.U32_SIZE}`);
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
    const tables = this.tables
      .map((table) => [table.name.get(), table.get()]);

    return IKDM.parse({ tables });
  }

  public set(_data: unknown): this {
    const data = IKDM.parse(_data);

    data.tables.forEach(([name, data]) => {
      const table = this.createTable(name).set(data);
      this.tables.push(table);
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
