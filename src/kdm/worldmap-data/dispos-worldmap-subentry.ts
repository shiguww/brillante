import z from "zod";
import KDMF32 from "#/kdm/common/kdm-f32";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IDisposWorldMapSubEntry = z.object({
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown6: KDMU32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  _structure: z.literal("DisposWorldMapSubEntry").default("DisposWorldMapSubEntry")
});

type IDisposWorldMapSubEntry = z.infer<typeof IDisposWorldMapSubEntry>;

class DisposWorldMapSubEntry extends KDMStructure<IDisposWorldMapSubEntry> {
  public static readonly schema = IDisposWorldMapSubEntry;

  public override readonly schema = IDisposWorldMapSubEntry;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x0139087C;

  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      this.unknown6
    ];
  }

  public override get(): IDisposWorldMapSubEntry {
    return IDisposWorldMapSubEntry.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get()
    });
  }

  public override set(data: unknown): this {
    const disposworldmapdata = IDisposWorldMapSubEntry.parse(data);

    this.unknown0.set(disposworldmapdata.unknown0);
    this.unknown1.set(disposworldmapdata.unknown1);
    this.unknown2.set(disposworldmapdata.unknown2);
    this.unknown3.set(disposworldmapdata.unknown3);
    this.unknown4.set(disposworldmapdata.unknown4);
    this.unknown5.set(disposworldmapdata.unknown5);
    this.unknown6.set(disposworldmapdata.unknown6);

    return this;
  }
}

export default DisposWorldMapSubEntry;
