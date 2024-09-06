import z from "zod";
import KDM from "#/kdm/kdm";
import PM4Buffer from "#/pm4-buffer";
import assert from "node:assert/strict";
import type KDMTable from "#/kdm/kdm-table";

class KDMSound extends KDM<IKDMSound> {
  private readonly groupDataTable: KDMTable<GroupData>;
  private readonly effectDataTable: KDMTable<EffectData>;
  private readonly setup3DataTable: KDMTable<Setup3Data>;
  private readonly battleBGMDataTable: KDMTable<BattleBGMData>;
  private readonly changeBGMDataTable: KDMTable<ChangeBGMData>;
  private readonly trackVolumeDataTable: KDMTable<TrackVolumeData>;
  private readonly townWorldMapDataTable: KDMTable<TownWorldMapData>;

  public constructor(data?: IKDMSound) {
    super();

    this.groupDataTable = this.defineTable({
      name: "groupDataTable",
      build: this.buildGroupDataTable.bind(this),
      parse: this.parseGroupDataTable.bind(this)
    });

    this.effectDataTable = this.defineTable({
      name: "effectDataTable",
      build: this.buildEffectDataTable.bind(this),
      parse: this.parseEffectDataTable.bind(this)
    });

    this.setup3DataTable = this.defineTable({
      // The devs made a typo while naming this table.
      // This is intended to have 2 D's.
      name: "setup3DDataTable",
      build: this.buildSetup3DataTable.bind(this),
      parse: this.parseSetup3DataTable.bind(this)
    });

    this.battleBGMDataTable = this.defineTable({
      name: "battleBgmDataTable",
      build: this.buildBattleBGMDataTable.bind(this),
      parse: this.parseBattleBGMDataTable.bind(this)
    });

    this.changeBGMDataTable = this.defineTable({
      name: "changeBGMDataTable",
      build: this.buildChangeBGMDataTable.bind(this),
      parse: this.parseChangeBGMDataTable.bind(this)
    });

    this.trackVolumeDataTable = this.defineTable({
      name: "trackVolumeDataTable",
      build: this.buildTrackVolumeDataTable.bind(this),
      parse: this.parseTrackVolumeDataTable.bind(this)
    });

    this.townWorldMapDataTable = this.defineTable({
      name: "townWorldMapDataTable",
      build: this.buildTownWorldMapDataTable.bind(this),
      parse: this.parseTownWorldMapDataTable.bind(this)
    });

    if (data !== undefined) {
      data = IKDMSound.parse(data);

      this.groupDataTable.entries = data.groupDataTable;
      this.effectDataTable.entries = data.effectDataTable;
      this.setup3DataTable.entries = data.setup3DataTable;
      this.battleBGMDataTable.entries = data.battleBGMDataTable;
      this.changeBGMDataTable.entries = data.changeBGMDataTable;
      this.trackVolumeDataTable.entries = data.trackVolumeDataTable;
      this.townWorldMapDataTable.entries = data.townWorldMapDataTable;
    }
  }

  public get objectCount(): number {
    const groupDataCount = this.groupDataTable.entries.length;
    const effectDataCount = this.effectDataTable.entries.length;
    const setup3DataCount = this.setup3DataTable.entries.length;
    const battleBGMDataCount = this.battleBGMDataTable.entries.length;
    const changeBGMDataCount = this.changeBGMDataTable.entries.length;
    const trackVolumeDataCount = this.trackVolumeDataTable.entries.length;
    const townWorldMapDataCount = this.townWorldMapDataTable.entries.length;

    // exactly two sub entries per trackVolumeData
    const trackVolumeDataSubEntryCount = this.trackVolumeDataTable.entries.length * 2;

    return groupDataCount + effectDataCount + setup3DataCount +
      battleBGMDataCount + changeBGMDataCount + townWorldMapDataCount +
      trackVolumeDataCount + trackVolumeDataSubEntryCount;
  }

  protected override prebuild(): void {

  }

