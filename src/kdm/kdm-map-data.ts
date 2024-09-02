import z from "zod";
import KDM from "#/kdm/kdm";
import PM4Buffer from "#/pm4-buffer";
import assert from "node:assert/strict";
import KDMString from "#/kdm/kdm-string";

const NULL = 0;

const MapBackground = z.discriminatedUnion("type", [
  z.object({ type: z.literal("none") }),
  z.object({ type: z.literal("color"), color: z.string() }),
  z.object({ type: z.literal("texture"), texture1: z.string(), texture2: z.string() })
]);

type MapBackground = z.infer<typeof MapBackground>;

const Map = z.object({
  name: z.string().default(""),
  level: z.string().default(""),
  model: z.string().default(""),
  music: z.string().default(""),
  script: z.string().default(""),
  unknownG1: z.number().default(0),
  unknownG2: z.number().default(0),
  unknownG5: z.number().default(0),
  unknownG7: z.number().default(0),
  unknownG8: z.number().default(0),
  unknownG9: z.number().default(0),
  unknownG0: z.string().default(""),
  unknownG6: z.string().default(""),
  unknownG12: z.number().default(0),
  unknownG10: z.string().default(""),
  unknownG11: z.string().default(""),
  unknownG13: z.number().nullable().default(null),
  unknownG14: z.number().nullable().default(null),
  unknownG15: z.number().nullable().default(null),
  unknownG16: z.number().nullable().default(null),
  background: MapBackground.default({ type: "none" })
});

type Map = z.infer<typeof Map>;

//

const I_KDM_MAP_DATA_VERSION = 3;

const IKDMMapDataSection0 = z.object({
  unknownA0: z.number().default(0)
});

type IKDMMapDataSection0 = z.infer<typeof IKDMMapDataSection0>;

const IKDMMapDataSection1 = z.object({
  unknownB0: z.number().default(0)
});

type IKDMMapDataSection1 = z.infer<typeof IKDMMapDataSection1>;

const IKDMMapDataSection2 = z.object({
  unknownC0: z.number().default(0)
});

type IKDMMapDataSection2 = z.infer<typeof IKDMMapDataSection2>;

const IKDMMapDataSection3 = z.object({
  unknownD0: z.number().default(0),
  unknownD1: z.number().default(0),
  unknownD2: z.string().default(""),
  unknownD3: z.number().default(0),
  unknownD4: z.number().default(0)
});

type IKDMMapDataSection3 = z.infer<typeof IKDMMapDataSection3>;

const IKDMMapDataSection4 = z.object({
  unknownE0: z.number().default(0),
  unknownE1: z.number().default(0),
  unknownE2: z.number().default(0),
  unknownE3: z.number().default(0),
  unknownE4: z.number().default(0),
  unknownE5: z.number().default(0),
  unknownE6: z.number().default(0),
  unknownE7: z.number().default(0),
  unknownE8: z.number().default(0),
  unknownE9: z.number().default(0),
  unknownE10: z.number().default(0),
  unknownE11: z.number().default(0),
  unknownE12: z.number().default(0),
  unknownE13: z.number().default(0),
  unknownE14: z.number().default(0),
  unknownE15: z.number().default(0),
  unknownE16: z.number().default(0),
  unknownE17: z.number().default(0),
  unknownE18: z.number().default(0),
  unknownE19: z.number().default(0),
  unknownE20: z.number().default(0),
  unknownE21: z.number().default(0),
  unknownE22: z.number().default(0)
});

type IKDMMapDataSection4 = z.infer<typeof IKDMMapDataSection4>;

const IKDMMapDataSection5 = z.object({
  maps: Map.array().default([]),
  unknownF0: z.number().default(0),
  unknownF1: z.number().default(0),
  unknownF2: z.number().default(0),
  unknownF3: z.number().default(0),
  unknownF4: z.number().default(0)
});

type IKDMMapDataSection5 = z.infer<typeof IKDMMapDataSection5>;

