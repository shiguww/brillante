import z from "zod";
import KDM from "#/kdm/kdm";
import PM4Buffer from "#/pm4-buffer";
import assert from "node:assert/strict";
import type KDMTable from "#/kdm/kdm-table";
import type KDMParameter from "#/kdm/kdm-parameter";

class KDMMapData extends KDM<IKDMMapData> {
  public static readonly COLOR_TEXTURE = "<color>";

  public static readonly BACKGROUND_TYPE_NONE = "none";
  public static readonly BACKGROUND_TYPE_COLOR = "color";
  public static readonly BACKGROUND_TYPE_TEXTURE = "texture";

  public static readonly MAP_DATA_TABLE = "mapDataTable";
  public static readonly MAP_DATA_TABLE_LEN = "mapDataTableLen";

  private readonly mapDataTableLen: KDMParameter;
  private readonly mapDataTable: KDMTable<MapData>;

  public constructor(data?: IKDMMapData) {
    super();

    this.mapDataTableLen = this.defineParameter({
      value: 0,
      unknownZ0: 0x000101FC,
      unknownZ1: 0x00000000,
      type: KDM.PARAMETER_TYPE_U32,
      name: KDMMapData.MAP_DATA_TABLE_LEN
    });

    this.mapDataTable = this.defineTable({
      name: KDMMapData.MAP_DATA_TABLE,
      build: this.buildMapDataTable.bind(this),
      parse: this.parseMapDataTable.bind(this)
    });

    if (data !== undefined) {
      data = IKDMMapData.parse(data);
      this.mapDataTable.entries = data.mapDataTable;
    }
  }

  public get objectCount(): number {
    return this.mapDataTable.entries.length;
  }

  protected override prebuild(): void {
    this.mapDataTableLen.value = this.mapDataTable.entries.length;

    this.registerStringIfNotExists(KDMMapData.COLOR_TEXTURE);
    this.registerStringIfNotExists(KDMMapData.MAP_DATA_TABLE);
    this.registerStringIfNotExists(KDMMapData.MAP_DATA_TABLE_LEN);

    this.mapDataTable.entries.forEach((entry) => {
      this.registerStringIfNotExists(entry.name);
      this.registerStringIfNotExists(entry.level);
      this.registerStringIfNotExists(entry.model);
      this.registerStringIfNotExists(entry.music);
      this.registerStringIfNotExists(entry.script);
      this.registerStringIfNotExists(entry.unknownG0);
      this.registerStringIfNotExists(entry.unknownG6);
      this.registerStringIfNotExists(entry.unknownG10);
      this.registerStringIfNotExists(entry.unknownG11);

      if (entry.background.type === KDMMapData.BACKGROUND_TYPE_COLOR) {
        this.registerStringIfNotExists(entry.background.color);
        this.registerStringIfNotExists(KDMMapData.COLOR_TEXTURE);
      }

      if (entry.background.type === KDMMapData.BACKGROUND_TYPE_TEXTURE) {
        this.registerStringIfNotExists(entry.background.texture1);
        this.registerStringIfNotExists(entry.background.texture2);
      }
    });
  }

  private buildMapDataTable(buffer: PM4Buffer): void {
    buffer.setUInt32(0x01E601FB);
    buffer.setUInt32(0x01E6000F);

    this.mapDataTable.offsets.forEach((offset) => {
      buffer.setUInt32(offset);
    });
  }

  private parseMapDataTable(buffer: PM4Buffer): void {
    const limit = this.mapDataTableLen.value;
    assert(typeof limit === "number");

    assert.equal(buffer.getUInt32(), 0x01E601FB);
    assert.equal(buffer.getUInt32(), 0x01E6000F);

    for (let i = 0; i < limit; i += 1) {
      const offset = buffer.getUInt32();
      this.mapDataTable.offsets.push(offset);
    }
  }

