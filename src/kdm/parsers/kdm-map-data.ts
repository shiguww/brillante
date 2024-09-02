import PM4Buffer from "#/pm4-buffer";
import KDM from "#/kdm/structures/kdm";
import assert from "node:assert/strict";
import KDMParser from "#/kdm/parsers/kdm";
import KDMPointer from "#/kdm/kdm-pointer";
import KDMMapData from "#/kdm/structures/kdm-map-data";

class KDMMapDataParser extends KDMMapData implements KDMParser {
  private parseHeader(buffer: PM4Buffer): void {
    buffer.seek(0);

    assert.equal(buffer.getUInt32(), KDM.SIGNATURE_1);
    assert.equal(buffer.getUInt32(), KDM.SIGNATURE_2);

    const sectionOffsets = [] as number[];

    do {
      sectionOffsets.push(buffer.getUInt32() * 4);
    } while (buffer.offset < sectionOffsets.at(0)!);

    assert.equal(sectionOffsets.length, KDMMapData.SECTION_COUNT);

    this.section0.offset = sectionOffsets.at(0)!;
    this.section1.offset = sectionOffsets.at(1)!;
    this.section2.offset = sectionOffsets.at(2)!;
    this.section3.offset = sectionOffsets.at(3)!;
    this.section4.offset = sectionOffsets.at(4)!;
    this.section5.offset = sectionOffsets.at(5)!;
    this.section6.offset = sectionOffsets.at(6)!;
    this.section7.offset = sectionOffsets.at(7)!;
  }

  private parseSection0(buffer: PM4Buffer): void {
    buffer.seek(this.section0.offset);
    this.section0.unknownA0 = buffer.getUInt32();

    while (buffer.offset < this.section1.offset) {
      const offset = buffer.offset;
      const string = buffer.getCString();

      this.registerString(string, offset);
    }
  }

  private parseSection1(buffer: PM4Buffer): void {
    buffer.seek(this.section1.offset);
    this.section1.unknownB0 = buffer.getUInt32();
  }

  private parseSection2(buffer: PM4Buffer): void {
    buffer.seek(this.section2.offset);
    this.section2.unknownC0 = buffer.getUInt32();
  }

  private parseSection3(buffer: PM4Buffer): void {
    buffer.seek(this.section3.offset);

    this.section3.unknownD0 = buffer.getUInt32();
    this.section3.unknownD1 = buffer.getUInt32();
    this.section3.unknownD2 = this.findStringWithOffset(buffer.getUInt32());
    this.section3.unknownD3 = buffer.getUInt32();
    this.section3.unknownD4 = buffer.getUInt32();
  }

  private parseSection4(buffer: PM4Buffer): void {
    buffer.seek(this.section4.offset);

    this.section4.unknownE0 = buffer.getUInt32();
    this.section4.unknownE1 = buffer.getUInt16();
    this.section4.unknownE2 = buffer.getUInt16();
    this.section4.unknownE3 = buffer.getUInt32();
    this.section4.unknownE4 = buffer.getUInt32();
    this.section4.unknownE5 = buffer.getUInt32();
    this.section4.unknownE6 = buffer.getUInt32();
    this.section4.unknownE7 = buffer.getUInt32();
    this.section4.unknownE8 = buffer.getUInt32();
    this.section4.unknownE9 = buffer.getUInt32();
    this.section4.unknownE10 = buffer.getUInt32();
    this.section4.unknownE11 = buffer.getUInt32();
    this.section4.unknownE12 = buffer.getUInt32();
    this.section4.unknownE13 = buffer.getUInt32();
    this.section4.unknownE14 = buffer.getUInt32();
    this.section4.unknownE15 = buffer.getUInt32();
    this.section4.unknownE16 = buffer.getUInt32();
    this.section4.unknownE17 = buffer.getUInt32();
    this.section4.unknownE18 = buffer.getUInt32();
    this.section4.unknownE19 = buffer.getUInt32();
    this.section4.unknownE20 = buffer.getUInt32();
    this.section4.unknownE21 = buffer.getUInt32();
  }