const IKDMMapDataSection6 = z.object({
  unknownH0: z.number().default(0),
  unknownH1: z.string().default(""),
  unknownH2: z.number().default(0),
  unknownH3: z.number().default(0),
});

type IKDMMapDataSection6 = z.infer<typeof IKDMMapDataSection6>;

const IKDMMapDataSection7 = z.object({
  unknownI0: z.number().default(0)
});

type IKDMMapDataSection7 = z.infer<typeof IKDMMapDataSection7>;

const IKDMMapData = z.object({
  section0: IKDMMapDataSection0.default({}),
  section1: IKDMMapDataSection1.default({}),
  section2: IKDMMapDataSection2.default({}),
  section3: IKDMMapDataSection3.default({}),
  section4: IKDMMapDataSection4.default({}),
  section5: IKDMMapDataSection5.default({}),
  section6: IKDMMapDataSection6.default({}),
  section7: IKDMMapDataSection7.default({}),
  _version: z.literal(I_KDM_MAP_DATA_VERSION)
});

type IKDMMapData = z.infer<typeof IKDMMapData>;

class KDMMapData extends KDM<IKDMMapData> {
  public static readonly SECTION_COUNT = 8;
  public static readonly COLOR_TEXTURE = "<color>";

  protected section1: IKDMMapDataSection1 & { offset: number };
  protected section2: IKDMMapDataSection2 & { offset: number };
  protected section3: IKDMMapDataSection3 & { offset: number };
  protected section4: IKDMMapDataSection4 & { offset: number };
  protected section5: IKDMMapDataSection5 & { offset: number };
  protected section7: IKDMMapDataSection7 & { offset: number };
  protected section6: IKDMMapDataSection6 & { offset: number; mapOffsets: number[] };
  protected override section0: IKDMMapDataSection0 & { offset: number; strings: KDMString[]; };

  public constructor(_data?: IKDMMapData) {
    super();

    let data: IKDMMapData;

    if(_data !== undefined) {
      data = IKDMMapData.parse(_data);
    } else {
      data = IKDMMapData.parse({ _version: I_KDM_MAP_DATA_VERSION });
    }

    this.section1 = { ...data.section1, offset: 0 };
    this.section2 = { ...data.section2, offset: 0 };
    this.section3 = { ...data.section3, offset: 0 };
    this.section4 = { ...data.section4, offset: 0 };
    this.section5 = { ...data.section5, offset: 0 };
    this.section7 = { ...data.section7, offset: 0 };
    this.section0 = { ...data.section0, strings: [], offset: 0 };
    this.section6 = { ...data.section6, mapOffsets: [], offset: 0 };

    this.registerStringIfNotExists(data.section3.unknownD2);

    data.section5.maps.forEach((map) => {
      this.registerStringIfNotExists(map.name);
      this.registerStringIfNotExists(map.level);
      this.registerStringIfNotExists(map.model);
      this.registerStringIfNotExists(map.music);
      this.registerStringIfNotExists(map.script);
      this.registerStringIfNotExists(map.unknownG0);
      this.registerStringIfNotExists(map.unknownG6);
      this.registerStringIfNotExists(map.unknownG10);
      this.registerStringIfNotExists(map.unknownG11);

      if (map.background.type === "color") {
        this.registerStringIfNotExists(map.background.color);
        this.registerStringIfNotExists(KDMMapData.COLOR_TEXTURE);
      }

      if (map.background.type === "texture") {
        this.registerStringIfNotExists(map.background.texture1);
        this.registerStringIfNotExists(map.background.texture2);
      }
    });

    this.registerStringIfNotExists(data.section6.unknownH1);
  }

  private buildMapBackground(buffer: PM4Buffer, background: MapBackground): void {
    if (background.type === "none") {
      buffer.setUInt32(NULL, NULL);
      return;
    }

    if (background.type === "color") {
      buffer.setUInt32(
        this.findOffsetOfString(KDMMapData.COLOR_TEXTURE),
        this.findOffsetOfString(background.color)
      );

      return;
    }

    buffer.setUInt32(
      this.findOffsetOfString(background.texture1),
      this.findOffsetOfString(background.texture2)
    );
  }

