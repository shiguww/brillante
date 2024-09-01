import z from "zod";
import KDM from "#/kdm/structures/kdm";
import KDMString from "#/kdm/kdm-string";
import KDMPointer from "#/kdm/kdm-pointer";

const KDM_LINK_DATA_EXPORT_VERSION = 1;

const KDMLinkDataExportLinkType = z.enum(["standard-bero", "pipe", "door", "world-bero", "goal", "unused", "save-block"]);
type KDMLinkDataExportLinkType = z.infer<typeof KDMLinkDataExportLinkType>;

const KDMLinkDataExportSection0 = z.object({
  unknownA0: z.number()
});

type KDMLinkDataExportSection0 = z.infer<typeof KDMLinkDataExportSection0>;

const KDMLinkDataExportSection1 = z.object({
  unknownB0: z.number()
});

type KDMLinkDataExportSection1 = z.infer<typeof KDMLinkDataExportSection1>;

const KDMLinkDataExportSection2 = z.object({
  unknownC0: z.number()
});

type KDMLinkDataExportSection2 = z.infer<typeof KDMLinkDataExportSection2>;

const KDMLinkDataExportSection3 = z.object({
  unknownD0: z.number(),
  unknownD1: z.number(),
  unknownD2: z.string(),
  unknownD3: z.number(),
  unknownD4: z.number()
});

type KDMLinkDataExportSection3 = z.infer<typeof KDMLinkDataExportSection3>;

const KDMLinkDataExportSection4 = z.object({
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
  unknownE20: z.number()
});

type KDMLinkDataExportSection4 = z.infer<typeof KDMLinkDataExportSection4>;

const KDMLinkDataExportSection5SubEntry = z.object({
  linkType: KDMLinkDataExportLinkType,
  unknownH1: z.number(),
  unknownH2: z.number(),
  startingRoom: z.string(),
  endingRoom: z.string(),
  startingTransition: z.string(),
  endingTransition: z.string(),
  startingEvent: z.string(),
  endingEvent: z.string(),
  unknownH3: z.number(),
  unknownH4: z.number(),
  unknownH5: z.number(),
});

type KDMLinkDataExportSection5SubEntry = z.infer<typeof KDMLinkDataExportSection5SubEntry>;

const KDMLinkDataExportSection5SubEntryContainer = z.object({
  subentries: KDMLinkDataExportSection5SubEntry.array(),
  unknownG0: z.number(),
  unknownG1: z.number(),
  unknownG2: z.number()
});

type KDMLinkDataExportSection5SubEntryContainer = z.infer<typeof KDMLinkDataExportSection5SubEntryContainer>;

const KDMLinkDataExportSection5Entry = z.union([
  z.object({
    unknownF0: z.string(),
    subentryContainer: KDMLinkDataExportSection5SubEntryContainer,
    unknownF1: z.null(),
    unknownF2: z.null(),
    unknownF3: z.null()
  }),
  z.object({
    unknownF0: z.string(),
    subentryContainer: KDMLinkDataExportSection5SubEntryContainer,
    unknownF1: z.number(),
    unknownF2: z.number(),
    unknownF3: z.number()
  })
]);

type KDMLinkDataExportSection5Entry = z.infer<typeof KDMLinkDataExportSection5Entry>;

const KDMLinkDataExportSection5 = z.object({
  unknownK0: z.number(),
  unknownK1: z.number(),
  unknownK2: z.number(),
  unknownK3: z.number(),
  unknownK4: z.number(),
  entries: KDMLinkDataExportSection5Entry.array()
});

type KDMLinkDataExportSection5 = z.infer<typeof KDMLinkDataExportSection5>;

const KDMLinkDataExportSection6 = z.object({
  unknownI0: z.number(),
  unknownI1: z.string(),
  unknownI2: z.number(),
  unknownI3: z.number()
});

type KDMLinkDataExportSection6 = z.infer<typeof KDMLinkDataExportSection6>;

const KDMLinkDataExportSection7 = z.object({
  unknownJ0: z.number()
});

type KDMLinkDataExportSection7 = z.infer<typeof KDMLinkDataExportSection7>;

