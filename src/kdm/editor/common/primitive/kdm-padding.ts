import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMEditor from "#kdm/editor/kdm-editor";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

class KDMPadding extends KDMPrimitive<never> {
  private readonly size: number = 0;
  public override readonly ptid = 0;
  public override readonly schema = z.never();

  public constructor(kdm: KDMEditor, size: number) {
    super(kdm);
    this.size = size;
  }

  public override get sizeof(): number {
    return this.size;
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }

  protected override _build(buffer: WBuffer): void {
    for(let i = 0; i < this.size; i += 1) {
      buffer.setU8(0);
    }
  }

  protected override _parse(buffer: RBuffer): void {
    for(let i = 0; i < this.size; i += 1) {
      assert.equal(buffer.getU8(), 0);
    }
  }
}

export default KDMPadding;
