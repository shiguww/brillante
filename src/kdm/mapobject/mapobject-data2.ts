import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import type KDM from "../kdm";

const IMapObjectData2 = z.object({
  _kind: z.literal("MapObjectData2").default("MapObjectData2"),
  unknown0: KDMStringPointer.schema
});

type IMapObjectData2 = z.infer<typeof IMapObjectData2>;

class MapObjectData2 extends KDMStruct<IMapObjectData2> {
  public static readonly schema = IMapObjectData2;

  public override readonly unknownSection4Value1 = 16133232;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapObjectData2);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0
    ];
  }

  protected override _get(): IMapObjectData2 {
    return IMapObjectData2.parse({
      unknown0: this.unknown0.get()
    });
  }

  protected override _set(mapobjectdata: IMapObjectData2): void {
    this.unknown0.set(mapobjectdata.unknown0);
  }
}

export default MapObjectData2;
