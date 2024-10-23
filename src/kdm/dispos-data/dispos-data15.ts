import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMI32 from "#/kdm/common/primitive/kdm-i32"
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMU24Padding from "../common/padding/kdm-u24-padding";
import type KDM from "../kdm";
import KDMEntity from "../common/kdm-entity";

const IDisposData15 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMBoolean.schema,
  unknown8: KDMI32.schema,
  unknown9: KDMI32.schema,
  unknown10: KDMStructArrayPointer.schema,
  unknown11: KDMStructArrayPointer.schema,
  _kind:z.literal("DisposData15").default("DisposData15")
});

type IDisposData15 = z.infer<typeof IDisposData15>;

class DisposData15 extends KDMStruct<IDisposData15> {
  public static readonly schema = IDisposData15;

  public override readonly unknownSection4Value1 = 14234820;
  public override readonly unknownSection4Value0 = 0x00000000;
  
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMBoolean(this.kdm);
  public readonly unknown8 = new KDMI32(this.kdm);
  public readonly unknown9 = new KDMI32(this.kdm);
  public readonly unknown10 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown11 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData15);
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
      this.unknown7,               // 28 -> 29
      new KDMU24Padding(this.kdm), // 29 -> 32
      this.unknown8,               // 32 -> 36
      this.unknown9,               // 36 -> 40
      this.unknown10,              // 40 -> 44
      this.unknown11               // 44 -> 48
    ];
  }

  protected override _get(): IDisposData15 {
    return IDisposData15.parse({
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
      unknown11: this.unknown11.get()
    });
  }

  protected override _set(disposdata: IDisposData15): void {
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
  }
}

export default DisposData15;
