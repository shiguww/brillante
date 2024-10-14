import assert from "node:assert/strict";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

abstract class KDMPadding extends KDMEntity<never> {
  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }
}

export default KDMPadding;
