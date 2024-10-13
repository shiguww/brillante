import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";
import KDMF32 from "../common/kdm-f32";
import KDMU16 from "../common/kdm-u16";
import KDMBoolean from "../common/kdm-boolean";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";
import DisposData11 from "./dispos-data11";
import KDMU8Padding from "../common/padding/kdm-u8-padding";
import KDMU24Padding from "../common/padding/kdm-u24-padding";

const IDisposData13 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMU16.schema,
  unknown7: KDMBoolean.schema,
  unknown8: KDMStringPointer.schema,
  unknown9: KDMStringPointer.schema,
  unknown10: KDMStringPointer.schema,
  unknown11: KDMStringPointer.schema,
  unknown12: KDMStringPointer.schema,
  unknown13: KDMStringPointer.schema,
  unknown14: KDMStringPointer.schema,
  unknown15: KDMBoolean.schema,
  unknown16: KDMGenericArrayPointer.schema,
  unknown17: KDMU32.schema,
  unknown18: DisposData11.schema,
  unknown19: KDMU32.schema,
  _structure: z.literal("DisposData13").default("DisposData13")
});

type IDisposData13 = z.infer<typeof IDisposData13>;

class DisposData13 extends KDMStructure<IDisposData13> {
  public static readonly schema = IDisposData13;

  public override readonly unknownSection4Value1 = 14234736;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData13;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMU16(this.kdm);
  public readonly unknown7 = new KDMBoolean(this.kdm);
  public readonly unknown8 = new KDMStringPointer(this.kdm);
  public readonly unknown9 = new KDMStringPointer(this.kdm);
  public readonly unknown10 = new KDMStringPointer(this.kdm);
  public readonly unknown11 = new KDMStringPointer(this.kdm);
  public readonly unknown12 = new KDMStringPointer(this.kdm);
  public readonly unknown13 = new KDMStringPointer(this.kdm);
  public readonly unknown14 = new KDMStringPointer(this.kdm);
  public readonly unknown15 = new KDMBoolean(this.kdm);
  public readonly unknown16 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown17 = new KDMU32(this.kdm);
  public readonly unknown18 = new DisposData11(this.kdm);
  public readonly unknown19 = new KDMU32(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,               // 00 -> 04
      this.unknown1,               // 04 -> 08
      this.unknown2,               // 08 -> 12
      this.unknown3,               // 12 -> 16
      this.unknown4,               // 16 -> 20
      this.unknown5,               // 20 -> 24
      this.unknown6,               // 24 -> 26
      this.unknown7,               // 26 -> 27
      new KDMU8Padding(this.kdm),  // 27 -> 28
      this.unknown8,               // 28 -> 32
      this.unknown9,               // 32 -> 36
      this.unknown10,              // 36 -> 40
      this.unknown11,              // 40 -> 44
      this.unknown12,              // 44 -> 48
      this.unknown13,              // 48 -> 52
      this.unknown14,              // 52 -> 56
      this.unknown15,              // 56 -> 57
      new KDMU24Padding(this.kdm), // 57 -> 60
      this.unknown16,              // 60 -> 64
      this.unknown17,              // 64 -> 68
      this.unknown18,              // 68 -> 72
      this.unknown19               // 72 -> 76
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IDisposData13 {
    return IDisposData13.parse({
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
      unknown18: this.unknown18.get(),
      unknown19: this.unknown19.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData13.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
    this.unknown3.set(disposdata.unknown3);
    this.unknown4.set(disposdata.unknown4);
    this.unknown5.set(disposdata.unknown5);
    this.unknown6.set(disposdata.unknown6);
    this.unknown7.set(disposdata.unknown7);
    this.unknown8.set(disposdata.unknown8);
    this.unknown9.set(disposdata.unknown9);
    this.unknown10.set(disposdata.unknown10);
    this.unknown11.set(disposdata.unknown11);
    this.unknown12.set(disposdata.unknown12);
    this.unknown13.set(disposdata.unknown13);
    this.unknown14.set(disposdata.unknown14);
    this.unknown15.set(disposdata.unknown15);
    this.unknown16.set(disposdata.unknown16);
    this.unknown17.set(disposdata.unknown17);
    this.unknown18.set(disposdata.unknown18);
    this.unknown19.set(disposdata.unknown19);

    return this;
  }
}

export default DisposData13;
