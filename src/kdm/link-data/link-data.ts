import z from "zod";
import Link from "#/kdm/link-data/link";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMArray from "#/kdm/common/array/kdm-array";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericPointerArrayPointer from "#/kdm/common/pointer/kdm-generic-pointer-array-pointer";

const ILinkData = z.object({
  name: KDMStringPointer.schema,
  links: Link.schema.array().array(),
  _structure: z.literal("LinkData").default("LinkData")
});

type ILinkData = z.infer<typeof ILinkData>;

class LinkData extends KDMStructure<ILinkData> {
  public static readonly schema = ILinkData;

  public override readonly schema = ILinkData;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly count = new KDMU32(this.kdm);
  public readonly name = new KDMStringPointer(this.kdm);
  public readonly links = new KDMGenericPointerArrayPointer(this.kdm)
    .useNullTerminator(false);

  public override get arrays(): Array<KDMArray> {
    return this.links.arrays;
  }
 
  public override get fields(): Array<KDMStructure> {
    return [
      this.name,
      this.links,
      this.count
    ];
  }

  public override get(): ILinkData {
    return ILinkData.parse({
      name: this.name.get(),
      links: this.links.get()
    });
  }

  public override set(data: unknown): this {
    const linkdata = ILinkData.parse(data);

    this.name.set(linkdata.name);
    this.links.set(linkdata.links);
    this.count.set(linkdata.links.length);

    return this;
  }
}

export default LinkData;
