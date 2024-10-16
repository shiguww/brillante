import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMUnknownType0 from "../common/primitive/kdm-unknown-type0";
import MapObjectData3 from "./mapobject-data3";
import type KDM from "../kdm";

const IMapObjectData7 = z.object({
  _kind: z.literal("MapObjectData7").default("MapObjectData7"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: MapObjectData3.schema,
  unknown3: KDMUnknownType0.schema
});

type IMapObjectData7 = z.infer<typeof IMapObjectData7>;

class MapObjectData7 extends KDMStruct<IMapObjectData7> {
  public static readonly schema = IMapObjectData7;

  public override readonly unknownSection4Value1 = 16133640;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new MapObjectData3(this.kdm);
  public readonly unknown3 = new KDMUnknownType0(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapObjectData7);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3
    ];
  }

  protected override _get(): IMapObjectData7 {
    return IMapObjectData7.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(mapobjectdata: IMapObjectData7): void {
    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);
    this.unknown3.set(mapobjectdata.unknown3);    
  }
}

export default MapObjectData7;
