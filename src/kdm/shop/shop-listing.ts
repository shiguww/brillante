import z from "zod";
import KDMU16 from "#/kdm/common/kdm-u16";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointerArrayPointer from "#/kdm/common/pointer/kdm-string-pointer-array-pointer";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU16Padding from "#/kdm/common/padding/kdm-u16-padding";

const IShopListing = z.object({
  unknown2: KDMU16.schema,
  unknown4: KDMStringPointerArrayPointer.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  _structure: z.literal("ShopListing").default("ShopListing")
});

type IShopListing = z.infer<typeof IShopListing>;

class ShopListing extends KDMStructure<IShopListing> {
  public static readonly schema = IShopListing;

  public override readonly schema = IShopListing;
  public override readonly unknownSection4Value0 = 0x000000000;
  public override readonly unknownSection4Value1 = 0x000000000;

  public readonly unknown2 = new KDMU16(this.kdm);
  public readonly unknown4 = new KDMStringPointerArrayPointer(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
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

  public override get(): IShopListing {
    return IShopListing.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get()
    });
  }

  public override set(data: unknown): this {
    const shopentry = IShopListing.parse(data);

    this.unknown0.set(shopentry.unknown0);
    this.unknown1.set(shopentry.unknown1);
    this.unknown2.set(shopentry.unknown2);
    this.unknown3.set(shopentry.unknown3);
    this.unknown4.set(shopentry.unknown4);

    return this;
  }
}

export default ShopListing;
