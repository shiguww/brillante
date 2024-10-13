import RBuffer from "#/buffer/r-buffer";
import WBuffer from "#/buffer/w-buffer";
import assert from "node:assert/strict";
import KDMPadding from "#/kdm/common/padding/kdm-padding";

class KDMU24Padding extends KDMPadding {
  public override get sizeof(): number {
    return WBuffer.U16_SIZE + WBuffer.U8_SIZE;
  }

  public override build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    
    buffer.setU8(0);
    buffer.setU16(0);

    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;
    
    assert.equal(buffer.getU8(), 0, `Bad padding @ ${buffer.offset - RBuffer.U8_SIZE}`);
    assert.equal(buffer.getU16(), 0, `Bad padding @ ${buffer.offset - RBuffer.U16_SIZE}`);

    return this;
  }
}

export default KDMU24Padding;
