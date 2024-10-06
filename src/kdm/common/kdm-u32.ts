import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMStructure from "#kdm/common/kdm-structure";

const IKDMU32 = z.number().int();
type IKDMU32 = z.infer<typeof IKDMU32>;

class KDMU32 extends KDMStructure<IKDMU32> {
  public static readonly schema = IKDMU32;
  
  private number = 0;

  public override readonly schema = IKDMU32;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get(): IKDMU32 {
    return IKDMU32.parse(this.number);
  }

  public override set(data: unknown): this {
    this.number = IKDMU32.parse(data);
    return this;
  }

  public override build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    
    buffer.setU32(this.number);
    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;
    
    this.number = buffer.getU32();
    return this;
  }
}

export default KDMU32;
