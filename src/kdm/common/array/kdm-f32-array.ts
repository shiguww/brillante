import z from "zod";
import KDMF32 from "#/kdm/common/kdm-f32";
import type RBuffer from "#/buffer/r-buffer";
import KDMArray from "#/kdm/common/array/kdm-array";
import logger from "#/logger";

const IKDMF32Array = KDMF32.schema.array();
type IKDMF32Array = z.infer<typeof IKDMF32Array>;

class KDMF32Array extends KDMArray<IKDMF32Array[number]> {
  public static readonly schema = IKDMF32Array;

  public override readonly schema = IKDMF32Array;
  public override readonly entries: KDMF32[] = [];

  public override set(_data: unknown): this {
    const data = IKDMF32Array.parse(_data);
    data.forEach((data) => this.entries.push(new KDMF32(this.kdm).set(data)));

    return this;
  }

  public override parse(buffer: RBuffer): this {
    logger.debug(`${this.constructor.name}#parse(): parsing @ ${buffer.offset}`);
    this.offset = buffer.offset;
    
    this.uid.parse(buffer);
    this.size0.parse(buffer);
    this.type.parse(buffer);
    this.size1.parse(buffer);

    const instance = new KDMF32(this.kdm);
    let count = (this.size0.get() * 4) / instance.sizeof;

    if (this.useNullTerminatorFlag) {
      count -= 1;
    }

    for (let i = 0; i < count; i += 1) {
      const entry = new KDMF32(this.kdm);
      entry.parse(buffer);

      this.entries.push(entry);
    }

    if (this.useNullTerminatorFlag) {
      const entry = new KDMF32(this.kdm);
      buffer.offset += entry.sizeof;
    }

    logger.debug(`${this.constructor.name}#parse(): parsed array #${this.uid.get()}`);
    return this;
  }
}

export default KDMF32Array;
