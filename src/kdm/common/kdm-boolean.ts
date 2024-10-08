import z from "zod";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMStructure from "#/kdm/common/kdm-structure";

const IKDMBoolean = z.boolean();
type IKDMBoolean = z.infer<typeof IKDMBoolean>;

class KDMBoolean extends KDMStructure<IKDMBoolean> {
  public static readonly schema = IKDMBoolean;
  
  private value: boolean = false;
  
  public override readonly schema = IKDMBoolean;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    return WBuffer.U8_SIZE;
  }

  public override get(): IKDMBoolean {
    return IKDMBoolean.parse(this.value);
  }

  public override set(data: unknown): this {
    this.value = IKDMBoolean.parse(data);
    return this;
  }

  public override build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    
    buffer.setU8(Number(this.value));
    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;
    
    this.value = Boolean(buffer.getU8());
    return this;
  }
}

export default KDMBoolean;
