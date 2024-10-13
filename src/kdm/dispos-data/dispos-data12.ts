import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMF32 from "../common/kdm-f32";
import KDMBoolean from "../common/kdm-boolean";
import KDMU32 from "../common/kdm-u32";
import KDMU24Padding from "../common/padding/kdm-u24-padding";

const IDisposData12 = z.object({
  unknown0: KDMF32.schema,
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMStringPointer.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown6: KDMBoolean.schema,
  unknown7: KDMF32.schema,
  unknown8: KDMF32.schema,
  unknown9: KDMF32.schema,
  unknown10: KDMF32.schema,
  unknown11: KDMF32.schema,
  unknown12: KDMF32.schema,
  unknown13: KDMBoolean.schema,
  unknown14: KDMU32.schema,
  _structure: z.literal("DisposData12").default("DisposData12")
});

type IDisposData12 = z.infer<typeof IDisposData12>;

class DisposData12 extends KDMStructure<IDisposData12> {
  public static readonly schema = IDisposData12;

  public override readonly unknownSection4Value1 = 14234644;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData12;

  public readonly unknown0 = new KDMF32(this.kdm);
  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown6 = new KDMBoolean(this.kdm);
  public readonly unknown7 = new KDMF32(this.kdm);
  public readonly unknown8 = new KDMF32(this.kdm);
  public readonly unknown9 = new KDMF32(this.kdm);
  public readonly unknown10 = new KDMF32(this.kdm);
  public readonly unknown11 = new KDMF32(this.kdm);
  public readonly unknown12 = new KDMF32(this.kdm);
  public readonly unknown13 = new KDMBoolean(this.kdm);
  public readonly unknown14 = new KDMU32(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,               // 00 -> 04
      this.unknown1,               // 04 -> 08
      this.unknown2,               // 08 -> 12
      this.unknown3,               // 12 -> 16
      this.unknown4,               // 16 -> 20
      this.unknown5,               // 24 -> 28
      this.unknown6,               // 28 -> 29
      new KDMU24Padding(this.kdm), // 29 -> 32
      this.unknown7,               // 32 -> 36
      this.unknown8,               // 36 -> 40
      this.unknown9,               // 40 -> 40
      this.unknown10,              // 44 -> 48
      this.unknown11,              // 44 -> 52
      this.unknown12,              // 52 -> 53
      new KDMU24Padding(this.kdm), // 53 -> 56
      this.unknown14               // 56 -> 60
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IDisposData12 {
    return IDisposData12.parse({
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
      unknown14: this.unknown14.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData12.parse(data);

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

    return this;
  }
}

export default DisposData12;
