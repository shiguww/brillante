import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

const IKDMF32 = z.number();
type IKDMF32 = z.infer<typeof IKDMF32>;

class KDMF32 extends KDMPrimitive<IKDMF32> {
  public static readonly schema = IKDMF32;

  private number = -1;
  public override readonly schema = IKDMF32;

  public override get sizeof(): number {
    return WBuffer.F32_SIZE;
  }

  public override get description(): Array<number> {
    return [0x00000000];
  }

  protected override _get(): IKDMF32 {
    return this.number;
  }

  protected override _set(number: IKDMF32): void {
    this.number = number;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setF32(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getF32();
  }
}

export default KDMF32;
