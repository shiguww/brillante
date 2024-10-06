import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMPrimitive from "#kdm/common/primitive/kdm-primitive";

const IKDMUnknownPrimitive1 = z.number().int();
type IKDMUnknownPrimitive1 = z.infer<typeof IKDMUnknownPrimitive1>;

class KDMUnknownPrimitive1 extends KDMPrimitive<IKDMUnknownPrimitive1> {
  public static readonly schema = IKDMUnknownPrimitive1;

  private number = -1;
  public override readonly schema = IKDMUnknownPrimitive1;

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get description(): Array<number> {
    return [0x0000000D];
  }

  protected override _get(): IKDMUnknownPrimitive1 {
    return this.number;
  }

  protected override _set(number: IKDMUnknownPrimitive1): void {
    this.number = number;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU32(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getU32();
  }
}

export default KDMUnknownPrimitive1;
