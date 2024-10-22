import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";

const ISoundEnv0 = z.object({
  _kind: z.literal("SoundEnv0").default("SoundEnv0"),
  unknown0: KDMF32.schema,
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMU32.schema
});

type ISoundEnv0 = z.infer<typeof ISoundEnv0>;

class SoundEnv0 extends KDMStruct<ISoundEnv0> {
  public static readonly schema = ISoundEnv0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMF32(this.kdm);
  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMU32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ISoundEnv0);
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

  protected override _get(): ISoundEnv0 {
    return ISoundEnv0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get()
    });
  }

  protected override _set(soundenv: ISoundEnv0): void {
    this.unknown0.set(soundenv.unknown0);
    this.unknown1.set(soundenv.unknown1);
    this.unknown2.set(soundenv.unknown2);
    this.unknown3.set(soundenv.unknown3);
    this.unknown4.set(soundenv.unknown4);
    this.unknown5.set(soundenv.unknown5);
  }
}

export default SoundEnv0;
