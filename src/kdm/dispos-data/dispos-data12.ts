import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMI32 from "#/kdm/common/primitive/kdm-i32"
import KDMU24Padding from "../common/padding/kdm-u24-padding";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

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
  unknown14: KDMI32.schema,
  _kind: z.literal("DisposData12").default("DisposData12")
});

type IDisposData12 = z.infer<typeof IDisposData12>;

class DisposData12 extends KDMStruct<IDisposData12> {
  public static readonly schema = IDisposData12;

  public override readonly unknownSection4Value1 = 14234644;
  public override readonly unknownSection4Value0 = 0x00000000;

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
  public readonly unknown14 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData12);
  }

  public override get fields(): Array<KDMEntity> {
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
      this.unknown12,              // 52 -> 56
      this.unknown13,              // 56 -> 57
      new KDMU24Padding(this.kdm), // 57 -> 60
      this.unknown14               // 60 -> 64
    ];
  }

  protected override _get(): IDisposData12 {
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

  protected override _set(disposdata: IDisposData12): void {
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
  }
}

export default DisposData12;
