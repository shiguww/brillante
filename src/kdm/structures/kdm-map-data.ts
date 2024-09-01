import z from "zod";
import KDM from "#/kdm/structures/kdm";
import KDMString from "#/kdm/kdm-string";
import KDMPointer from "#/kdm/kdm-pointer";

const KDMMapDataExportSection0 = z.object({
  unknownA0: z.number()
});

type KDMMapDataExportSection0 = z.infer<typeof KDMMapDataExportSection0>;

const KDMMapDataExportSection1 = z.object({
  unknownB0: z.number()
});

type KDMMapDataExportSection1 = z.infer<typeof KDMMapDataExportSection1>;

const KDMMapDataExportSection2 = z.object({
  unknownC0: z.number()
});

type KDMMapDataExportSection2 = z.infer<typeof KDMMapDataExportSection2>;

const KDMMapDataExportSection3 = z.object({
  unknownD0: z.number(),
  unknownD1: z.number(),
  unknownD2: z.string(),
  unknownD3: z.number(),
  unknownD4: z.number()
});

type KDMMapDataExportSection3 = z.infer<typeof KDMMapDataExportSection3>;

const KDMMapDataExportSection4 = z.object({
  unknownE0: z.number(),
  unknownE1: z.number(),
  unknownE2: z.number(),
  unknownE3: z.number(),
  unknownE4: z.number(),
  unknownE5: z.number(),
  unknownE6: z.number(),
  unknownE7: z.number(),
  unknownE8: z.number(),
  unknownE9: z.number(),
  unknownE10: z.number(),
  unknownE11: z.number(),
  unknownE12: z.number(),
  unknownE13: z.number(),
  unknownE14: z.number(),
  unknownE15: z.number(),
  unknownE16: z.number(),
  unknownE17: z.number(),
  unknownE18: z.number(),
  unknownE19: z.number(),
  unknownE20: z.number(),
  unknownE21: z.number(),
  unknownE22: z.number()
});

type KDMMapDataExportSection4 = z.infer<typeof KDMMapDataExportSection4>;

const KDMMapDataExportSection5Entry = z.object({
  name: z.string(),
  level: z.string(),
  model: z.string(),
  music: z.string(),
  script: z.string(),
  unknownG0: z.number(),
  unknownG1: z.number(),
  unknownG2: z.number(),
  background: z.discriminatedUnion("type", [
    z.object({ type: z.literal("none") }),
    z.object({ type: z.literal("color"), color: z.string() }),
    z.object({ type: z.literal("texture"), texture1: z.string(), texture2: z.string() })
  ]),
  unknownG5: z.number(),
  unknownG6: z.string(),
  unknownG7: z.number(),
  unknownG8: z.number(),
  unknownG9: z.number(),
  unknownG10: z.string(),
  unknownG11: z.string(),
  unknownG12: z.number(),
  unknownG13: z.number(),
  unknownG14: z.number(),
  unknownG15: z.number(),
  unknownG16: z.number()
});

type KDMMapDataExportSection5Entry = z.infer<typeof KDMMapDataExportSection5Entry>;

const KDMMapDataExportSection5 = z.object({
  unknownF0: z.number(),
  unknownF1: z.number(),
  unknownF2: z.number(),
  unknownF3: z.number(),
  unknownF4: z.number(),
  entries: KDMMapDataExportSection5Entry.array()
});

type KDMMapDataExportSection5 = z.infer<typeof KDMMapDataExportSection5>;

const KDMMapDataExportSection6 = z.object({
  unknownH0: z.number(),
  unknownH1: z.string(),
  unknownH2: z.number(),
  unknownH3: z.number(),
});

type KDMMapDataExportSection6 = z.infer<typeof KDMMapDataExportSection6>;

const KDMMapDataExportSection7 = z.object({
  unknownI0: z.number()
});

type KDMMapDataExportSection7 = z.infer<typeof KDMMapDataExportSection7>;

const KDM_MAP_DATA_EXPORT_VERSION = 1;

const KDMMapDataExport = z.object({
  _version: z.literal(KDM_MAP_DATA_EXPORT_VERSION),
  section0: KDMMapDataExportSection0,
  section1: KDMMapDataExportSection1,
  section2: KDMMapDataExportSection2,
  section3: KDMMapDataExportSection3,
  section4: KDMMapDataExportSection4,
  section5: KDMMapDataExportSection5,
  section6: KDMMapDataExportSection6,
  section7: KDMMapDataExportSection7
});

type KDMMapDataExport = z.infer<typeof KDMMapDataExport>;

//

type KDMMapDataSection0 = KDMPointer<{
  unknownA0: number;
  strings: KDMString[];
}>;

type KDMMapDataSection1 = KDMPointer<{
  unknownB0: number;
}>;

type KDMMapDataSection2 = KDMPointer<{
  unknownC0: number;
}>;