  private parseChangeBGMData(buffer: PM4Buffer): ChangeBGMData {
    const unknownP0 = this.findStringAtOffset(buffer.getUInt32());
    const unknownP1 = this.findStringAtOffset(buffer.getUInt32());

    const unknownP2 = this.findStringAtOffset(buffer.getUInt32());
    const unknownP3 = buffer.getUInt16();
    const unknownP4 = buffer.getUInt16();

    const unknownP5 = buffer.getUInt16();
    const unknownP6 = buffer.getUInt16();

    return {
      unknownP0, unknownP1, unknownP2,
      unknownP3, unknownP4, unknownP5,
      unknownP6
    };
  }

  private parseTownWorldMapData(buffer: PM4Buffer): TownWorldMapData {
    const oldOffset = buffer.offset;

    const unknownK0 = this.findStringAtOffset(buffer.getUInt32());
    const unknownK1 = this.findStringAtOffset(buffer.getUInt32());
    const unknownK2 = this.findStringAtOffset(buffer.getUInt32());
    const unknownK3 = this.findStringAtOffset(buffer.getUInt32());

    const unknownK4 = buffer.getFloat32();
    const unknownK5 = buffer.getFloat32();
    const unknownK6 = buffer.getFloat32();
    const unknownK7 = buffer.getFloat32();
    const unknownK8 = buffer.getFloat32();
    const unknownK9 = buffer.getFloat32();

    const unknownK10 = buffer.getFloat32();
    const unknownK11 = buffer.getFloat32();
    const unknownK12 = buffer.getFloat32();
    const unknownK13 = buffer.getFloat32();

    const unknownK14 = buffer.getFloat32();
    const unknownK15 = buffer.getFloat32();
    const unknownK16 = buffer.getFloat32();
    const unknownK17 = buffer.getFloat32();

    const unknownK18 = buffer.getFloat32();
    const unknownK19 = buffer.getFloat32();
    const unknownK20 = buffer.getFloat32();
    const unknownK21 = buffer.getFloat32();

    const unknownK22 = buffer.getFloat32();
    const unknownK23 = buffer.getFloat32();
    const unknownK24 = buffer.getFloat32();
    const unknownK25 = buffer.getFloat32();

    const unknownK26 = buffer.getFloat32();
    const unknownK27 = buffer.getFloat32();
    const unknownK28 = buffer.getFloat32();
    const unknownK29 = buffer.getFloat32();

    const unknownK30 = buffer.getFloat32();
    const unknownK31 = buffer.getFloat32();
    const unknownK32 = buffer.getFloat32();
    const unknownK33 = buffer.getFloat32();

    const unknownK34 = buffer.getFloat32();
    const unknownK35 = buffer.getFloat32();
    const unknownK36 = buffer.getFloat32();
    const unknownK37 = buffer.getFloat32();

    const unknownK38 = buffer.getFloat32();
    const unknownK39 = buffer.getFloat32();
    const unknownK40 = buffer.getFloat32();
    const unknownK41 = buffer.getFloat32();

    const unknownK42 = buffer.getFloat32();
    const unknownK43 = buffer.getFloat32();
    const unknownK44 = buffer.getFloat32();
    const unknownK45 = buffer.getFloat32();

    const unknownK46 = buffer.getFloat32();
    const unknownK47 = buffer.getFloat32();
    const unknownK48 = buffer.getFloat32();
    const unknownK49 = buffer.getFloat32();

    const unknownK54 = buffer.getFloat32();
    const unknownK55 = buffer.getFloat32();
    const unknownK56 = buffer.getFloat32();

    const unknownK57 = buffer.getUInt16();
    const unknownK58 = buffer.getUInt16();
    const unknownK59 = buffer.getUInt16();
    const unknownK60 = buffer.getUInt16();

    assert(buffer.offset === oldOffset + 220);

    return {
      unknownK0, unknownK1, unknownK10, unknownK11, unknownK12, unknownK13, unknownK14,
      unknownK15, unknownK16, unknownK17, unknownK18, unknownK19, unknownK2, unknownK20,
      unknownK21, unknownK22, unknownK23, unknownK24, unknownK25, unknownK26, unknownK27,
      unknownK28, unknownK29, unknownK3, unknownK30, unknownK31, unknownK32, unknownK33,
      unknownK34, unknownK35, unknownK36, unknownK37, unknownK38, unknownK39, unknownK4,
      unknownK40, unknownK41, unknownK42, unknownK43, unknownK44, unknownK45, unknownK46,
      unknownK47, unknownK48, unknownK49, unknownK5, unknownK54, unknownK55, unknownK56,
      unknownK57, unknownK58, unknownK59, unknownK6, unknownK60, unknownK7, unknownK8,
      unknownK9
    };
  }

