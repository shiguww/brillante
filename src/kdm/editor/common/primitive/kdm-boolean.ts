import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

const IKDMBoolean = z.boolean();
type IKDMBoolean = z.infer<typeof IKDMBoolean>;

class KDMBoolean extends KDMPrimitive<IKDMBoolean> {
  public static readonly schema = IKDMBoolean;

  private value: boolean = false;
  public override readonly schema = IKDMBoolean;

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get description(): Array<number> {
    return [0x00000004];
  }

  protected override _get(): IKDMBoolean {
    return this.value;
  }

  protected override _set(value: IKDMBoolean): void {
    this.value = value;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU32(Number(this.value));
  }

  protected override _parse(buffer: RBuffer): void {
    this.value = Boolean(buffer.getU32());
  }
}

export default KDMBoolean;