type KDMMapDataSection3 = KDMPointer<{
  unknownD0: number;
  unknownD1: number;
  unknownD3: number;
  unknownD4: number;
  unknownD2: KDMString;
}>;

type KDMMapDataSection4 = KDMPointer<{
  unknownE0: number;
  unknownE1: number;
  unknownE2: number;
  unknownE3: number;
  unknownE4: number;
  unknownE5: number;
  unknownE6: number;
  unknownE7: number;
  unknownE8: number;
  unknownE9: number;
  unknownE10: number;
  unknownE11: number;
  unknownE12: number;
  unknownE13: number;
  unknownE14: number;
  unknownE15: number;
  unknownE16: number;
  unknownE17: number;
  unknownE18: number;
  unknownE19: number;
  unknownE20: number;
  unknownE21: number;
  unknownE22: number;
}>;

type KDMMapDataSection5Entry = KDMPointer<{
  name: KDMString;
  level: KDMString;
  model: KDMString;
  music: KDMString;
  script: KDMString;
  unknownG0: number;
  unknownG1: number;
  unknownG2: number;
  unknownG5: number;
  unknownG7: number;
  unknownG8: number;
  unknownG9: number;
  unknownG12: number;
  unknownG13: number;
  unknownG14: number;
  unknownG15: number;
  unknownG16: number;
  unknownG6: KDMString;
  unknownG10: KDMString;
  unknownG11: KDMString;
  background1: KDMString;
  background2: KDMString;
}>;

type KDMMapDataSection5 = KDMPointer<{
  unknownF0: number;
  unknownF1: number;
  unknownF2: number;
  unknownF3: number;
  unknownF4: number;
  entries: KDMMapDataSection5Entry[];
}>;

type KDMMapDataSection6 = KDMPointer<{
  unknownH0: number;
  unknownH2: number;
  unknownH3: number;
  unknownH1: KDMString;
  entries: KDMPointer[];
}>;

type KDMMapDataSection7 = KDMPointer<{
  unknownI0: number;
}>;

class KDMMapData extends KDM<KDMMapDataExport> {
  protected static readonly SECTION_COUNT = 8;

  protected section1: KDMMapDataSection1;
  protected section2: KDMMapDataSection2;
  protected section3: KDMMapDataSection3;
  protected section4: KDMMapDataSection4;
  protected section5: KDMMapDataSection5;
  protected section6: KDMMapDataSection6;
  protected section7: KDMMapDataSection7;
  protected override section0: KDMMapDataSection0;

  public constructor() {
    super();

    this.section0 = KDMPointer({
      strings: [],
      unknownA0: 0
    });

    this.section1 = KDMPointer({
      unknownB0: 0
    });

    this.section2 = KDMPointer({
      unknownC0: 0
    });

    this.section3 = KDMPointer({
      unknownD0: 0,
      unknownD1: 0,
      unknownD3: 0,
      unknownD4: 0,
      unknownD2: KDMString.NULL
    });

    this.section4 = KDMPointer({
      unknownE0: 0,
      unknownE1: 0,
      unknownE2: 0,
      unknownE3: 0,
      unknownE4: 0,
      unknownE5: 0,
      unknownE6: 0,
      unknownE7: 0,
      unknownE8: 0,
      unknownE9: 0,
      unknownE10: 0,
      unknownE11: 0,
      unknownE12: 0,
      unknownE13: 0,
      unknownE14: 0,
      unknownE15: 0,
      unknownE16: 0,
      unknownE17: 0,
      unknownE18: 0,
      unknownE19: 0,
      unknownE20: 0,
      unknownE21: 0,
      unknownE22: 0
    });

    this.section5 = KDMPointer({
      entries: [],
      unknownF0: 0,
      unknownF1: 0,
      unknownF2: 0,
      unknownF3: 0,
      unknownF4: 0
    });

    this.section6 = KDMPointer({
      entries: [],
      unknownH0: 0,
      unknownH2: 0,
      unknownH3: 0,
      unknownH1: KDMString.NULL
    });

    this.section7 = KDMPointer({
      unknownI0: 0
    });
  }

  private exportSection0(): KDMMapDataExportSection0 {
    return this.section0;
  }

  private exportSection1(): KDMMapDataExportSection1 {
    return this.section1;
  }

  private exportSection2(): KDMMapDataExportSection2 {
    return this.section2;
  }

  private exportSection3(): KDMMapDataExportSection3 {
    return ({
      ...this.section3,
      unknownD2: this.section3.unknownD2.valueOf()
    });
  }

  private exportSection4(): KDMMapDataExportSection4 {
    return this.section4;
  }

