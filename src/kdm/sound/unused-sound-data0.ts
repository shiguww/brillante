import z from "zod";
import assert from "node:assert/strict";
import KDMF32 from "#kdm/common/kdm-f32";
import KDMU32 from "#kdm/common/kdm-u32";
import KDMStructure from "#kdm/common/kdm-structure";

class UnusedSoundData0 extends KDMStructure<never> {
  public static readonly schema = z.never();

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E1120;

  public override readonly schema = z.never();

  public readonly unknown0 = new KDMF32(this.kdm);
  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMU32(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5
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

export default UnusedSoundData0;