  private parseMapBackground(buffer: PM4Buffer): MapBackground {
    const background1 = this.findStringAtOffset(buffer.getUInt32());
    const background2 = this.findStringAtOffset(buffer.getUInt32());

    if (background1 === "" && background2 == "") {
      return { type: "none" };
    }

    if (background1 === "<color>") {
      return { type: "color", color: background2 };
    }

    return { type: "texture", texture1: background1, texture2: background2 };
  }



  private buildSection0(buffer: PM4Buffer): void {
    this.section0.offset = buffer.offset;
    buffer.setUInt32(this.section0.unknownA0);

    this.section0.strings.forEach((string) => {
      while (buffer.offset % 4 !== 0) {
        buffer.setUInt8(0x00);
      }

      string.offset = buffer.offset;
      buffer.setCString(string.string);

      while (buffer.offset % 4 !== 0) {
        buffer.setUInt8(0x00);
      }
    });
  }

  private buildSection1(buffer: PM4Buffer): void {
    this.section1.offset = buffer.offset;
    buffer.setUInt32(this.section1.unknownB0);
  }

  private buildSection2(buffer: PM4Buffer): void {
    this.section2.offset = buffer.offset;
    buffer.setUInt32(this.section2.unknownC0);
  }

  private buildSection3(buffer: PM4Buffer): void {
    this.section3.offset = buffer.offset;

    buffer.setUInt32(
      this.section3.unknownD0,
      this.section3.unknownD1,
      this.findOffsetOfString(this.section3.unknownD2),
      this.section3.unknownD3,
      this.section3.unknownD4
    );
  }

  private buildSection4(buffer: PM4Buffer): void {
    this.section4.offset = buffer.offset;
    buffer.setUInt32(this.section4.unknownE0);

    buffer.setUInt16(
      this.section4.unknownE1,
      this.section4.unknownE2
    );

    buffer.setUInt32(
      this.section4.unknownE3,
      this.section4.unknownE4,
      this.section4.unknownE5,
      this.section4.unknownE6,
      this.section4.unknownE7,
      this.section4.unknownE8,
      this.section4.unknownE9,
      this.section4.unknownE10,
      this.section4.unknownE11,
      this.section4.unknownE12,
      this.section4.unknownE13,
      this.section4.unknownE14,
      this.section4.unknownE15,
      this.section4.unknownE16,
      this.section4.unknownE17,
      this.section4.unknownE18,
      this.section4.unknownE19,
      this.section4.unknownE20,
      this.section4.unknownE21,
      this.section4.unknownE22
    );
  }

  private buildSection5(buffer: PM4Buffer): void {
    this.section5.offset = buffer.offset;
    buffer.setUInt32(this.section5.unknownF0);

    buffer.setUInt16(
      this.section5.unknownF1,
      this.section5.unknownF2,
      this.section5.unknownF3,
      this.section5.unknownF4
    );

    this.section5.maps.forEach((map) => {
      this.section6.mapOffsets.push(buffer.offset);

      buffer.setUInt32(
        this.findOffsetOfString(map.name),
        this.findOffsetOfString(map.level),
        this.findOffsetOfString(map.model),
        this.findOffsetOfString(map.unknownG0),
        map.unknownG1,
        map.unknownG2
      );

      this.buildMapBackground(buffer, map.background);

      buffer.setUInt32(
        this.findOffsetOfString(map.script),
        map.unknownG5,
        this.findOffsetOfString(map.music),
        this.findOffsetOfString(map.unknownG6),
        map.unknownG7,
        map.unknownG8,
        map.unknownG9,
        this.findOffsetOfString(map.unknownG10),
        this.findOffsetOfString(map.unknownG11),
        map.unknownG12
      );

      if (map.unknownG13 !== null && map.unknownG14 !== null) {
        buffer.setUInt16(map.unknownG13, map.unknownG14);
      }

      if (map.unknownG15 !== null && map.unknownG16 !== null) {
        buffer.setUInt16(map.unknownG15, map.unknownG16);
      }
    });
  }

