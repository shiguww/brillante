import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

class MapData extends KDMStruct<IMapData> {
  public static readonly typeid = "MapData";

  public static get schema(): typeof IMapData {
    return IMapData;
  }

  public override unknownSection4Value0 = 0x00000000;
  public override unknownSection4Value1 = 0x00000000;

  public readonly name = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapData);
  }

  public override get fields(): Array<KDMStringPointer> {
    return [
      this.name,

      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm),
      new KDMStringPointer(this.kdm)
    ];
  }

  protected override _get(): IMapData {
    return IMapData.parse({
      name: this.name.get()
    });
  }

  protected override _set(mapdata: IMapData): void {
    this.name.set(mapdata.name);
  }
}

const IMapData = z.object({
  name: KDMStringPointer.schema,
  $type_id: z.literal(MapData.typeid).default(MapData.typeid)
});

type IMapData = z.infer<typeof IMapData>;
export default MapData;
