import type z from "zod";
import type KDM from "#/kdm/kdm";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import type KDMArray from "#/kdm/common/array/kdm-array";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

abstract class KDMEntity<T = unknown> {
  public readonly kdm: KDM;
  public offset: null | number;
  public readonly schema: z.ZodType<T, any, any>;

  protected constructor(kdm: KDM, schema: z.ZodType<T, any, any>) {
    this.kdm = kdm;
    this.offset = null;
    this.schema = schema;
  }

  public abstract get sizeof(): number;
  public abstract get arrays(): Array<KDMArray>;
  public abstract get strings(): Array<KDMStringPointer>;

  protected abstract _get(): T;
  protected abstract _set(data: T): void;

  public get(): T {
    return this.schema.parse(this._get());
  }

  public set(data: unknown): this {
    this._set(this.schema.parse(data));
    return this;
  }

  protected abstract _build(buffer: WBuffer): void;
  protected abstract _parse(buffer: RBuffer): void;

  public build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    this._build(buffer);

    assert.equal(buffer.offset - this.sizeof, this.offset);
    return this;
  }

  public parse(buffer: RBuffer): this {
    this.offset = buffer.offset;
    this._parse(buffer);

    assert.equal(buffer.offset - this.sizeof, this.offset);
    return this;
  }

  public toJSON(): object {
    return ({
      ...this,
      kdm: undefined,
      offset: undefined,
      schema: undefined,
      _offset: this.offset,
      _constructor: this.constructor.name
    });
  }
}

export default KDMEntity;
