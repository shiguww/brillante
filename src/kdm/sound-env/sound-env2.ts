import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const ISoundEnv2 = z.object({
  _kind: z.literal("SoundEnv2").default("SoundEnv2"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMI32.schema
});

type ISoundEnv2 = z.infer<typeof ISoundEnv2>;

class SoundEnv2 extends KDMStruct<ISoundEnv2> {
  public static readonly schema = ISoundEnv2;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown2 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ISoundEnv2);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): ISoundEnv2 {
    return ISoundEnv2.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(soundenv: ISoundEnv2): void {
    this.unknown0.set(soundenv.unknown0);
    this.unknown1.set(soundenv.unknown1);
    this.unknown2.set(soundenv.unknown2);
  }
}

export default SoundEnv2;
