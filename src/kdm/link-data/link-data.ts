import z from "zod";
import KDMArray from "#/kdm/common/array/kdm-array";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMI32 from "../common/primitive/kdm-i32";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";
import KDMStructArrayPointerArrayPointer from "../common/primitive/kdm-struct-array-pointer-array-pointer";

const ILinkData = z.object({
  _kind: z.literal("LinkData").default("LinkData"),
  name: KDMStringPointer.schema,
  links: KDMStructArrayPointerArrayPointer.schema
});

type ILinkData = z.infer<typeof ILinkData>;

class LinkData extends KDMStruct<ILinkData> {
  public static readonly schema = ILinkData;

  public override readonly schema = ILinkData;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly count = new KDMI32(this.kdm);
  public readonly name = new KDMStringPointer(this.kdm);
  public readonly links = new KDMStructArrayPointerArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ILinkData);
  }

  public override get arrays(): Array<KDMArray> {
    return this.links.arrays;
  }
 
  public override get fields(): Array<KDMEntity> {
    return [
      this.name,
      this.links,
      this.count
    ];
  }
  
  public override get strings(): KDMStringPointer[] {
    return [
      ...this.links.strings,
      this.name
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
    this.count.set(this.links.array.entries.length);
  }
}

export default LinkData;
