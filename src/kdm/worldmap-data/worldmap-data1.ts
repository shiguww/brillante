import z from "zod";
import KDMArray from "../common/array/kdm-array";
import KDMStruct from "../common/kdm-struct";
import KDMStructArrayPointer from "../common/primitive/kdm-struct-array-pointer";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMI32 from "../common/primitive/kdm-i32";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IWorldMapData1 = z.object({
  _kind: z.literal("WorldMapData1").default("WorldMapData1"),
  unknown2: KDMI32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema
});

type IWorldMapData1 = z.infer<typeof IWorldMapData1>;

class WorldMapData1 extends KDMStruct<IWorldMapData1> {
  public static readonly schema = IWorldMapData1;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x01390894;

  public readonly unknown2 = new KDMI32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IWorldMapData1);
  }

  public override get arrays(): KDMArray[] {
    return this.unknown1.arrays;
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): IWorldMapData1 {
    return IWorldMapData1.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(worldmapdata: IWorldMapData1): void {
    this.unknown0.set(worldmapdata.unknown0);
    this.unknown1.set(worldmapdata.unknown1);
    this.unknown2.set(worldmapdata.unknown2);
  }
}

export default WorldMapData1;
