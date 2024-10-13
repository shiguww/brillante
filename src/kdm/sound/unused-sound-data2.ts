import z from "zod";
import assert from "node:assert/strict";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";

class UnusedSoundData2 extends KDMStructure<never> {
  public static readonly schema = z.never();

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E1164;

  public override readonly schema = z.never();
  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMGenericArrayPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  public override get strings(): KDMStringPointer[] {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): never {
    assert.fail("unreachable");
  }

  public override set(): never {
    assert.fail("unreachable");
  }

  public override build(): never {
    assert.fail("unreachable");
  }

  public override parse(): never {
    assert.fail("unreachable");
  }
}

export default UnusedSoundData2;
