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
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMStructArrayPointerArray from "./common/array/kdm-struct-array-pointer-array";
import WBuffer from "#/buffer/w-buffer";
import KDMStruct from "./common/kdm-struct";
import LucieMSG from "./lucie/lucie-msg";
import KDMStringPointerArrayPointer from "./common/primitive/kdm-string-pointer-array-pointer";
import ShopListing from "./shop/shop-listing";
import KDMU16 from "./common/primitive/kdm-u16";
import Link from "./link-data/link";
import LinkData from "./link-data/link-data";
import KDMStructArrayPointerArrayPointer from "./common/primitive/kdm-struct-array-pointer-array-pointer";
import WorldMapData0 from "./worldmap-data/worldmap-data0";
import WorldMapData1 from "./worldmap-data/worldmap-data1";
import WorldMapData2 from "./worldmap-data/worldmap-data2";
import WorldMapData3 from "./worldmap-data/worldmap-data3";
import KDMBoolean from "./common/primitive/kdm-boolean";
import LockData from "./pepalyze/lock-data";
import SecretData from "./pepalyze/secret-data";
import SecretSealData from "./pepalyze/secret-seal-data";
import MuseumLockData from "./pepalyze/museum/museum-lock-data";
import MuseumSecretData from "./pepalyze/museum/museum-secret-data";
import MuseumSecretSealData from "./pepalyze/museum/museum-secret-seal-data";
import KDMF32ArrayPointer from "./common/primitive/kdm-f32-array-pointer";
import KDMF32Array from "./common/array/kdm-f32-array";
import BattleBGMData from "./sound/battle-bgm-data";
import ChangeBGMData from "./sound/change-bgm-data";
import EffectData from "./sound/effect-data";
import GroupData from "./sound/group-data";
import Setup3Data from "./sound/setup3-data";
import TownWorldMapData from "./sound/town-worldmap-data";
import TrackVolumeData from "./sound/track-volume-data";
import UnusedSoundData0 from "./sound/unused-sound-data0";
import UnusedSoundData1 from "./sound/unused-sound-data1";
import UnusedSoundData2 from "./sound/unused-sound-data2";
import KDMUnknownType0 from "./common/primitive/kdm-unknown-type0";
import MapObjectData0 from "./mapobject/mapobject-data0";
import MapObjectData1 from "./mapobject/mapobject-data1";
import MapObjectData2 from "./mapobject/mapobject-data2";
import MapObjectData3 from "./mapobject/mapobject-data3";
import MapObjectData4 from "./mapobject/mapobject-data4";
import MapObjectData5 from "./mapobject/mapobject-data5";
import MapObjectData6 from "./mapobject/mapobject-data6";
import MapObjectData7 from "./mapobject/mapobject-data7";
import MapObjectData8 from "./mapobject/mapobject-data8";
import DisposData0 from "./dispos-data/dispos-data0";
import DisposData1 from "./dispos-data/dispos-data1";
import DisposData10 from "./dispos-data/dispos-data10";
import DisposData11 from "./dispos-data/dispos-data11";
import DisposData12 from "./dispos-data/dispos-data12";
import DisposData13 from "./dispos-data/dispos-data13";
import DisposData14 from "./dispos-data/dispos-data14";
import DisposData15 from "./dispos-data/dispos-data15";
import DisposData16 from "./dispos-data/dispos-data16";
import DisposData17 from "./dispos-data/dispos-data17";
import DisposData18 from "./dispos-data/dispos-data18";
import DisposData19 from "./dispos-data/dispos-data19";
import DisposData2 from "./dispos-data/dispos-data2";
import DisposData20 from "./dispos-data/dispos-data20";
import DisposData21 from "./dispos-data/dispos-data21";
import DisposData3 from "./dispos-data/dispos-data3";
import DisposData4 from "./dispos-data/dispos-data4";
import DisposData5 from "./dispos-data/dispos-data5";
import DisposData6 from "./dispos-data/dispos-data6";
import DisposData7 from "./dispos-data/dispos-data7";
import DisposData8 from "./dispos-data/dispos-data8";
import DisposData9 from "./dispos-data/dispos-data9";
import KDMStringPointerArray from "./common/array/kdm-string-pointer-array";