const KDMLinkDataExport = z.object({
  _version: z.literal(KDM_LINK_DATA_EXPORT_VERSION),
  section0: KDMLinkDataExportSection0,
  section1: KDMLinkDataExportSection1,
  section2: KDMLinkDataExportSection2,
  section3: KDMLinkDataExportSection3,
  section4: KDMLinkDataExportSection4,
  section5: KDMLinkDataExportSection5,
  section6: KDMLinkDataExportSection6,
  section7: KDMLinkDataExportSection7
});

type KDMLinkDataExport = z.infer<typeof KDMLinkDataExport>;

//

enum KDMLinkDataLinkType {
  PIPE = 1,
  DOOR = 2,
  GOAL = 5,
  UNUSED = 4,
  SAVE_BLOCK = 6,
  WORLD_BERO = 3,
  STANDARD_BERO = 0
}

type KDMLinkDataSection0 = KDMPointer<{
  unknownA0: number;
  strings: KDMString[]
}>;

type KDMLinkDataSection1 = KDMPointer<{
  unknownB0: number;
}>;

type KDMLinkDataSection2 = KDMPointer<{
  unknownC0: number;
}>;

type KDMLinkDataSection3 = KDMPointer<{
  unknownD0: number;
  unknownD1: number;
  unknownD2: KDMString;
  unknownD3: number;
  unknownD4: number;
}>;

type KDMLinkDataSection4 = KDMPointer<{
  unknownE0: number;
  unknownE1: number; // short
  unknownE2: number; // short
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
  unknownE14: number; // short
  unknownE15: number; // short
  unknownE16: number;
  unknownE17: number;
  unknownE18: number;
  unknownE19: number;
  unknownE20: number;
}>;

type KDMLinkDataSection5SubEntry = KDMPointer<{
  linkType: KDMLinkDataLinkType;
  unknownH1: number;
  unknownH2: number;
  startingRoom: KDMString;
  endingRoom: KDMString;
  startingTransition: KDMString;
  endingTransition: KDMString;
  startingEvent: KDMString;
  endingEvent: KDMString;
  unknownH3: number;
  unknownH4: number; // short
  unknownH5: number; // short
}>;

type KDMLinkDataSection5SubEntryContainer = KDMPointer<{
  subentries: KDMLinkDataSection5SubEntry[];
  unknownG0: number;
  unknownG1: number; // short
  unknownG2: number; // short
}>;

type KDMLinkDataSection5Entry = KDMPointer<{
  unknownF0: KDMString;
  subentryContainer: KDMLinkDataSection5SubEntryContainer;
  subentriesCount: number;
  unknownF1: number;
  unknownF2: number; // short
  unknownF3: number; // short
} | {
  unknownF0: KDMString;
  subentryContainer: KDMLinkDataSection5SubEntryContainer;
  subentriesCount: number;
  unknownF1: null;
  unknownF2: null;
  unknownF3: null;
}>;

type KDMLinkDataSection5 = KDMPointer<{
  unknownK0: number;
  unknownK1: number; // short
  unknownK2: number; // short
  unknownK3: number; // short
  unknownK4: number; // short
  entries: KDMLinkDataSection5Entry[];
}>;

type KDMLinkDataSection6 = KDMPointer<{
  unknownI0: number;
  unknownI1: KDMString;
  unknownI2: number;
  unknownI3: number;
  entries: KDMPointer[];
}>;

type KDMLinkDataSection7 = KDMPointer<{
  unknownJ0: number;
}>;

class KDMLinkData extends KDM<KDMLinkDataExport> {
  protected static readonly SECTION_COUNT = 8;

  protected override section0: KDMLinkDataSection0 = KDMPointer({
    unknownA0: 0,
    strings: []
  });

  protected section1: KDMLinkDataSection1 = KDMPointer({
    unknownB0: 0
  });

  protected section2: KDMLinkDataSection2 = KDMPointer({
    unknownC0: 0
  });

  protected section3: KDMLinkDataSection3 = KDMPointer({
    unknownD0: 0,
    unknownD1: 0,
    unknownD2: KDMString.NULL,
    unknownD3: 0,
    unknownD4: 0
  });

  protected section4: KDMLinkDataSection4 = KDMPointer({
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
    unknownE20: 0
  });

  protected section5: KDMLinkDataSection5 = KDMPointer({
    entries: [],
    unknownK0: 0,
    unknownK1: 0,
    unknownK2: 0,
    unknownK3: 0,
    unknownK4: 0
  });

