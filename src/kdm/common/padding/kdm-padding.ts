import z from "zod";
import type KDM from "#/kdm/kdm";
import assert from "node:assert/strict";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMArray from "#/kdm/common/array/kdm-array";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

abstract class KDMPadding extends KDMEntity<never> {
  public constructor(kdm: KDM) {
    super(kdm, z.never());
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  public override get arrays(): Array<KDMArray> {
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
