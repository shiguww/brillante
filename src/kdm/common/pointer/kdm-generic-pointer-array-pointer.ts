import z from "zod";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMArray from "#/kdm/common/array/kdm-array";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import type KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IKDMGenericPointerArrayPointer = z.unknown().array();
type IKDMGenericPointerArrayPointer = z.infer<typeof IKDMGenericPointerArrayPointer>;

class KDMGenericPointerArrayPointer extends KDMStructure<IKDMGenericPointerArrayPointer> {
  public static readonly schema = IKDMGenericPointerArrayPointer;
  
  public readonly array = new KDMGenericArray(this.kdm);

  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;
  public override readonly schema = IKDMGenericPointerArrayPointer;

  public override get arrays(): KDMArray[] {
    return this.array.arrays;
  }

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.array.strings;
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get(): IKDMGenericPointerArrayPointer {
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

    buffer.setU32(this.array.offset + KDMGenericArray.HEADING_SIZE);
    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;    
    const pointer = buffer.getU32();

    if(pointer !== 0) {
      buffer.with(pointer - KDMGenericArray.HEADING_SIZE, (buffer) => this.array.parse(buffer));
    }

    return this;
  }

  public useNullTerminator(useit: boolean): this {
    this.array.useNullTerminator(useit);
    return this;
  }
}

export default KDMGenericPointerArrayPointer;
