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
import BattleModel0 from "./battle-model/battle-model0";
import BattleModel1 from "./battle-model/battle-model1";
import BattleCamera0 from "./battle-camera/battle-camera0";
import BattleCamera1 from "./battle-camera/battle-camera1";
import BattleCommon0 from "./battle-common/battle-common0";
import SoundAnime0 from "./sound-anime/sound-anime0";
import SoundAnime1 from "./sound-anime/sound-anime1";
import SoundEnv0 from "./sound-env/sound-env0";
import SoundEnv1 from "./sound-env/sound-env1";
import SoundEnv2 from "./sound-env/sound-env2";
import BattleMap0 from "./battle-map/battle-map0";
import BattleMap1 from "./battle-map/battle-map1";
import KDMU8 from "./common/primitive/kdm-u8";
import ItemData0 from "./item-data/item-data0";
import ItemData1 from "./item-data/item-data1";
import ItemData2 from "./item-data/item-data2";
import ItemData3 from "./item-data/item-data3";
import ItemData4 from "./item-data/item-data4";
import ItemData5 from "./item-data/item-data5";
import ItemData6 from "./item-data/item-data6";
import ItemData7 from "./item-data/item-data7";
import ItemData8 from "./item-data/item-data8";
import ItemData9 from "./item-data/item-data9";

