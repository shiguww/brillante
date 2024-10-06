import z from "zod";
import WBuffer from "#buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

const IKDMObjectPointer = z.unknown();
type IKDMObjectPointer = z.infer<typeof IKDMObjectPointer>;

class KDMObjectPointer extends KDMPrimitive<IKDMObjectPointer> {
  public object: null | KDMObject = null;
  public override readonly ptid = 0x0000000F;
  public override readonly schema = IKDMObjectPointer;

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  protected override _get(): IKDMObjectPointer {
    assert(this.object !== null);
    return this.object.get();
  }

  protected override _set(data: IKDMObjectPointer): void {
    this.object = this.kdm.createObject(data);
  }

  protected override _build(buffer: WBuffer): void {
    if (this.object === null) {
      buffer.setU32(0x00000000);
      return;
    }

    buffer.setU32(this.object.offset + this.object.heading.sizeof);
  }

  protected override _parse(buffer: RBuffer): void {
    const pointer = buffer.getU32();

    if (pointer === 0) {
      this.object = null;
      return;
    }

    buffer.with(pointer - 8, (buffer) => {
      this.object = this.kdm.parseObject(buffer);
    });
  }
}

export default KDMObjectPointer;