  private parseGroupData(buffer: PM4Buffer): GroupData {
    const unknownH0 = this.findStringAtOffset(buffer.getUInt32());
    const unknownH1 = this.findStringAtOffset(buffer.getUInt32());

    const unknownH2 = buffer.getUInt32();
    const unknownH3 = buffer.getUInt32();

    const unknownH4 = buffer.getUInt16();
    const unknownH5 = buffer.getUInt16();
    const unknownH6 = buffer.getUInt16();
    const unknownH7 = buffer.getUInt16();

    return {
      unknownH0, unknownH1, unknownH2, unknownH3, unknownH4,
      unknownH5, unknownH6, unknownH7
    };
  }

  private parseSetup3Data(buffer: PM4Buffer): Setup3Data {
    const unknownA0 = this.findStringAtOffset(buffer.getUInt32());
    const unknownA1 = buffer.getUInt16();
    const unknownA2 = buffer.getUInt16();

    const unknownA3 = buffer.getUInt16();
    const unknownA4 = buffer.getUInt16();
    const unknownA5 = buffer.getUInt16();
    const unknownA6 = buffer.getUInt16();

    const unknownA7 = buffer.getUInt16();
    const unknownA8 = buffer.getUInt16();
    const unknownA9 = buffer.getUInt16();
    const unknownA10 = buffer.getUInt16();

    return {
      unknownA0, unknownA1, unknownA10, unknownA2, unknownA3,
      unknownA4, unknownA5, unknownA6, unknownA7, unknownA8,
      unknownA9
    };
  }

  private parseBattleBGMData(buffer: PM4Buffer): BattleBGMData {
    const unknownB0 = this.findStringAtOffset(buffer.getUInt32());
    const unknownB1 = this.findStringAtOffset(buffer.getUInt32());

    const unknownB2 = buffer.getUInt32();
    const unknownB3 = this.findStringAtOffset(buffer.getUInt32());

    const unknownB4 = buffer.getUInt32();
    const unknownB5 = this.findStringAtOffset(buffer.getUInt32());

    const unknownB6 = buffer.getUInt32();
    const unknownB7 = this.findStringAtOffset(buffer.getUInt32());

    const unknownB8 = buffer.getUInt32();
    const unknownB9 = this.findStringAtOffset(buffer.getUInt32());

    const unknownB10 = buffer.getUInt32();
    const unknownB11 = this.findStringAtOffset(buffer.getUInt32());

    const unknownB12 = buffer.getUInt32();
    const unknownB13 = this.findStringAtOffset(buffer.getUInt32());

    const unknownB14 = this.findStringAtOffset(buffer.getUInt32());
    const unknownB15 = buffer.getUInt32();

    const unknownB16 = buffer.getUInt32();
    const unknownB17 = buffer.getUInt32();

    const unknownB18 = buffer.getUInt16();
    const unknownB19 = buffer.getUInt16();
    const unknownB20 = buffer.getUInt16();
    const unknownB21 = buffer.getUInt16();

    return {
      unknownB0, unknownB1, unknownB10, unknownB11, unknownB12,
      unknownB13, unknownB14, unknownB15, unknownB16, unknownB17,
      unknownB18, unknownB19, unknownB2, unknownB20, unknownB21,
      unknownB3, unknownB4, unknownB5, unknownB6, unknownB7,
      unknownB8, unknownB9
    };
  }