  private parseSection5(buffer: PM4Buffer): void {
    buffer.seek(this.section5.offset);
    assert(this.section6.entries.length !== 0);

    this.section5.unknownF0 = buffer.getUInt32();
    this.section5.unknownF1 = buffer.getUInt16();
    this.section5.unknownF2 = buffer.getUInt16();
    this.section5.unknownF3 = buffer.getUInt16();
    this.section5.unknownF4 = buffer.getUInt16();

    this.section6.entries.forEach((pointer) => {
      buffer.seek(pointer.offset);

      const name = this.findStringWithOffset(buffer.getUInt32());
      const level = this.findStringWithOffset(buffer.getUInt32());
      const model = this.findStringWithOffset(buffer.getUInt32());

      const unknownG0 = buffer.getUInt32();
      const unknownG1 = buffer.getUInt32();
      const unknownG2 = buffer.getUInt32();

      const background1 = this.findStringWithOffset(buffer.getUInt32());
      const background2 = this.findStringWithOffset(buffer.getUInt32());
      const script = this.findStringWithOffset(buffer.getUInt32());

      const unknownG5 = buffer.getUInt32();

      const music = this.findStringWithOffset(buffer.getUInt32());
      const unknownG6 = this.findStringWithOffset(buffer.getUInt32());

      const unknownG7 = buffer.getUInt32();
      const unknownG8 = buffer.getUInt32();
      const unknownG9 = buffer.getUInt32();

      const unknownG10 = this.findStringWithOffset(buffer.getUInt32());
      const unknownG11 = this.findStringWithOffset(buffer.getUInt32());

      const unknownG12 = buffer.getUInt32();

      if (buffer.offset < this.section6.offset) {
        const unknownG13 = buffer.getUInt16();
        const unknownG14 = buffer.getUInt16();
        const unknownG15 = buffer.getUInt16();
        const unknownG16 = buffer.getUInt16();

        this.section5.entries.push(KDMPointer({
          unknownG9, script, music,
          name, level, model, unknownG0,
          background1, background2, unknownG5,
          unknownG6, unknownG7, unknownG8,
          unknownG1, unknownG10, unknownG11,
          unknownG15, unknownG16, unknownG2,
          unknownG12, unknownG13, unknownG14
        }, pointer.offset));
      } else {
        const unknownG13 = null;
        const unknownG14 = null;
        const unknownG15 = null;
        const unknownG16 = null;

        this.section5.entries.push(KDMPointer({
          unknownG9, script, music,
          name, level, model, unknownG0,
          background1, background2, unknownG5,
          unknownG6, unknownG7, unknownG8,
          unknownG1, unknownG10, unknownG11,
          unknownG15, unknownG16, unknownG2,
          unknownG12, unknownG13, unknownG14
        }, pointer.offset));
      }

    });
  }

  private parseSection6(buffer: PM4Buffer): void {
    buffer.seek(this.section6.offset);

    this.section6.unknownH0 = buffer.getUInt32();
    this.section6.unknownH1 = this.findStringWithOffset(buffer.getUInt32());
    this.section6.unknownH2 = buffer.getUInt32();
    this.section6.unknownH3 = buffer.getUInt32();

    while (buffer.offset < this.section7.offset) {
      const pointer = KDMPointer({}, buffer.getUInt32());

      if(pointer.offset === 0) {
        break;
      }

      this.section6.entries.push(pointer);
    }
  }

  private parseSection7(buffer: PM4Buffer): void {
    buffer.seek(this.section7.offset);
    this.section7.unknownI0 = buffer.getUInt32();
  }

  public parse(_buffer: Buffer): this {
    const buffer = PM4Buffer.fromBuffer(_buffer);

    this.parseHeader(buffer);
    this.parseSection0(buffer);
    this.parseSection1(buffer);
    this.parseSection2(buffer);
    this.parseSection3(buffer);
    this.parseSection4(buffer);
    this.parseSection6(buffer);
    this.parseSection5(buffer);
    this.parseSection7(buffer);

    return this;
  }
}

export default KDMMapDataParser;
