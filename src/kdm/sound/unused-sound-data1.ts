import z from "zod";
import assert from "node:assert/strict";
import KDMObject from "#kdm/common/kdm-object";
import KDMF32 from "#kdm/common/primitive/kdm-f32";
import KDMU16 from "#kdm/common/primitive/kdm-u16";
import KDMU32 from "#kdm/common/primitive/kdm-u32";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMPrimitive from "#kdm/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/common/primitive/kdm-string-pointer";
import KDMObjectPointer from "#kdm/common/primitive/kdm-object-pointer";

class UnusedSoundData1Heading extends KDMStructure<never> {
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

class UnusedSoundData1 extends KDMObject<never> {
  public static OID = 0x0017;
  public static readonly SIZEOF = 0x0008;
  public static readonly schema = z.never();
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x008E114C;

  public override readonly schema = z.never();
  public override readonly heading = new UnusedSoundData1Heading(this.kdm);

  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMObjectPointer(this.kdm);

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
      this.unknown7
    ];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): void {
    assert.fail();
  }

  protected override _build(): never {
    assert.fail();
  }

  protected override _parse(): never {
    assert.fail();
  }
}

export default UnusedSoundData1;