  private parseTrackVolumeDataSubEntry(buffer: PM4Buffer): TrackVolumeDataSubEntry {
    const unknownC0 = buffer.getFloat32();
    const unknownC1 = buffer.getFloat32();

    const unknownC2 = buffer.getFloat32();
    const unknownC3 = buffer.getFloat32();

    const unknownC4 = buffer.getFloat32();
    const unknownC5 = buffer.getFloat32();

    const unknownC6 = buffer.getFloat32();
    const unknownC7 = buffer.getFloat32();

    const unknownC8 = buffer.getFloat32();
    const unknownC9 = buffer.getFloat32();

    const unknownC10 = buffer.getFloat32();
    const unknownC11 = buffer.getFloat32();

    const unknownC12 = buffer.getFloat32();
    const unknownC13 = buffer.getFloat32();

    const unknownC14 = buffer.getFloat32();
    const unknownC15 = buffer.getFloat32();

    const unknownC16 = buffer.getFloat32();
    const unknownC17 = buffer.getFloat32();

    const unknownC18 = buffer.getFloat32();
    const unknownC19 = buffer.getFloat32();

    return {
      unknownC0, unknownC1, unknownC10, unknownC11, unknownC12,
      unknownC13, unknownC14, unknownC15, unknownC16, unknownC17,
      unknownC18, unknownC19, unknownC2, unknownC3, unknownC4,
      unknownC5, unknownC6, unknownC7, unknownC8, unknownC9
    };
  }

  private parseTrackVolumeData(buffer: PM4Buffer): TrackVolumeData {
    const unknownD0 = this.findStringAtOffset(buffer.getUInt32());
    const unknownD1Offset = buffer.getUInt32();

    const unknownD2Offset = buffer.getUInt32();
    const unknownD3 = buffer.getUInt32();

    const unknownD4 = buffer.getFloat32();
    const unknownD5 = buffer.getUInt32();

    const unknownD6 = buffer.getFloat32();
    const unknownD7 = buffer.getUInt32();

    const unknownD8 = buffer.getUInt32();
    const unknownD9 = buffer.getUInt32();

    const unknownD10 = buffer.getFloat32();
    const unknownD11 = buffer.getUInt32();

    const unknownD12 = buffer.getFloat32();
    const unknownD13 = buffer.getUInt32();

    const unknownD14 = buffer.getUInt32();
    const unknownD15 = buffer.getUInt16();
    const unknownD16 = buffer.getUInt16();

    const unknownD17 = buffer.getUInt16();
    const unknownD18 = buffer.getUInt16();
    const unknownD19 = buffer.getFloat32();

    const unknownD20 = buffer.getFloat32();
    const unknownD21 = buffer.getFloat32();

    const unknownD22 = buffer.getFloat32();
    const unknownD23 = buffer.getFloat32();

    const unknownD24 = buffer.getFloat32();
    const unknownD25 = buffer.getFloat32();

    const unknownD26 = buffer.getFloat32();
    const unknownD27 = buffer.getFloat32();

    const unknownD28 = buffer.getFloat32();
    const unknownD29 = buffer.getFloat32();

    const unknownD30 = buffer.getFloat32();
    const unknownD31 = buffer.getFloat32();

    const unknownD32 = buffer.getFloat32();
    const unknownD33 = buffer.getFloat32();

    const unknownD34 = buffer.getFloat32();
    const unknownD35 = buffer.getUInt16();
    const unknownD36 = buffer.getUInt16();

    const unknownD37 = buffer.getUInt16();
    const unknownD38 = buffer.getUInt16();
    const unknownD39 = buffer.getFloat32();

    const unknownD40 = buffer.getFloat32();
    const unknownD41 = buffer.getFloat32();

    const unknownD42 = buffer.getFloat32();
    const unknownD43 = buffer.getFloat32();

    const unknownD44 = buffer.getFloat32();
    const unknownD45 = buffer.getFloat32();

    const unknownD46 = buffer.getFloat32();
    const unknownD47 = buffer.getFloat32();

    const unknownD48 = buffer.getFloat32();
    const unknownD49 = buffer.getFloat32();

    const unknownD50 = buffer.getFloat32();
    const unknownD51 = buffer.getFloat32();

    const unknownD52 = buffer.getFloat32();
    const unknownD53 = buffer.getFloat32();

    const unknownD54 = buffer.getFloat32();
    const unknownD55 = buffer.getUInt16();
    const unknownD56 = buffer.getUInt16();

    const unknownD57 = buffer.getUInt16();
    const unknownD58 = buffer.getUInt16();

    buffer.seek(unknownD1Offset);
    const unknownD1 = this.parseTrackVolumeDataSubEntry(buffer);

    buffer.seek(unknownD2Offset);
    const unknownD2 = this.parseTrackVolumeDataSubEntry(buffer);

    return {
      unknownD0, unknownD1, unknownD10, unknownD11, unknownD12, unknownD13, unknownD14,
      unknownD15, unknownD16, unknownD17, unknownD18, unknownD19, unknownD2, unknownD20,
      unknownD21, unknownD22, unknownD23, unknownD24, unknownD25, unknownD26, unknownD27,
      unknownD28, unknownD29, unknownD3, unknownD30, unknownD31, unknownD32, unknownD33,
      unknownD34, unknownD35, unknownD36, unknownD37, unknownD38, unknownD39, unknownD4,
      unknownD40, unknownD41, unknownD42, unknownD43, unknownD44, unknownD45, unknownD46,
      unknownD47, unknownD48, unknownD49, unknownD5, unknownD50, unknownD51, unknownD52,
      unknownD53, unknownD54, unknownD55, unknownD56, unknownD57, unknownD58, unknownD6,
      unknownD7, unknownD8, unknownD9
    };
  }

