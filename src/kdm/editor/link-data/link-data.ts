import z from "zod";
import Link from "#kdm/editor/link-data/link";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMU32 from "#kdm/editor/common/primitive/kdm-u32";
import KDMObjectHeading from "#kdm/editor/common/kdm-object-heading";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";
import KDMPointerArrayPointer from "#kdm/editor/common/primitive/kdm-pointer-array-pointer";


class LinkDataHeading extends KDMObjectHeading<LinkData> {
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

const ILinkData = z.object({
  links: Link.schema.array(),
  name: KDMStringPointer.schema,
  _structure: z.literal("LinkData").default("LinkData")
});

type ILinkData = z.infer<typeof ILinkData>;

class LinkData extends KDMObject<ILinkData> {
  public static readonly schema = ILinkData;
  public override readonly schema = ILinkData;
  public override readonly heading = new LinkDataHeading(this);

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly linksCount = new KDMU32(this.kdm);
  public readonly name = new KDMStringPointer(this.kdm);
  public readonly links = new KDMPointerArrayPointer(this.kdm)
    .useNullTerminator(false);


  public override get objects(): KDMObject[] {
    return [...this.links.array.objects, this];
  }

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      this.name,
      this.links,
      this.linksCount
    ];
  }

  protected override _get(): ILinkData {
    return ILinkData.parse({
      name: this.name.get(),
      links: this.links.get()
    });
  }

  protected override _set(linkdata: ILinkData): void {
    this.name.set(linkdata.name);
    this.links.set(linkdata.links);
    this.linksCount.set(linkdata.links.length);
  }
}

export default LinkData;
