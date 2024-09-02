import z from "zod";
import KDM from "#/kdm/kdm";
import assert from "node:assert";
import PM4Buffer from "#/pm4-buffer";
import KDMString from "#/kdm/kdm-string";

const NULL = 0;

const LinkType = z.enum([
  "normal", "world", "pipe",
  "door", "unknown", "goal", "save_block"
]);

type LinkType = z.infer<typeof LinkType>;

const Link = z.object({
  unknownH1: z.number().default(0),
  unknownH2: z.number().default(0),
  unknownH3: z.number().default(0),
  unknownH4: z.number().default(0),
  unknownH5: z.number().default(0),
  endingRoom: z.string().default(""),
  endingEvent: z.string().default(""),
  startingRoom: z.string().default(""),
  startingEvent: z.string().default(""),
  endingTransition: z.string().default(""),
  startingTransition: z.string().default(""),
  type: LinkType.default(LinkType.enum.normal)
});

type Link = z.infer<typeof Link>;

const Zone = z.object({
  links: Link.array().default([]),
  unknownG0: z.number().default(0),
  unknownG1: z.number().default(0),
  unknownG2: z.number().default(0),
  unknownF0: z.string().default(""),
  unknownF1: z.number().nullable().default(0),
  unknownF2: z.number().nullable().default(0),
  unknownF3: z.number().nullable().default(0)
});

type Zone = z.infer<typeof Zone>;

//

const I_KDM_LINK_DATA_VERSION = 2;

const IKDMLinkDataSection0 = z.object({
  unknownA0: z.number().default(0)
});

type IKDMLinkDataSection0 = z.infer<typeof IKDMLinkDataSection0>;

const IKDMLinkDataSection1 = z.object({
  unknownB0: z.number().default(0)
});

type IKDMLinkDataSection1 = z.infer<typeof IKDMLinkDataSection1>;

const IKDMLinkDataSection2 = z.object({
  unknownC0: z.number().default(0)
});

type IKDMLinkDataSection2 = z.infer<typeof IKDMLinkDataSection2>;

const IKDMLinkDataSection3 = z.object({
  unknownD0: z.number().default(0),
  unknownD1: z.number().default(0),
  unknownD2: z.string().default(""),
  unknownD3: z.number().default(0),
  unknownD4: z.number().default(0)
});

type IKDMLinkDataSection3 = z.infer<typeof IKDMLinkDataSection3>;

const IKDMLinkDataSection4 = z.object({
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
  unknownE20: z.number().default(0)
});

type IKDMLinkDataSection4 = z.infer<typeof IKDMLinkDataSection4>;

const IKDMLinkDataSection5 = z.object({
  zones: Zone.array().default([]),
  unknownK0: z.number().default(0),
  unknownK1: z.number().default(0),
  unknownK2: z.number().default(0),
  unknownK3: z.number().default(0),
  unknownK4: z.number().default(0)
});

type IKDMLinkDataSection5 = z.infer<typeof IKDMLinkDataSection5>;

const IKDMLinkDataSection6 = z.object({
  unknownI0: z.number().default(0),
  unknownI1: z.string().default(""),
  unknownI2: z.number().default(0),
  unknownI3: z.number().default(0)
});

type IKDMLinkDataSection6 = z.infer<typeof IKDMLinkDataSection6>;

const IKDMLinkDataSection7 = z.object({
  unknownJ0: z.number().default(0)
});

type IKDMLinkDataSection7 = z.infer<typeof IKDMLinkDataSection7>;

const IKDMLinkData = z.object({
  section0: IKDMLinkDataSection0.default({}),
  section1: IKDMLinkDataSection1.default({}),
  section2: IKDMLinkDataSection2.default({}),
  section3: IKDMLinkDataSection3.default({}),
  section4: IKDMLinkDataSection4.default({}),
  section5: IKDMLinkDataSection5.default({}),
  section6: IKDMLinkDataSection6.default({}),
  section7: IKDMLinkDataSection7.default({}),
  _version: z.literal(I_KDM_LINK_DATA_VERSION)
});

type IKDMLinkData = z.infer<typeof IKDMLinkData>;

class KDMLinkData extends KDM<IKDMLinkData> {
  public static readonly SECTION_COUNT = 8;

