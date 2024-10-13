import z from "zod";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMString from "../kdm-string";
import logger from "#/logger";

const IKDMStringPointer = z.string().nullable();
type IKDMStringPointer = z.infer<typeof IKDMStringPointer>;

class KDMStringPointer extends KDMStructure<IKDMStringPointer> {
  public static readonly schema = IKDMStringPointer;
  
  private string = "";

  public override readonly schema = IKDMStringPointer;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;
  
  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get(): IKDMStringPointer {
    if (this.string === "") {
      return IKDMStringPointer.parse(null);
    }

    return IKDMStringPointer.parse(this.string);
  }

  public override set(data: unknown): this {
    this.string = IKDMStringPointer.parse(data) || "";
    return this;
  }

  public override build(buffer: WBuffer): this {
    logger.debug(`${this.constructor.name}#build(): building @ ${buffer.offset}`);
    
    const pointer = this.kdm.strings.find((s) => s.get() === this.string)?.offset;
    this.offset = buffer.offset;

    if (pointer === undefined) {
      buffer.setU32(0x00000000);
      return this;
    }

    buffer.setU32(pointer);
    return this;
  }

  public override parse(buffer: RBuffer): this {
    logger.debug(`${this.constructor.name}#parse(): parsing @ ${buffer.offset}`);
    this.offset = buffer.offset;
    
    const pointer = buffer.getU32();
    
    if(pointer !== 0) {
      logger.debug(`${this.constructor.name}#parse(): parsing ${KDMString.name} @ ${pointer}`);
      this.string = this.kdm.strings.find((s) => s.offset === pointer)?.get() || "";
    }
    
    return this;
  }
}

export default KDMStringPointer;
