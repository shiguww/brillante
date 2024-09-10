import z from "zod";
import KDM from "#/kdm/kdm";
import KDMTable from "#/kdm/kdm-table";
import KDMParameter from "#/kdm/kdm-parameter";
import PM4Buffer from "#/pm4-buffer";
import assert from "node:assert";

class KDMLinkData extends KDM<IKDMLinkData> {
  public static readonly LINK_TYPE_DOOR = 2;
  public static readonly LINK_TYPE_PIPE = 1;
  public static readonly LINK_TYPE_GOAL = 5;
  public static readonly LINK_TYPE_WORLD = 3;
  public static readonly LINK_TYPE_NORMAL = 0;
  public static readonly LINK_TYPE_UNKNOWN = 4;
  public static readonly LINK_TYPE_SAVE_BLOCK = 5;

  private readonly linkDataAllLen: KDMParameter;
  private readonly linkDataAll: KDMTable<LinkData>;

  public constructor(data?: IKDMLinkData) {
    super();

    this.linkDataAllLen = this.defineParameter({
      value: 0,
      unknownZ0: 0x000107B3,
      unknownZ1: 0x00000000,
      name: "link_data_all_len",
      type: KDM.PARAMETER_TYPE_U32,
    });

    this.linkDataAll = this.defineTable({
      name: "link_data_all",
      build: this.buildLinkDataAll.bind(this),
      parse: this.parseLinkDataAll.bind(this)
    });

    if (data !== undefined) {
      data = IKDMLinkData.parse(data);
      this.linkDataAll.entries = data.linkDataAll;
    }
  }

  public get objectCount(): number {
    const linkDataCount = this.linkDataAll.entries.length;

    // exactly one linkContainer per linkData
    const linkContainerCount = this.linkDataAll.entries.length;

    const linkCount = this.linkDataAll.entries
      .map((entry) => entry.container.links.length)
      .reduce((prev, curr) => prev + curr);

    return linkCount + linkContainerCount + linkDataCount;
  }

  protected override prebuild(): void {
    this.linkDataAllLen.value = this.linkDataAll.entries.length;

    this.linkDataAll.entries.forEach((entry) => {
      entry.container.links.forEach((link) => {
        this.registerStringIfNotExists(link.endingRoom);
        this.registerStringIfNotExists(link.endingEvent);
        this.registerStringIfNotExists(link.startingRoom);
        this.registerStringIfNotExists(link.startingEvent);
        this.registerStringIfNotExists(link.endingTransition);
        this.registerStringIfNotExists(link.startingTransition);
      });
    });

    // entries without unnkown metadata must be last.
    this.linkDataAll.entries.sort((a, b) => {
      if (a.unknownF1 === null && b.unknownF1 !== null) return 1;
      if (a.unknownF1 !== null && b.unknownF1 === null) return -1;
      return 0;
    });
  }