  private parseEffectData(buffer: PM4Buffer): EffectData {
    const unknownM0 = this.findStringAtOffset(buffer.getUInt32());
    const unknownM1 = buffer.getFloat32();

    const unknownM2 = buffer.getFloat32();
    const unknownM3 = buffer.getFloat32();

    const unknownM4 = buffer.getFloat32();
    const unknownM5 = buffer.getFloat32();

    const unknownM6 = buffer.getFloat32();
    const unknownM7 = buffer.getFloat32();

    const unknownM8 = buffer.getFloat32();
    const unknownM9 = buffer.getFloat32();

    const unknownM10 = buffer.getFloat32();
    const unknownM11 = buffer.getFloat32();

    const unknownM12 = buffer.getFloat32();

    return {
      unknownM0, unknownM1, unknownM10, unknownM11, unknownM12, unknownM2,
      unknownM3, unknownM4, unknownM5, unknownM6, unknownM7, unknownM8,
      unknownM9
    };
  }

  private buildGroupDataTable(buffer: PM4Buffer): void {

  }

  private parseGroupDataTable(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x00130104);
    assert.equal(buffer.getUInt32(), 0x0013000F);

    let offset = buffer.getUInt32();

    while (offset !== 0) {
      this.groupDataTable.offsets.push(offset);
      offset = buffer.getUInt32();
    }
  }

  private buildEffectDataTable(buffer: PM4Buffer): void {

  }

  private parseEffectDataTable(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x000A0114);
    assert.equal(buffer.getUInt32(), 0x000A000F);

    let offset = buffer.getUInt32();

    while (offset !== 0) {
      this.effectDataTable.offsets.push(offset);
      offset = buffer.getUInt32();
    }
  }

  private buildSetup3DataTable(buffer: PM4Buffer): void {

  }

  private parseSetup3DataTable(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x00030021);
    assert.equal(buffer.getUInt32(), 0x0003000F);

    let offset = buffer.getUInt32();

    while (offset !== 0) {
      this.setup3DataTable.offsets.push(offset);
      offset = buffer.getUInt32();
    }
  }

  private buildBattleBGMDataTable(buffer: PM4Buffer): void {

  }

  private parseBattleBGMDataTable(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x00150036);
    assert.equal(buffer.getUInt32(), 0x0015000F);

    let offset = buffer.getUInt32();

    while (offset !== 0) {
      this.battleBGMDataTable.offsets.push(offset);
      offset = buffer.getUInt32();
    }
  }

  private buildChangeBGMDataTable(buffer: PM4Buffer): void {

  }

  private parseChangeBGMDataTable(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x00050119);
    assert.equal(buffer.getUInt32(), 0x0005000F);

    let offset = buffer.getUInt32();

    while (offset !== 0) {
      this.changeBGMDataTable.offsets.push(offset);
      offset = buffer.getUInt32();
    }
  }

  private buildTrackVolumeDataTable(buffer: PM4Buffer): void {

  }

  private parseTrackVolumeDataTable(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x003F00F1);
    assert.equal(buffer.getUInt32(), 0x003F000F);

    let offset = buffer.getUInt32();

    while (offset !== 0) {
      this.trackVolumeDataTable.offsets.push(offset);
      offset = buffer.getUInt32();
    }
  }

  private buildTownWorldMapDataTable(buffer: PM4Buffer): void {

  }

  private parseTownWorldMapDataTable(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x0006010A);
    assert.equal(buffer.getUInt32(), 0x0006000F);

    let offset = buffer.getUInt32();

    while (offset !== 0) {
      this.townWorldMapDataTable.offsets.push(offset);
      offset = buffer.getUInt32();
    }
  }

  protected override buildSection4(buffer: PM4Buffer): void {

  }

  protected override buildSection5(buffer: PM4Buffer): void {

  }

  protected override parseSection4(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x0000000A);

    assert.equal(buffer.getUInt32(), 0x00040015);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x008E10FC);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00060016);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x008E1120);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000001);

    assert.equal(buffer.getUInt32(), 0x00080017);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x008E114C);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000001);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x0000000F);
    assert.equal(buffer.getUInt32(), 0x00030018);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x008E1164);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x0000000F);

    assert.equal(buffer.getUInt32(), 0x00000001);
    assert.equal(buffer.getUInt32(), 0x00120019);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x008E11B8);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x000F001A);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x008E1200);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x0000000A);
    assert.equal(buffer.getUInt32(), 0x0000000A);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000001);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000001);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x0004001B);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x008E121C);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x0035001C);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x008E12FC);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x0009001D);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x008E132C);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000004);
    assert.equal(buffer.getUInt32(), 0x0003001E);

    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000003);
  }

  protected override parseSection5(buffer: PM4Buffer): void {
    const count = buffer.getUInt32();

    assert.equal(buffer.getUInt32(), 0x0004001F);
    assert.equal(buffer.getUInt32(), 0x00040015);

    this.townWorldMapDataTable.offsets.forEach((offset) => {
      buffer.seek(offset);

      const townWorldMapData = this.parseTownWorldMapData(buffer);
      this.townWorldMapDataTable.entries.push(townWorldMapData);
    });

    this.changeBGMDataTable.offsets.forEach((offset) => {
      buffer.seek(offset);

      const changeBGMData = this.parseChangeBGMData(buffer);
      this.changeBGMDataTable.entries.push(changeBGMData);
    });

    this.effectDataTable.offsets.forEach((offset) => {
      buffer.seek(offset);

      const effectData = this.parseEffectData(buffer);
      this.effectDataTable.entries.push(effectData);
    });

    this.trackVolumeDataTable.offsets.forEach((offset) => {
      buffer.seek(offset);

      const trackVolumeData = this.parseTrackVolumeData(buffer);
      this.trackVolumeDataTable.entries.push(trackVolumeData);
    });

    this.groupDataTable.offsets.forEach((offset) => {
      buffer.seek(offset);

      const groupData = this.parseGroupData(buffer);
      this.groupDataTable.entries.push(groupData);
    });

    this.setup3DataTable.offsets.forEach((offset) => {
      buffer.seek(offset);

      const setup3Data = this.parseSetup3Data(buffer);
      this.setup3DataTable.entries.push(setup3Data);
    });

    this.battleBGMDataTable.offsets.forEach((offset) => {
      buffer.seek(offset);

      const battleBGMData = this.parseBattleBGMData(buffer);
      this.battleBGMDataTable.entries.push(battleBGMData);
    });

    assert.equal(count, this.objectCount);
  }

  public override toJSON(): IKDMSound {
    return IKDMSound.parse({
      ...this,
      _version: I_KDM_SOUND_VERSION,
      groupDataTable: this.groupDataTable.entries,
      setup3DataTable: this.setup3DataTable.entries,
      effectDataTable: this.effectDataTable.entries,
      battleBGMDataTable: this.battleBGMDataTable.entries,
      changeBGMDataTable: this.changeBGMDataTable.entries,
      trackVolumeDataTable: this.trackVolumeDataTable.entries,
      townWorldMapDataTable: this.townWorldMapDataTable.entries
    });
  }
}

