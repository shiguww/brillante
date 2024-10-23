import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU8 from "#/kdm/common/primitive/kdm-u8";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMU16Padding from "../common/padding/kdm-u16-padding";

const IItemData5 = z.object({
  _kind: z.literal("ItemData5").default("ItemData5"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMU32.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown4: KDMU32.schema,
  unknown5: KDMStructArrayPointer.schema,
  unknown6: KDMStringPointer.schema,
  unknown7: KDMU32.schema,
  unknown8: KDMBoolean.schema,
  unknown9: KDMBoolean.schema,
  unknown10: KDMBoolean.schema,
  unknown11: KDMBoolean.schema,
  unknown12: KDMBoolean.schema,
  unknown13: KDMBoolean.schema,
  unknown14: KDMStringPointer.schema,
  unknown15: KDMF32.schema,
  unknown16: KDMU8.schema,
  unknown17: KDMU8.schema
});

type IItemData5 = z.infer<typeof IItemData5>;

class ItemData5 extends KDMStruct<IItemData5> {
  public static readonly schema = IItemData5;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMU32(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMU32(this.kdm);
  public readonly unknown5 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown6 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMU32(this.kdm);
  public readonly unknown8 = new KDMBoolean(this.kdm);
  public readonly unknown9 = new KDMBoolean(this.kdm);
  public readonly unknown10 = new KDMBoolean(this.kdm);
  public readonly unknown11 = new KDMBoolean(this.kdm);
  public readonly unknown12 = new KDMBoolean(this.kdm);
  public readonly unknown13 = new KDMBoolean(this.kdm);
  public readonly unknown14 = new KDMStringPointer(this.kdm);
  public readonly unknown15 = new KDMF32(this.kdm);
  public readonly unknown16 = new KDMU8(this.kdm);
  public readonly unknown17 = new KDMU8(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData5);
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
      new KDMU16Padding(this.kdm),
      this.unknown14,
      this.unknown15,
      this.unknown16,
      this.unknown17,
      new KDMU16Padding(this.kdm)
    ];
  }

  protected override _get(): IItemData5 {
    return IItemData5.parse({
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
      unknown17: this.unknown17.get()
    });
  }

  protected override _set(itemdata: IItemData5): void {
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
  }
}

export default ItemData5;
