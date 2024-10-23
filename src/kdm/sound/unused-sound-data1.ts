import z from "zod";
import KDMStruct from "../common/kdm-struct";
import KDMStructArrayPointer from "../common/primitive/kdm-struct-array-pointer";
import KDMI32 from "../common/primitive/kdm-i32";
import KDMF32 from "../common/primitive/kdm-f32";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IUnusedSoundData1 = z.object({
  _kind: z.literal("UnusedSoundData1").default("UnusedSoundData1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMI32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMStructArrayPointer.schema,
});

type IUnusedSoundData1 = z.infer<typeof IUnusedSoundData1>;

class UnusedSoundData1 extends KDMStruct<IUnusedSoundData1> {
  public static readonly schema = IUnusedSoundData1;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E114C;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMI32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IUnusedSoundData1);
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
      this.unknown7
    ];
  }

  protected override _get(): IUnusedSoundData1 {
    return IUnusedSoundData1.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get(),
      unknown7: this.unknown7.get()
    });
  }

  protected override _set(sounddata: IUnusedSoundData1): void {
    this.unknown0.set(sounddata.unknown0);
    this.unknown1.set(sounddata.unknown1);
    this.unknown2.set(sounddata.unknown2);
    this.unknown3.set(sounddata.unknown3);
    this.unknown4.set(sounddata.unknown4);
    this.unknown5.set(sounddata.unknown5);
    this.unknown6.set(sounddata.unknown6);
    this.unknown7.set(sounddata.unknown7);
  }
}

export default UnusedSoundData1;
