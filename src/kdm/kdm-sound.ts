import z from "zod";
import KDM from "#/kdm/kdm";
import KDMString from "#/kdm/kdm-string";
import PM4Buffer from "#/pm4-buffer";
import assert from "node:assert";

const Setup3Data = z.object({
  unknownA0: z.string().default(""),
  unknownA1: z.number().default(0),
  unknownA2: z.number().default(0),
  unknownA3: z.number().default(0),
  unknownA8: z.number().default(0),
  unknownA9: z.number().default(0),
  unknownA4: z.number().default(0),
  unknownA5: z.number().default(0),
  unknownA6: z.number().default(0),
  unknownA7: z.number().default(0),
  unknownA10: z.number().default(0)
});

const BattleBgmData = z.object({
  unknownB0: z.string().default(""),
  unknownB1: z.string().default(""),
  unknownB2: z.number().default(0),
  unknownB3: z.string().default(""),
  unknownB4: z.number().default(0),
  unknownB5: z.string().default(""),
  unknownB6: z.number().default(0),
  unknownB7: z.string().default(""),
  unknownB8: z.number().default(0),
  unknownB9: z.string().default(""),
  unknownB10: z.number().default(0),
  unknownB11: z.string().default(""),
  unknownB12: z.number().default(0),
  unknownB13: z.string().default(""),
  unknownB14: z.string().default(""),
  unknownB15: z.number().default(0),
  unknownB16: z.number().default(0),
  unknownB17: z.number().default(0),
  unknownB18: z.number().default(0),
  unknownB19: z.number().default(0),
  unknownB20: z.number().default(0),
  unknownB21: z.number().default(0)
});

const TrackVolumeDataSubEntry = z.object({
  unknownC0: z.number().default(0),
  unknownC1: z.number().default(0),
  unknownC2: z.number().default(0),
  unknownC3: z.number().default(0),
  unknownC4: z.number().default(0),
  unknownC5: z.number().default(0),
  unknownC6: z.number().default(0),
  unknownC7: z.number().default(0),
  unknownC8: z.number().default(0),
  unknownC9: z.number().default(0),
  unknownC10: z.number().default(0),
  unknownC11: z.number().default(0),
  unknownC12: z.number().default(0),
  unknownC13: z.number().default(0),
  unknownC14: z.number().default(0),
  unknownC15: z.number().default(0),
  unknownC16: z.number().default(0),
  unknownC17: z.number().default(0),
  unknownC18: z.number().default(0),
  unknownC19: z.number().default(0)
});

const TrackVolumeData = z.object({
  unknownD0: z.string().default(""),
  unknownD1: TrackVolumeDataSubEntry.default({}),
  unknownD2: TrackVolumeDataSubEntry.default({}),
  unknownD3: z.number().default(0),
  unknownD4: z.number().default(0),
  unknownD5: z.number().default(0),
  unknownD6: z.number().default(0),
  unknownD7: z.number().default(0),
  unknownD8: z.number().default(0),
  unknownD9: z.number().default(0),
  unknownD10: z.number().default(0),
  unknownD11: z.number().default(0),
  unknownD12: z.number().default(0),
  unknownD13: z.number().default(0),
  unknownD14: z.number().default(0),
  unknownD15: z.number().default(0),
  unknownD16: z.number().default(0),
  unknownD17: z.number().default(0),
  unknownD18: z.number().default(0),
  unknownD19: z.number().default(0),
  unknownD20: z.number().default(0),
  unknownD21: z.number().default(0),
  unknownD22: z.number().default(0),
  unknownD23: z.number().default(0),
  unknownD24: z.number().default(0),
  unknownD25: z.number().default(0),
  unknownD26: z.number().default(0),
  unknownD27: z.number().default(0),
  unknownD28: z.number().default(0),
  unknownD29: z.number().default(0),
  unknownD30: z.number().default(0),
  unknownD31: z.number().default(0),
  unknownD32: z.number().default(0),
  unknownD33: z.number().default(0),
  unknownD34: z.number().default(0),
  unknownD35: z.number().default(0),
  unknownD36: z.number().default(0),
  unknownD37: z.number().default(0),
  unknownD38: z.number().default(0),
  unknownD39: z.number().default(0),
  unknownD40: z.number().default(0),
  unknownD41: z.number().default(0),
  unknownD42: z.number().default(0),
  unknownD43: z.number().default(0),
  unknownD44: z.number().default(0),
  unknownD45: z.number().default(0),
  unknownD46: z.number().default(0),
  unknownD47: z.number().default(0),
  unknownD48: z.number().default(0),
  unknownD49: z.number().default(0),
  unknownD50: z.number().default(0),
  unknownD51: z.number().default(0),
  unknownD52: z.number().default(0),
  unknownD53: z.number().default(0),
  unknownD54: z.number().default(0),
  unknownD55: z.number().default(0),
  unknownD56: z.number().default(0),
  unknownD57: z.number().default(0),
  unknownD58: z.number().default(0)
});

