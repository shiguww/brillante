import z from "zod";
import KDMArray from "../common/array/kdm-array";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMStructArrayPointer from "../common/primitive/kdm-struct-array-pointer";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMU32 from "../common/primitive/kdm-u32";
import type KDM from "../kdm";

const IWorldMapData3 = z.object({
  _kind: z.literal("WorldMapData3").default("WorldMapData3"),
  unknown2: KDMU32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema
});

type IWorldMapData3 = z.infer<typeof IWorldMapData3>;

class WorldMapData3 extends KDMStruct<IWorldMapData3> {
  public static readonly schema = IWorldMapData3;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IWorldMapData3);
  }

  public override get arrays(): Array<KDMArray> {
    return this.unknown1.arrays;
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): IWorldMapData3 {
    return IWorldMapData3.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(worldmapdata: IWorldMapData3): void {
    this.unknown0.set(worldmapdata.unknown0);
    this.unknown1.set(worldmapdata.unknown1);
    this.unknown2.set(worldmapdata.unknown2);
  }
}

export default WorldMapData3;
