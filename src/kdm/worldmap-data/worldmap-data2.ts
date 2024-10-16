import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMU32 from "../common/primitive/kdm-u32";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import type KDM from "../kdm";

const IWorldMapData2 = z.object({
  _kind: z.literal("WorldMapData2").default("WorldMapData2"),
  unknown3: KDMU32.schema,
  unknown4: KDMU32.schema,
  unknown2: KDMStringPointer.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
});

type IWorldMapData2 = z.infer<typeof IWorldMapData2>;

class WorldMapData2 extends KDMStruct<IWorldMapData2> {
  public static readonly schema = IWorldMapData2;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x013908B4;

  public readonly unknown3 = new KDMU32(this.kdm);
  public readonly unknown4 = new KDMU32(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IWorldMapData2);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4
    ];
  }

  protected override _get(): IWorldMapData2 {
    return IWorldMapData2.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get()
    });
  }

  protected override _set(worldmapdata: IWorldMapData2): void {
    this.unknown0.set(worldmapdata.unknown0);
    this.unknown1.set(worldmapdata.unknown1);
    this.unknown2.set(worldmapdata.unknown2);
    this.unknown3.set(worldmapdata.unknown3);
    this.unknown4.set(worldmapdata.unknown4);
  }
}

export default WorldMapData2;
