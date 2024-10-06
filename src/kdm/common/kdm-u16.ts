import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMStructure from "#kdm/common/kdm-structure";

const IKDMU16 = z.number().int();
type IKDMU16 = z.infer<typeof IKDMU16>;

class KDMU16 extends KDMStructure<IKDMU16> {
  public static readonly schema = IKDMU16;
  
  private number = 0;
  
  public override readonly schema = IKDMU16;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    return WBuffer.U16_SIZE;
  }

  public override get(): IKDMU16 {
    return IKDMU16.parse(this.number);
  }

  public override set(data: unknown): this {
    this.number = IKDMU16.parse(data);
    return this;
  }

  public override build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    
    buffer.setU16(this.number);
    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;
    
    this.number = buffer.getU16();
    return this;
  }
}

export default KDMU16;
