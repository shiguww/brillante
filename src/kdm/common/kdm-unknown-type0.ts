import z from "zod";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMStructure from "#/kdm/common/kdm-structure";

const IKDMUnknownType0 = z.number().int();
type IKDMUnknownType0 = z.infer<typeof IKDMUnknownType0>;

class KDMUnknownType0 extends KDMStructure<IKDMUnknownType0> {
  public static readonly schema = IKDMUnknownType0;
  
  private number = 0;

  public override readonly schema = IKDMUnknownType0;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get(): IKDMUnknownType0 {
    return IKDMUnknownType0.parse(this.number);
  }

  public override set(data: unknown): this {
    this.number = IKDMUnknownType0.parse(data);
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

export default KDMUnknownType0;

