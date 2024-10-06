import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMStructure from "#kdm/common/kdm-structure";

const IKDMF32 = z.number();
type IKDMF32 = z.infer<typeof IKDMF32>;

class KDMF32 extends KDMStructure<IKDMF32> {
  public static readonly schema = IKDMF32;

  private number = 0;

  public override readonly schema = IKDMF32;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    return WBuffer.F32_SIZE;
  }

  public override get(): IKDMF32 {
    return IKDMF32.parse(this.number);
  }

  public override set(data: unknown): this {
    this.number = IKDMF32.parse(data);
    return this;
  }

  public override build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    
    buffer.setF32(this.number);
    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;
    
    this.number = buffer.getF32();
    return this;
  }
}

export default KDMF32;