  protected section6: KDMLinkDataSection6 = KDMPointer({
    entries: [],
    unknownI0: 0,
    unknownI2: 0,
    unknownI3: 0,
    unknownI1: KDMString.NULL
  });

  protected section7: KDMLinkDataSection7 = KDMPointer({
    unknownJ0: 0
  });

  private exportSection0(): KDMLinkDataExportSection0 {
    return this.section0;
  }

  private exportSection1(): KDMLinkDataExportSection1 {
    return this.section1;
  }

  private exportSection2(): KDMLinkDataExportSection2 {
    return this.section2;
  }

  private exportSection3(): KDMLinkDataExportSection3 {
    const unknownD2 = this.section3.unknownD2.valueOf();
    return ({ ...this.section3, unknownD2 });
  }

  private exportSection4(): KDMLinkDataExportSection4 {
    return this.section4;
  }

  private exportSection5SubEntryContainer(container: KDMLinkDataSection5SubEntryContainer): KDMLinkDataExportSection5SubEntryContainer {
    const subentries = container.subentries.map((entry) => this.exportSection5SubEntry(entry));
    return ({ ...container, subentries });
  }

  private exportSection5SubEntry(subentry: KDMLinkDataSection5SubEntry): KDMLinkDataExportSection5SubEntry {
    const endingRoom = subentry.endingRoom.valueOf();
    const endingEvent = subentry.endingEvent.valueOf();
    const startingRoom = subentry.startingRoom.valueOf();
    const startingEvent = subentry.startingEvent.valueOf();
    const endingTransition = subentry.endingTransition.valueOf();
    const startingTransition = subentry.startingTransition.valueOf();

    let linkType: KDMLinkDataExportLinkType = "standard-bero";

    switch (subentry.linkType) {
      case KDMLinkDataLinkType.DOOR:
        linkType = "door";
        break;
      case KDMLinkDataLinkType.GOAL:
        linkType = "goal";
        break;
      case KDMLinkDataLinkType.PIPE:
        linkType = "pipe";
        break;
      case KDMLinkDataLinkType.UNUSED:
        linkType = "unused";
        break;
      case KDMLinkDataLinkType.SAVE_BLOCK:
        linkType = "save-block";
        break;
      case KDMLinkDataLinkType.WORLD_BERO:
        linkType = "world-bero";
        break;
      case KDMLinkDataLinkType.STANDARD_BERO:
        linkType = "standard-bero";
        break;
    }

    return ({ ...subentry, linkType, endingRoom, endingEvent, startingRoom, startingEvent, endingTransition, startingTransition });
  }

  private exportSection5Entry(entry: KDMLinkDataSection5Entry): KDMLinkDataExportSection5Entry {
    const unknownF0 = entry.unknownF0.valueOf();
    const subentryContainer = this.exportSection5SubEntryContainer(entry.subentryContainer);

    return ({ ...entry, unknownF0, subentryContainer });
  }

  private exportSection5(): KDMLinkDataExportSection5 {
    const entries = this.section5.entries.map((entry) => this.exportSection5Entry(entry));
    return ({ ...this.section5, entries });
  }

  private exportSection6(): KDMLinkDataExportSection6 {
    const unknownI1 = this.section6.unknownI1.valueOf();
    return ({ ...this.section6, unknownI1 });
  }

  private exportSection7(): KDMLinkDataExportSection7 {
    return this.section7;
  }

  public export(): KDMLinkDataExport {
    const section0 = this.exportSection0();
    const section1 = this.exportSection1();
    const section2 = this.exportSection2();
    const section3 = this.exportSection3();
    const section4 = this.exportSection4();
    const section5 = this.exportSection5();
    const section6 = this.exportSection6();
    const section7 = this.exportSection7();

    const _version = KDM_LINK_DATA_EXPORT_VERSION;

    return KDMLinkDataExport.parse({
      _version, section0, section1,
      section2, section3, section4,
      section5, section6, section7
    } satisfies KDMLinkDataExport);
  }

