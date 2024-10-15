import z from "zod";

import KDMStruct from "../common/kdm-struct";
import KDMF32 from "../common/primitive/kdm-f32";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMU32 from "../common/primitive/kdm-u32";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IWorldMapData0 = z.object({
  _kind: z.literal("WorldMapData0").default("WorldMapData0"),
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown6: KDMU32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema
});

type IWorldMapData0 = z.infer<typeof IWorldMapData0>;

class WorldMapData0 extends KDMStruct<IWorldMapData0> {
  public static readonly schema = IWorldMapData0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x0139087C;

  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IWorldMapData0);
  }

  public override get fields(): Array<KDMEntity> {
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
  
  protected override _get(): IWorldMapData0 {
    return IWorldMapData0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get()
    });
  }

  protected override _set(worldmapdata: IWorldMapData0): void {
    this.unknown0.set(worldmapdata.unknown0);
    this.unknown1.set(worldmapdata.unknown1);
    this.unknown2.set(worldmapdata.unknown2);
    this.unknown3.set(worldmapdata.unknown3);
    this.unknown4.set(worldmapdata.unknown4);
    this.unknown5.set(worldmapdata.unknown5);
    this.unknown6.set(worldmapdata.unknown6);
  }
}

export default WorldMapData0;
