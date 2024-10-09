import z from "zod";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IDisposWorldMapConnectSubEntry = z.object({
  unknown3: KDMU32.schema,
  unknown4: KDMU32.schema,
  unknown2: KDMStringPointer.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  _structure: z.literal("DisposWorldMapConnectSubEntry").default("DisposWorldMapConnectSubEntry")
});

type IDisposWorldMapConnectSubEntry = z.infer<typeof IDisposWorldMapConnectSubEntry>;

class DisposWorldMapConnectSubEntry extends KDMStructure<IDisposWorldMapConnectSubEntry> {
  public static readonly schema = IDisposWorldMapConnectSubEntry;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x013908B4;
  public override readonly schema = IDisposWorldMapConnectSubEntry;

  public readonly unknown3 = new KDMU32(this.kdm);
  public readonly unknown4 = new KDMU32(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4
    ];
  }

  public override get(): IDisposWorldMapConnectSubEntry {
    return IDisposWorldMapConnectSubEntry.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get()
    });
  }

  public override set(data: unknown): this {
    const disposworldmapdata = IDisposWorldMapConnectSubEntry.parse(data);

    this.unknown0.set(disposworldmapdata.unknown0);
    this.unknown1.set(disposworldmapdata.unknown1);
    this.unknown2.set(disposworldmapdata.unknown2);
    this.unknown3.set(disposworldmapdata.unknown3);
    this.unknown4.set(disposworldmapdata.unknown4);

    return this;
  }
}

export default DisposWorldMapConnectSubEntry;