  private buildLinkType(buffer: PM4Buffer, linkType: LinkType): number {
    const offset = buffer.offset;

    if (linkType === LinkType.enum.door) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_DOOR);
      return offset;
    }

    if (linkType === LinkType.enum.goal) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_GOAL);
      return offset;
    }

    if (linkType === LinkType.enum.pipe) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_PIPE);
      return offset;
    }

    if (linkType === LinkType.enum.world) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_WORLD);
      return offset;
    }

    if (linkType === LinkType.enum.normal) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_NORMAL);
      return offset;
    }

    if (linkType === LinkType.enum.unknown) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_UNKNOWN);
      return offset;
    }

    if (linkType === LinkType.enum.save_block) {
      buffer.setUInt32(KDMLinkData.LINK_TYPE_SAVE_BLOCK);
      return offset;
    }

    buffer.setUInt32(KDMLinkData.LINK_TYPE_NORMAL);
    return offset;
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

  private buildLink(buffer: PM4Buffer, link: Link): number {
    const offset = buffer.offset;

    this.buildLinkType(buffer, link.type);

    buffer.setUInt32(link.unknownH1);
    buffer.setUInt32(link.unknownH2);

    buffer.setUInt32(this.findOffsetOfString(
      link.startingRoom
    ));

    buffer.setUInt32(this.findOffsetOfString(
      link.startingTransition
    ));

    buffer.setUInt32(this.findOffsetOfString(
      link.endingRoom
    ));

    buffer.setUInt32(this.findOffsetOfString(
      link.endingTransition
    ));

    buffer.setUInt32(this.findOffsetOfString(
      link.startingEvent
    ));

    buffer.setUInt32(this.findOffsetOfString(
      link.endingEvent
    ));

    buffer.setUInt32(link.unknownH3);

    buffer.setUInt16(link.unknownH4);
    buffer.setUInt16(link.unknownH5);

    return offset;
  }

  private parseLink(buffer: PM4Buffer): Link {
    const type = this.parseLinkType(buffer);

    const unknownH1 = buffer.getUInt32();
    const unknownH2 = buffer.getUInt32();

    const startingRoom = this.findStringAtOffset(buffer.getUInt32());
    const startingTransition = this.findStringAtOffset(buffer.getUInt32());

    const endingRoom = this.findStringAtOffset(buffer.getUInt32());
    const endingTransition = this.findStringAtOffset(buffer.getUInt32());

    const startingEvent = this.findStringAtOffset(buffer.getUInt32());
    const endingEvent = this.findStringAtOffset(buffer.getUInt32());

    const unknownH3 = buffer.getUInt32();

    const unknownH4 = buffer.getUInt16();
    const unknownH5 = buffer.getUInt16();

    return {
      type, unknownH1, unknownH2, unknownH3, unknownH4, unknownH5, startingEvent,
      startingRoom, startingTransition, endingEvent, endingRoom, endingTransition
    };
  }

  private buildLinkContainer(buffer: PM4Buffer, container: LinkContainer): number {
    const linkOffsets = container.links.map((link) => {
      return this.buildLink(buffer, link);
    });

    const offset = buffer.offset;

    linkOffsets.forEach((offset) => {
      buffer.setUInt32(offset);
    });

    buffer.setUInt32(container.unknownG0);

    buffer.setUInt16(container.unknownG1);
    buffer.setUInt16(container.unknownG2);

    return offset;
  }

  private parseLinkContainer(buffer: PM4Buffer, linkCount: number): LinkContainer {
    const linkOffsets: number[] = [];

    for (let i = 0; i < linkCount; i += 1) {
      const linkOffset = buffer.getUInt32();
      assert.notEqual(linkOffset, 0);
      linkOffsets.push(linkOffset);
    }

    const unknownG0 = buffer.getUInt32();
    const unknownG1 = buffer.getUInt16();
    const unknownG2 = buffer.getUInt16();

    const links = linkOffsets.map((linkOffset) => {
      buffer.seek(linkOffset);
      return this.parseLink(buffer);
    });

    return { links, unknownG0, unknownG1, unknownG2 };
  }

  private buildLinkData(buffer: PM4Buffer, linkData: LinkData): number {
    const containerOffset = this.buildLinkContainer(buffer, linkData.container);
    const offset = buffer.offset;

    buffer.setUInt32(this.findOffsetOfString(
      linkData.unknownF0
    ));

    buffer.setUInt32(containerOffset);
    buffer.setUInt32(linkData.container.links.length);

    if (linkData.unknownF1 !== null) {
      buffer.setUInt32(linkData.unknownF1);
    }

    if (linkData.unknownF2 !== null) {
      buffer.setUInt16(linkData.unknownF2);
    }

    if (linkData.unknownF3 !== null) {
      buffer.setUInt16(linkData.unknownF3);
    }

    return offset;
  }

  private parseLinkData(buffer: PM4Buffer): LinkData {
    const unknownF0 = this.findStringAtOffset(buffer.getUInt32());

    const containerOffset = buffer.getUInt32();
    const linkCount = buffer.getUInt32();

    let unknownF1: null | number = null;
    let unknownF2: null | number = null;
    let unknownF3: null | number = null;

    if (this.isInSection(buffer, 5)) {
      unknownF1 = buffer.getUInt32();
    }

    if (this.isInSection(buffer, 5)) {
      unknownF2 = buffer.getUInt16();
      unknownF3 = buffer.getUInt16();
    }

    buffer.seek(containerOffset);
    const container = this.parseLinkContainer(buffer, linkCount);

    return { unknownF0, unknownF1, unknownF2, unknownF3, container };
  }

  private buildLinkDataAll(buffer: PM4Buffer): void {
    buffer.setUInt32(0x019607B2);
    buffer.setUInt32(0x0196000F);

    this.linkDataAll.offsets.forEach((offset) => {
      buffer.setUInt32(offset);
    });

    buffer.setUInt32(0);
  }

  private parseLinkDataAll(buffer: PM4Buffer): void {
    const limit = this.linkDataAllLen.value;
    assert(typeof limit === "number");

    assert.equal(buffer.getUInt32(), 0x019607B2);
    assert.equal(buffer.getUInt32(), 0x0196000F);

    for (let i = 0; i < limit; i += 1) {
      const offset = buffer.getUInt32();

      if (offset === 0) {
        break;
      }

      this.linkDataAll.offsets.push(offset);
    }
  }

  protected override buildSection4(buffer: PM4Buffer): void {
    buffer.setUInt32(0x00000002);
    buffer.setUInt32(0x00090015);
    buffer.setUInt32(0x00000000);
    buffer.setUInt32(0x00762BB4);

    buffer.setUInt32(0x00000001);
    buffer.setUInt32(0x00000001);
    buffer.setUInt32(0x00000001);
    buffer.setUInt32(0x00000003);

    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000003);

    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00030016);
    buffer.setUInt32(0x00000000);
    buffer.setUInt32(0x00000000);

    buffer.setUInt32(0x00000003);
    buffer.setUInt32(0x00000014);
    buffer.setUInt32(0x00000001);
  }

  protected override parseSection4(buffer: PM4Buffer): void {
    assert.equal(buffer.getUInt32(), 0x00000002);
    assert.equal(buffer.getUInt32(), 0x00090015);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00762BB4);

    assert.equal(buffer.getUInt32(), 0x00000001);
    assert.equal(buffer.getUInt32(), 0x00000001);
    assert.equal(buffer.getUInt32(), 0x00000001);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000003);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00030016);
    assert.equal(buffer.getUInt32(), 0x00000000);
    assert.equal(buffer.getUInt32(), 0x00000000);

    assert.equal(buffer.getUInt32(), 0x00000003);
    assert.equal(buffer.getUInt32(), 0x00000014);
    assert.equal(buffer.getUInt32(), 0x00000001);
  }

  protected override buildSection5(buffer: PM4Buffer): void {
    buffer.setUInt32(this.objectCount);

    buffer.setUInt32(0x00090017);
    buffer.setUInt32(0x00090015);

    this.linkDataAll.entries.forEach((linkData) => {
      const offset = this.buildLinkData(buffer, linkData);
      this.linkDataAll.offsets.push(offset);
    });
  }

  protected override parseSection5(buffer: PM4Buffer): void {
    const objectCount = buffer.getUInt32();

    assert.equal(buffer.getUInt32(), 0x00090017);
    assert.equal(buffer.getUInt32(), 0x00090015);

    this.linkDataAll.offsets.forEach((offset) => {
      buffer.seek(offset);

      const linkData = this.parseLinkData(buffer);
      this.linkDataAll.entries.push(linkData);
    });

    assert.equal(this.objectCount, objectCount);
  }

  public override toJSON(): IKDMLinkData {
    return IKDMLinkData.parse({
      ...this,
      _version: I_KDM_LINK_DATA_VERSION,
      linkDataAll: this.linkDataAll.entries
    });
  }
}