const I_KDM_SOUND_VERSION = 1;

const Setup3Data = z.object({
  unknownA0: z.string(),
  unknownA1: z.number(),
  unknownA2: z.number(),
  unknownA3: z.number(),
  unknownA8: z.number(),
  unknownA9: z.number(),
  unknownA4: z.number(),
  unknownA5: z.number(),
  unknownA6: z.number(),
  unknownA7: z.number(),
  unknownA10: z.number()
});

type Setup3Data = z.infer<typeof Setup3Data>;

const BattleBGMData = z.object({
  unknownB0: z.string(),
  unknownB1: z.string(),
  unknownB2: z.number(),
  unknownB3: z.string(),
  unknownB4: z.number(),
  unknownB5: z.string(),
  unknownB6: z.number(),
  unknownB7: z.string(),
  unknownB8: z.number(),
  unknownB9: z.string(),
  unknownB10: z.number(),
  unknownB11: z.string(),
  unknownB12: z.number(),
  unknownB13: z.string(),
  unknownB14: z.string(),
  unknownB15: z.number(),
  unknownB16: z.number(),
  unknownB17: z.number(),
  unknownB18: z.number(),
  unknownB19: z.number(),
  unknownB20: z.number(),
  unknownB21: z.number()
});

type BattleBGMData = z.infer<typeof BattleBGMData>;

