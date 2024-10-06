import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

const IKDMStringPointer = z.string().nullable();
type IKDMStringPointer = z.infer<typeof IKDMStringPointer>;

class KDMStringPointer extends KDMPrimitive<IKDMStringPointer> {
  public static readonly schema = IKDMStringPointer;

  private string: IKDMStringPointer = null;
  public override readonly schema = IKDMStringPointer;

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get description(): Array<number> {
    return [0x00000003];
  }

  protected override _get(): IKDMStringPointer {
    return this.string || null;
  }

  protected override _set(string: IKDMStringPointer): void {
    if (string === "") {
      this.string = null;
      return;
    }

    this.string = string;
  }

  protected override _build(buffer: WBuffer): void {
    const pointer = this.kdm.strings.find((s) => s.get() === this.string)?.offset;

    if (this.string === null || this.string === "" || pointer === undefined) {
      buffer.setU32(0x00000000);
      return;
    }

    buffer.setU32(pointer);
  }

  protected override _parse(buffer: RBuffer): void {
    const pointer = buffer.getU32();
    const string = this.kdm.strings.find((s) => s.offset === pointer)?.get();
    this.string = string || null;
  }
}

export default KDMStringPointer;
