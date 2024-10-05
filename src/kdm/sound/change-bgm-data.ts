import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/common/kdm-object";
import KDMU16 from "#kdm/common/primitive/kdm-u16";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMPrimitive from "#kdm/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/common/primitive/kdm-string-pointer";

class ChangeBGMDataHeading extends KDMStructure<never> {
  public readonly uid = new KDMU16(this.kdm);
  public readonly oid = new KDMU16(this.kdm);
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override readonly schema = z.never();

  public override get fields(): Array<KDMPrimitive> {
    return [this.uid, this.size0, this.oid, this.size1];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }
}

const IChangeBGMData = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  _structure: z.literal("ChangeBGMData").default("ChangeBGMData")
});

type IChangeBGMData = z.infer<typeof IChangeBGMData>;

class ChangeBGMData extends KDMObject<IChangeBGMData> {
  public static OID = 0x001E;
  public static readonly SIZEOF = 0x0003;
  public static readonly schema = IChangeBGMData;
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x00000000;

  public override readonly schema = IChangeBGMData;
  public override readonly heading = new ChangeBGMDataHeading(this.kdm);

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): IChangeBGMData {
    return IChangeBGMData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(changebgmdata: IChangeBGMData): void {
    this.unknown0.set(changebgmdata.unknown0);
    this.unknown1.set(changebgmdata.unknown1);
    this.unknown2.set(changebgmdata.unknown2);
  }

  protected override _build(buffer: WBuffer): void {
    this.heading.oid.set(ChangeBGMData.OID);
    this.heading.size0.set(ChangeBGMData.SIZEOF);
    this.heading.size1.set(ChangeBGMData.SIZEOF);

    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);

    assert.equal(this.heading.oid.get(), ChangeBGMData.OID);
    assert.equal(this.heading.size0.get(), ChangeBGMData.SIZEOF);
    assert.equal(this.heading.size1.get(), ChangeBGMData.SIZEOF);
  }
}

export default ChangeBGMData;
