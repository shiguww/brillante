import type z from "zod";
import logger from "#/logger";
import type KDM from "#/kdm/kdm";
import type RBuffer from "#/buffer/w-buffer";
import type WBuffer from "#/buffer/w-buffer";
import type KDMArray from "#/kdm/common/array/kdm-array";
import type KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

abstract class KDMStructure<T = unknown> {
  public offset: number;
  public readonly kdm: KDM;
  public abstract readonly schema: z.ZodType<T, any, any>;

  public abstract readonly unknownSection4Value0: null | number;
  public abstract readonly unknownSection4Value1: null | number;

  public constructor(kdm: KDM) {
    this.kdm = kdm;
    this.offset = -1;
  }

  public abstract get fields(): Array<KDMStructure>;

  public get arrays(): KDMArray[] {
    return [];
  }

  public get sizeof(): number {
    return this.fields.map((f) => f.sizeof)
      .reduce((prev, curr) => prev + curr);
  }

  public get strings(): Array<KDMStringPointer> {
    return [];
  }

  public abstract get(): T;
  public abstract set(data: unknown): this;

  public build(buffer: WBuffer): this {
    logger.debug(`${this.constructor.name}#build(): building @ ${buffer.offset}`);
    this.offset = buffer.offset;

    this.fields.forEach((f) => f.build(buffer));
    return this;
  }

  public parse(buffer: RBuffer): this {
    logger.debug(`${this.constructor.name}#parse(): parsing @ ${buffer.offset}`);
    this.offset = buffer.offset;

    this.fields.forEach((f) => f.parse(buffer));
    return this;
  }

  public toJSON(): object {
    return ({
      ...this,
      kdm: undefined,
      schema: undefined,
      _structure: this.constructor.name
    });
  }
}

export default KDMStructure;
