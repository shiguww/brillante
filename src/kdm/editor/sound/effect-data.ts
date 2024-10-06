import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMF32 from "#kdm/editor/common/primitive/kdm-f32";
import KDMBoolean from "#kdm/editor/common/primitive/kdm-boolean";
import KDMObjectHeading from "#kdm/editor/common/kdm-object-heading";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";

class EffectDataHeading extends KDMObjectHeading<EffectData> {
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [this.ouid, this.size0, this.otid, this.size1];
  }

  protected override _build(buffer: WBuffer): void {
    this.size0.set((this.object.sizeof - this.sizeof) / 4);
    this.size1.set((this.object.sizeof - this.sizeof) / 4);
    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);
    assert.equal(this.size0.get(), (this.object.sizeof - this.sizeof) / 4);
    assert.equal(this.size1.get(), (this.object.sizeof - this.sizeof) / 4);
  }
}

const IEffectData = z.object({
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMF32.schema,
  unknown8: KDMBoolean.schema,
  unknown0: KDMStringPointer.schema,
  _structure: z.literal("EffectData").default("EffectData")
});

type IEffectData = z.infer<typeof IEffectData>;

class EffectData extends KDMObject<IEffectData> {
  public static readonly schema = IEffectData;

  public override readonly schema = IEffectData;
  public override readonly heading = new EffectDataHeading(this);

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

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      this.unknown6,
      this.unknown7,
      this.unknown8
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
