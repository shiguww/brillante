import z from "zod";
import assert from "node:assert/strict";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMU32 from "#kdm/editor/common/primitive/kdm-u32";
import KDMStructure from "#kdm/editor/common/kdm-structure";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";
import KDMObjectPointer from "#kdm/editor/common/primitive/kdm-object-pointer";

class UnusedSoundData2Heading extends KDMStructure<never> {
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

class UnusedSoundData2 extends KDMObject<never> {
  public static OID = 0x0018;
  public static readonly SIZEOF = 0x0003;
  public static readonly schema = z.never();
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x008E1164;

  public override readonly schema = z.never();
  public override readonly heading = new UnusedSoundData2Heading(this.kdm);

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMObjectPointer(this.kdm);
  public readonly unknown2 = new KDMU32(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      this.unknown0,
      this.unknown1,
      this.unknown2
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

export default UnusedSoundData2;
