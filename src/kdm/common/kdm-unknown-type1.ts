import z from "zod";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMStructure from "#/kdm/common/kdm-structure";

const IKDMUnknownType1 = z.number().int();
type IKDMUnknownType1 = z.infer<typeof IKDMUnknownType1>;

class KDMUnknownType1 extends KDMStructure<IKDMUnknownType1> {
  public static readonly schema = IKDMUnknownType1;
  
  private number = 0;

  public override readonly schema = IKDMUnknownType1;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get(): IKDMUnknownType1 {
    return IKDMUnknownType1.parse(this.number);
  }

  public override set(data: unknown): this {
    this.number = IKDMUnknownType1.parse(data);
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

export default KDMUnknownType1;