const GroupData = z.object({
  unknownH0: z.string().default(""),
  unknownH1: z.string().default(""),
  unknownH2: z.number().default(0),
  unknownH3: z.number().default(0),
  unknownH4: z.number().default(0),
  unknownH5: z.number().default(0),
  unknownH6: z.number().default(0),
  unknownH7: z.number().default(0)
});

const TownWorldMapData = z.object({
  unknownK0: z.string().default(""),
  unknownK1: z.string().default(""),
  unknownK2: z.string().default(""),
  unknownK3: z.string().default(""),
  unknownK4: z.number().default(0),
  unknownK5: z.number().default(0),
  unknownK6: z.number().default(0),
  unknownK7: z.number().default(0),
  unknownK8: z.number().default(0),
  unknownK9: z.number().default(0),
  unknownK10: z.number().default(0),
  unknownK11: z.number().default(0),
  unknownK12: z.number().default(0),
  unknownK13: z.number().default(0),
  unknownK14: z.number().default(0),
  unknownK15: z.number().default(0),
  unknownK16: z.number().default(0),
  unknownK17: z.number().default(0),
  unknownK18: z.number().default(0),
  unknownK19: z.number().default(0),
  unknownK20: z.number().default(0),
  unknownK21: z.number().default(0),
  unknownK22: z.number().default(0),
  unknownK23: z.number().default(0),
  unknownK24: z.number().default(0),
  unknownK25: z.number().default(0),
  unknownK26: z.number().default(0),
  unknownK27: z.number().default(0),
  unknownK28: z.number().default(0),
  unknownK29: z.number().default(0),
  unknownK30: z.number().default(0),
  unknownK31: z.number().default(0),
  unknownK32: z.number().default(0),
  unknownK33: z.number().default(0),
  unknownK34: z.number().default(0),
  unknownK35: z.number().default(0),
  unknownK36: z.number().default(0),
  unknownK37: z.number().default(0),
  unknownK38: z.number().default(0),
  unknownK39: z.number().default(0),
  unknownK40: z.number().default(0),
  unknownK41: z.number().default(0),
  unknownK42: z.number().default(0),
  unknownK43: z.number().default(0),
  unknownK44: z.number().default(0),
  unknownK45: z.number().default(0),
  unknownK46: z.number().default(0),
  unknownK47: z.number().default(0),
  unknownK48: z.number().default(0),
  unknownK49: z.number().default(0),
  unknownK54: z.number().default(0),
  unknownK55: z.number().default(0),
  unknownK56: z.number().default(0),
  unknownK57: z.number().default(0),
  unknownK58: z.number().default(0),
  unknownK59: z.number().default(0),
  unknownK60: z.number().default(0)
});

const EffectData = z.object({
  unknownM0: z.string().default(""),
  unknownM1: z.number().default(0),
  unknownM2: z.number().default(0),
  unknownM3: z.number().default(0),
  unknownM4: z.number().default(0),
  unknownM5: z.number().default(0),
  unknownM6: z.number().default(0),
  unknownM7: z.number().default(0),
  unknownM8: z.number().default(0),
  unknownM9: z.number().default(0),
  unknownM10: z.number().default(0),
  unknownM11: z.number().default(0),
  unknownM12: z.number().default(0)
});

