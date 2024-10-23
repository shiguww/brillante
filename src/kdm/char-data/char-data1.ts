import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI16 from "#/kdm/common/primitive/kdm-i16";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMU8Padding from "../common/padding/kdm-u8-padding";

const ICharData1 = z.object({
  _kind: z.literal("CharData1").default("CharData1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStructArrayPointer.schema,
  unknown4: KDMI16.schema,
  unknown5: KDMI16.schema,
  unknown6: KDMI16.schema,
  unknown7: KDMI16.schema,
  unknown8: KDMI16.schema,
  unknown9: KDMI16.schema,
  unknown10: KDMI16.schema,
  unknown11: KDMI16.schema,
  unknown12: KDMI16.schema,
  unknown13: KDMI16.schema,
  unknown14: KDMI16.schema,
  unknown15: KDMBoolean.schema
});

type ICharData1 = z.infer<typeof ICharData1>;

class CharData1 extends KDMStruct<ICharData1> {
  public static readonly schema = ICharData1;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown4 = new KDMI16(this.kdm);
  public readonly unknown5 = new KDMI16(this.kdm);
  public readonly unknown6 = new KDMI16(this.kdm);
  public readonly unknown7 = new KDMI16(this.kdm);
  public readonly unknown8 = new KDMI16(this.kdm);
  public readonly unknown9 = new KDMI16(this.kdm);
  public readonly unknown10 = new KDMI16(this.kdm);
  public readonly unknown11 = new KDMI16(this.kdm);
  public readonly unknown12 = new KDMI16(this.kdm);
  public readonly unknown13 = new KDMI16(this.kdm);
  public readonly unknown14 = new KDMI16(this.kdm);
  public readonly unknown15 = new KDMBoolean(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ICharData1);
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

  protected override _get(): ICharData1 {
    return ICharData1.parse({
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

  protected override _set(chardata: ICharData1): void {
    this.unknown0.set(chardata.unknown0);
    this.unknown1.set(chardata.unknown1);
    this.unknown2.set(chardata.unknown2);
    this.unknown3.set(chardata.unknown3);
    this.unknown4.set(chardata.unknown4);
    this.unknown5.set(chardata.unknown5);
    this.unknown6.set(chardata.unknown6);
    this.unknown7.set(chardata.unknown7);
    this.unknown8.set(chardata.unknown8);
    this.unknown9.set(chardata.unknown9);
    this.unknown10.set(chardata.unknown10);
    this.unknown11.set(chardata.unknown11);
    this.unknown12.set(chardata.unknown12);
    this.unknown13.set(chardata.unknown13);
    this.unknown14.set(chardata.unknown14);
    this.unknown15.set(chardata.unknown15);
  }
}

export default CharData1;
