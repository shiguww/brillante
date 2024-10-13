import z from "zod";
import type RBuffer from "#/buffer/r-buffer";
import KDMArray from "#/kdm/common/array/kdm-array";
import KDMStringPointer from "../pointer/kdm-string-pointer";
import logger from "#/logger";

const IKDMStringPointerArray = KDMStringPointer.schema.array();
type IKDMStringPointerArray = z.infer<typeof IKDMStringPointerArray>;

class KDMStringPointerArray extends KDMArray<IKDMStringPointerArray[number]> {
  public static readonly schema = IKDMStringPointerArray;

  public override readonly schema = IKDMStringPointerArray;
  public override readonly entries: KDMStringPointer[] = [];

  public override set(_data: unknown): this {
    const data = IKDMStringPointerArray.parse(_data);
    data.forEach((data) => this.entries.push(new KDMStringPointer(this.kdm).set(data)));

    return this;
  }

  public override parse(buffer: RBuffer): this {
    logger.debug(`${this.constructor.name}#parse(): parsing @ ${buffer.offset}`);
    this.offset = buffer.offset;
    
    this.uid.parse(buffer);
    this.size0.parse(buffer);
    this.type.parse(buffer);
    this.size1.parse(buffer);

    const instance = new KDMStringPointer(this.kdm);
    let count = (this.size0.get() * 4) / instance.sizeof;

    if (this.useNullTerminatorFlag) {
      count -= 1;
    }

    for (let i = 0; i < count; i += 1) {
      const entry = new KDMStringPointer(this.kdm);
      entry.parse(buffer);

      this.entries.push(entry);
    }

    if (this.useNullTerminatorFlag) {
      const entry = new KDMStringPointer(this.kdm);
      buffer.offset += entry.sizeof;
    }

    return this;
  }
}

export default KDMStringPointerArray;
