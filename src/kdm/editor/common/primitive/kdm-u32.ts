import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

const IKDMU32 = z.number().int();
type IKDMU32 = z.infer<typeof IKDMU32>;

class KDMU32 extends KDMPrimitive<IKDMU32> {
  public static readonly schema = IKDMU32;

  private number = -1;
  public override readonly schema = IKDMU32;
  public override readonly ptid = 0x00000001;

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  protected override _get(): IKDMU32 {
    return this.number;
  }

  protected override _set(number: IKDMU32): void {
    this.number = number;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU32(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getU32();
  }
}

export default KDMU32;
