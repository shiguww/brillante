import z from "zod";
import KDMU16 from "#kdm/common/kdm-u16";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMUnknownType0 from "#kdm/common/kdm-unknown-type0";
import KDMStringPointer from "#kdm/common/kdm-string-pointer";
import KDMU16Padding from "#kdm/common/padding/kdm-u16-padding";

const IShopEntry = z.object({
  unknown2: KDMU16.schema,
  unknown4: KDMUnknownType0.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  _structure: z.literal("ShopEntry").default("ShopEntry")
});

type IShopEntry = z.infer<typeof IShopEntry>;

class ShopEntry extends KDMStructure<IShopEntry> {
  public static readonly schema = IShopEntry;

  public override readonly schema = IShopEntry;
  public override readonly unknownSection4Value0 = 0x000000000;
  public override readonly unknownSection4Value1 = 0x000000000;

  public readonly unknown2 = new KDMU16(this.kdm);
  public readonly unknown4 = new KDMUnknownType0(this.kdm);
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

  public override get(): IShopEntry {
    return IShopEntry.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get()
    });
  }

  public override set(data: unknown): this {
    const shopentry = IShopEntry.parse(data);

    this.unknown0.set(shopentry.unknown0);
    this.unknown1.set(shopentry.unknown1);
    this.unknown2.set(shopentry.unknown2);
    this.unknown3.set(shopentry.unknown3);
    this.unknown4.set(shopentry.unknown4);

    return this;
  }
}

export default ShopEntry;
