import PM4Buffer from "#/pm4-buffer";
import KDM from "#/kdm/structures/kdm";
import KDMBuilder from "#/kdm/builders/kdm";
import KDMMapData from "#/kdm/structures/kdm-map-data";

class KDMMapDataBuilder extends KDMMapData implements KDMBuilder {
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

    buffer.setUInt16(
      this.section4.unknownE1,
      this.section4.unknownE2
    );

    buffer.setUInt32(
      this.section4.unknownE3,
      this.section4.unknownE4,
      this.section4.unknownE5,
      this.section4.unknownE6,
      this.section4.unknownE7,
      this.section4.unknownE8,
      this.section4.unknownE9,
      this.section4.unknownE10,
      this.section4.unknownE11,
      this.section4.unknownE12,
      this.section4.unknownE13,
      this.section4.unknownE14,
      this.section4.unknownE15,
      this.section4.unknownE16,
      this.section4.unknownE17,
      this.section4.unknownE18,
      this.section4.unknownE19,
      this.section4.unknownE20,
      this.section4.unknownE21,
      this.section4.unknownE22
    );
  }

  private buildSection5(buffer: PM4Buffer): void {
    this.section5.offset = buffer.offset;
    buffer.setUInt32(this.section5.unknownF0);

    buffer.setUInt16(
      this.section5.unknownF1,
      this.section5.unknownF2,
      this.section5.unknownF3,
      this.section5.unknownF4
    );

    this.section5.entries.forEach((entry) => {
      entry.offset = buffer.offset;
      this.section6.entries.push(entry);

      buffer.setUInt32(
        entry.name.offset,
        entry.level.offset,
        entry.model.offset,
        entry.unknownG0,
        entry.unknownG1,
        entry.unknownG2,
        entry.background1.offset,
        entry.background2.offset,
        entry.script.offset,
        entry.unknownG5,
        entry.music.offset,
        entry.unknownG6.offset,
        entry.unknownG7,
        entry.unknownG8,
        entry.unknownG9,
        entry.unknownG10.offset,
        entry.unknownG11.offset,
        entry.unknownG12
      );

      buffer.setUInt16(
        entry.unknownG13,
        entry.unknownG14,
        entry.unknownG15,
        entry.unknownG16
      );
    });
  }

  private buildSection6(buffer: PM4Buffer): void {
    this.section6.offset = buffer.offset;

    buffer.setUInt32(
      this.section6.unknownH0,
      this.section6.unknownH1.offset,
      this.section6.unknownH2,
      this.section6.unknownH3
    );

    this.section6.entries.forEach((entry) => {
      buffer.setUInt32(entry.offset);
    });
  }

  private buildSection7(buffer: PM4Buffer): void {
    this.section7.offset = buffer.offset;
    buffer.setUInt32(this.section7.offset);
  }
  
  public build(): Buffer {
    const buffer = PM4Buffer.new();

    // Leave space for signature & header, these will be done later on.
    buffer.advance(KDM.SIGNATURE_SIZE);
    buffer.advance(KDMMapData.SECTION_COUNT * PM4Buffer.POINTER_SIZE);

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

export default KDMMapDataBuilder;
