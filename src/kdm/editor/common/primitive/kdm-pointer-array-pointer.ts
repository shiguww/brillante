import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMPointerArray from "#kdm/editor/common/global/kdm-pointer-array";

const IKDMPointerArrayPointer = z.unknown().array();
type IKDMPointerArrayPointer = z.infer<typeof IKDMPointerArrayPointer>;

class KDMPointerArrayPointer extends KDMPrimitive<IKDMPointerArrayPointer> {
  public static readonly schema = IKDMPointerArrayPointer;

  public override readonly ptid = 0x00000014;
  public readonly array = new KDMPointerArray(this.kdm);
  public override readonly schema = IKDMPointerArrayPointer;

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  protected override _get(): IKDMPointerArrayPointer {
    return this.array.get();
  }

  protected override _set(data: IKDMPointerArrayPointer): void {
    this.array.set(data);
  }

  protected override _build(buffer: WBuffer): void {
    if (this.array.sizeof === 0) {
      buffer.setU32(0x00000000);
      return;
    }

    buffer.setU32(this.array.offset + this.array.heading.sizeof);
  }

  protected override _parse(buffer: RBuffer): void {
    const pointer = buffer.getU32();

    if (pointer === 0) {
      this.array.set([]);
      return;
    }

    buffer.with(pointer - this.array.heading.sizeof, (buffer) => this.array.parse(buffer));
  }

  public useNullTerminator(useit: boolean): this {
    this.array.useNullTerminator(useit);
    return this;
  }
}

export default KDMPointerArrayPointer;
