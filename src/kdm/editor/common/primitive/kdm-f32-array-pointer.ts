import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMF32Array from "#kdm/editor/common/global/kdm-f32-array";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

const IKDMF32ArrayPointer = KDMF32Array.schema;
type IKDMF32ArrayPointer = z.infer<typeof IKDMF32ArrayPointer>;

class KDMF32ArrayPointer extends KDMPrimitive<IKDMF32ArrayPointer> {
  public static readonly schema = IKDMF32ArrayPointer;

  public readonly array = new KDMF32Array(this.kdm);
  public override readonly schema = IKDMF32ArrayPointer;

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get description(): Array<number> {
    return [0x0000000A];
  }

  protected override _get(): IKDMF32ArrayPointer {
    return this.array.get();
  }

  protected override _set(data: IKDMF32ArrayPointer): void {
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
}

export default KDMF32ArrayPointer;
