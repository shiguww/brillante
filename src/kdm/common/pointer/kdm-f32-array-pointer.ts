import z from "zod";
import WBuffer from "#buffer/w-buffer";
import type RBuffer from "#buffer/r-buffer";
import KDMStructure from "#kdm/common/kdm-structure";
import type KDMArray from "#kdm/common/array/kdm-array";
import KDMF32Array from "#kdm/common/array/kdm-f32-array";

const IKDMF32ArrayPointer = KDMF32Array.schema;
type IKDMF32ArrayPointer = z.infer<typeof IKDMF32ArrayPointer>;

class KDMF32ArrayPointer extends KDMStructure<IKDMF32ArrayPointer> {
  public static readonly schema = IKDMF32ArrayPointer;
  
  public readonly array = new KDMF32Array(this.kdm);
  public override readonly schema = IKDMF32ArrayPointer;
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

  public override get(): IKDMF32ArrayPointer {
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

    buffer.setU32(this.array.offset + KDMF32Array.HEADING_SIZE);
    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;    
    const pointer = buffer.getU32();

    if(pointer !== 0) {
      buffer.with(pointer - KDMF32Array.HEADING_SIZE, (buffer) => this.array.parse(buffer));
    }

    return this;
  }
  
  public useNullTerminator(useit: boolean): this {
    this.array.useNullTerminator(useit);
    return this;
  }
}

export default KDMF32ArrayPointer;