//

const I_KDM_SOUND_VERSION = 0;

const EffectDataTable = z.object({
  unknownN0: z.number().default(0),
  unknownN1: z.number().default(0),
  entries: EffectData.array().default([])
});

type EffectDataTable = z.infer<typeof EffectDataTable>;

const TownWorldMapDataTable = z.object({
  unknownL0: z.number().default(0),
  unknownL1: z.number().default(0),
  entries: TownWorldMapData.array().default([])
});

type TownWorldMapDataTable = z.infer<typeof TownWorldMapDataTable>;

const Setup3DataTable = z.object({
  unknownG0: z.number().default(0),
  unknownG1: z.number().default(0),
  entries: Setup3Data.array().default([])
});

type Setup3DataTable = z.infer<typeof Setup3DataTable>;

const BattleBgmDataTable = z.object({
  unknownF0: z.number().default(0),
  unknownF1: z.number().default(0),
  entries: BattleBgmData.array().default([])
});

type BattleBgmDataTable = z.infer<typeof BattleBgmDataTable>;

const TrackVolumeDataTable = z.object({
  unknownE0: z.number().default(0),
  unknownE1: z.number().default(0),
  entries: TrackVolumeData.array().default([])
});

type TrackVolumeDataTable = z.infer<typeof TrackVolumeDataTable>;

const GroupDataTable = z.object({
  unknownI0: z.number().default(0),
  unknownI1: z.number().default(0),
  entries: GroupData.array().default([])
});

type GroupDataTable = z.infer<typeof GroupDataTable>;

const IKDMSound = z.object({
  _version: z.literal(I_KDM_SOUND_VERSION),
  groupDataTable: GroupDataTable.default({}),
  setup3DataTable: Setup3DataTable.default({}),
  effectDataTable: EffectDataTable.default({}),
  battleBgmDataTable: BattleBgmDataTable.default({}),
  trackVolumeDataTable: TrackVolumeDataTable.default({}),
  townWorldMapDataTable: TownWorldMapDataTable.default({})
});

type IKDMSound = z.infer<typeof IKDMSound>;

class KDMSound extends KDM<IKDMSound> {
  public static readonly TABLE_COUNT = 7;
  public static readonly SECTION_COUNT = 8;

  public static readonly GROUP_DATA_TABLE = "groupDataTable";
  public static readonly EFFECT_DATA_TABLE = "effectDataTable";
  public static readonly SETUP_3_DATA_TABLE = "setup3DDataTable";
  public static readonly CHANGE_BGM_DATA_TABLE = "changeBGMDataTable";
  public static readonly BATTLE_BGM_DATA_TABLE = "battleBgmDataTable";
  public static readonly TRACK_VOLUME_DATA_TABLE = "trackVolumeDataTable";
  public static readonly TOWN_WORLD_MAP_DATA_TABLE = "townWorldMapDataTable";

  protected sections: number[];

  protected groupDataTable: GroupDataTable;
  protected effectDataTable: EffectDataTable;
  protected setup3DataTable: Setup3DataTable;
  protected battleBgmDataTable: BattleBgmDataTable;
  protected trackVolumeDataTable: TrackVolumeDataTable;
  protected townWorldMapDataTable: TownWorldMapDataTable;

  protected override section0: { offset: number; strings: KDMString[] };

  protected section6: {
    groupDataTable: number[];
    effectDataTable: number[];
    setup3DataTable: number[];
    battleBgmDataTable: number[];
    trackVolumeDataTable: number[];
    townWorldMapDataTable: number[];
  }

  public constructor(_data?: IKDMSound) {
    super();

    let data: IKDMSound;

    if (_data === undefined) {
      data = IKDMSound.default({ _version: I_KDM_SOUND_VERSION }).parse(undefined);
    } else {
      data = IKDMSound.parse(_data);
    }

    this.sections = [];
    this.section0 = { offset: 0, strings: [] };

    this.section6 = {
      groupDataTable: [],
      setup3DataTable: [],
      effectDataTable: [],
      battleBgmDataTable: [],
      trackVolumeDataTable: [],
      townWorldMapDataTable: []
    };

    this.groupDataTable = { ...data.groupDataTable };
    this.effectDataTable = { ...data.effectDataTable };
    this.setup3DataTable = { ...data.setup3DataTable };
    this.battleBgmDataTable = { ...data.battleBgmDataTable };
    this.trackVolumeDataTable = { ...data.trackVolumeDataTable };
    this.townWorldMapDataTable = { ...data.townWorldMapDataTable };
  }

