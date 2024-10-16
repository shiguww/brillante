import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import type KDM from "../kdm";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "../common/primitive/kdm-struct-array-pointer";
import KDMU32 from "../common/primitive/kdm-u32";

const IUnusedSoundData2 = z.object({
  _kind: z.literal("UnusedSoundData2").default("UnusedSoundData2"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMU32.schema
});

type IUnusedSoundData2 = z.infer<typeof IUnusedSoundData2>;

class UnusedSoundData2 extends KDMStruct<IUnusedSoundData2> {
  public static readonly schema = IUnusedSoundData2;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E1164;

  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IUnusedSoundData2);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): IUnusedSoundData2 {
    return IUnusedSoundData2.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(sounddata: IUnusedSoundData2): void {
    this.unknown0.set(sounddata.unknown0);
    this.unknown1.set(sounddata.unknown1);
    this.unknown2.set(sounddata.unknown2);
  }
}

export default UnusedSoundData2;