  private buildSection6(buffer: PM4Buffer): void {
    this.section6.offset = buffer.offset;

    buffer.setUInt32(
      this.section6.unknownH0,
      this.findOffsetOfString(this.section6.unknownH1),
      this.section6.unknownH2,
      this.section6.unknownH3
    );

    this.section6.mapOffsets.forEach((offset) => {
      buffer.setUInt32(offset);
    });

    buffer.setUInt32(NULL);
  }

  private buildSection7(buffer: PM4Buffer): void {
    this.section7.offset = buffer.offset;
    buffer.setUInt32(this.section7.unknownI0);
  }

  public override build(): Buffer {
    const buffer = PM4Buffer.new();

    // Leave space for signature & header, these will be done later on.
    buffer.advance(KDM.SIGNATURE_SIZE);
    buffer.advance(KDMMapData.SECTION_COUNT * PM4Buffer.POINTER_SIZE);

    this.buildSection0(buffer);
    this.buildSection1(buffer);
    this.buildSection2(buffer);
    this.buildSection3(buffer);
    this.buildSection4(buffer);
    this.buildSection5(buffer);
    this.buildSection6(buffer);
    this.buildSection7(buffer);

    this.buildHeader(buffer, [
      this.section0, this.section1, this.section2, this.section3,
      this.section4, this.section5, this.section6, this.section7
    ]);

    return buffer.buffer;
  }



  private parseSection0(buffer: PM4Buffer): void {
    buffer.seek(this.section0.offset);
    this.section0.unknownA0 = buffer.getUInt32();

    while (buffer.offset < this.section1.offset) {
      const offset = buffer.offset;
      const string = buffer.getCString();

      if (string === "") {
        continue;
      }

      this.registerString(string, offset);
    }
  }

  private parseSection1(buffer: PM4Buffer): void {
    buffer.seek(this.section1.offset);
    this.section1.unknownB0 = buffer.getUInt32();
  }

  private parseSection2(buffer: PM4Buffer): void {
    buffer.seek(this.section2.offset);
    this.section2.unknownC0 = buffer.getUInt32();
  }

  private parseSection3(buffer: PM4Buffer): void {
    buffer.seek(this.section3.offset);

    this.section3.unknownD0 = buffer.getUInt32();
    this.section3.unknownD1 = buffer.getUInt32();

    this.section3.unknownD2 = this
      .findStringAtOffset(buffer.getUInt32());

    this.section3.unknownD3 = buffer.getUInt32();

    this.section3.unknownD4 = buffer.getUInt32();
  }

  private parseSection4(buffer: PM4Buffer): void {
    buffer.seek(this.section4.offset);

    this.section4.unknownE0 = buffer.getUInt32();

    this.section4.unknownE1 = buffer.getUInt16();
    this.section4.unknownE2 = buffer.getUInt16();

    this.section4.unknownE3 = buffer.getUInt32();
    this.section4.unknownE4 = buffer.getUInt32();
    this.section4.unknownE5 = buffer.getUInt32();
    this.section4.unknownE6 = buffer.getUInt32();
    this.section4.unknownE7 = buffer.getUInt32();
    this.section4.unknownE8 = buffer.getUInt32();
    this.section4.unknownE9 = buffer.getUInt32();
    this.section4.unknownE10 = buffer.getUInt32();
    this.section4.unknownE11 = buffer.getUInt32();
    this.section4.unknownE12 = buffer.getUInt32();
    this.section4.unknownE13 = buffer.getUInt32();
    this.section4.unknownE14 = buffer.getUInt32();
    this.section4.unknownE15 = buffer.getUInt32();
    this.section4.unknownE16 = buffer.getUInt32();
    this.section4.unknownE17 = buffer.getUInt32();
    this.section4.unknownE18 = buffer.getUInt32();
    this.section4.unknownE19 = buffer.getUInt32();
    this.section4.unknownE20 = buffer.getUInt32();
    this.section4.unknownE21 = buffer.getUInt32();
  }