  private parseSection0(buffer: PM4Buffer): void {
    buffer.seek(this.section0.offset);
    buffer.getUInt32();

    while (buffer.offset < this.sections.at(1)!) {
      const offset = buffer.offset;
      const string = buffer.getCString();

      if (string === "") {
        continue;
      }

      this.registerString(string, offset);
    }
  }

  private parseSection1(buffer: PM4Buffer): void {
    buffer.seek(this.sections.at(1)!);
    assert.equal(buffer.getUInt32(), 0);
  }

  private parseSection2(buffer: PM4Buffer): void {
    buffer.seek(this.sections.at(2)!);
    assert.equal(buffer.getUInt32(), 0);
  }

  private parseSection3(buffer: PM4Buffer): void {
    buffer.seek(this.sections.at(3)!);
    assert.equal(buffer.getUInt32(), 0);
  }

  private parseSection4(buffer: PM4Buffer): void {
    buffer.seek(this.sections.at(4)!);
    // nobody knows what happens here...
  }

  private parseSection5(buffer: PM4Buffer): void {
    buffer.seek(this.sections.at(5)!);

    // effectDataTable
    this.section6.effectDataTable.forEach((offset) => {
      buffer.seek(offset);

      const effectData = EffectData
        .default({})
        .parse(undefined);

      effectData.unknownM0 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      effectData.unknownM1 = buffer.getFloat32();
      effectData.unknownM2 = buffer.getFloat32();
      effectData.unknownM3 = buffer.getFloat32();

      effectData.unknownM4 = buffer.getFloat32();
      effectData.unknownM5 = buffer.getFloat32();
      effectData.unknownM6 = buffer.getFloat32();
      effectData.unknownM7 = buffer.getFloat32();

      effectData.unknownM8 = buffer.getFloat32();

      effectData.unknownM9 = buffer.getUInt16();
      effectData.unknownM10 = buffer.getUInt16();
      effectData.unknownM11 = buffer.getUInt16();
      effectData.unknownM12 = buffer.getUInt16();

      assert.equal(buffer.offset, offset + 44);
      this.effectDataTable.entries.push(effectData);
    });

    // townWorldMapDataTable
    this.section6.townWorldMapDataTable.forEach((offset) => {
      buffer.seek(offset);

      const townWorldMapData = TownWorldMapData.default({}).parse(undefined);

      townWorldMapData.unknownK0 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      townWorldMapData.unknownK1 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      townWorldMapData.unknownK2 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      townWorldMapData.unknownK3 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      townWorldMapData.unknownK4 = buffer.getFloat32();
      townWorldMapData.unknownK5 = buffer.getFloat32();

      townWorldMapData.unknownK6 = buffer.getFloat32();
      townWorldMapData.unknownK7 = buffer.getFloat32();
      townWorldMapData.unknownK8 = buffer.getFloat32();
      townWorldMapData.unknownK9 = buffer.getFloat32();

      townWorldMapData.unknownK10 = buffer.getFloat32();
      townWorldMapData.unknownK11 = buffer.getFloat32();
      townWorldMapData.unknownK12 = buffer.getFloat32();
      townWorldMapData.unknownK13 = buffer.getFloat32();

      townWorldMapData.unknownK14 = buffer.getFloat32();
      townWorldMapData.unknownK15 = buffer.getFloat32();
      townWorldMapData.unknownK16 = buffer.getFloat32();
      townWorldMapData.unknownK17 = buffer.getFloat32();

      townWorldMapData.unknownK18 = buffer.getFloat32();
      townWorldMapData.unknownK19 = buffer.getFloat32();
      townWorldMapData.unknownK20 = buffer.getFloat32();
      townWorldMapData.unknownK21 = buffer.getFloat32();

      townWorldMapData.unknownK22 = buffer.getFloat32();
      townWorldMapData.unknownK23 = buffer.getFloat32();
      townWorldMapData.unknownK24 = buffer.getFloat32();
      townWorldMapData.unknownK25 = buffer.getFloat32();

      townWorldMapData.unknownK26 = buffer.getFloat32();
      townWorldMapData.unknownK27 = buffer.getFloat32();
      townWorldMapData.unknownK28 = buffer.getFloat32();
      townWorldMapData.unknownK29 = buffer.getFloat32();

      townWorldMapData.unknownK30 = buffer.getFloat32();
      townWorldMapData.unknownK31 = buffer.getFloat32();
      townWorldMapData.unknownK32 = buffer.getFloat32();
      townWorldMapData.unknownK33 = buffer.getFloat32();

      townWorldMapData.unknownK34 = buffer.getFloat32();
      townWorldMapData.unknownK35 = buffer.getFloat32();
      townWorldMapData.unknownK36 = buffer.getFloat32();
      townWorldMapData.unknownK37 = buffer.getFloat32();

      townWorldMapData.unknownK38 = buffer.getFloat32();
      townWorldMapData.unknownK39 = buffer.getFloat32();
      townWorldMapData.unknownK40 = buffer.getFloat32();
      townWorldMapData.unknownK41 = buffer.getFloat32();

      townWorldMapData.unknownK42 = buffer.getFloat32();
      townWorldMapData.unknownK43 = buffer.getFloat32();
      townWorldMapData.unknownK44 = buffer.getFloat32();
      townWorldMapData.unknownK45 = buffer.getFloat32();

      townWorldMapData.unknownK46 = buffer.getFloat32();
      townWorldMapData.unknownK47 = buffer.getFloat32();
      townWorldMapData.unknownK48 = buffer.getFloat32();
      townWorldMapData.unknownK49 = buffer.getFloat32();

      townWorldMapData.unknownK54 = buffer.getFloat32();
      townWorldMapData.unknownK55 = buffer.getFloat32();
      townWorldMapData.unknownK56 = buffer.getFloat32();

      townWorldMapData.unknownK57 = buffer.getUInt16();
      townWorldMapData.unknownK58 = buffer.getUInt16();
      townWorldMapData.unknownK59 = buffer.getUInt16();
      townWorldMapData.unknownK60 = buffer.getUInt16();

      assert.equal(buffer.offset, offset + 220);
      this.townWorldMapDataTable.entries.push(townWorldMapData);
    });

    // groupDataTable
    this.section6.groupDataTable.forEach((offset) => {
      buffer.seek(offset);
      const groupData = GroupData.default({}).parse(undefined);

      groupData.unknownH0 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      groupData.unknownH1 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      groupData.unknownH2 = buffer.getUInt32();
      groupData.unknownH3 = buffer.getUInt32();

      groupData.unknownH4 = buffer.getUInt16();
      groupData.unknownH5 = buffer.getUInt16();
      groupData.unknownH6 = buffer.getUInt16();
      groupData.unknownH7 = buffer.getUInt16();

      this.groupDataTable.entries.push(groupData);
    });

    // setup3DataTable
    this.section6.setup3DataTable.forEach((offset) => {
      buffer.seek(offset);
      const setup3Data = Setup3Data.default({}).parse(undefined);

      setup3Data.unknownA0 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      setup3Data.unknownA1 = buffer.getUInt16();
      setup3Data.unknownA2 = buffer.getUInt16();
      setup3Data.unknownA3 = buffer.getUInt16();

      setup3Data.unknownA4 = buffer.getUInt16();
      setup3Data.unknownA5 = buffer.getUInt16();
      setup3Data.unknownA6 = buffer.getUInt16();
      setup3Data.unknownA7 = buffer.getUInt16();

      setup3Data.unknownA8 = buffer.getUInt16();
      setup3Data.unknownA9 = buffer.getUInt16();
      setup3Data.unknownA10 = buffer.getUInt16();

      this.setup3DataTable.entries.push(setup3Data);
    });

    // battleBgmDataTable
    this.section6.battleBgmDataTable.forEach((offset) => {
      buffer.seek(offset);

      const battleBgmData = BattleBgmData
        .default({})
        .parse(undefined);

      battleBgmData.unknownB0 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      battleBgmData.unknownB1 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      battleBgmData.unknownB2 = buffer.getUInt32();

      battleBgmData.unknownB3 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      //

      battleBgmData.unknownB4 = buffer.getUInt32();

      battleBgmData.unknownB5 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      battleBgmData.unknownB6 = buffer.getUInt32();

      battleBgmData.unknownB7 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      //

      battleBgmData.unknownB8 = buffer.getUInt32();

      battleBgmData.unknownB9 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      battleBgmData.unknownB10 = buffer.getUInt32();

      battleBgmData.unknownB11 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      //

      battleBgmData.unknownB12 = buffer.getUInt32();

      battleBgmData.unknownB13 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      battleBgmData.unknownB14 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      battleBgmData.unknownB15 = buffer.getUInt32();

      //

      battleBgmData.unknownB16 = buffer.getUInt32();
      battleBgmData.unknownB17 = buffer.getUInt32();

      battleBgmData.unknownB18 = buffer.getUInt16();
      battleBgmData.unknownB19 = buffer.getUInt16();
      battleBgmData.unknownB20 = buffer.getUInt16();
      battleBgmData.unknownB21 = buffer.getUInt16();

      this.battleBgmDataTable.entries.push(battleBgmData);
    });

    // trackVolumeDataTable
    this.section6.trackVolumeDataTable.forEach((offset) => {
      buffer.seek(offset);

      const trackVolumeData = TrackVolumeData.default({}).parse(undefined);

      trackVolumeData.unknownD0 = this.findStringAtOffset(
        buffer.getUInt32()
      );

      const unknownD1Offset = buffer.getUInt32();
      const unknownD2Offset = buffer.getUInt32();
      assert.equal(unknownD1Offset + 72, unknownD2Offset);

      trackVolumeData.unknownD3 = buffer.getUInt32();
      assert.equal(trackVolumeData.unknownD3, 0);

      trackVolumeData.unknownD4 = buffer.getFloat32();
      trackVolumeData.unknownD5 = buffer.getUInt32();

      trackVolumeData.unknownD6 = buffer.getFloat32();
      trackVolumeData.unknownD7 = buffer.getUInt32();

      trackVolumeData.unknownD8 = buffer.getUInt32();
      trackVolumeData.unknownD9 = buffer.getUInt32();

      assert.equal(trackVolumeData.unknownD8, 0);
      assert.equal(trackVolumeData.unknownD9, 0);

      trackVolumeData.unknownD10 = buffer.getFloat32();
      trackVolumeData.unknownD11 = buffer.getUInt32();

      trackVolumeData.unknownD12 = buffer.getFloat32();
      trackVolumeData.unknownD13 = buffer.getUInt32();

      trackVolumeData.unknownD14 = buffer.getUInt32();
      assert.equal(trackVolumeData.unknownD14, 0);

      trackVolumeData.unknownD15 = buffer.getUInt16();
      trackVolumeData.unknownD16 = buffer.getUInt16();
      trackVolumeData.unknownD17 = buffer.getUInt16();
      trackVolumeData.unknownD18 = buffer.getUInt16();
      trackVolumeData.unknownD19 = buffer.getFloat32();

      trackVolumeData.unknownD20 = buffer.getFloat32();
      trackVolumeData.unknownD21 = buffer.getFloat32();
      trackVolumeData.unknownD22 = buffer.getFloat32();
      trackVolumeData.unknownD23 = buffer.getFloat32();

      trackVolumeData.unknownD24 = buffer.getFloat32();
      trackVolumeData.unknownD25 = buffer.getFloat32();
      trackVolumeData.unknownD26 = buffer.getFloat32();
      trackVolumeData.unknownD27 = buffer.getFloat32();

      trackVolumeData.unknownD28 = buffer.getFloat32();
      trackVolumeData.unknownD29 = buffer.getFloat32();
      trackVolumeData.unknownD30 = buffer.getFloat32();
      trackVolumeData.unknownD31 = buffer.getFloat32();

      trackVolumeData.unknownD32 = buffer.getFloat32();
      trackVolumeData.unknownD33 = buffer.getFloat32();
      trackVolumeData.unknownD34 = buffer.getFloat32();
      trackVolumeData.unknownD35 = buffer.getUInt16();
      trackVolumeData.unknownD36 = buffer.getUInt16();

      trackVolumeData.unknownD37 = buffer.getUInt16();
      trackVolumeData.unknownD38 = buffer.getUInt16();
      trackVolumeData.unknownD39 = buffer.getFloat32();

      trackVolumeData.unknownD40 = buffer.getFloat32();
      trackVolumeData.unknownD41 = buffer.getFloat32();
      trackVolumeData.unknownD42 = buffer.getFloat32();
      trackVolumeData.unknownD43 = buffer.getFloat32();

      trackVolumeData.unknownD44 = buffer.getFloat32();
      trackVolumeData.unknownD45 = buffer.getFloat32();
      trackVolumeData.unknownD46 = buffer.getFloat32();
      trackVolumeData.unknownD47 = buffer.getFloat32();

      trackVolumeData.unknownD48 = buffer.getFloat32();
      trackVolumeData.unknownD49 = buffer.getFloat32();
      trackVolumeData.unknownD50 = buffer.getFloat32();
      trackVolumeData.unknownD51 = buffer.getFloat32();

      trackVolumeData.unknownD52 = buffer.getFloat32();
      trackVolumeData.unknownD53 = buffer.getFloat32();
      trackVolumeData.unknownD54 = buffer.getFloat32();
      trackVolumeData.unknownD55 = buffer.getUInt16();
      trackVolumeData.unknownD56 = buffer.getUInt16();

      trackVolumeData.unknownD57 = buffer.getUInt16();
      trackVolumeData.unknownD58 = buffer.getUInt16();

      assert.equal(buffer.offset, offset + 212);

      buffer.seek(unknownD1Offset);

      trackVolumeData.unknownD1.unknownC0 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC1 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC2 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC3 = buffer.getFloat32();

      trackVolumeData.unknownD1.unknownC4 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC5 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC6 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC7 = buffer.getFloat32();

      trackVolumeData.unknownD1.unknownC8 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC9 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC10 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC11 = buffer.getFloat32();

      trackVolumeData.unknownD1.unknownC12 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC13 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC14 = buffer.getFloat32();
      trackVolumeData.unknownD1.unknownC15 = buffer.getFloat32();

      trackVolumeData.unknownD1.unknownC16 = buffer.getUInt16();
      trackVolumeData.unknownD1.unknownC17 = buffer.getUInt16();
      trackVolumeData.unknownD1.unknownC18 = buffer.getUInt16();
      trackVolumeData.unknownD1.unknownC19 = buffer.getUInt16();

      assert.equal(buffer.offset, unknownD1Offset + 72);
      buffer.seek(unknownD2Offset);

      trackVolumeData.unknownD2.unknownC0 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC1 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC2 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC3 = buffer.getFloat32();

      trackVolumeData.unknownD2.unknownC4 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC5 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC6 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC7 = buffer.getFloat32();

      trackVolumeData.unknownD2.unknownC8 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC9 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC10 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC11 = buffer.getFloat32();

      trackVolumeData.unknownD2.unknownC12 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC13 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC14 = buffer.getFloat32();
      trackVolumeData.unknownD2.unknownC15 = buffer.getFloat32();

      trackVolumeData.unknownD2.unknownC16 = buffer.getUInt16();
      trackVolumeData.unknownD2.unknownC17 = buffer.getUInt16();
      trackVolumeData.unknownD2.unknownC18 = buffer.getUInt16();
      trackVolumeData.unknownD2.unknownC19 = buffer.getUInt16();

      assert.equal(buffer.offset, unknownD2Offset + 72);

      this.trackVolumeDataTable.entries.push(trackVolumeData);
    });
  }

