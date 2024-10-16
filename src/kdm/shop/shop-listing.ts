import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMU16Padding from "#/kdm/common/padding/kdm-u16-padding";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMU16 from "../common/primitive/kdm-u16";
import KDMEntity from "../common/kdm-entity";
import KDMStringPointerArrayPointer from "../common/primitive/kdm-string-pointer-array-pointer";

const IShopListing = z.object({
  _kind: z.literal("ShopListing").default("ShopListing"),
  unknown2: KDMU16.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown4: KDMStringPointerArrayPointer.schema
});

type IShopListing = z.infer<typeof IShopListing>;

class ShopListing extends KDMStruct<IShopListing> {
  public static readonly schema = IShopListing;

  public override readonly unknownSection4Value0 = 0x000000000;
  public override readonly unknownSection4Value1 = 0x000000000;

  public readonly unknown2 = new KDMU16(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMStringPointerArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IShopListing);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      new KDMU16Padding(this.kdm),
      this.unknown3,
      this.unknown4
    ];
  }

  public override get strings(): KDMStringPointer[] {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  protected override _get(): IShopListing {
    return IShopListing.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get()
    });
  }

  protected override _set(shopentry: IShopListing): void {
    this.unknown0.set(shopentry.unknown0);
    this.unknown1.set(shopentry.unknown1);
    this.unknown2.set(shopentry.unknown2);
    this.unknown3.set(shopentry.unknown3);
    this.unknown4.set(shopentry.unknown4);
  }
}

export default ShopListing;
