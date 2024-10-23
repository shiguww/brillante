import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI32 from "#/kdm/common/primitive/kdm-i32"
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMU24Padding from "../common/padding/kdm-u24-padding";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IDisposData11 = z.object({
  unknown0: KDMF32.schema,
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMI32.schema,
  unknown8: KDMBoolean.schema,
  unknown9: KDMI32.schema,
  unknown10: KDMF32.schema,
  unknown11: KDMF32.schema,
  unknown12: KDMF32.schema,
  unknown13: KDMF32.schema,
  unknown14: KDMF32.schema,
  unknown15: KDMF32.schema,
  unknown16: KDMF32.schema,
  unknown17: KDMF32.schema,
  unknown18: KDMF32.schema,
  unknown19: KDMF32.schema,
  unknown20: KDMF32.schema,
  _kind:z.literal("DisposData11").default("DisposData11")
});

type IDisposData11 = z.infer<typeof IDisposData11>;

class DisposData11 extends KDMStruct<IDisposData11> {
  public static readonly schema = IDisposData11;

  public override readonly unknownSection4Value1 = 14234572;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMF32(this.kdm);
  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMI32(this.kdm);
  public readonly unknown8 = new KDMBoolean(this.kdm);
  public readonly unknown9 = new KDMI32(this.kdm);
  public readonly unknown10 = new KDMF32(this.kdm);
  public readonly unknown11 = new KDMF32(this.kdm);
  public readonly unknown12 = new KDMF32(this.kdm);
  public readonly unknown13 = new KDMF32(this.kdm);
  public readonly unknown14 = new KDMF32(this.kdm);
  public readonly unknown15 = new KDMF32(this.kdm);
  public readonly unknown16 = new KDMF32(this.kdm);
  public readonly unknown17 = new KDMF32(this.kdm);
  public readonly unknown18 = new KDMF32(this.kdm);
  public readonly unknown19 = new KDMF32(this.kdm);
  public readonly unknown20 = new KDMF32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData11);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,               // 00 -> 04
      this.unknown1,               // 04 -> 08
      this.unknown2,               // 08 -> 12
      this.unknown3,               // 12 -> 16
      this.unknown4,               // 16 -> 20
      this.unknown5,               // 20 -> 24
      this.unknown6,               // 24 -> 28
      this.unknown7,               // 28 -> 32
      this.unknown8,               // 32 -> 33
      new KDMU24Padding(this.kdm), // 33 -> 36
      this.unknown9,               // 36 -> 40
      this.unknown10,              // 40 -> 44
      this.unknown11,              // 44 -> 48
      this.unknown12,              // 48 -> 52
      this.unknown13,              // 52 -> 56
      this.unknown14,              // 56 -> 60
      this.unknown15,              // 60 -> 64
      this.unknown16,              // 64 -> 68
      this.unknown17,              // 68 -> 72
      this.unknown18,              // 72 -> 76
      this.unknown19,              // 76 -> 80
      this.unknown20               // 80 -> 84
    ];
  }

  protected override _get(): IDisposData11 {
    return IDisposData11.parse({
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
      unknown19: this.unknown19.get(),
      unknown20: this.unknown20.get()
    });
  }

  protected override _set(disposdata: IDisposData11): void {
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
    this.unknown20.set(disposdata.unknown20);
  }
}

export default DisposData11;
