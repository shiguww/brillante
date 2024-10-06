import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMU32 from "#kdm/editor/common/primitive/kdm-u32";
import KDMStructure from "#kdm/editor/common/kdm-structure";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";
import KDMObjectHeading from "../common/kdm-object-heading";

const ILinkType = z.enum([
  "DOOR", "GOAL", "PIPE",
  "WORLD", "NORMAL", "UNKNOWN",
  "SAVE_BLOCK"
]);

type ILinkType = z.infer<typeof ILinkType>;

class LinkType extends KDMStructure<ILinkType> {
  public static readonly schema = ILinkType;
  public static readonly TYPE_DOOR = 0x00000002;
  public static readonly TYPE_GOAL = 0x00000005;
  public static readonly TYPE_PIPE = 0x00000001;
  public static readonly TYPE_WORLD = 0x00000003;
  public static readonly TYPE_NORMAL = 0x00000000;
  public static readonly TYPE_UNKNOWN = 0x00000004;
  public static readonly TYPE_SAVE_BLOCK = 0x00000006;

  public readonly type = new KDMU32(this.kdm);
  public override readonly schema = ILinkType;

  public override get fields(): Array<KDMPrimitive> {
    return [this.type];
  }

  protected override _get(): ILinkType {
    const type = this.type.get();

    if (type === LinkType.TYPE_DOOR) {
      return "DOOR";
    }

    if (type === LinkType.TYPE_GOAL) {
      return "GOAL";
    }

    if (type === LinkType.TYPE_PIPE) {
      return "PIPE";
    }

    if (type === LinkType.TYPE_WORLD) {
      return "WORLD";
    }

    if (type === LinkType.TYPE_NORMAL) {
      return "NORMAL";
    }

    if (type === LinkType.TYPE_UNKNOWN) {
      return "UNKNOWN";
    }

    if (type === LinkType.TYPE_SAVE_BLOCK) {
      return "SAVE_BLOCK";
    }

    assert.fail();
  }

  protected override _set(type: ILinkType): void {
    if (type === "DOOR") {
      this.type.set(LinkType.TYPE_DOOR);
      return;
    }

    if (type === "GOAL") {
      this.type.set(LinkType.TYPE_GOAL);
      return;
    }

    if (type === "PIPE") {
      this.type.set(LinkType.TYPE_PIPE);
      return;
    }

    if (type === "WORLD") {
      this.type.set(LinkType.TYPE_WORLD);
      return;
    }

    if (type === "NORMAL") {
      this.type.set(LinkType.TYPE_NORMAL);
      return;
    }

    if (type === "UNKNOWN") {
      this.type.set(LinkType.TYPE_UNKNOWN);
      return;
    }

    if (type === "SAVE_BLOCK") {
      this.type.set(LinkType.TYPE_SAVE_BLOCK);
      return;
    }

    assert.fail();
  }
}

class LinkHeading extends KDMObjectHeading<Link> {
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [this.ouid, this.size0, this.otid, this.size1];
  }

  protected override _build(buffer: WBuffer): void {
    this.size0.set((this.object.sizeof - this.sizeof) / 4);
    this.size1.set((this.object.sizeof - this.sizeof) / 4);
    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);
    assert.equal(this.size0.get(), (this.object.sizeof - this.sizeof) / 4);
    assert.equal(this.size1.get(), (this.object.sizeof - this.sizeof) / 4);
  }
}

const ILink = z.object({
  type: LinkType.schema,
  unknown0: KDMU32.schema,
  unknown1: KDMU32.schema,
  endingRoom: KDMStringPointer.schema,
  endingEvent: KDMStringPointer.schema,
  startingRoom: KDMStringPointer.schema,
  startingEvent: KDMStringPointer.schema,
  endingTransition: KDMStringPointer.schema,
  startingTransition: KDMStringPointer.schema,
  _structure: z.literal("Link").default("Link")
});

type ILink = z.infer<typeof ILink>;

class Link extends KDMObject<ILink> {
  public static readonly schema = ILink;

  public override readonly schema = ILink;
  public override readonly heading = new LinkHeading(this);

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00762BB4;

  public readonly type = new LinkType(this.kdm);
  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly unknown1 = new KDMU32(this.kdm);
  public readonly endingRoom = new KDMStringPointer(this.kdm);
  public readonly endingEvent = new KDMStringPointer(this.kdm);
  public readonly startingRoom = new KDMStringPointer(this.kdm);
  public readonly startingEvent = new KDMStringPointer(this.kdm);
  public readonly endingTransition = new KDMStringPointer(this.kdm);
  public readonly startingTransition = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      ...this.type.fields,
      this.unknown0,
      this.unknown1,
      this.startingRoom,
      this.startingTransition,
      this.endingRoom,
      this.endingTransition,
      this.startingEvent,
      this.endingEvent
    ];
  }

  protected override _get(): ILink {
    return ILink.parse({
      type: this.type.get(),
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      endingRoom: this.endingRoom.get(),
      endingEvent: this.endingEvent.get(),
      startingRoom: this.startingRoom.get(),
      startingEvent: this.startingEvent.get(),
      endingTransition: this.endingTransition.get(),
      startingTransition: this.startingTransition.get()
    });
  }

  protected override _set(link: ILink): void {
    this.type.set(link.type);
    this.unknown0.set(link.unknown0);
    this.unknown1.set(link.unknown1);
    this.endingRoom.set(link.endingRoom);
    this.endingEvent.set(link.endingEvent);
    this.startingRoom.set(link.startingRoom);
    this.startingEvent.set(link.startingEvent);
    this.endingTransition.set(link.endingTransition);
    this.startingTransition.set(link.startingTransition);
  }
}

export default Link;