const I_KDM_LINK_DATA_VERSION = 3;

const LinkType = z.enum([
  "normal", "world", "pipe",
  "door", "unknown", "goal", "save_block"
]);

type LinkType = z.infer<typeof LinkType>;

const Link = z.object({
  type: LinkType,
  unknownH1: z.number(),
  unknownH2: z.number(),
  unknownH3: z.number(),
  unknownH4: z.number(),
  unknownH5: z.number(),
  endingRoom: z.string(),
  endingEvent: z.string(),
  startingRoom: z.string(),
  startingEvent: z.string(),
  endingTransition: z.string(),
  startingTransition: z.string()
});

type Link = z.infer<typeof Link>;

const LinkContainer = z.object({
  unknownG0: z.number(),
  unknownG1: z.number(),
  unknownG2: z.number(),
  links: Link.array().default([]),
});

type LinkContainer = z.infer<typeof LinkContainer>;

const LinkData = z.object({
  unknownF0: z.string(),
  container: LinkContainer,
  unknownF1: z.number().nullable(),
  unknownF2: z.number().nullable(),
  unknownF3: z.number().nullable()
});

type LinkData = z.infer<typeof LinkData>;

const IKDMLinkData = z.object({
  linkDataAll: LinkData.array(),
  _version: z.literal(I_KDM_LINK_DATA_VERSION)
});

type IKDMLinkData = z.infer<typeof IKDMLinkData>;
export default KDMLinkData;
