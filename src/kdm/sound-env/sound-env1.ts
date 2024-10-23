import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const ISoundEnv1 = z.object({
  _kind: z.literal("SoundEnv1").default("SoundEnv1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMI32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMStructArrayPointer.schema
});

type ISoundEnv1 = z.infer<typeof ISoundEnv1>;

class SoundEnv1 extends KDMStruct<ISoundEnv1> {
  public static readonly schema = ISoundEnv1;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMI32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ISoundEnv1);
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

  protected override _get(): ISoundEnv1 {
    return ISoundEnv1.parse({
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

  protected override _set(soundenv: ISoundEnv1): void {
    this.unknown0.set(soundenv.unknown0);
    this.unknown1.set(soundenv.unknown1);
    this.unknown2.set(soundenv.unknown2);
    this.unknown3.set(soundenv.unknown3);
    this.unknown4.set(soundenv.unknown4);
    this.unknown5.set(soundenv.unknown5);
    this.unknown6.set(soundenv.unknown6);
    this.unknown7.set(soundenv.unknown7);
  }
}

export default SoundEnv1;
