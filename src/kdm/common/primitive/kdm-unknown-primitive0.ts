import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMPrimitive from "#kdm/common/primitive/kdm-primitive";

const IKDMUnknownPrimitive0 = z.number().int();
type IKDMUnknownPrimitive0 = z.infer<typeof IKDMUnknownPrimitive0>;

class KDMUnknownPrimitive0 extends KDMPrimitive<IKDMUnknownPrimitive0> {
  public static readonly schema = IKDMUnknownPrimitive0;

  private number = -1;
  public override readonly schema = IKDMUnknownPrimitive0;

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get description(): Array<number> {
    return [0x00000008];
  }

  protected override _get(): IKDMUnknownPrimitive0 {
    return this.number;
  }

  protected override _set(number: IKDMUnknownPrimitive0): void {
    this.number = number;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU32(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getU32();
  }
}

export default KDMUnknownPrimitive0;