  public static readonly LINK_TYPE_DOOR = 2;
  public static readonly LINK_TYPE_PIPE = 1;
  public static readonly LINK_TYPE_GOAL = 5;
  public static readonly LINK_TYPE_WORLD = 3;
  public static readonly LINK_TYPE_NORMAL = 0;
  public static readonly LINK_TYPE_UNKNOWN = 4;
  public static readonly LINK_TYPE_SAVE_BLOCK = 5;

  protected section1: IKDMLinkDataSection1 & { offset: number };
  protected section2: IKDMLinkDataSection2 & { offset: number };
  protected section3: IKDMLinkDataSection3 & { offset: number };
  protected section4: IKDMLinkDataSection4 & { offset: number };
  protected section5: IKDMLinkDataSection5 & { offset: number };
  protected section7: IKDMLinkDataSection7 & { offset: number };
  protected section6: IKDMLinkDataSection6 & { offset: number; zoneOffsets: number[] };
  protected override section0: IKDMLinkDataSection0 & { offset: number; strings: KDMString[] };

  public constructor(_data?: IKDMLinkData) {
    super();

    let data: IKDMLinkData;

    if (_data !== undefined) {
      data = IKDMLinkData.parse(_data);
    } else {
      data = IKDMLinkData.parse({ _version: I_KDM_LINK_DATA_VERSION });
    }

    this.section1 = { ...data.section1, offset: NULL };
    this.section2 = { ...data.section2, offset: NULL };
    this.section3 = { ...data.section3, offset: NULL };
    this.section4 = { ...data.section4, offset: NULL };
    this.section5 = { ...data.section5, offset: NULL };
    this.section7 = { ...data.section7, offset: NULL };
    this.section0 = { ...data.section0, offset: NULL, strings: [] };
    this.section6 = { ...data.section6, offset: NULL, zoneOffsets: [] };

    this.registerStringIfNotExists(this.section3.unknownD2);

    this.section5.zones.forEach((zone) => {
      this.registerStringIfNotExists(zone.unknownF0);

      zone.links.forEach((link) => {
        this.registerStringIfNotExists(link.endingRoom);
        this.registerStringIfNotExists(link.endingEvent);
        this.registerStringIfNotExists(link.startingRoom);
        this.registerStringIfNotExists(link.startingEvent);
        this.registerStringIfNotExists(link.endingTransition);
        this.registerStringIfNotExists(link.startingTransition);
      });
    });

    this.registerStringIfNotExists(this.section6.unknownI1);
  }

