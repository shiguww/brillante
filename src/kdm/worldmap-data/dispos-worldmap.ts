import z from "zod";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import DisposWorldMapSubEntry from "#/kdm/worldmap-data/dispos-worldmap-subentry";
import KDMArray from "../common/array/kdm-array";

const IDisposWorldMap = z.object({
  unknown2: KDMU32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: DisposWorldMapSubEntry.schema.array(),
  _structure: z.literal("DisposWorldMap").default("DisposWorldMap")
});

type IDisposWorldMap = z.infer<typeof IDisposWorldMap>;

class DisposWorldMap extends KDMStructure<IDisposWorldMap> {
  public static readonly schema = IDisposWorldMap;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x01390894;
  public override readonly schema = IDisposWorldMap;

  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMGenericArrayPointer(this.kdm);

  public override get arrays(): KDMArray[] {
    return this.unknown1.arrays;
  }

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  public override get(): IDisposWorldMap {
    return IDisposWorldMap.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  public override set(data: unknown): this {
    const disposworldmapdata = IDisposWorldMap.parse(data);

    this.unknown0.set(disposworldmapdata.unknown0);
    this.unknown1.set(disposworldmapdata.unknown1);
    this.unknown2.set(disposworldmapdata.unknown2);

    return this;
  }
}

export default DisposWorldMap;
