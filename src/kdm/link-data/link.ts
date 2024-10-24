import z from "zod";
import assert from "node:assert/strict";
import KDMEntity from "../common/kdm-entity";
import KDMI32 from "../common/primitive/kdm-i32";
import type KDM from "../kdm";
import WBuffer from "#/buffer/w-buffer";
import RBuffer from "#/buffer/r-buffer";
import KDMArray from "../common/array/kdm-array";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMStruct from "../common/kdm-struct";

const ILinkType = z.enum([
  "DOOR", "GOAL", "PIPE",
  "WORLD", "NORMAL", "UNKNOWN",
  "SAVE_BLOCK"
]);

type ILinkType = z.infer<typeof ILinkType>;

class LinkType extends KDMEntity<ILinkType> {
  public static readonly schema = ILinkType;
  public static readonly TYPE_DOOR = 0x00000002;
  public static readonly TYPE_GOAL = 0x00000005;
  public static readonly TYPE_PIPE = 0x00000001;
  public static readonly TYPE_WORLD = 0x00000003;
  public static readonly TYPE_NORMAL = 0x00000000;
  public static readonly TYPE_UNKNOWN = 0x00000004;
  public static readonly TYPE_SAVE_BLOCK = 0x00000006;

  public readonly type = new KDMI32(this.kdm);
  public override readonly schema = ILinkType;

  public constructor(kdm: KDM) {
    super(kdm, ILinkType);
  }

  public override get arrays(): Array<KDMArray> {
    return [];
  }

  public override get sizeof(): number {
    return this.type.sizeof;
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
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

    assert.fail("unreachable");
  }

  protected override _set(type: ILinkType): this {
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

  protected override _build(buffer: WBuffer): void {
    this.type.build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    this.type.parse(buffer);
  }
}

const ILink = z.object({
  _kind: z.literal("Link").default("Link"),
  type: LinkType.schema,
  unknown0: KDMI32.schema,
  unknown1: KDMI32.schema,
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
  ])
});

type ILink = z.infer<typeof ILink>;

class Link extends KDMStruct<ILink> {
  public static readonly schema = ILink;

  public override readonly schema = ILink;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00762BB4;

  public readonly type = new LinkType(this.kdm);
  public readonly unknown0 = new KDMI32(this.kdm);
  public readonly unknown1 = new KDMI32(this.kdm);
  public readonly room0 = new KDMStringPointer(this.kdm);
  public readonly room1 = new KDMStringPointer(this.kdm);
  public readonly event0 = new KDMStringPointer(this.kdm);
  public readonly event1 = new KDMStringPointer(this.kdm);
  public readonly transition0 = new KDMStringPointer(this.kdm);
  public readonly transition1 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ILink);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.type.type,
      this.unknown0,
      this.unknown1,
      this.room0,
      this.transition0,
      this.room1,
      this.transition1,
      this.event0,
      this.event1
    ];
  }

  protected override _get(): ILink {
    return ILink.parse({
      type: this.type.get(),
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      rooms: [this.room0.get(), this.room1.get()],
      events: [this.event0.get(), this.event1.get()],
      transitions: [this.transition0.get(), this.transition1.get()]
    });
  }

  protected override _set(link: ILink): void {
    this.type.set(link.type);
    this.room0.set(link.rooms[0]);
    this.room1.set(link.rooms[1]);
    this.event0.set(link.events[0]);
    this.event1.set(link.events[1]);
    this.unknown0.set(link.unknown0);
    this.unknown1.set(link.unknown1);
    this.transition0.set(link.transitions[0]);
    this.transition1.set(link.transitions[1]);
  }
}

export default Link;
