import PM4Buffer from "#/pm4-buffer";
import KDM from "#/kdm/structures/kdm";
import assert from "node:assert/strict";
import KDMString from "#/kdm/kdm-string";
import KDMParser from "#/kdm/parsers/kdm";
import KDMPointer from "#/kdm/kdm-pointer";
import KDMLinkData from "#/kdm/structures/kdm-link-data";

class KDMLinkDataParser extends KDMLinkData implements KDMParser {
  private parseHeader(buffer: PM4Buffer): void {
    buffer.seek(0);

    assert.equal(buffer.getUInt32(), KDM.SIGNATURE_1);
    assert.equal(buffer.getUInt32(), KDM.SIGNATURE_2);

    const sectionOffsets = [] as number[];

    do {
      sectionOffsets.push(buffer.getUInt32() * 4);
    } while (buffer.offset < sectionOffsets.at(0)!);

    assert.equal(sectionOffsets.length, KDMLinkData.SECTION_COUNT);

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

    this.section4.unknownE14 = buffer.getUInt16();
    this.section4.unknownE15 = buffer.getUInt16();

    this.section4.unknownE16 = buffer.getUInt32();
    this.section4.unknownE17 = buffer.getUInt32();
    this.section4.unknownE18 = buffer.getUInt32();
    this.section4.unknownE19 = buffer.getUInt32();
    this.section4.unknownE20 = buffer.getUInt32();
  }

  private parseSection5(buffer: PM4Buffer): void {
    buffer.seek(this.section5.offset);
    assert(this.section6.entries.length !== 0);

    this.section5.unknownK0 = buffer.getUInt32();

    this.section5.unknownK1 = buffer.getUInt16();
    this.section5.unknownK2 = buffer.getUInt16();
    this.section5.unknownK3 = buffer.getUInt16();
    this.section5.unknownK4 = buffer.getUInt16();

    // parse entries
    this.section6.entries.forEach((pointer) => {
      buffer.seek(pointer.offset);
      const unknownF0 = this.findStringWithOffset(buffer.getUInt32());

      const subentryContainer = KDMPointer({
        unknownG0: 0,
        unknownG1: 0,
        unknownG2: 0,
        subentries: []
      }, buffer.getUInt32());

      const subentriesCount = buffer.getUInt32();

      if (buffer.offset >= this.section6.offset) {
        const unknownF1 = null;
        const unknownF2 = null;
        const unknownF3 = null;

        const entry = KDMPointer({
          unknownF0, subentriesCount,
          subentryContainer, unknownF1,
          unknownF2, unknownF3
        }, pointer.offset);

        this.section5.entries.push(entry);
      } else {
        const unknownF1 = buffer.getUInt32();
        const unknownF2 = buffer.getUInt16();
        const unknownF3 = buffer.getUInt16();

        const entry = KDMPointer({
          unknownF0, subentriesCount,
          subentryContainer, unknownF1,
          unknownF2, unknownF3
        }, pointer.offset);

        this.section5.entries.push(entry);
      }
    });

    // parse subentry containers
    this.section5.entries.forEach((entry) => {
      buffer.seek(entry.subentryContainer.offset);

      for (let i = 0; i < entry.subentriesCount; i += 1) {
        entry.subentryContainer.subentries.push(KDMPointer({
          linkType: 0,
          unknownH1: 0,
          unknownH2: 0,
          unknownH3: 0,
          unknownH4: 0,
          unknownH5: 0,
          endingRoom: KDMString.NULL,
          endingEvent: KDMString.NULL,
          startingRoom: KDMString.NULL,
          startingEvent: KDMString.NULL,
          endingTransition: KDMString.NULL,
          startingTransition: KDMString.NULL
        }, buffer.getUInt32()));
      }

      entry.subentryContainer.unknownG0 = buffer.getUInt32();

      entry.subentryContainer.unknownG1 = buffer.getUInt16();
      entry.subentryContainer.unknownG2 = buffer.getUInt16();
    });

    // parse subentries
    this.section5.entries.map((entry) => entry.subentryContainer.subentries).flat().forEach((subentry) => {
      buffer.seek(subentry.offset);

      subentry.linkType = buffer.getUInt32();
      subentry.unknownH1 = buffer.getUInt32();
      subentry.unknownH2 = buffer.getUInt32();

      subentry.startingRoom = this.findStringWithOffset(buffer.getUInt32());
      subentry.startingTransition = this.findStringWithOffset(buffer.getUInt32());

      subentry.endingRoom = this.findStringWithOffset(buffer.getUInt32());
      subentry.endingTransition = this.findStringWithOffset(buffer.getUInt32());

      subentry.startingEvent = this.findStringWithOffset(buffer.getUInt32());
      subentry.endingEvent = this.findStringWithOffset(buffer.getUInt32());

      subentry.unknownH3 = buffer.getUInt32();

      subentry.unknownH4 = buffer.getUInt16();
      subentry.unknownH5 = buffer.getUInt16();
    });
  }

  private parseSection6(buffer: PM4Buffer): void {
    buffer.seek(this.section6.offset);

    this.section6.unknownI0 = buffer.getUInt32();
    this.section6.unknownI1 = this.findStringWithOffset(buffer.getUInt32());
    this.section6.unknownI2 = buffer.getUInt32();
    this.section6.unknownI3 = buffer.getUInt32();

    while (buffer.offset < this.section7.offset) {
      const entry = KDMPointer({}, buffer.getUInt32());
      this.section6.entries.push(entry);
    }
  }

  private parseSection7(buffer: PM4Buffer): void {
    buffer.seek(this.section7.offset);
    this.section7.unknownJ0 = buffer.getUInt32();
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

export default KDMLinkDataParser;
