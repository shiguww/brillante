import z from "zod";
import Link from "#kdm/link-data/link";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/common/kdm-object";
import KDMU16 from "#kdm/common/primitive/kdm-u16";
import KDMU32 from "#kdm/common/primitive/kdm-u32";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMPrimitive from "#kdm/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/common/primitive/kdm-string-pointer";
import KDMPointerArrayPointer from "#kdm/common/primitive/kdm-pointer-array-pointer";

class LinkDataHeading extends KDMStructure<never> {
  public readonly uid = new KDMU16(this.kdm);
  public readonly oid = new KDMU16(this.kdm);
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override readonly schema = z.never();

  public override get fields(): Array<KDMPrimitive> {
    return [this.uid, this.size0, this.oid, this.size1];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }
}

const ILinkData = z.object({
  links: Link.schema.array(),
  name: KDMStringPointer.schema,
  _structure: z.literal("LinkData").default("LinkData")
});

type ILinkData = z.infer<typeof ILinkData>;

class LinkData extends KDMObject<ILinkData> {
  public static OID = 0x0016;
  public static readonly SIZEOF = 0x0003;
  public static readonly schema = ILinkData;
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x00000000;

  public override readonly schema = ILinkData;
  public override readonly heading = new LinkDataHeading(this.kdm);

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

  protected override _build(buffer: WBuffer): void {
    this.heading.oid.set(LinkData.OID);
    this.heading.size0.set(LinkData.SIZEOF);
    this.heading.size1.set(LinkData.SIZEOF);

    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);

    assert.equal(this.heading.oid.get(), LinkData.OID);
    assert.equal(this.heading.size0.get(), LinkData.SIZEOF);
    assert.equal(this.heading.size1.get(), LinkData.SIZEOF);
  }
}

export default LinkData;
