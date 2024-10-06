import z from "zod";
import WBuffer from "#buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import KDMStructure from "#kdm/common/kdm-structure";

const IKDMString = z.string().min(1);
type IKDMString = z.infer<typeof IKDMString>;

class KDMString extends KDMStructure<IKDMString> {
  public static readonly schema = IKDMString;
  
  private string = "";
  
  public override readonly schema = IKDMString;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    return Math.ceil(Buffer.byteLength(this.string + "\0", "utf8") / 4) * 4;
  }

  public override get(): IKDMString {
    return IKDMString.parse(this.string);
  }

  public override set(data: unknown): this {
    this.string = IKDMString.parse(data);
    return this;
  }

  public override build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    buffer.setCString(this.string);

    while (buffer.offset % 4 !== 0) {
      buffer.setU8(0);
    }

    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;
    this.string = buffer.getCString() || "\0";
    
    while (buffer.offset % 4 !== 0) {
      assert.equal(buffer.getU8(), 0);
    }

    return this;
  }
}

export default KDMString;
