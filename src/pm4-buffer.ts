import { Buffer } from "node:buffer";
import assert from "node:assert/strict";

interface PM4BufferParams {
  writable?: boolean;
  reallocatable?: boolean;
}

class PM4Buffer {
  public static readonly POINTER_SIZE = 4;

  public static new(): PM4Buffer;
  public static new(size: number, params?: PM4BufferParams): PM4Buffer;

  public static new(size?: number, params?: PM4BufferParams): PM4Buffer {
    if (size === undefined && params === undefined) {
      const buffer = Buffer.allocUnsafe(1);
      buffer.fill(0);

      return new PM4Buffer(buffer, {
        writable: true,
        reallocatable: true
      });
    }

    const buffer = Buffer.allocUnsafe(size || 1);
    return new PM4Buffer(buffer, params);
  }

  public static fromBuffer(_buffer: Buffer, params?: PM4BufferParams): PM4Buffer {
    if (params && params.writable) {
      _buffer = Buffer.from(_buffer);
    }

    return new PM4Buffer(_buffer, params);
  }

  private _buffer: Buffer;
  private _offset: number;
  private _params: PM4BufferParams;

  private constructor(buffer: Buffer, params: undefined | PM4BufferParams) {
    this._offset = 0;
    this._buffer = buffer;

    this._params = ({
      ...params
    });
  }

  public get size(): number {
    return this._buffer.length;
  }

  public get buffer(): Buffer {
    return this._buffer;
  }

  public get offset(): number {
    return this._offset;
  }

  public fit(size: number): this {
    if (this.size >= size) {
      return this;
    }

    return this.reallocate(size);
  }

  public advance(num: number): this {
    return this.seek(this._offset + num);
  }

  public getInt8(): number {
    const val = this._buffer.readInt8(this._offset);
    this._offset += 1;
    return val;
  }

  public getUInt8(): number {
    const val = this._buffer.readUInt8(this._offset);
    this._offset += 1;
    return val;
  }

  public getInt16(): number {
    const val = this._buffer.readInt16LE(this._offset);
    this._offset += 2;
    return val;
  }

  public getUInt16(): number {
    const val = this._buffer.readUInt16LE(this._offset);
    this._offset += 2;
    return val;
  }

  public getInt32(): number {
    const val = this._buffer.readInt32LE(this._offset);
    this._offset += 4;
    return val;
  }

  public getUInt32(): number {
    const val = this._buffer.readUInt32LE(this._offset);
    this._offset += 4;
    return val;
  }

  public getCString(): string {
    let end = this._buffer
      .findIndex((ch, i) => i >= this._offset && ch === 0);

    if (end === -1) {
      end = this._buffer.length;
    }

    const string = this._buffer
      .toString("utf8", this._offset, end);

    this._offset = end + 1;
    return string;
  }

  public reallocate(size: number): this {
    assert.ok(this._params.reallocatable);

    if (size === this._buffer.length) {
      return this;
    }

    const buf = Buffer.allocUnsafe(size);
    this._buffer.copy(buf);

    this._buffer = buf;
    return this;
  }

  public seek(offset: number): this {
    this._offset = offset;
    return this;
  }

  public setInt8(...val: number[]): this {
    assert.ok(this._params.writable);

    const ELEMENT_SIZE = 1;
    this.fit(this._offset + val.length * ELEMENT_SIZE);

    val.forEach((val) => {
      this._buffer.writeInt8(val, this._offset);
      this._offset += ELEMENT_SIZE;
    });

    return this;
  }

  public setUInt8(...val: number[]): this {
    assert.ok(this._params.writable);

    const ELEMENT_SIZE = 1;
    this.fit(this._offset + val.length * ELEMENT_SIZE);

    val.forEach((val) => {
      this._buffer.writeUInt8(val, this._offset);
      this._offset += ELEMENT_SIZE;
    });

    return this;
  }

  public setInt16(...val: number[]): this {
    assert.ok(this._params.writable);

    const ELEMENT_SIZE = 2;
    this.fit(this._offset + val.length * ELEMENT_SIZE);

    val.forEach((val) => {
      this._buffer.writeInt16LE(val, this._offset);
      this._offset += ELEMENT_SIZE;
    });

    return this;
  }

  public setUInt16(...val: number[]): this {
    assert.ok(this._params.writable);

    const ELEMENT_SIZE = 2;
    this.fit(this._offset + val.length * ELEMENT_SIZE);

    val.forEach((val) => {
      this._buffer.writeUInt16LE(val, this._offset);
      this._offset += ELEMENT_SIZE;
    });

    return this;
  }

  public setInt32(...val: number[]): this {
    assert.ok(this._params.writable);

    const ELEMENT_SIZE = 4;
    this.fit(this._offset + val.length * ELEMENT_SIZE);

    val.forEach((val) => {
      this._buffer.writeInt32LE(val, this._offset);
      this._offset += ELEMENT_SIZE;
    });

    return this;
  }

  public setUInt32(...val: number[]): this {
    assert.ok(this._params.writable);

    const ELEMENT_SIZE = 4;
    this.fit(this._offset + val.length * ELEMENT_SIZE);

    val.forEach((val) => {
      this._buffer.writeUInt32LE(val, this._offset);
      this._offset += ELEMENT_SIZE;
    });

    return this;
  }

  public setCString(...val: string[]): this {
    assert.ok(this._params.writable);

    const size = val
      .map((val) => Buffer.byteLength(val, "utf8") + 1)
      .reduce((prev, curr) => prev + curr);

    this.fit(this._offset + size);

    val.forEach((val) => {
      const size = this._buffer.write(val + "\0", this._offset, "utf8");
      this._offset += size;
    });

    return this;
  }
}

export default PM4Buffer;