  private parseSection6(buffer: PM4Buffer): void {
    buffer.seek(this.sections.at(6)!);

    assert.equal(buffer.getUInt32(), KDMSound.TABLE_COUNT);

    const tables: string[] = [];

    for (let i = 0; i < KDMSound.TABLE_COUNT; i += 1) {
      tables.push(this.findStringAtOffset(
        buffer.getUInt32()
      ));
    }

    tables.forEach((table) => {
      if(table === KDMSound.EFFECT_DATA_TABLE) {
        this.effectDataTable.unknownN0 = buffer.getUInt32();
        this.effectDataTable.unknownN1 = buffer.getUInt32();

        while (buffer.offset < this.sections.at(7)!) {
          const offset = buffer.getUInt32();

          if (offset === 0) {
            break;
          }

          this.section6.effectDataTable.push(offset);
        }

        return;
      }

      if (table === KDMSound.TOWN_WORLD_MAP_DATA_TABLE) {
        this.townWorldMapDataTable.unknownL0 = buffer.getUInt32();
        this.townWorldMapDataTable.unknownL1 = buffer.getUInt32();

        while (buffer.offset < this.sections.at(7)!) {
          const offset = buffer.getUInt32();

          if (offset === 0) {
            break;
          }

          this.section6.townWorldMapDataTable.push(offset);
        }

        return;
      }

      if (table === KDMSound.GROUP_DATA_TABLE) {
        this.groupDataTable.unknownI0 = buffer.getUInt32();
        this.groupDataTable.unknownI1 = buffer.getUInt32();

        while (buffer.offset < this.sections.at(7)!) {
          const offset = buffer.getUInt32();

          if (offset === 0) {
            break;
          }

          this.section6.groupDataTable.push(offset);
        }

        return;
      }

      if (table === KDMSound.BATTLE_BGM_DATA_TABLE) {
        this.battleBgmDataTable.unknownF0 = buffer.getUInt32();
        this.battleBgmDataTable.unknownF1 = buffer.getUInt32();

        while (buffer.offset < this.sections.at(7)!) {
          const offset = buffer.getUInt32();

          if (offset === 0) {
            break;
          }

          this.section6.battleBgmDataTable.push(offset);
        }

        return;
      }

      if (table === KDMSound.SETUP_3_DATA_TABLE) {
        this.setup3DataTable.unknownG0 = buffer.getUInt32();
        this.setup3DataTable.unknownG1 = buffer.getUInt32();

        while (buffer.offset < this.sections.at(7)!) {
          const offset = buffer.getUInt32();

          if (offset === 0) {
            break;
          }

          this.section6.setup3DataTable.push(offset);
        }

        return;
      }

      if (table === KDMSound.TRACK_VOLUME_DATA_TABLE) {
        this.trackVolumeDataTable.unknownE0 = buffer.getUInt32();
        this.trackVolumeDataTable.unknownE1 = buffer.getUInt32();

        while (buffer.offset < this.sections.at(7)!) {
          const offset = buffer.getUInt32();

          if (offset === 0) {
            break;
          }

          this.section6.trackVolumeDataTable.push(offset);
        }

        return;
      }

      console.warn(`Unsupported table '${table}'`);
    });
  }

  private parseSection7(buffer: PM4Buffer): void {
    buffer.seek(this.sections.at(7)!);
    assert.equal(buffer.getUInt32(), 0);
  }

  public override parse(_buffer: Buffer): this {
    const buffer = PM4Buffer.fromBuffer(_buffer);
    this.sections = this.parseHeader(buffer);

    assert(this.sections.length === KDMSound.SECTION_COUNT);

    this.section0.offset = this.sections.at(0)!;

    this.parseSection0(buffer);
    this.parseSection1(buffer);
    this.parseSection2(buffer);
    this.parseSection3(buffer);
    this.parseSection4(buffer);
    this.parseSection6(buffer);
    this.parseSection5(buffer);
    this.parseSection7(buffer);

    return this;
  }

  public toJSON(): IKDMSound {
    return IKDMSound.parse({ _version: I_KDM_SOUND_VERSION, ...this });
  }
}

export default KDMSound;