  private importSection0(data: KDMLinkDataExport): void {
    this.section0 = ({ ...this.section0, ...data.section0 });

    // Strings in section 3:
    this.registerStringIfNotExists(data.section3.unknownD2);

    // Strings in section 5:
    for (const entry of data.section5.entries) {
      this.registerStringIfNotExists(entry.unknownF0);

      for (const subentry of entry.subentryContainer.subentries) {
        this.registerStringIfNotExists(subentry.endingRoom);
        this.registerStringIfNotExists(subentry.endingEvent);
        this.registerStringIfNotExists(subentry.startingRoom);
        this.registerStringIfNotExists(subentry.startingEvent);
        this.registerStringIfNotExists(subentry.endingTransition);
        this.registerStringIfNotExists(subentry.startingTransition);
      }
    }

    // Strings in section 6:
    this.registerStringIfNotExists(data.section6.unknownI1);
  }

  private importSection1(data: KDMLinkDataExport): void {
    this.section1 = ({ ...this.section1, ...data.section1 });
  }

  private importSection2(data: KDMLinkDataExport): void {
    this.section2 = ({ ...this.section2, ...data.section2 });
  }

  private importSection3(data: KDMLinkDataExport): void {
    const unknownD2 = this.findString(data.section3.unknownD2);
    this.section3 = ({ ...this.section3, ...data.section3, unknownD2 });
  }

  private importSection4(data: KDMLinkDataExport): void {
    this.section4 = ({ ...this.section4, ...data.section4 });
  }

  private importSection5SubEntryContainer(container: KDMLinkDataExportSection5SubEntryContainer): KDMLinkDataSection5SubEntryContainer {
    const subentries = container.subentries.map((subentry) => this.importSection5SubEntry(subentry));
    return KDMPointer({ ...container, subentries });
  }

  private importSection5SubEntry(subentry: KDMLinkDataExportSection5SubEntry): KDMLinkDataSection5SubEntry {
    const endingRoom = this.findString(subentry.endingRoom);
    const endingEvent = this.findString(subentry.endingEvent);
    const startingRoom = this.findString(subentry.startingRoom);
    const startingEvent = this.findString(subentry.startingEvent);
    const endingTransition = this.findString(subentry.endingTransition);
    const startingTransition = this.findString(subentry.startingTransition);

    let linkType: KDMLinkDataLinkType = KDMLinkDataLinkType.STANDARD_BERO;

    switch (subentry.linkType) {
      case "door":
        linkType = KDMLinkDataLinkType.DOOR;
        break;
      case "goal":
        linkType = KDMLinkDataLinkType.GOAL;
        break;
      case "pipe":
        linkType = KDMLinkDataLinkType.PIPE;
        break;
      case "unused":
        linkType = KDMLinkDataLinkType.UNUSED;
        break;
      case "save-block":
        linkType = KDMLinkDataLinkType.SAVE_BLOCK;
        break;
      case "world-bero":
        linkType = KDMLinkDataLinkType.WORLD_BERO;
        break;
      case "standard-bero":
        linkType = KDMLinkDataLinkType.STANDARD_BERO;
        break;
    }

    return KDMPointer({ ...subentry, linkType, endingRoom, endingEvent, startingRoom, startingEvent, endingTransition, startingTransition });
  }

  private importSection5Entry(entry: KDMLinkDataExportSection5Entry): KDMLinkDataSection5Entry {
    const unknownF0 = this.findString(entry.unknownF0);
    const subentriesCount = entry.subentryContainer.subentries.length;
    const subentryContainer = this.importSection5SubEntryContainer(entry.subentryContainer);

    return KDMPointer({ ...entry, unknownF0, subentriesCount, subentryContainer });
  }

  private importSection5(data: KDMLinkDataExport): void {
    const entries = data.section5.entries.map((entry) => this.importSection5Entry(entry));
    this.section5 = ({ ...this.section5, ...data.section5, entries });
  }

  private importSection6(data: KDMLinkDataExport): void {
    const unknownI1 = this.findString(data.section6.unknownI1);
    this.section6 = ({ ...this.section6, ...data.section6, unknownI1 });
  }

  private importSection7(data: KDMLinkDataExport): void {
    this.section7 = ({ ...this.section7, ...data.section7 });
  }

  public import(_data: KDMLinkDataExport): this {
    const data = KDMLinkDataExport.parse(_data);

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

export default KDMLinkData;
