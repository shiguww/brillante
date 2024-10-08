import z from "zod";
import assert from "node:assert/strict";
import KDMF32 from "#kdm/common/kdm-f32";
import KDMU32 from "#kdm/common/kdm-u32";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMStringPointer from "#kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#kdm/common/pointer/kdm-generic-array-pointer";

class UnusedSoundData1 extends KDMStructure<never> {
  public static readonly schema = z.never();
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x008E114C;

  public override readonly schema = z.never();
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E114C;

  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMGenericArrayPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
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

  public override get(): never {
    assert.fail();
  }

  public override set(): never {
    assert.fail();
  }

  public override build(): never {
    assert.fail();
  }

  public override parse(): never {
    assert.fail();
  }
}

export default UnusedSoundData1;
