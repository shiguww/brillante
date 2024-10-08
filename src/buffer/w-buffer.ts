import { Buffer } from "node:buffer";
import RBuffer from "#/buffer/r-buffer";

class WBuffer extends RBuffer {
  public static new(size: number): WBuffer {
    return new WBuffer(Buffer.allocUnsafe(size));
  }

  public set(data: number[]): this {
    if(this.offset + data.length > this.size) {
      this.reallocate(this.offset + data.length);
    }

    data.forEach((data) => {
      this.buffer.writeUInt8(data, this.offset);
      this.offset += WBuffer.U8_SIZE;
    });
    
    return this;
  }

  public setI8(num: number): this {
    if(this.offset + WBuffer.I8_SIZE > this.size) {
      this.reallocate(this.offset + WBuffer.I8_SIZE);
    }

    this.buffer.writeInt8(num, this.offset);
    this.offset += WBuffer.I8_SIZE;

    return this;
  }

  public setU8(num: number): this {
    if(this.offset + WBuffer.U8_SIZE > this.size) {
      this.reallocate(this.offset + WBuffer.U8_SIZE);
    }

    this.buffer.writeUInt8(num, this.offset);
    this.offset += WBuffer.U8_SIZE;

    return this;
  }

  public setI16(num: number): this {
    if(this.offset + WBuffer.I16_SIZE > this.size) {
      this.reallocate(this.offset + WBuffer.I16_SIZE);
    }

    if(this.endianness === "BE") {
      this.buffer.writeInt16BE(num, this.offset);
    }

    if(this.endianness === "LE") {
      this.buffer.writeInt16LE(num, this.offset);
    }

    this.offset += WBuffer.I16_SIZE;
    return this;
  }

  public setU16(num: number): this {
    if(this.offset + WBuffer.U16_SIZE > this.size) {
      this.reallocate(this.offset + WBuffer.U16_SIZE);
    }

    if(this.endianness === "BE") {
      this.buffer.writeUInt16BE(num, this.offset);
    }

    if(this.endianness === "LE") {
      this.buffer.writeUInt16LE(num, this.offset);
    }

    this.offset += WBuffer.U16_SIZE;
    return this;
  }

  public setF32(num: number): this {
    if(this.offset + WBuffer.F32_SIZE > this.size) {
      this.reallocate(this.offset + WBuffer.F32_SIZE);
    }

    if(this.endianness === "BE") {
      this.buffer.writeFloatBE(num, this.offset);
    }

    if(this.endianness === "LE") {
      this.buffer.writeFloatLE(num, this.offset);
    }

    this.offset += WBuffer.F32_SIZE;
    return this;
  }

  public setI32(num: number): this {
    if(this.offset + WBuffer.I32_SIZE > this.size) {
      this.reallocate(this.offset + WBuffer.I32_SIZE);
    }

    if(this.endianness === "BE") {
      this.buffer.writeInt32BE(num, this.offset);
    }

    if(this.endianness === "LE") {
      this.buffer.writeInt32LE(num, this.offset);
    }

    this.offset += WBuffer.I32_SIZE;
    return this;
  }

  public setU32(num: number): this {
    if(this.offset + WBuffer.U32_SIZE > this.size) {
      this.reallocate(this.offset + WBuffer.U32_SIZE);
    }

    if(this.endianness === "BE") {
      this.buffer.writeUInt32BE(num, this.offset);
    }

    if(this.endianness === "LE") {
      this.buffer.writeUInt32LE(num, this.offset);
    }

    this.offset += WBuffer.U32_SIZE;
    return this;
  }

  public setCString(string: string): this {
    const size = Buffer.byteLength(string + "\0");

    if(this.offset + size > this.size) {
      this.reallocate(this.offset + size);
    }

    this.buffer.write(string + "\0", this.offset, "utf8");
    this.offset += size;

    return this;
  }

  public reallocate(size: number): this {
    const other = Buffer.allocUnsafe(size);
    
    this.buffer.copy(other);
    this.buffer = other;

    return this;
  }
}

export default WBuffer;
