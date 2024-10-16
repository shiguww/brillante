import z from "zod";
import KDMStruct from "../common/kdm-struct";
import KDMEntity from "../common/kdm-entity";
import KDMU24Padding from "../common/padding/kdm-u24-padding";
import KDMBoolean from "../common/primitive/kdm-boolean";
import KDMF32 from "../common/primitive/kdm-f32";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import type KDM from "../kdm";

const IEffectData = z.object({
  _kind: z.literal("EffectData").default("EffectData"),
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMF32.schema,
  unknown8: KDMBoolean.schema,
  unknown0: KDMStringPointer.schema
});

type IEffectData = z.infer<typeof IEffectData>;

class EffectData extends KDMStruct<IEffectData> {
  public static readonly schema = IEffectData;

  public override readonly schema = IEffectData;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E132C;

  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMF32(this.kdm);
  public readonly unknown8 = new KDMBoolean(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IEffectData);
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
      new KDMU24Padding(this.kdm)
    ];
  }

  protected override _get(): IEffectData {
    return IEffectData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get(),
      unknown7: this.unknown7.get(),
      unknown8: this.unknown8.get()
    });
  }

  protected override _set(effectdata: IEffectData): void {
    this.unknown0.set(effectdata.unknown0);
    this.unknown1.set(effectdata.unknown1);
    this.unknown2.set(effectdata.unknown2);
    this.unknown3.set(effectdata.unknown3);
    this.unknown4.set(effectdata.unknown4);
    this.unknown5.set(effectdata.unknown5);
    this.unknown6.set(effectdata.unknown6);
    this.unknown7.set(effectdata.unknown7);
    this.unknown8.set(effectdata.unknown8);
  }
}

export default EffectData;
