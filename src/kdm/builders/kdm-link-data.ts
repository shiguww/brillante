import PM4Buffer from "#/pm4-buffer";
import KDM from "#/kdm/structures/kdm";
import KDMBuilder from "#/kdm/builders/kdm";
import KDMLinkData from "#/kdm/structures/kdm-link-data";

class KDMLinkDataBuilder extends KDMLinkData implements KDMBuilder {
  private buildHeader(buffer: PM4Buffer): void {
    buffer.setUInt32(
      KDM.SIGNATURE_1,
      KDM.SIGNATURE_2,
      this.section0.offset / 4,
      this.section1.offset / 4,
      this.section2.offset / 4,
      this.section3.offset / 4,
      this.section4.offset / 4,
      this.section5.offset / 4,
      this.section6.offset / 4,
      this.section7.offset / 4
    );
  }

  private buildSection0(buffer: PM4Buffer): void {
    this.section0.offset = buffer.offset;
    buffer.setUInt32(this.section0.unknownA0);

    this.section0.strings.forEach((string) => {
      while (buffer.offset % 4 !== 0) {
        buffer.setUInt8(0x00);
      }

      string.offset = buffer.offset;
      buffer.setCString(string.valueOf());

      while (buffer.offset % 4 !== 0) {
        buffer.setUInt8(0x00);
      }
    });
  }

  private buildSection1(buffer: PM4Buffer): void {
    this.section1.offset = buffer.offset;
    buffer.setUInt32(this.section1.unknownB0);
  }

  private buildSection2(buffer: PM4Buffer): void {
    this.section2.offset = buffer.offset;
    buffer.setUInt32(this.section2.unknownC0);
  }

  private buildSection3(buffer: PM4Buffer): void {
    this.section3.offset = buffer.offset;

    buffer.setUInt32(
      this.section3.unknownD0,
      this.section3.unknownD1,
      this.section3.unknownD2.offset,
      this.section3.unknownD3,
      this.section3.unknownD4
    );
  }

  private buildSection4(buffer: PM4Buffer): void {
    this.section4.offset = buffer.offset;
    buffer.setUInt32(this.section4.unknownE0);
    buffer.setUInt16(this.section4.unknownE1, this.section4.unknownE2);

    buffer.setUInt32(
      this.section4.unknownE3, this.section4.unknownE4,
      this.section4.unknownE5, this.section4.unknownE6,
      this.section4.unknownE7, this.section4.unknownE8,
      this.section4.unknownE9, this.section4.unknownE10,
      this.section4.unknownE11, this.section4.unknownE12,
      this.section4.unknownE13
    );

    buffer.setUInt16(this.section4.unknownE14, this.section4.unknownE15);

    buffer.setUInt32(
      this.section4.unknownE16, this.section4.unknownE17,
      this.section4.unknownE18, this.section4.unknownE19,
      this.section4.unknownE20
    );
  }

  private buildSection5(buffer: PM4Buffer): void {
    this.section5.offset = buffer.offset;
    buffer.setUInt32(this.section5.unknownK0);

    buffer.setUInt16(
      this.section5.unknownK1, this.section5.unknownK2,
      this.section5.unknownK3, this.section5.unknownK4
    );

    // Entries without unknown metadata must be placed at the end.
    this.section5.entries.sort((a, b) => {
      if(a.unknownF1 === null && b.unknownF1 !== null) return 1;
      if(a.unknownF1 !== null && b.unknownF1 === null) return -1;
      return 0;
    });

    this.section5.entries.forEach((entry) => {
      // build subentries
      entry.subentryContainer.subentries.forEach((subentry) => {
        subentry.offset = buffer.offset;

        buffer.setUInt32(subentry.linkType, subentry.unknownH1, subentry.unknownH2);
        buffer.setUInt32(subentry.startingRoom.offset, subentry.startingTransition.offset);
        buffer.setUInt32(subentry.endingRoom.offset, subentry.endingTransition.offset);
        buffer.setUInt32(subentry.startingEvent.offset, subentry.endingEvent.offset);
        buffer.setUInt32(subentry.unknownH3);

        buffer.setUInt16(subentry.unknownH4, subentry.unknownH5);
      });

      // build subentry container
      entry.subentriesCount = 0;
      entry.subentryContainer.offset = buffer.offset;

      for (const subentry of entry.subentryContainer.subentries) {
        buffer.setUInt32(subentry.offset);
        entry.subentriesCount += 1;
      }

      buffer.setUInt32(entry.subentryContainer.unknownG0);
      buffer.setUInt16(entry.subentryContainer.unknownG1, entry.subentryContainer.unknownG2);

      // build entry
      entry.offset = buffer.offset;

      buffer.setUInt32(
        entry.unknownF0.offset,
        entry.subentryContainer.offset,
        entry.subentriesCount
      );

      if (entry.unknownF1 !== null) {
        buffer.setUInt32(entry.unknownF1);
        buffer.setUInt16(entry.unknownF2, entry.unknownF3);
      }

      this.section6.entries.push(entry);
    });
  }

  private buildSection6(buffer: PM4Buffer): void {
    this.section6.offset = buffer.offset;

    buffer.setUInt32(
      this.section6.unknownI0,
      this.section6.unknownI1.offset,
      this.section6.unknownI2,
      this.section6.unknownI3
    );

    for (const entry of this.section6.entries) {
      buffer.setUInt32(entry.offset);
    }
  }

  private buildSection7(buffer: PM4Buffer): void {
    this.section7.offset = buffer.offset;
    buffer.setUInt32(this.section7.unknownJ0);
  }

  public build(): Buffer {
    const buffer = PM4Buffer.new();

    // Leave space for signature & header, these will be done later on.
    buffer.advance(KDM.SIGNATURE_SIZE);
    buffer.advance(KDMLinkData.SECTION_COUNT * PM4Buffer.POINTER_SIZE);

    this.buildSection0(buffer);
    this.buildSection1(buffer);
    this.buildSection2(buffer);
    this.buildSection3(buffer);
    this.buildSection4(buffer);
    this.buildSection5(buffer);
    this.buildSection6(buffer);
    this.buildSection7(buffer);

    buffer.seek(0);
    this.buildHeader(buffer);

    return buffer.buffer;
  }
}

export default KDMLinkDataBuilder;
