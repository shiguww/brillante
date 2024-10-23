import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI8 from "#/kdm/common/primitive/kdm-i8";
import ItemData6 from "#/kdm/item-data/item-data6";
import KDMI16 from "#/kdm/common/primitive/kdm-i16";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMU8Padding from "../common/padding/kdm-u8-padding";

const IItemData9 = z.object({
  _kind: z.literal("ItemData9").default("ItemData9"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: ItemData6.schema,
  unknown6: KDMI16.schema,
  unknown7: KDMI16.schema,
  unknown8: KDMI8.schema,
  unknown9: KDMI8.schema,
  unknown10: KDMI8.schema,
  unknown11: KDMI32.schema,
  unknown12: KDMStringPointer.schema,
  unknown13: KDMI32.schema,
  unknown14: KDMI32.schema,
  unknown15: KDMStringPointer.schema,
  unknown16: KDMStringPointer.schema,
  unknown17: KDMI32.schema,
  unknown18: KDMI32.schema
});

type IItemData9 = z.infer<typeof IItemData9>;

class ItemData9 extends KDMStruct<IItemData9> {
  public static readonly schema = IItemData9;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new ItemData6(this.kdm);
  public readonly unknown6 = new KDMI16(this.kdm);
  public readonly unknown7 = new KDMI16(this.kdm);
  public readonly unknown8 = new KDMI8(this.kdm);
  public readonly unknown9 = new KDMI8(this.kdm);
  public readonly unknown10 = new KDMI8(this.kdm);
  public readonly unknown11 = new KDMI32(this.kdm);
  public readonly unknown12 = new KDMStringPointer(this.kdm);
  public readonly unknown13 = new KDMI32(this.kdm);
  public readonly unknown14 = new KDMI32(this.kdm);
  public readonly unknown15 = new KDMStringPointer(this.kdm);
  public readonly unknown16 = new KDMStringPointer(this.kdm);
  public readonly unknown17 = new KDMI32(this.kdm);
  public readonly unknown18 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData9);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      this.unknown6,
      this.unknown7,
      this.unknown8,
      this.unknown9,
      this.unknown10,
      new KDMU8Padding(this.kdm),
      this.unknown11,
      this.unknown12,
      this.unknown13,
      this.unknown14,
      this.unknown15,
      this.unknown16,
      this.unknown17,
      this.unknown18
    ];
  }

  protected override _get(): IItemData9 {
    return IItemData9.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get(),
      unknown7: this.unknown7.get(),
      unknown8: this.unknown8.get(),
      unknown9: this.unknown9.get(),
      unknown10: this.unknown10.get(),
      unknown11: this.unknown11.get(),
      unknown12: this.unknown12.get(),
      unknown13: this.unknown13.get(),
      unknown14: this.unknown14.get(),
      unknown15: this.unknown15.get(),
      unknown16: this.unknown16.get(),
      unknown17: this.unknown17.get(),
      unknown18: this.unknown18.get()
    });
  }

  protected override _set(itemdata: IItemData9): void {
    this.unknown0.set(itemdata.unknown0);
    this.unknown1.set(itemdata.unknown1);
    this.unknown2.set(itemdata.unknown2);
    this.unknown3.set(itemdata.unknown3);
    this.unknown4.set(itemdata.unknown4);
    this.unknown5.set(itemdata.unknown5);
    this.unknown6.set(itemdata.unknown6);
    this.unknown7.set(itemdata.unknown7);
    this.unknown8.set(itemdata.unknown8);
    this.unknown9.set(itemdata.unknown9);
    this.unknown10.set(itemdata.unknown10);
    this.unknown11.set(itemdata.unknown11);
    this.unknown12.set(itemdata.unknown12);
    this.unknown13.set(itemdata.unknown13);
    this.unknown14.set(itemdata.unknown14);
    this.unknown15.set(itemdata.unknown15);
    this.unknown16.set(itemdata.unknown16);
    this.unknown17.set(itemdata.unknown17);
    this.unknown18.set(itemdata.unknown18);
  }
}

export default ItemData9;
