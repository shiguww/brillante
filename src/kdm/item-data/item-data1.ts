import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU16 from "#/kdm/common/primitive/kdm-u16";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMU8Padding from "../common/padding/kdm-u8-padding";

const IItemData1 = z.object({
  _kind: z.literal("ItemData1").default("ItemData1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStructArrayPointer.schema,
  unknown4: KDMU16.schema,
  unknown5: KDMU16.schema,
  unknown6: KDMU16.schema,
  unknown7: KDMU16.schema,
  unknown8: KDMU16.schema,
  unknown9: KDMU16.schema,
  unknown10: KDMU16.schema,
  unknown11: KDMU16.schema,
  unknown12: KDMU16.schema,
  unknown13: KDMU16.schema,
  unknown14: KDMU16.schema,
  unknown15: KDMBoolean.schema
});

type IItemData1 = z.infer<typeof IItemData1>;

class ItemData1 extends KDMStruct<IItemData1> {
  public static readonly schema = IItemData1;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown4 = new KDMU16(this.kdm);
  public readonly unknown5 = new KDMU16(this.kdm);
  public readonly unknown6 = new KDMU16(this.kdm);
  public readonly unknown7 = new KDMU16(this.kdm);
  public readonly unknown8 = new KDMU16(this.kdm);
  public readonly unknown9 = new KDMU16(this.kdm);
  public readonly unknown10 = new KDMU16(this.kdm);
  public readonly unknown11 = new KDMU16(this.kdm);
  public readonly unknown12 = new KDMU16(this.kdm);
  public readonly unknown13 = new KDMU16(this.kdm);
  public readonly unknown14 = new KDMU16(this.kdm);
  public readonly unknown15 = new KDMBoolean(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData1);
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
      this.unknown11,
      this.unknown12,
      this.unknown13,
      this.unknown14,
      this.unknown15,
      new KDMU8Padding(this.kdm)
    ];
  }

  protected override _get(): IItemData1 {
    return IItemData1.parse({
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
      unknown15: this.unknown15.get()
    });
  }

  protected override _set(itemdata: IItemData1): void {
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
  }
}

export default ItemData1;