const TrackVolumeDataSubEntry = z.object({
  unknownC0: z.number(),
  unknownC1: z.number(),
  unknownC2: z.number(),
  unknownC3: z.number(),
  unknownC4: z.number(),
  unknownC5: z.number(),
  unknownC6: z.number(),
  unknownC7: z.number(),
  unknownC8: z.number(),
  unknownC9: z.number(),
  unknownC10: z.number(),
  unknownC11: z.number(),
  unknownC12: z.number(),
  unknownC13: z.number(),
  unknownC14: z.number(),
  unknownC15: z.number(),
  unknownC16: z.number(),
  unknownC17: z.number(),
  unknownC18: z.number(),
  unknownC19: z.number()
});

type TrackVolumeDataSubEntry = z.infer<typeof TrackVolumeDataSubEntry>;

const TrackVolumeData = z.object({
  unknownD0: z.string(),
  unknownD3: z.number(),
  unknownD4: z.number(),
  unknownD5: z.number(),
  unknownD6: z.number(),
  unknownD7: z.number(),
  unknownD8: z.number(),
  unknownD9: z.number(),
  unknownD10: z.number(),
  unknownD11: z.number(),
  unknownD12: z.number(),
  unknownD13: z.number(),
  unknownD14: z.number(),
  unknownD15: z.number(),
  unknownD16: z.number(),
  unknownD17: z.number(),
  unknownD18: z.number(),
  unknownD19: z.number(),
  unknownD20: z.number(),
  unknownD21: z.number(),
  unknownD22: z.number(),
  unknownD23: z.number(),
  unknownD24: z.number(),
  unknownD25: z.number(),
  unknownD26: z.number(),
  unknownD27: z.number(),
  unknownD28: z.number(),
  unknownD29: z.number(),
  unknownD30: z.number(),
  unknownD31: z.number(),
  unknownD32: z.number(),
  unknownD33: z.number(),
  unknownD34: z.number(),
  unknownD35: z.number(),
  unknownD36: z.number(),
  unknownD37: z.number(),
  unknownD38: z.number(),
  unknownD39: z.number(),
  unknownD40: z.number(),
  unknownD41: z.number(),
  unknownD42: z.number(),
  unknownD43: z.number(),
  unknownD44: z.number(),
  unknownD45: z.number(),
  unknownD46: z.number(),
  unknownD47: z.number(),
  unknownD48: z.number(),
  unknownD49: z.number(),
  unknownD50: z.number(),
  unknownD51: z.number(),
  unknownD52: z.number(),
  unknownD53: z.number(),
  unknownD54: z.number(),
  unknownD55: z.number(),
  unknownD56: z.number(),
  unknownD57: z.number(),
  unknownD58: z.number(),
  unknownD1: TrackVolumeDataSubEntry,
  unknownD2: TrackVolumeDataSubEntry
});

