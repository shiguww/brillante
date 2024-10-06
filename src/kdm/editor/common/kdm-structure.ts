import type z from "zod";
import type KDMEditor from "#kdm/editor/kdm-editor";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import type KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

abstract class KDMStructure<T = unknown> {
  public offset: number;
  public readonly kdm: KDMEditor;
  public abstract readonly schema: z.ZodType<T, any, any>;

  public constructor(kdm: KDMEditor) {
    this.kdm = kdm;
    this.offset = -1;
  }

  public abstract get fields(): Array<KDMPrimitive>;

  public get description(): Array<number> {
    return this.fields.map((f) => f.description).flat();
  }

  public get sizeof(): number {
    return this.fields.map((f) => f.sizeof)
      .reduce((prev, curr) => prev + curr);
  }

  public toJSON(): object {
    return { ...this, kdm: undefined, schema: undefined, _structure: this.constructor.name };
  }

  protected abstract _get(): T;
  protected abstract _set(data: T): void;

  protected _build(buffer: WBuffer): void {
    this.fields.forEach((f) => f.build(buffer));
  }

  protected _parse(buffer: RBuffer): void {
    this.fields.forEach((f) => f.parse(buffer));
  }

  public get(): T {
    return this.schema.parse(this._get());
  }

  public set(_data: unknown): this {
    const data = this.schema.parse(_data);
    this._set(data);

    return this;
  }

  public build(buffer: WBuffer): this {
    this.offset = buffer.offset;
    this._build(buffer);

    assert.equal(buffer.offset, this.offset + this.sizeof);
    return this;
  }

  public parse(buffer: RBuffer): this {
    this.offset = buffer.offset;
    this._parse(buffer);

    assert.equal(buffer.offset, this.offset + this.sizeof);
    return this;
  }
}

export default KDMStructure;
