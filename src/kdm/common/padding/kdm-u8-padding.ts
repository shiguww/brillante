import WBuffer from "#/buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import KDMPadding from "#/kdm/common/padding/kdm-padding";

class KDMU8Padding extends KDMPadding {
  public override get sizeof(): number {
    return WBuffer.U8_SIZE;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU8(0);
  }

  protected override _parse(buffer: RBuffer): void {
    assert.equal(buffer.getU8(), 0);
  }
}

export default KDMU8Padding;