type TrackVolumeData = z.infer<typeof TrackVolumeData>;

const GroupData = z.object({
  unknownH0: z.string(),
  unknownH1: z.string(),
  unknownH2: z.number(),
  unknownH3: z.number(),
  unknownH4: z.number(),
  unknownH5: z.number(),
  unknownH6: z.number(),
  unknownH7: z.number()
});

type GroupData = z.infer<typeof GroupData>;

const TownWorldMapData = z.object({
  unknownK0: z.string(),
  unknownK1: z.string(),
  unknownK2: z.string(),
  unknownK3: z.string(),
  unknownK4: z.number(),
  unknownK5: z.number(),
  unknownK6: z.number(),
  unknownK7: z.number(),
  unknownK8: z.number(),
  unknownK9: z.number(),
  unknownK10: z.number(),
  unknownK11: z.number(),
  unknownK12: z.number(),
  unknownK13: z.number(),
  unknownK14: z.number(),
  unknownK15: z.number(),
  unknownK16: z.number(),
  unknownK17: z.number(),
  unknownK18: z.number(),
  unknownK19: z.number(),
  unknownK20: z.number(),
  unknownK21: z.number(),
  unknownK22: z.number(),
  unknownK23: z.number(),
  unknownK24: z.number(),
  unknownK25: z.number(),
  unknownK26: z.number(),
  unknownK27: z.number(),
  unknownK28: z.number(),
  unknownK29: z.number(),
  unknownK30: z.number(),
  unknownK31: z.number(),
  unknownK32: z.number(),
  unknownK33: z.number(),
  unknownK34: z.number(),
  unknownK35: z.number(),
  unknownK36: z.number(),
  unknownK37: z.number(),
  unknownK38: z.number(),
  unknownK39: z.number(),
  unknownK40: z.number(),
  unknownK41: z.number(),
  unknownK42: z.number(),
  unknownK43: z.number(),
  unknownK44: z.number(),
  unknownK45: z.number(),
  unknownK46: z.number(),
  unknownK47: z.number(),
  unknownK48: z.number(),
  unknownK49: z.number(),
  unknownK54: z.number(),
  unknownK55: z.number(),
  unknownK56: z.number(),
  unknownK57: z.number(),
  unknownK58: z.number(),
  unknownK59: z.number(),
  unknownK60: z.number()
});

type TownWorldMapData = z.infer<typeof TownWorldMapData>;

const EffectData = z.object({
  unknownM0: z.string(),
  unknownM1: z.number(),
  unknownM2: z.number(),
  unknownM3: z.number(),
  unknownM4: z.number(),
  unknownM5: z.number(),
  unknownM6: z.number(),
  unknownM7: z.number(),
  unknownM8: z.number(),
  unknownM9: z.number(),
  unknownM10: z.number(),
  unknownM11: z.number(),
  unknownM12: z.number()
});

type EffectData = z.infer<typeof EffectData>;

const ChangeBGMData = z.object({
  unknownP0: z.string(),
  unknownP1: z.string(),
  unknownP2: z.string(),
  unknownP3: z.number(),
  unknownP4: z.number(),
  unknownP5: z.number(),
  unknownP6: z.number()
});

type ChangeBGMData = z.infer<typeof ChangeBGMData>;

const IKDMSound = z.object({
  groupDataTable: GroupData.array(),
  setup3DataTable: Setup3Data.array(),
  effectDataTable: EffectData.array(),
  _version: z.literal(I_KDM_SOUND_VERSION),
  battleBGMDataTable: BattleBGMData.array(),
  changeBGMDataTable: ChangeBGMData.array(),
  trackVolumeDataTable: TrackVolumeData.array(),
  townWorldMapDataTable: TownWorldMapData.array()
});

type IKDMSound = z.infer<typeof IKDMSound>;
export default KDMSound;
