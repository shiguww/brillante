import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMU24Padding from "../common/padding/kdm-u24-padding";

const ISoundAnime0 = z.object({
  _kind: z.literal("SoundAnime0").default("SoundAnime0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMI32.schema,
  unknown2: KDMI32.schema,
  unknown3: KDMI32.schema,
  unknown4: KDMI32.schema,
  unknown5: KDMBoolean.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMF32.schema,
  unknown8: KDMF32.schema,
  unknown9: KDMStringPointer.schema,
  unknown10: KDMF32.schema,
  unknown11: KDMI32.schema,
  unknown12: KDMBoolean.schema
});

type ISoundAnime0 = z.infer<typeof ISoundAnime0>;

class SoundAnime0 extends KDMStruct<ISoundAnime0> {
  public static readonly schema = ISoundAnime0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMI32(this.kdm);
  public readonly unknown2 = new KDMI32(this.kdm);
  public readonly unknown3 = new KDMI32(this.kdm);
  public readonly unknown4 = new KDMI32(this.kdm);
  public readonly unknown5 = new KDMBoolean(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMF32(this.kdm);
  public readonly unknown8 = new KDMF32(this.kdm);
  public readonly unknown9 = new KDMStringPointer(this.kdm);
  public readonly unknown10 = new KDMF32(this.kdm);
  public readonly unknown11 = new KDMI32(this.kdm);
  public readonly unknown12 = new KDMBoolean(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ISoundAnime0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      new KDMU24Padding(this.kdm),
      this.unknown6,
      this.unknown7,
      this.unknown8,
      this.unknown9,
      this.unknown10,
      this.unknown11,
      this.unknown12,
      new KDMU24Padding(this.kdm)
    ];
  }

  protected override _get(): ISoundAnime0 {
    return ISoundAnime0.parse({
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
      unknown12: this.unknown12.get()
    });
  }

  protected override _set(soundanime: ISoundAnime0): void {
    this.unknown0.set(soundanime.unknown0);
    this.unknown1.set(soundanime.unknown1);
    this.unknown2.set(soundanime.unknown2);
    this.unknown3.set(soundanime.unknown3);
    this.unknown4.set(soundanime.unknown4);
    this.unknown5.set(soundanime.unknown5);
    this.unknown6.set(soundanime.unknown6);
    this.unknown7.set(soundanime.unknown7);
    this.unknown8.set(soundanime.unknown8);
    this.unknown9.set(soundanime.unknown9);
    this.unknown10.set(soundanime.unknown10);
    this.unknown11.set(soundanime.unknown11);
    this.unknown12.set(soundanime.unknown12);
  }
}

export default SoundAnime0;