const ALL_STRUCTS = [
  // kdm_mapdata.bin
  MapData,
  // kdm_lucie.bin
  LucieMSG,
  // kdm_shop.bin
  ShopListing,
  // kdm_link_data.bin
  Link,
  LinkData,
  // kdm_worldmap_data.bin
  WorldMapData0,
  WorldMapData1,
  WorldMapData2,
  WorldMapData3,
  // kdm_pepalyze.bin
  LockData,
  SecretData,
  SecretSealData,
  // kdm_pepalyze_museum.bin
  MuseumLockData,
  MuseumSecretData,
  MuseumSecretSealData,
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
  // kdm_dispos_data.bin
  DisposData0,
  DisposData1,
  DisposData2,
  DisposData3,
  DisposData4,
  DisposData5,
  DisposData6,
  DisposData7,
  DisposData8,
  DisposData9,
  DisposData10,
  DisposData11,
  DisposData12,
  DisposData13,
  DisposData14,
  DisposData15,
  DisposData16,
  DisposData17,
  DisposData18,
  DisposData19,
  DisposData20,
  DisposData21
] as const;

const IKDM = z.object({
  parameters: z.union([
    KDMF32Parameter.schema,
    KDMU32Parameter.schema
  ]).array(),
  arrays: z.union([
    KDMF32Array.schema,
    KDMStructArray.schema(),
    KDMStringPointerArray.schema,
    KDMStructArrayPointerArray.schema
  ]).array(),
  tables: z.object({
    name: z.union([
      // kdm_mapdata.bin
      z.literal("mapDataTable"),
      // kdm_lucie.bin
      z.literal("lucieMsgTbl"),
      // kdm_shop.bin
      z.literal("SHOP_DOR"),
      z.literal("SHOP_IWA"),
      z.literal("SHOP_MONO"),
      z.literal("SHOP_SNOW"),
      z.literal("SHOP_TOWN"),
      z.literal("SHOP_KAZAN"),
      z.literal("SHOP_KOOPA"),
      // kdm_link_data.bin
      z.literal("link_data_all"),
      // kdm_worldmap_data.bin
      z.literal("disposWorldMapTable"),
      z.literal("disposWorldMapConnectTable"),
      // kdm_pepalyze / kdm_pepalyze_museum.bin
      z.literal("lockDataTable"),
      z.literal("secretDataTable"),
      z.literal("secretSealDataTable"),
      // kdm_sound.bin
      z.literal("setup3DDataTable"),
      z.literal("battleBgmDataTable"),
      z.literal("trackVolumeDataTable"),
      z.literal("groupDataTable"),
      z.literal("townWorldMapDataTable"),
      z.literal("effectDataTable"),
      z.literal("changeBGMDataTable"),
      // kdm_mapobject.bin
      z.literal("map_object_data_tbl"),
      // kdm_dispos_data.bin
      z.literal("all_disposDataTbl")
    ]),
    table: KDMStructArrayPointerArray.schema
  }).array()
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
      { uid: 0x02, constructor: KDMUnknownType0 },
      { uid: 0x03, constructor: KDMStringPointer },
      { uid: 0x04, constructor: KDMBoolean },
      { uid: 0x08, constructor: KDMU16 },
      { uid: 0x0A, constructor: KDMF32ArrayPointer },
      { uid: 0x0D, constructor: KDMStringPointerArrayPointer },
      { uid: 0x0F, constructor: KDMStructArrayPointer },
      { uid: 0x14, constructor: KDMStructArrayPointerArrayPointer }
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
    if (kind === "KDMF32Array") {
      return new KDMF32Array(this);
    }

    if (kind === "KDMF32Parameter") {
      return new KDMF32Parameter(this);
    }

    if (kind === "KDMU32Parameter") {
      return new KDMU32Parameter(this);
    }

    if (kind === "KDMStructArray") {
      return new KDMStructArray(this);
    }

    if (kind === "KDMStringPointerArray") {
      return new KDMStringPointerArray(this);
    }

    if (kind === "KDMStructArrayPointer") {
      return new KDMStructArrayPointer(this);
    }

    if (kind === "KDMStructArrayPointerArray") {
      return new KDMStructArrayPointerArray(this);
    }

    if (kind === "KDMStringPointerArrayPointer") {
      return new KDMStringPointerArrayPointer(this);
    }

    // kdm_mapdata.bin
    if (kind === "MapData") {
      return new MapData(this);
    }

    // kdm_lucie.bin
    if (kind === "LucieMSG") {
      return new LucieMSG(this);
    }

    // kdm_shop.bin
    if (kind === "ShopListing") {
      return new ShopListing(this);
    }

    // kdm_link_data.bin
    if (kind === "Link") {
      return new Link(this);
    }

    if (kind === "LinkData") {
      return new LinkData(this);
    }

    // kdm_worldmap_data.bin
    if (kind === "WorldMapData0") {
      return new WorldMapData0(this);
    }

    if (kind === "WorldMapData1") {
      return new WorldMapData1(this);
    }

    if (kind === "WorldMapData2") {
      return new WorldMapData2(this);
    }

    if (kind === "WorldMapData3") {
      return new WorldMapData3(this);
    }

    // kdm_pepalyze.bin
    if (kind === "LockData") {
      return new LockData(this);
    }

    if (kind === "SecretData") {
      return new SecretData(this);
    }

    if (kind === "SecretSealData") {
      return new SecretSealData(this);
    }

    // kdm_pepalyze_museum.bin
    if (kind === "MuseumLockData") {
      return new MuseumLockData(this);
    }

    if (kind === "MuseumSecretData") {
      return new MuseumSecretData(this);
    }

    if (kind === "MuseumSecretSealData") {
      return new MuseumSecretSealData(this);
    }

    // kdm_sound.bin
    if (kind === "BattleBGMData") {
      return new BattleBGMData(this);
    }

    if (kind === "ChangeBGMData") {
      return new ChangeBGMData(this);
    }

    if (kind === "EffectData") {
      return new EffectData(this);
    }

    if (kind === "Setup3Data") {
      return new Setup3Data(this);
    }

    if (kind === "TownWorldMapData") {
      return new TownWorldMapData(this);
    }

    if (kind === "TrackVolumeData") {
      return new TrackVolumeData(this);
    }

    // kdm_mapobject.bin
    if (kind === "MapObjectData0") {
      return new MapObjectData0(this);
    }

    if (kind === "MapObjectData1") {
      return new MapObjectData1(this);
    }

    if (kind === "MapObjectData2") {
      return new MapObjectData2(this);
    }

    if (kind === "MapObjectData3") {
      return new MapObjectData3(this);
    }

    if (kind === "MapObjectData4") {
      return new MapObjectData4(this);
    }

    if (kind === "MapObjectData5") {
      return new MapObjectData5(this);
    }

    if (kind === "MapObjectData6") {
      return new MapObjectData6(this);
    }

    if (kind === "MapObjectData7") {
      return new MapObjectData7(this);
    }

    if (kind === "MapObjectData8") {
      return new MapObjectData8(this);
    }

    // kdm_dispos_data.bin
    if (kind === "DisposData0") {
      return new DisposData0(this);
    }

    if (kind === "DisposData1") {
      return new DisposData1(this);
    }

    if (kind === "DisposData2") {
      return new DisposData2(this);
    }

    if (kind === "DisposData3") {
      return new DisposData3(this);
    }

    if (kind === "DisposData4") {
      return new DisposData4(this);
    }

    if (kind === "DisposData5") {
      return new DisposData5(this);
    }

    if (kind === "DisposData6") {
      return new DisposData6(this);
    }

    if (kind === "DisposData7") {
      return new DisposData7(this);
    }

    if (kind === "DisposData8") {
      return new DisposData8(this);
    }

    if (kind === "DisposData9") {
      return new DisposData9(this);
    }

    if (kind === "DisposData10") {
      return new DisposData10(this);
    }

    if (kind === "DisposData11") {
      return new DisposData11(this);
    }

    if (kind === "DisposData12") {
      return new DisposData12(this);
    }

    if (kind === "DisposData13") {
      return new DisposData13(this);
    }

    if (kind === "DisposData14") {
      return new DisposData14(this);
    }

    if (kind === "DisposData15") {
      return new DisposData15(this);
    }

    if (kind === "DisposData16") {
      return new DisposData16(this);
    }

    if (kind === "DisposData17") {
      return new DisposData17(this);
    }

    if (kind === "DisposData18") {
      return new DisposData18(this);
    }

    if (kind === "DisposData19") {
      return new DisposData19(this);
    }

    if (kind === "DisposData20") {
      return new DisposData20(this);
    }

    if (kind === "DisposData21") {
      return new DisposData21(this);
    }

    assert.fail(`${kind}`);
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
          instance.unknownSection4Value1 === unknownSection4Value1 &&
          instance.realfields.every((f, i) => {
            const e = this.entities.find((e) => e.constructor === f.constructor);
            assert(e !== undefined);

            return (e.uid === fields.at(i));
          })
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

    // kdm_shop.bin
    if (
      name === "SHOP_DOR" ||
      name === "SHOP_IWA" ||
      name === "SHOP_MONO" ||
      name === "SHOP_SNOW" ||
      name === "SHOP_TOWN" ||
      name === "SHOP_KAZAN" ||
      name === "SHOP_KOOPA"
    ) {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_link_data.bin
    if (name === "link_data_all") {
      return new KDMStructArrayPointerArray(this);
    }

    // kdm_worldmap_data.bin
    if (name === "disposWorldMapTable" || name === "disposWorldMapConnectTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_pepalyze.bin / kdm_pepalyze_museum.bin
    if (name === "lockDataTable" || name === "secretDataTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    if (name === "secretSealDataTable") {
      return new KDMStructArrayPointerArray(this);
    }

    // kdm_sound.bin
    if (
      name === "battleBgmDataTable" ||
      name === "changeBGMDataTable" ||
      name === "effectDataTable" ||
      name === "groupDataTable" ||
      name === "setup3DDataTable" ||
      name === "townWorldMapDataTable" ||
      name === "trackVolumeDataTable"
    ) {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_mapobject.bin
    if (name === "map_object_data_tbl") {
      return new KDMStructArrayPointerArray(this);
    }

    // kdm_dispos_data.bin
    if (name === "all_disposDataTbl") {
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

      if (constructor === KDMF32) {
        array = new KDMF32Array(this);
      }

      if (constructor === KDMStringPointer) {
        array = new KDMStringPointerArray(this);
      }

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
      assert(instance instanceof KDMStruct, `${instance.constructor.name}`);

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

    (() => {
      const strings = new Set<string>();

      const addString = ((_string: string | KDMStringPointer) => {
        const string = _string instanceof KDMStringPointer ? _string.string : _string;

        if (!strings.has(string)) {
          strings.add(string);
          this.strings.push(new KDMString(this).set(string));
        }
      });

      if (this.tables.find(({ name }) => name === "SHOP_DOR")) {
        this.tables.forEach(({ table }) => {
          table.strings.forEach((s) => addString(s));
        });

        this.tables.forEach(({ name }) => addString(name));
      } else if (this.tables.find(({ name }) => name === "mapDataTable" || name === "link_data_all")) {
        this.arrays.forEach((arr) => arr.strings.forEach((s) => addString(s)));
        this.tables.forEach(({ name }) => addString(name));
      } else {
        this.tables.forEach(({ name, table }) => {
          const arrays = new Set(table.arrays);

          this.arrays.forEach((arr) => {
            if (arrays.has(arr)) {
              arr.strings.forEach((s) => addString(s));
            }
          });

          addString(name);
        });
      }

      this.parameters.forEach((p) => p.strings.forEach((s) => addString(s)))
    })();

    /* ------------------- */

    let uid = 0x15;

    const assignUID = (() => uid++);

    this.entities.forEach((e) => {
      if (Number.isNaN(e.uid)) {
        e.uid = assignUID();
      }
    });

    if (this.tables.find(({ name }) => name === "disposWorldMapTable" || name === "lockDataTable" || name === "battleBgmDataTable")) {
      this.tables.forEach(({ table }, i, arr) => {
        const last = (i + 1 === arr.length);

        this.arrays.forEach((arr) => {
          if (arr.uid.get() === 0 && table.arrays.includes(arr)) {
            arr.uid.set(assignUID());
          }
        });

        if (table.uid.get() === 0 && !last) {
          table.uid.set(assignUID());
        }
      });

      const last = this.tables.at(-1);
      assert(last !== undefined);

      if (last.table.uid.get() === 0) {
        last.table.uid.set(assignUID());
      }
    } else {
      this.arrays.map((arr) => arr.arrays).flat().forEach((arr) => {
        if (arr.uid.get() === 0) {
          arr.uid.set(assignUID());
        }
      });

      this.tables.forEach(({ table }) => {
        if (table.uid.get() === 0) {
          table.uid.set(assignUID());
        }
      });
    }

    this.parameters.forEach((p) => {
      if (p.uid.get() === 0) {
        p.uid.set(assignUID());
      }
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

  public get(): IKDM {
    const arrays = this.arrays.map((a) => a.get());
    const tables = this.tables.map((t) => ({ ...t, table: t.table.get() }));

    const parameters = this.parameters.filter((p) => ![
      "mapDataTableLen",
      "link_data_all_len"
    ].includes(p.name.string)).map((p) => p.get());

    return IKDM.parse({ arrays, tables, parameters });
  }

  public set(_data: unknown): this {
    const kdm = IKDM.parse(_data);

    for (const { name, table } of kdm.tables) {
      let constructors: Array<KDMEntityConstructor> = [];

      // kdm_mapdata.bin
      if (name === "mapDataTable") {
        constructors.push(MapData);
      }

      // kdm_lucie.bin
      if (name === "lucieMsgTbl") {
        constructors.push(LucieMSG);
      }

      // kdm_mapdata.bin
      if (name === "SHOP_DOR") {
        constructors.push(ShopListing);
      }

      // kdm_link_data.bin
      if (name === "link_data_all") {
        constructors.push(Link, LinkData);
      }

      // kdm_worldmap_data.bin
      if (name === "disposWorldMapTable") {
        constructors.push(WorldMapData0, WorldMapData1);
      }

      if (name === "disposWorldMapConnectTable") {
        constructors.push(WorldMapData2, WorldMapData3);
      }

      // kdm_pepalyze.bin
      if (name === "lockDataTable") {
        const reference = table.entries.at(0);
        assert(reference !== undefined);

        const array = kdm.arrays.find((arr) => arr._refkey === reference.refkey);
        assert(array !== undefined);

        const entry = array.entries.at(0);
        assert(entry && typeof entry === "object" && "_kind" in entry);

        if (entry._kind.includes("Museum")) {
          constructors.push(MuseumLockData, MuseumSecretData, MuseumSecretSealData);
        } else {
          constructors.push(LockData, SecretData, SecretSealData);
        }
      }

      // kdm_sound.bin
      if (name === "battleBgmDataTable") {
        constructors.push(
          Setup3Data, UnusedSoundData0, UnusedSoundData1,
          UnusedSoundData2, BattleBGMData, TrackVolumeData,
          GroupData, TownWorldMapData, EffectData, ChangeBGMData
        );
      }

      // kdm_mapobject.bin
      if (name === "map_object_data_tbl") {
        constructors.push(
          MapObjectData0, MapObjectData1, MapObjectData2, MapObjectData3,
          MapObjectData4, MapObjectData5, MapObjectData6, MapObjectData7,
          MapObjectData8
        );
      }

      // kdm_dispos_data.bin
      if (name === "all_disposDataTbl") {
        constructors.push(
          DisposData0, DisposData1, DisposData2, DisposData3, DisposData4,
          DisposData5, DisposData6, DisposData7, DisposData8, DisposData9,
          DisposData10, DisposData11, DisposData12, DisposData13, DisposData14,
          DisposData15, DisposData16, DisposData17, DisposData18, DisposData19,
          DisposData20, DisposData21
        );
      }

      constructors.forEach((constructor) => this.entities.push({ uid: NaN, constructor }));
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

      if (data.name === "link_data_all") {
        this.parameters.push(new KDMU32Parameter(this).set({
          unknown0: 0,
          name: "link_data_all_len",
          value: data.table.entries.length
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
