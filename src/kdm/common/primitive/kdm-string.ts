import z from "zod";
import type KDM from "#/kdm/kdm";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const IKDMString = z.string().transform((str) => str.length !== 0 ? str : null).nullable();
type IKDMString = z.infer<typeof IKDMString>;

class KDMString extends KDMEntity<IKDMString> {
  public static readonly schema = IKDMString;
  private state = "";

  public constructor(kdm: KDM) {
    super(kdm, IKDMString);
  }

  public get string(): string {
    return this.state;
  }

  private set string(string: string) {
    this.state = string;
  }

  public override get sizeof(): number {
    return Math.ceil(Buffer.byteLength(this.string + "\0") / 4) * 4;
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  protected override _get(): IKDMString {
    return IKDMString.parse(this.string);
  }

  protected override _set(data: IKDMString): void {
    this.string = data || "";
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setCString(this.string || "\0");

    while (buffer.offset % 4 !== 0) {
      buffer.setU8(0);
    }
  }

  protected override _parse(buffer: RBuffer): void {
    this.string = buffer.getCString() || "\0";

    while (buffer.offset % 4 !== 0) {
      assert.equal(buffer.getU8(), 0);
    }
  }
}

export default KDMString;
