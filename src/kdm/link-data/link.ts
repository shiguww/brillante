import z from "zod";
import assert from "node:assert/strict";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

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
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get fields(): Array<KDMStructure> {
    return [this.type];
  }

  public override get(): ILinkType {
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

    assert.fail("unreachable");
  }

  public override set(type: ILinkType): this {
    if (type === "DOOR") {
      this.type.set(LinkType.TYPE_DOOR);
      return this;
    }

    if (type === "GOAL") {
      this.type.set(LinkType.TYPE_GOAL);
      return this;
    }

    if (type === "PIPE") {
      this.type.set(LinkType.TYPE_PIPE);
      return this;
    }

    if (type === "WORLD") {
      this.type.set(LinkType.TYPE_WORLD);
      return this;
    }

    if (type === "NORMAL") {
      this.type.set(LinkType.TYPE_NORMAL);
      return this;
    }

    if (type === "UNKNOWN") {
      this.type.set(LinkType.TYPE_UNKNOWN);
      return this;
    }

    if (type === "SAVE_BLOCK") {
      this.type.set(LinkType.TYPE_SAVE_BLOCK);
      return this;
    }

    assert.fail("unreachable");
  }
}

const ILink = z.object({
  type: LinkType.schema,
  unknown0: KDMU32.schema,
  unknown1: KDMU32.schema,
  rooms: z.tuple([
    KDMStringPointer.schema,
    KDMStringPointer.schema
  ]),
  events: z.tuple([
    KDMStringPointer.schema,
    KDMStringPointer.schema
  ]),
  transitions: z.tuple([
    KDMStringPointer.schema,
    KDMStringPointer.schema
  ]),
  _structure: z.literal("Link").default("Link")
});

type ILink = z.infer<typeof ILink>;

class Link extends KDMStructure<ILink> {
  public static readonly schema = ILink;

  public override readonly schema = ILink;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00762BB4;

  public readonly type = new LinkType(this.kdm);
  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly unknown1 = new KDMU32(this.kdm);
  public readonly room0 = new KDMStringPointer(this.kdm);
  public readonly room1 = new KDMStringPointer(this.kdm);
  public readonly event0 = new KDMStringPointer(this.kdm);
  public readonly event1 = new KDMStringPointer(this.kdm);
  public readonly transition0 = new KDMStringPointer(this.kdm);
  public readonly transition1 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      ...this.type.fields,
      this.unknown0,
      this.unknown1,
      this.room1,
      this.event1,
      this.room0,
      this.event0,
      this.transition1,
      this.transition0
    ];
  }

  public override get strings(): KDMStringPointer[] {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): ILink {
    return ILink.parse({
      type: this.type.get(),
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      rooms: [this.room0.get(), this.room1.get()],
      events: [this.event0.get(), this.event1.get()],
      transitions: [this.transition0.get(), this.transition1.get()]
    });
  }

  public override set(data: unknown): this {
    const link = ILink.parse(data);

    this.type.set(link.type);
    this.room0.set(link.rooms[0]);
    this.room1.set(link.rooms[1]);
    this.event0.set(link.events[0]);
    this.event1.set(link.events[1]);
    this.unknown0.set(link.unknown0);
    this.unknown1.set(link.unknown1);
    this.transition0.set(link.transitions[0]);
    this.transition1.set(link.transitions[1]);

    return this;
  }
}

export default Link;
