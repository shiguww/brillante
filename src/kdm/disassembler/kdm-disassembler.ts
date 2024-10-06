import RBuffer from "#buffer/r-buffer";
import assert from "node:assert/strict";

class KDMDisassembler {
  private static readonly SECTION_COUNT = 8;
  private static readonly SIGNATURE_1 = 0x524D444B;
  private static readonly SIGNATURE_2 = 0x00010100;

  public readonly types: Array<{
    id: number;
    offset: number;
    unknown0: number;
    unknown1: number;
    fields: Array<{
      name: string;
      typeid: number;
    }>
  }> = [];

  public readonly strings: Array<{
    offset: number;
    string: string;
  }> = [];

  public readonly parameters: Array<{
    id: number;
    name: string;
    value: number;
    offset: number;
    unknown0: number;
    type: "f32" | "u32";
  }> = [];

  public readonly sections: number[] = [];

  private parseHeading(buffer: RBuffer): void {
    assert.equal(buffer.getU32(), KDMDisassembler.SIGNATURE_1);
    assert.equal(buffer.getU32(), KDMDisassembler.SIGNATURE_2);

    do {
      const section = buffer.getU32() * 4;
      this.sections.push(section);
    } while (buffer.offset < this.sections.at(0)!);

    assert.equal(this.sections.length, KDMDisassembler.SECTION_COUNT);
  }

  private parseSection0(buffer: RBuffer): void {
    buffer.offset = this.sections.at(0)!;
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) {
      const offset = buffer.offset;
      const string = buffer.getCString() || "\0";

      while (buffer.offset % 4 !== 0) {
        assert.equal(buffer.getU8(), 0);
      }

      this.strings.push({ offset, string });
    }
  }

  private parseSection3(buffer: RBuffer): void {
    buffer.offset = this.sections.at(3)!;
    const count = buffer.getU32();

    for (let i = 0; i < count; i += 1) {
      const offset = buffer.offset;

      const id = buffer.getU16();
      const oid = buffer.getU16();

      const name = buffer.with(buffer.getU32(), (b) => b.getCString() || "\0");
      const unknown0 = buffer.getU32();
    
      if(oid === 0x0000) {
        const value = buffer.getF32();
        this.parameters.push({ id, name, value, offset, unknown0, type: "f32" });
      } else if(oid === 0x0001) {
        const value = buffer.getU32();
        this.parameters.push({ id, name, value, offset, unknown0, type: "u32" });
      } else {
        assert.fail();
      }
    }
  }

  private parseSection4(buffer: RBuffer): void {
    buffer.offset = this.sections.at(4)!;
    const count = buffer.getU32();

    for(let i = 0; i < count; i += 1) {
      const offset = buffer.offset;

      const id = buffer.getU16();
      const size = buffer.getU16();
      const unknown0 = buffer.getU32();
      const unknown1 = buffer.getU32();

      const fields = [];

      for(let i = 0; i < size; i += 1) {
        let name = "KDMUnknownType";
        const ftid = buffer.getU32();

        if(ftid === 0x00000000) {
          name = "KDMF32";
        }

        if(ftid === 0x00000001) {
          name = "KDMU32";
        }

        if(ftid === 0x00000002) {
          name = "KDMU32Flags";
        }

        if(ftid === 0x00000003) {
          name = "KDMStringPointer";
        }

        if(ftid === 0x00000004) {
          name = "KDMBoolean";
        }

        if(ftid === 0x00000007) {
          name = "KDMU8";
        }

        if(ftid === 0x00000008) {
          name = "KDMU16";
        }

        if(ftid === 0x0000000A) {
          name = "KDMF32ArrayPointer";
        }

        if(ftid === 0x0000000F) {
          name = "KDMObjectPointer";
        }

        if(ftid === 0x00000014) {
          name = "KDMPointerArrayPointer";
        }

        fields.push({ name, typeid: ftid });
      }

      this.types.push({ id, unknown0, unknown1, offset, fields });
    }
  }

  public parse(_buffer: Buffer): this {
    const buffer = new RBuffer(_buffer);

    this.parseHeading(buffer);
    this.parseSection0(buffer);
    this.parseSection3(buffer);
    this.parseSection4(buffer);

    return this;
  }
}

export default KDMDisassembler;
