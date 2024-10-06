import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

const IKDMU16 = z.number().int();
type IKDMU16 = z.infer<typeof IKDMU16>;

class KDMU16 extends KDMPrimitive<IKDMU16> {
  public static readonly schema = IKDMU16;

  private number = -1;
  public override readonly schema = IKDMU16;

  public override get sizeof(): number {
    return WBuffer.U16_SIZE;
  }

  public override get description(): Array<number> {
    return [0x00000008];
  }

  protected override _get(): IKDMU16 {
    return this.number;
  }

  protected override _set(number: IKDMU16): void {
    this.number = number;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU16(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getU16();
  }
}

export default KDMU16;
