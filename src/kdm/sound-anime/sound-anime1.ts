import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMU24Padding from "../common/padding/kdm-u24-padding";

const ISoundAnime1 = z.object({
  _kind: z.literal("SoundAnime1").default("SoundAnime1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown6: KDMStringPointer.schema,
  unknown7: KDMStringPointer.schema,
  unknown8: KDMStringPointer.schema,
  unknown9: KDMBoolean.schema,
  unknown10: KDMStructArrayPointer.schema,
  unknown11: KDMU32.schema
});

type ISoundAnime1 = z.infer<typeof ISoundAnime1>;

class SoundAnime1 extends KDMStruct<ISoundAnime1> {
  public static readonly schema = ISoundAnime1;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown6 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMStringPointer(this.kdm);
  public readonly unknown8 = new KDMStringPointer(this.kdm);
  public readonly unknown9 = new KDMBoolean(this.kdm);
  public readonly unknown10 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown11 = new KDMU32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ISoundAnime1);
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
      this.unknown7,
      this.unknown8,
      this.unknown9,
      new KDMU24Padding(this.kdm),
      this.unknown10,
      this.unknown11
    ];
  }

  protected override _get(): ISoundAnime1 {
    return ISoundAnime1.parse({
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

  protected override _set(soundanime: ISoundAnime1): void {
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
  }
}

export default SoundAnime1;
