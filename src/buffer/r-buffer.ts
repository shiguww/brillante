import { Buffer } from "node:buffer";

type RBufferEndianness = "BE" | "LE";

interface RBufferParams {
  endianness: RBufferEndianness;
}

class RBuffer {
  public static readonly I8_SIZE = 1;
  public static readonly U8_SIZE = 1;
  public static readonly I16_SIZE = 2;
  public static readonly I32_SIZE = 4;
  public static readonly U16_SIZE = 2;
  public static readonly U32_SIZE = 4;
  public static readonly F32_SIZE = 4;

  public buffer: Buffer;
  public offset: number;
  private readonly params: RBufferParams;

  public constructor(data: string | number[] | Buffer, params?: RBufferParams) {
    this.offset = 0;
    this.buffer = Buffer.from(data);
    this.params = params || { endianness: "LE" };
  }

  public get size(): number {
    return this.buffer.length;
  }

  public get endianness(): RBufferEndianness {
    return this.params.endianness;
  }

  public set endianness(endianness: RBufferEndianness) {
    this.params.endianness = endianness;
  }

  public get(size: number): number[] {
    if (this.offset + size > this.size) {
      throw new RangeError(`${this.constructor.name}: out of bounds`);
    }

    const subarray = this.buffer
      .subarray(this.offset, this.offset + size);

    this.offset += subarray.length;
    return Array.from(subarray.values());
  }

  public getI8(): number {
    if (this.offset + RBuffer.I8_SIZE > this.size) {
      throw new RangeError(`${this.constructor.name}: out of bounds`);
    }

    const num = this.buffer.readInt8(this.offset);
    this.offset += RBuffer.I8_SIZE;
    return num;
  }

  public getU8(): number {
    if (this.offset + RBuffer.U8_SIZE > this.size) {
      throw new RangeError(`${this.constructor.name}: out of bounds`);
    }

    const num = this.buffer.readUInt8(this.offset);
    this.offset += RBuffer.U8_SIZE;
    return num;
  }

  public getI16(): number {
    if (this.offset + RBuffer.I16_SIZE > this.size) {
      throw new RangeError(`${this.constructor.name}: out of bounds`);
    }

    const num = (this.endianness === "BE"
      ? this.buffer.readInt16BE(this.offset)
      : this.buffer.readInt16LE(this.offset)
    );

    this.offset += RBuffer.I16_SIZE;
    return num;
  }

  public getU16(): number {
    if (this.offset + RBuffer.U16_SIZE > this.size) {
      throw new RangeError(`${this.constructor.name}: out of bounds`);
    }

    const num = (this.endianness === "BE"
      ? this.buffer.readUInt16BE(this.offset)
      : this.buffer.readUInt16LE(this.offset)
    );

    this.offset += RBuffer.U16_SIZE;
    return num;
  }

  public getF32(): number {
    if (this.offset + RBuffer.F32_SIZE > this.size) {
      throw new RangeError(`${this.constructor.name}: out of bounds`);
    }

    const num = (this.endianness === "BE"
      ? this.buffer.readFloatBE(this.offset)
      : this.buffer.readFloatLE(this.offset));

    this.offset += RBuffer.F32_SIZE;
    return num;
  }

  public getI32(): number {
    if (this.offset + RBuffer.I32_SIZE > this.size) {
      throw new RangeError(`${this.constructor.name}: out of bounds`);
    }

    const num = (this.endianness === "BE"
      ? this.buffer.readInt32BE(this.offset)
      : this.buffer.readInt32LE(this.offset)
    );

    this.offset += RBuffer.I32_SIZE;
    return num;
  }

  public getU32(): number {
    if (this.offset + RBuffer.U32_SIZE > this.size) {
      throw new RangeError(`${this.constructor.name}: out of bounds`);
    }
    
    const num = (this.endianness === "BE"
      ? this.buffer.readUInt32BE(this.offset)
      : this.buffer.readUInt32LE(this.offset)
    );

    this.offset += RBuffer.U32_SIZE;
    return num;
  }

  public getCString(): string {
    if(this.offset >= this.size) {
      throw new RangeError(`${this.constructor.name}: out of bounds`);
    }

    const endIndex = this.buffer
      .findIndex((ch, index) => index >= this.offset && ch === 0);

    if (endIndex === -1) {
      const string = this.buffer.toString("utf8", this.offset);
      this.offset = this.size;
      return string;
    }

    const string = this.buffer.toString("utf8", this.offset, endIndex);
    this.offset = endIndex + 1;
    return string;
  }

  public with<T>(offset: number, fn: (buf: this) => T): T {
    const oldOffset = this.offset;

    this.offset = offset;
    const result = fn(this);

    this.offset = oldOffset;
    return result;
  }
}

export default RBuffer;
