import type z from "zod";
import type KDM from "#kdm/kdm";
import type RBuffer from "#buffer/w-buffer";
import type WBuffer from "#buffer/w-buffer";
import type KDMArray from "#kdm/common/kdm-array";

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
    return this.fields
      .map((f) => f.sizeof)
      .reduce((prev, curr) => prev + curr);
  }

  public abstract get(): T;
  public abstract set(data: unknown): this;

  public build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    
    this.fields.forEach((f) => f.build(buffer));
    return this;
  }

  public parse(buffer: RBuffer): this {
    this.offset = buffer.offset;
    
    this.fields.forEach((f) => f.parse(buffer));
    return this;
  }
}

export default KDMStructure;