const IKDM = z.object({
  constant: z.number(),
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
      z.literal("all_disposDataTbl"),
      // kdm_battle_model.bin
      z.literal("unitModelTable"),
      // kdm_battle_camera.bin
      z.literal("eventCameraDataTable"),
      // kdm_battle_common.bin
      z.literal("commonModelDataTable"),
      // kdm_sound_anime.bin
      z.literal("animeSoundDataTable"),
      // kdm_sound_env.bin
      z.literal("envDataTable"),
      // kdm_battle_map.bin
      z.literal("bmapDataTable"),
      // kdm_item_data.bin
      z.literal("ItemDataList"),
      z.literal("seal_sizeTable"),
      z.literal("ItemDataSaveList")
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
      { uid: 0x07, constructor: KDMU8 },
      { uid: 0x08, constructor: KDMU16 },
      { uid: 0x0A, constructor: KDMF32ArrayPointer },
      { uid: 0x0D, constructor: KDMStringPointerArrayPointer },
      { uid: 0x0F, constructor: KDMStructArrayPointer },
      { uid: 0x14, constructor: KDMStructArrayPointerArrayPointer }
    ];

  public constant = 0;
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

    // kdm_pepalyze.bin / kdm_pepalyze_museum.bin
    if (kind === "LockData") {
      return new LockData(this);
    }

    if (kind === "SecretData") {
      return new SecretData(this);
    }

    if (kind === "SecretSealData") {
      return new SecretSealData(this);
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

    // kdm_battle_model.bin
    if (kind === "BattleModel0") {
      return new BattleModel0(this);
    }

    if (kind === "BattleModel1") {
      return new BattleModel1(this);
    }

    // kdm_battle_camera.bin
    if (kind === "BattleCamera0") {
      return new BattleCamera0(this);
    }

    if (kind === "BattleCamera1") {
      return new BattleCamera1(this);
    }

    // kdm_battle_common.bin
    if (kind === "BattleCommon0") {
      return new BattleCommon0(this);
    }

    // kdm_sound_anime.bin
    if (kind === "SoundAnime0") {
      return new SoundAnime0(this);
    }

    if (kind === "SoundAnime1") {
      return new SoundAnime1(this);
    }

    // kdm_sound_env.bin
    if (kind === "SoundEnv0") {
      return new SoundEnv0(this);
    }

    if (kind === "SoundEnv1") {
      return new SoundEnv1(this);
    }

    if (kind === "SoundEnv2") {
      return new SoundEnv2(this);
    }

    // kdm_battle_map.bin
    if (kind === "BattleMap0") {
      return new BattleMap0(this);
    }

    if (kind === "BattleMap1") {
      return new BattleMap1(this);
    }

    // kdm_item_data.bin
    if (kind === "ItemData0") {
      return new ItemData0(this);
    }

    if (kind === "ItemData1") {
      return new ItemData1(this);
    }

    if (kind === "ItemData2") {
      return new ItemData2(this);
    }

    if (kind === "ItemData3") {
      return new ItemData3(this);
    }

    if (kind === "ItemData4") {
      return new ItemData4(this);
    }

    if (kind === "ItemData5") {
      return new ItemData5(this);
    }

    if (kind === "ItemData6") {
      return new ItemData6(this);
    }

    if (kind === "ItemData7") {
      return new ItemData7(this);
    }

    if (kind === "ItemData8") {
      return new ItemData8(this);
    }

    if (kind === "ItemData9") {
      return new ItemData9(this);
    }

    assert.fail(`${kind}`);
  }

  private addEntities(): void {
    let constructors: Array<KDMEntityConstructor> = [];

    this.tables.forEach(({ name }) => {
      // kdm_mapdata.bin
      if (name === "mapDataTable") {
        constructors.push(MapData);
      }

      // kdm_lucie.bin
      if (name === "lucieMsgTbl") {
        constructors.push(LucieMSG);
      }

      // kdm_shop.bin
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
        constructors.push(LockData, SecretData, SecretSealData);
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

      // kdm_battle_model.bin
      if (name === "unitModelTable") {
        constructors.push(BattleModel0, BattleModel1);
      }

      // kdm_battle_camera.bin
      if (name === "eventCameraDataTable") {
        constructors.push(BattleCamera0, BattleCamera1);
      }

      // kdm_battle_common.bin
      if (name === "commonModelDataTable") {
        constructors.push(BattleCommon0);
      }

      // kdm_sound_anime.bin
      if (name === "animeSoundDataTable") {
        constructors.push(SoundAnime0, SoundAnime1);
      }

      // kdm_sound_env.bin
      if (name === "envDataTable") {
        constructors.push(SoundEnv0, SoundEnv1, SoundEnv2);
      }

      // kdm_battle_map.bin
      if (name === "bmapDataTable") {
        constructors.push(BattleMap0, BattleMap1);
      }

      // kdm_item_data.bin
      if (
        name === "seal_sizeTable"
      ) {
        constructors.push(
          ItemData0, ItemData1, ItemData2, ItemData3, ItemData4,
          ItemData5, ItemData6, ItemData7, ItemData8, ItemData9
        );
      }
    });

    constructors.forEach((constructor) => this.entities.push({ uid: NaN, constructor }));
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

    // kdm_battle_model.bin    
    if (name === "unitModelTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_battle_camera.bin    
    if (name === "eventCameraDataTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_battle_common.bin
    if (name === "commonModelDataTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_sound_anime.bin
    if (name === "animeSoundDataTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_sound_env.bin
    if (name === "envDataTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_battle_map.bin
    if (name === "bmapDataTable") {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
    }

    // kdm_item_data.bin
    if (
      name === "ItemDataList" ||
      name === "seal_sizeTable" ||
      name === "ItemDataSaveList"
    ) {
      return new KDMStructArrayPointerArray(this)
        .hasNULLTerminator();
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
      const left = count - i - 1;
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

      if (parameter.unknown0.number !== 0) {
        assert(parameter.unknown0.offset !== null);
        const constant = parameter.unknown0.number - parameter.unknown0.offset - 32;

        if (this.constant === 0 && left !== 0) {
          this.constant = constant;
        }

        assert.equal(constant, this.constant);
      }
    }
  }

  private parseSection4(buffer: RBuffer): void {
    buffer.offset = this.sections.at(4)!;
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) {
      const left = count - i - 1;

      new KDMU16(this).parse(buffer);
      const size = new KDMU16(this).parse(buffer);

      assert(size.offset !== null);
      assert.equal(buffer.getU32(), 0x00000000);

      const unknown0 = new KDMU32(this).parse(buffer);

      if (unknown0.number !== 0) {
        assert(unknown0.offset !== null);

        const sizeof = 2 + 2 + 4 + 4 + (size.number * 4);
        const constant = unknown0.number - sizeof - 16 - unknown0.offset;

        if (this.constant === 0 && left !== 0) {
          this.constant = constant;
        }

        assert.equal(constant, this.constant);
      }

      for (let i = 0; i < size.number; i += 1) {
        new KDMU32(this).parse(buffer);
      }
    }

    this.addEntities();

    let id = 0x15;

    this.entities
      .filter((e) => Number.isNaN(e.uid))
      .forEach((e) => e.uid = id++);
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
      name: name, table: this.createTable(name)
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
    this.parseSection6(buffer);
    this.parseSection1(buffer);
    this.parseSection2(buffer);
    this.parseSection3(buffer);
    this.parseSection4(buffer);
    this.parseSection5(buffer);
    this.parseSection7(buffer);

    buffer.offset = this.sections.at(6)!;

    buffer.offset += RBuffer.U32_SIZE;
    buffer.offset += new KDMStringPointer(this).sizeof * this.tables.length;

    this.tables.forEach(({ table }) => table.parse(buffer));

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

      buffer.setU32(0x00000000);

      if (entities.at(-1) !== e) {
        const sizeof = 2 + 2 + 4 + 4 + (instance.realfields.length * 4);
        buffer.setU32(this.constant + sizeof + 16 + buffer.offset);
      } else {
        buffer.setU32(0x00000000);
      }

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

        if (string !== "" && !strings.has(string)) {
          strings.add(string);
          this.strings.push(new KDMString(this).set(string));
        }
      });

      if (this.tables.find(({ name }) => name === "SHOP_DOR")) {
        this.tables.forEach(({ table }) => {
          table.strings.forEach((s) => addString(s));
        });

        this.tables.forEach(({ name }) => addString(name));
      } else if (this.tables.find(({ name }) => (
        name === "mapDataTable" ||
        name === "bmapDataTable" ||
        name === "link_data_all" ||
        name === "all_disposDataTbl"
      ))) {
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
    const constant = this.constant;
    const arrays = this.arrays.map((a) => a.get());
    const tables = this.tables.map((t) => ({ ...t, table: t.table.get() }));

    const parameters = this.parameters.filter((p) => ![
      "mapDataTableLen",
      "link_data_all_len",
      "all_disposDataTblLen"
    ].includes(p.name.string)).map((p) => p.get());

    return IKDM.parse({ arrays, tables, constant, parameters });
  }

  public set(_data: unknown): this {
    const kdm = IKDM.parse(_data);
    this.constant = kdm.constant;

    for (const data of kdm.tables) {
      if (data.name === "mapDataTable") {
        this.parameters.push(new KDMU32Parameter(this).set({
          name: "mapDataTableLen",
          value: data.table.entries.length + 1
        }));
      }

      if (data.name === "link_data_all") {
        this.parameters.push(new KDMU32Parameter(this).set({
          name: "link_data_all_len",
          value: data.table.entries.length
        }));
      }


      if (data.name === "all_disposDataTbl") {
        this.parameters.push(new KDMU32Parameter(this).set({
          name: "all_disposDataTblLen",
          value: data.table.entries.length + 1
        }));
      }

      this.tables.push({ name: data.name, table: this.createTable(data.name) });
    }

    this.addEntities();

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
      const table = this.tables.find((t) => t.name === data.name);
      assert(table !== undefined);

      table.table.set(data.table);
    }

    return this;
  }

  public generateID(): string {
    return `refkey-${this._counter++}`;
  }

  public toJSON(): object {
    return ({
      ...this,
      entities: this.entities.map((e) => ({ uid: e.uid, name: e.constructor.name }))
    });
  }
}

export default KDM;
