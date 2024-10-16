import z from "zod";
import KDMStruct from "../common/kdm-struct";
import KDMF32 from "../common/primitive/kdm-f32";
import KDMEntity from "../common/kdm-entity";
import KDMU32 from "../common/primitive/kdm-u32";
import type KDM from "../kdm";

const IUnusedSoundData0 = z.object({
  _kind: z.literal("UnusedSoundData0").default("UnusedSoundData0"),
  unknown0: KDMF32.schema,
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMU32.schema
});

type IUnusedSoundData0 = z.infer<typeof IUnusedSoundData0>;

class UnusedSoundData0 extends KDMStruct<IUnusedSoundData0> {
  public static readonly schema = IUnusedSoundData0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E1120;

  public readonly unknown0 = new KDMF32(this.kdm);
  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMU32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IUnusedSoundData0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5
    ];
  }

  protected override _get(): IUnusedSoundData0 {
    return IUnusedSoundData0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get()
    });
  }

  protected override _set(sounddata: IUnusedSoundData0): void {
    this.unknown0.set(sounddata.unknown0);
    this.unknown1.set(sounddata.unknown1);
    this.unknown2.set(sounddata.unknown2);
    this.unknown3.set(sounddata.unknown3);
    this.unknown4.set(sounddata.unknown4);
    this.unknown5.set(sounddata.unknown5);
  }
}

export default UnusedSoundData0;