  private buildMapDataBackground(buffer: PM4Buffer, background: MapDataBackground): void {
    if (background.type === KDMMapData.BACKGROUND_TYPE_NONE) {
      buffer.setUInt32(0);
      buffer.setUInt32(0);
      return;
    }

    if (background.type === KDMMapData.BACKGROUND_TYPE_COLOR) {
      buffer.setUInt32(this.findOffsetOfString(KDMMapData.COLOR_TEXTURE));
      buffer.setUInt32(this.findOffsetOfString(background.color));
      return;
    }

    buffer.setUInt32(this.findOffsetOfString(background.texture1));
    buffer.setUInt32(this.findOffsetOfString(background.texture2));
  }

  private parseMapDataBackground(buffer: PM4Buffer): MapDataBackground {
    const background1 = this.findStringAtOffset(buffer.getUInt32());
    const background2 = this.findStringAtOffset(buffer.getUInt32());

    if (background1.length === 0 && background2.length === 0) {
      return { type: KDMMapData.BACKGROUND_TYPE_NONE };
    }

    if (background1 === KDMMapData.COLOR_TEXTURE) {
      return { type: KDMMapData.BACKGROUND_TYPE_COLOR, color: background2 };
    }

    return { type: KDMMapData.BACKGROUND_TYPE_TEXTURE, texture1: background1, texture2: background2 };
  }

  private buildMapData(buffer: PM4Buffer, mapData: MapData): void {
    buffer.setUInt32(this.findOffsetOfString(mapData.name));
    buffer.setUInt32(this.findOffsetOfString(mapData.level));

    buffer.setUInt32(this.findOffsetOfString(mapData.model));
    buffer.setUInt32(this.findOffsetOfString(mapData.unknownG0));

    buffer.setUInt32(mapData.unknownG1);
    buffer.setUInt32(mapData.unknownG2);

    this.buildMapDataBackground(buffer, mapData.background);

    buffer.setUInt32(this.findOffsetOfString(mapData.script));
    buffer.setUInt32(mapData.unknownG5);

    buffer.setUInt32(this.findOffsetOfString(mapData.music));
    buffer.setUInt32(this.findOffsetOfString(mapData.unknownG6));

    buffer.setUInt32(mapData.unknownG7);
    buffer.setUInt32(mapData.unknownG8);

    buffer.setUInt32(mapData.unknownG9);
    buffer.setUInt32(this.findOffsetOfString(mapData.unknownG10));

    buffer.setUInt32(this.findOffsetOfString(mapData.unknownG11));
    buffer.setUInt32(mapData.unknownG12);

    if (mapData.unknownG13 !== null) {
      buffer.setUInt16(mapData.unknownG13);
    }

    if (mapData.unknownG14 !== null) {
      buffer.setUInt16(mapData.unknownG14);
    }

    if (mapData.unknownG15 !== null) {
      buffer.setUInt16(mapData.unknownG15);
    }

    if (mapData.unknownG16 !== null) {
      buffer.setUInt16(mapData.unknownG16);
    }
  }

  private parseMapData(buffer: PM4Buffer): MapData {
    const name = this.findStringAtOffset(buffer.getUInt32());
    const level = this.findStringAtOffset(buffer.getUInt32());

    const model = this.findStringAtOffset(buffer.getUInt32());
    const unknownG0 = this.findStringAtOffset(buffer.getUInt32());

    const unknownG1 = buffer.getUInt32();
    const unknownG2 = buffer.getUInt32();

    const background = this.parseMapDataBackground(buffer);

    const script = this.findStringAtOffset(buffer.getUInt32());
    const unknownG5 = buffer.getUInt32();

    const music = this.findStringAtOffset(buffer.getUInt32());
    const unknownG6 = this.findStringAtOffset(buffer.getUInt32());

    const unknownG7 = buffer.getUInt32();
    const unknownG8 = buffer.getUInt32();

    const unknownG9 = buffer.getUInt32();
    const unknownG10 = this.findStringAtOffset(buffer.getUInt32());

    const unknownG11 = this.findStringAtOffset(buffer.getUInt32());
    const unknownG12 = buffer.getUInt32();

    let unknownG13: null | number = null;
    let unknownG14: null | number = null;
    let unknownG15: null | number = null;
    let unknownG16: null | number = null;

    if (!this.isInSection(buffer, 7)) {
      unknownG13 = buffer.getUInt16();
      unknownG14 = buffer.getUInt16();
    }

    if (!this.isInSection(buffer, 7)) {
      unknownG15 = buffer.getUInt16();
      unknownG16 = buffer.getUInt16();
    }

    return {
      unknownG6, unknownG7, unknownG8, unknownG9, script,
      name, level, model, unknownG0, unknownG1, unknownG10,
      music, background, unknownG11, unknownG12, unknownG13,
      unknownG14, unknownG15, unknownG16, unknownG2, unknownG5
    };
  }

