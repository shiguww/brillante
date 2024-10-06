import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMStructure from "#kdm/editor/common/kdm-structure";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

const IKDMString = z.string().min(1);
type IKDMString = z.infer<typeof IKDMString>;

class KDMString extends KDMStructure<IKDMString> {
  private string = "";
  public override readonly schema = IKDMString;

  public override get sizeof(): number {
    const length = Buffer.byteLength(this.string + "\0", "utf8");
    return Math.ceil(length / 4) * 4;
  }

  public override get fields(): Array<KDMPrimitive> {
    return [];
  }

  protected override _get(): IKDMString {
    return this.string;
  }

  protected override _set(string: IKDMString): void {
    this.string = string;
  }

  protected override _build(buffer: WBuffer): void {
    this.offset = buffer.offset;
    buffer.setCString(this.string);

    while (buffer.offset % 4 !== 0) {
      buffer.setU8(0);
    }
  }

  protected override _parse(buffer: RBuffer): void {
    this.offset = buffer.offset;
    this.string = buffer.getCString() || "\0";

    while (buffer.offset % 4 !== 0) {
      assert.equal(buffer.getU8(), 0);
    }
  }
}

export default KDMString;