  private parseSection5(buffer: PM4Buffer): void {
    buffer.seek(this.section5.offset);
    assert(this.section6.mapOffsets.length !== 0);

    this.section5.unknownF0 = buffer.getUInt32();
    
    this.section5.unknownF1 = buffer.getUInt16();
    this.section5.unknownF2 = buffer.getUInt16();
    this.section5.unknownF3 = buffer.getUInt16();
    this.section5.unknownF4 = buffer.getUInt16();

    this.section6.mapOffsets.forEach((mapOffset) => {
      buffer.seek(mapOffset);

      const map = Map.default({}).parse(undefined);

      map.name = this.findStringAtOffset(buffer.getUInt32());
      map.level = this.findStringAtOffset(buffer.getUInt32());
      map.model = this.findStringAtOffset(buffer.getUInt32());
      map.unknownG0 = this.findStringAtOffset(buffer.getUInt32());

      map.unknownG1 = buffer.getUInt32();
      map.unknownG2 = buffer.getUInt32();

      map.background = this.parseMapBackground(buffer);

      map.script = this.findStringAtOffset(buffer.getUInt32());
      map.unknownG5 = buffer.getUInt32();

      map.music = this.findStringAtOffset(buffer.getUInt32());
      map.unknownG6 = this.findStringAtOffset(buffer.getUInt32());

      map.unknownG7 = buffer.getUInt32();
      map.unknownG8 = buffer.getUInt32();
      map.unknownG9 = buffer.getUInt32();

      map.unknownG10 = this.findStringAtOffset(buffer.getUInt32());
      map.unknownG11 = this.findStringAtOffset(buffer.getUInt32());

      map.unknownG12 = buffer.getUInt32();

      if (buffer.offset < this.section6.offset) {
        map.unknownG13 = buffer.getUInt16();
        map.unknownG14 = buffer.getUInt16();

        if (buffer.offset < this.section6.offset) {
          map.unknownG15 = buffer.getUInt16();
          map.unknownG16 = buffer.getUInt16();
        }
      }

      this.section5.maps.push(map);
    });
  }

  private parseSection6(buffer: PM4Buffer): void {
    buffer.seek(this.section6.offset);

    this.section6.unknownH0 = buffer.getUInt32();

    this.section6.unknownH1 = this
      .findStringAtOffset(buffer.getUInt32());

    this.section6.unknownH2 = buffer.getUInt32();
    this.section6.unknownH3 = buffer.getUInt32();

    while (buffer.offset < this.section7.offset) {
      const offset = buffer.getUInt32();

      if (offset === NULL) {
        break;
      }

      this.section6.mapOffsets.push(offset);
    }
  }

  private parseSection7(buffer: PM4Buffer): void {
    buffer.seek(this.section7.offset);
    this.section7.unknownI0 = buffer.getUInt32();
  }

  public override parse(_buffer: Buffer): this {
    const buffer = PM4Buffer.fromBuffer(_buffer);
    const sections = this.parseHeader(buffer);

    assert(sections.length === KDMMapData.SECTION_COUNT);

    this.section0.offset = sections.at(0)!;
    this.section1.offset = sections.at(1)!;
    this.section2.offset = sections.at(2)!;
    this.section3.offset = sections.at(3)!;
    this.section4.offset = sections.at(4)!;
    this.section5.offset = sections.at(5)!;
    this.section6.offset = sections.at(6)!;
    this.section7.offset = sections.at(7)!;

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

  public override toJSON(): IKDMMapData {
    return IKDMMapData.parse({ _version: I_KDM_MAP_DATA_VERSION, ...this });
  }
}

export default KDMMapData;
