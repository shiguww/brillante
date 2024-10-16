import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import type KDM from "../kdm";

const IMapObjectData1 = z.object({
  _kind: z.literal("MapObjectData1").default("MapObjectData1"),
  unknown0: KDMStringPointer.schema
});

type IMapObjectData1 = z.infer<typeof IMapObjectData1>;

class MapObjectData1 extends KDMStruct<IMapObjectData1> {
  public static readonly schema = IMapObjectData1;

  public override readonly unknownSection4Value1 = 16133216;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapObjectData1);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0
    ];
  }

  protected override _get(): IMapObjectData1 {
    return IMapObjectData1.parse({
      unknown0: this.unknown0.get()
    });
  }

  protected override _set(mapobjectdata: IMapObjectData1): void {
    this.unknown0.set(mapobjectdata.unknown0);
  }
}

export default MapObjectData1;