  protected override buildSection4(buffer: PM4Buffer): void {
    buffer.setUInt32(0x00000001);
    buffer.setUInt32(0x00120015);

    buffer.setUInt32(0x00000000);
    buffer.setUInt32(0x00000000);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);

    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000001);

    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000001);

    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);

    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000001);
  }

  protected override buildSection5(buffer: PM4Buffer): void {
    buffer.setUInt32(this.objectCount);

    buffer.setUInt32(0x00120016);
    buffer.setUInt32(0x00120015);

    this.mapDataTable.entries.forEach((entry) => {
      this.mapDataTable.offsets.push(buffer.offset);
      this.buildMapData(buffer, entry);
    });
  }

  protected override parseSection4(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x00000001);
    assert.equal(buffer.getUInt32(), 0x00120015);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000001);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000001);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000001);
  }

  protected override parseSection5(buffer: PM4Buffer): void {
    const objectCount = buffer.getUInt32();

    assert.equal(buffer.getUInt32(), 0x00120016);
    assert.equal(buffer.getUInt32(), 0x00120015);

    this.mapDataTable.offsets.forEach((offset) => {
      buffer.seek(offset);

      const mapData = this.parseMapData(buffer);
      this.mapDataTable.entries.push(mapData);
    });

    assert.equal(this.objectCount, objectCount);
  }

  public override toJSON(): IKDMMapData {
    return IKDMMapData.parse({
      ...this,
      _version: I_KDM_MAP_DATA_VERSION,
      mapDataTable: this.mapDataTable.entries
    });
  }
}

const I_KDM_MAP_DATA_VERSION = 4;

const MapDataBackground = z.discriminatedUnion("type", [
  z.object({ type: z.literal(KDMMapData.BACKGROUND_TYPE_NONE) }),
  z.object({ type: z.literal(KDMMapData.BACKGROUND_TYPE_COLOR), color: z.string() }),
  z.object({ type: z.literal(KDMMapData.BACKGROUND_TYPE_TEXTURE), texture1: z.string(), texture2: z.string() })
]);

type MapDataBackground = z.infer<typeof MapDataBackground>;

const MapData = z.object({
  name: z.string(),
  level: z.string(),
  model: z.string(),
  music: z.string(),
  script: z.string(),
  unknownG1: z.number(),
  unknownG2: z.number(),
  unknownG5: z.number(),
  unknownG7: z.number(),
  unknownG8: z.number(),
  unknownG9: z.number(),
  unknownG0: z.string(),
  unknownG6: z.string(),
  unknownG12: z.number(),
  unknownG10: z.string(),
  unknownG11: z.string(),
  background: MapDataBackground,
  unknownG13: z.number().nullable(),
  unknownG14: z.number().nullable(),
  unknownG15: z.number().nullable(),
  unknownG16: z.number().nullable()
});

type MapData = z.infer<typeof MapData>;

const IKDMMapData = z.object({
  mapDataTable: MapData.array(),
  _version: z.literal(I_KDM_MAP_DATA_VERSION)
});

type IKDMMapData = z.infer<typeof IKDMMapData>;
export default KDMMapData;