  private buildLinkType(buffer: PM4Buffer, type: LinkType): void {
    if (type === LinkType.enum.door) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_DOOR);
      return;
    }

    if (type === LinkType.enum.pipe) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_PIPE);
      return;
    }

    if (type === LinkType.enum.goal) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_GOAL);
      return;
    }

    if (type === LinkType.enum.world) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_WORLD);
      return;
    }

    if (type === LinkType.enum.normal) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_NORMAL);
      return;
    }

    if (type === LinkType.enum.unknown) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_UNKNOWN);
      return;
    }

    if (type === LinkType.enum.save_block) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_SAVE_BLOCK);
      return;
    }

    buffer.setUInt32(KDMLinkData.LINK_TYPE_NORMAL);
  }

  private parseLinkType(buffer: PM4Buffer): LinkType {
    const type = buffer.getUInt32();

    if (type === KDMLinkData.LINK_TYPE_DOOR) {
      return LinkType.enum.door;
    }

    if (type === KDMLinkData.LINK_TYPE_GOAL) {
      return LinkType.enum.goal;
    }

    if (type === KDMLinkData.LINK_TYPE_PIPE) {
      return LinkType.enum.pipe;
    }

    if (type === KDMLinkData.LINK_TYPE_WORLD) {
      return LinkType.enum.world;
    }

    if (type === KDMLinkData.LINK_TYPE_NORMAL) {
      return LinkType.enum.normal;
    }

    if (type === KDMLinkData.LINK_TYPE_UNKNOWN) {
      return LinkType.enum.unknown;
    }

    if (type === KDMLinkData.LINK_TYPE_SAVE_BLOCK) {
      return LinkType.enum.save_block;
    }

    return LinkType.enum.normal;
  }



  private buildSection0(buffer: PM4Buffer): void {
    this.section0.offset = buffer.offset;
    buffer.setUInt32(this.section0.unknownA0);

    this.section0.strings.forEach((string) => {
      while (buffer.offset % 4 !== 0) {
        buffer.setUInt8(0);
      }

      string.offset = buffer.offset;
      buffer.setCString(string.string);

      while (buffer.offset % 4 !== 0) {
        buffer.setUInt8(0);
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
    buffer.setUInt16(this.section4.unknownE1, this.section4.unknownE2);

    buffer.setUInt32(
      this.section4.unknownE3, this.section4.unknownE4,
      this.section4.unknownE5, this.section4.unknownE6,
      this.section4.unknownE7, this.section4.unknownE8,
      this.section4.unknownE9, this.section4.unknownE10,
      this.section4.unknownE11, this.section4.unknownE12,
      this.section4.unknownE13
    );

    buffer.setUInt16(this.section4.unknownE14, this.section4.unknownE15);

    buffer.setUInt32(
      this.section4.unknownE16, this.section4.unknownE17,
      this.section4.unknownE18, this.section4.unknownE19,
      this.section4.unknownE20
    );
  }

  private buildSection5(buffer: PM4Buffer): void {
    this.section5.offset = buffer.offset;
    buffer.setUInt32(this.section5.unknownK0);

    buffer.setUInt16(
      this.section5.unknownK1, this.section5.unknownK2,
      this.section5.unknownK3, this.section5.unknownK4
    );

    // Entries without unknown metadata must be placed at the end.
    this.section5.zones.sort((a, b) => {
      if (a.unknownF1 === null && b.unknownF1 !== null) return 1;
      if (a.unknownF1 !== null && b.unknownF1 === null) return -1;
      return 0;
    });

    this.section5.zones.forEach((zone) => {
      const linkOffsets: number[] = [];

      zone.links.forEach((link) => {
        linkOffsets.push(buffer.offset);

        this.buildLinkType(buffer, link.type);

        buffer.setUInt32(link.unknownH1, link.unknownH2);
        buffer.setUInt32(this.findOffsetOfString(link.startingRoom), this.findOffsetOfString(link.startingTransition));
        buffer.setUInt32(this.findOffsetOfString(link.endingRoom), this.findOffsetOfString(link.endingTransition));
        buffer.setUInt32(this.findOffsetOfString(link.startingEvent), this.findOffsetOfString(link.endingEvent));
        buffer.setUInt32(link.unknownH3);

        buffer.setUInt16(link.unknownH4, link.unknownH5);
      });


      const containerOffset = buffer.offset;

      for (const linkOffset of linkOffsets) {
        buffer.setUInt32(linkOffset);
      }

      buffer.setUInt32(zone.unknownG0);
      buffer.setUInt16(zone.unknownG1, zone.unknownG2);



      const zoneOffset = buffer.offset;

      buffer.setUInt32(
        this.findOffsetOfString(zone.unknownF0),
        containerOffset,
        zone.links.length
      );

      if (zone.unknownF1 !== null) {
        buffer.setUInt32(zone.unknownF1);

        if (zone.unknownF2 !== null && zone.unknownF3 !== null) {
          buffer.setUInt16(zone.unknownF2, zone.unknownF3);
        }
      }

      this.section6.zoneOffsets.push(zoneOffset);
    });
  }

  private buildSection6(buffer: PM4Buffer): void {
    this.section6.offset = buffer.offset;

    buffer.setUInt32(
      this.section6.unknownI0,
      this.findOffsetOfString(this.section6.unknownI1),
      this.section6.unknownI2,
      this.section6.unknownI3
    );

    for (const linkOffset of this.section6.zoneOffsets) {
      buffer.setUInt32(linkOffset);
    }
  }

  private buildSection7(buffer: PM4Buffer): void {
    this.section7.offset = buffer.offset;
    buffer.setUInt32(this.section7.unknownJ0);
  }

  public build(): Buffer {
    const buffer = PM4Buffer.new();

    // Leave space for signature & header, these will be done later on.
    buffer.advance(KDM.SIGNATURE_SIZE);
    buffer.advance(KDMLinkData.SECTION_COUNT * PM4Buffer.POINTER_SIZE);

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
      .findStringAtOffset(buffer.getUInt32()).valueOf();

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

    this.section4.unknownE14 = buffer.getUInt16();
    this.section4.unknownE15 = buffer.getUInt16();

    this.section4.unknownE16 = buffer.getUInt32();
    this.section4.unknownE17 = buffer.getUInt32();
    this.section4.unknownE18 = buffer.getUInt32();
    this.section4.unknownE19 = buffer.getUInt32();
    this.section4.unknownE20 = buffer.getUInt32();
  }

  private parseSection5(buffer: PM4Buffer): void {
    buffer.seek(this.section5.offset);
    assert(this.section6.zoneOffsets.length !== 0);

    this.section5.unknownK0 = buffer.getUInt32();

    this.section5.unknownK1 = buffer.getUInt16();
    this.section5.unknownK2 = buffer.getUInt16();
    this.section5.unknownK3 = buffer.getUInt16();
    this.section5.unknownK4 = buffer.getUInt16();

    this.section6.zoneOffsets.forEach((linkOffset) => {
      buffer.seek(linkOffset);

      const zone = Zone.default({}).parse(undefined);

      zone.unknownF0 = this
        .findStringAtOffset(buffer.getUInt32());

      const container = buffer.getUInt32();
      const linksCount = buffer.getUInt32();

      zone.unknownF1 = null;
      zone.unknownF1 = null;
      zone.unknownF3 = null;

      if (buffer.offset < this.section6.offset) {
        zone.unknownF1 = buffer.getUInt32();

        if (buffer.offset < this.section6.offset) {
          zone.unknownF2 = buffer.getUInt16();
          zone.unknownF3 = buffer.getUInt16();
        }
      }

      buffer.seek(container);

      for (let i = 0; i < linksCount; i += 1) {
        const offset = buffer.getUInt32();
        const oldOffset = buffer.offset;

        buffer.seek(offset);

        const link = Link.default({}).parse(undefined);
        link.type = this.parseLinkType(buffer);

        link.unknownH1 = buffer.getUInt32();
        link.unknownH2 = buffer.getUInt32();

        link.startingRoom = this
          .findStringAtOffset(buffer.getUInt32());

        link.startingTransition = this
          .findStringAtOffset(buffer.getUInt32());

        link.endingRoom = this
          .findStringAtOffset(buffer.getUInt32());

        link.endingTransition = this
          .findStringAtOffset(buffer.getUInt32());

        link.startingEvent = this
          .findStringAtOffset(buffer.getUInt32());

        link.endingEvent = this
          .findStringAtOffset(buffer.getUInt32());

        link.unknownH3 = buffer.getUInt32();

        link.unknownH4 = buffer.getUInt16();
        link.unknownH5 = buffer.getUInt16();

        zone.links.push(link);
        buffer.seek(oldOffset);
      }

      zone.unknownG0 = buffer.getUInt32();
      zone.unknownG1 = buffer.getUInt16();
      zone.unknownG2 = buffer.getUInt16();

      this.section5.zones.push(zone);
    });
  }

  private parseSection6(buffer: PM4Buffer): void {
    buffer.seek(this.section6.offset);

    this.section6.unknownI0 = buffer.getUInt32();

    this.section6.unknownI1 = this
      .findStringAtOffset(buffer.getUInt32()).valueOf();

    this.section6.unknownI2 = buffer.getUInt32();
    this.section6.unknownI3 = buffer.getUInt32();

    while (buffer.offset < this.section7.offset) {
      this.section6.zoneOffsets.push(buffer.getUInt32());
    }
  }

  private parseSection7(buffer: PM4Buffer): void {
    buffer.seek(this.section7.offset);
    this.section7.unknownJ0 = buffer.getUInt32();
  }

  public parse(_buffer: Buffer): this {
    const buffer = PM4Buffer.fromBuffer(_buffer);
    const sections = this.parseHeader(buffer);

    assert(sections.length === KDMLinkData.SECTION_COUNT);

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

  public override toJSON(): IKDMLinkData {
    return IKDMLinkData.parse({ _version: I_KDM_LINK_DATA_VERSION, ...this });
  }
}

export default KDMLinkData;
