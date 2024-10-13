import z from "zod";
import assert from "node:assert/strict";
import KDMStructure from "#/kdm/common/kdm-structure";

abstract class KDMPadding extends KDMStructure<never> {
  public override readonly schema = z.never();
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get(): never {
    assert.fail("unreachable");
  }

  public override set(): never {
    assert.fail("unreachable");
  }
}

export default KDMPadding;
