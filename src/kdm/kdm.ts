import PM4Buffer from "#/pm4-buffer";
import assert from "node:assert/strict";
import KDMString from "#/kdm/kdm-string";

abstract class KDM<T extends object> {
  protected static readonly SIGNATURE_SIZE = 8;
  protected static readonly SIGNATURE_1 = 0x524D444B;
  protected static readonly SIGNATURE_2 = 0x00010100;

  protected abstract section0: { offset: number; strings: KDMString[] };

  public abstract toJSON(): T;
  public abstract build(): Buffer;
  public abstract parse(buffer: Buffer): this;

  protected buildHeader(buffer: PM4Buffer, sections: ({ offset: number })[]): void {
    buffer.seek(0);
    buffer.setUInt32(KDM.SIGNATURE_1, KDM.SIGNATURE_2);

    for (let i = 0; i < sections.length; i += 1) {
      const section = sections.at(i)!;

      assert(
        section.offset % 4 === 0,
        `The offset of section ${i} is ${section.offset} which is not a multiple of 4.`
      );

      buffer.setUInt32(section.offset / 4);
    }
  }

  protected parseHeader(buffer: PM4Buffer): number[] {
    buffer.seek(0);

    assert.equal(buffer.getUInt32(), KDM.SIGNATURE_1);
    assert.equal(buffer.getUInt32(), KDM.SIGNATURE_2);

    const sections: number[] = [];

    do {
      const offset = buffer.getUInt32() * 4;
      sections.push(offset);
    } while (buffer.offset < sections.at(0)!);

    return sections;
  }

  protected findOffsetOfString(string: string): number {
    const found = this.section0.strings
      .find((s) => s.string === string);

    if(found === undefined) {
      console.warn(`Could not find string '${string}'. Returning NULL instead.`);
      return 0;
    }

    return found.offset;
  }

  protected findStringAtOffset(offset: number): string {
    const found = this.section0.strings
      .find((s) => s.offset === offset);

    if(found === undefined) {
      const _offset = `0x${offset.toString(16).padStart(8, "0").toUpperCase()}`;
      console.warn(`Could not find a string with offset ${_offset}. Returning empty string instead.`);
      return "";
    }

    return found.string;
  }

  protected registerString(string: string, offset?: number): void {
    this.section0.strings.push({ string, offset: offset || 0 });
  }

  protected registerStringIfNotExists(string: string, offset?: number): void {
    if (string === "" || this.section0.strings.find((s) => s.string === string)) {
      return;
    }

    return this.registerString(string, offset);
  }
}

export default KDM;
