import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMArray from "#kdm/common/kdm-array";
import KDMStructure from "#kdm/common/kdm-structure";

const IKDMPointerArrayPointer = z.unknown().array();
type IKDMPointerArrayPointer = z.infer<typeof IKDMPointerArrayPointer>;

class KDMPointerArrayPointer extends KDMStructure<IKDMPointerArrayPointer> {
  public static readonly schema = IKDMPointerArrayPointer;
  
  public readonly array = new KDMArray(this.kdm);

  public override readonly schema = IKDMPointerArrayPointer;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get arrays(): KDMArray[] {
    return this.array.arrays;
  }

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get(): IKDMPointerArrayPointer {
    return this.array.get();
  }

  public override set(data: unknown): this {
    this.array.set(data);
    return this;
  }

  public override build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    
    if(this.array.offset === -1) {
      buffer.setU32(0x00000000);
      return this;
    }

    buffer.setU32(this.array.offset + KDMArray.HEADING_SIZE);
    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;    
    const pointer = buffer.getU32();

    if(pointer !== 0) {
      buffer.with(pointer - KDMArray.HEADING_SIZE, (buffer) => this.array.parse(buffer));
    }

    return this;
  }
  public useNullTerminator(useit: boolean): this {
    this.array.useNullTerminator(useit);
    return this;
  }
}

export default KDMPointerArrayPointer;