  private exportSection5(): KDMMapDataExportSection5 {
    return ({
      ...this.section5,
      entries: this.section5.entries.map((entry) => {
        let background: KDMMapDataExportSection5Entry["background"] = {
          type: "none"
        };

        if(entry.background1.valueOf() === "<color>") {
          background = { type: "color", color: entry.background2.valueOf() };
        } else if(entry.background1.valueOf() !== "" || entry.background2.valueOf() !== "") {
          background = { type: "texture", texture1: entry.background1.valueOf(), texture2: entry.background2.valueOf() };
        }

        return ({
          ...entry,
          background,
          name: entry.name.valueOf(),
          level: entry.level.valueOf(),
          model: entry.model.valueOf(),
          music: entry.music.valueOf(),
          script: entry.script.valueOf(),
          unknownG6: entry.unknownG6.valueOf(),
          unknownG10: entry.unknownG10.valueOf(),
          unknownG11: entry.unknownG11.valueOf()
        });
      })
    });
  }

  private exportSection6(): KDMMapDataExportSection6 {
    return ({
      ...this.section6,
      unknownH1: this.section6.unknownH1.valueOf()
    });
  }

  private exportSection7(): KDMMapDataExportSection7 {
    return this.section7;
  }

  public override export(): KDMMapDataExport {
    return KDMMapDataExport.parse({
      _version: KDM_MAP_DATA_EXPORT_VERSION,
      section0: this.exportSection0(),
      section1: this.exportSection1(),
      section2: this.exportSection2(),
      section3: this.exportSection3(),
      section4: this.exportSection4(),
      section5: this.exportSection5(),
      section6: this.exportSection6(),
      section7: this.exportSection7()
    } satisfies KDMMapDataExport);
  }

  private importSection0(data: KDMMapDataExport): void {
    this.section0 = ({ ...this.section0, ...data.section0 });

    // Strings in section 3:
    this.registerStringIfNotExists(data.section3.unknownD2);

    // Strings in section 5:
    for (const entry of data.section5.entries) {
      this.registerStringIfNotExists(entry.name);
      this.registerStringIfNotExists(entry.level);
      this.registerStringIfNotExists(entry.model);
      this.registerStringIfNotExists(entry.music);
      this.registerStringIfNotExists(entry.script);
      this.registerStringIfNotExists(entry.unknownG6);
      this.registerStringIfNotExists(entry.unknownG10);
      this.registerStringIfNotExists(entry.unknownG11);

      if (entry.background.type === "color") {
        this.registerStringIfNotExists("<color>");
        this.registerStringIfNotExists(entry.background.color);
      }

      if (entry.background.type === "texture") {
        this.registerStringIfNotExists(entry.background.texture1);
        this.registerStringIfNotExists(entry.background.texture2);
      }
    }

    // Strings in section 6:
    this.registerStringIfNotExists(data.section6.unknownH1);
  }

  private importSection1(data: KDMMapDataExport): void {
    this.section1 = ({ ...this.section1, ...data.section1 });
  }

  private importSection2(data: KDMMapDataExport): void {
    this.section2 = ({ ...this.section2, ...data.section2 });
  }

  private importSection3(data: KDMMapDataExport): void {
    this.section3 = ({
      ...this.section3,
      ...data.section3,
      unknownD2: this.findString(data.section3.unknownD2)
    });
  }

  private importSection4(data: KDMMapDataExport): void {
    this.section4 = ({ ...this.section4, ...data.section4 });
  }

  private importSection5(data: KDMMapDataExport): void {
    this.section5 = ({
      ...this.section5,
      ...data.section5,
      entries: data.section5.entries.map((entry) => {
        let background1: KDMString = KDMString.NULL;
        let background2: KDMString = KDMString.NULL;

        if(entry.background.type === "color") {
          background1 = this.findString("<color>");
          background2 = this.findString(entry.background.color);
        }

        if(entry.background.type === "texture") {
          background1 = this.findString(entry.background.texture1);
          background2 = this.findString(entry.background.texture2);
        }

        return KDMPointer({
          ...entry,
          background1, background2,
          name: this.findString(entry.name),
          level: this.findString(entry.level),
          model: this.findString(entry.model),
          music: this.findString(entry.music),
          script: this.findString(entry.script),
          unknownG6: this.findString(entry.unknownG6),
          unknownG10: this.findString(entry.unknownG10),
          unknownG11: this.findString(entry.unknownG11)
        });
      })
    });
  }

  private importSection6(data: KDMMapDataExport): void {
    this.section6 = ({
      ...this.section6,
      ...data.section6,
      unknownH1: this.findString(data.section6.unknownH1)
    });
  }

  private importSection7(data: KDMMapDataExport): void {
    this.section7 = ({ ...this.section7, ...data.section7 });
  }

  public override import(_data: KDMMapDataExport): this {
    const data = KDMMapDataExport.parse(_data);

    this.importSection0(data);
    this.importSection1(data);
    this.importSection2(data);
    this.importSection3(data);
    this.importSection4(data);
    this.importSection5(data);
    this.importSection6(data);
    this.importSection7(data);

    return this;
  }
}

export default KDMMapData;
