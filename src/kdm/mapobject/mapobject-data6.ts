import z from "zod";
import KDMStruct from "../common/kdm-struct";
import KDMEntity from "../common/kdm-entity";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import MapObjectData1 from "./mapobject-data1";
import MapObjectData2 from "./mapobject-data2";
import KDMUnknownType0 from "../common/primitive/kdm-unknown-type0";
import type KDM from "../kdm";

const IMapObjectData6 = z.object({
  _kind: z.literal("MapObjectData6").default("MapObjectData6"),
  unknown0: KDMStringPointer.schema,
  unknown1: MapObjectData1.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: MapObjectData2.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: KDMUnknownType0.schema
});

type IMapObjectData6 = z.infer<typeof IMapObjectData6>;

class MapObjectData6 extends KDMStruct<IMapObjectData6> {
  public static readonly schema = IMapObjectData6;

  public override readonly unknownSection4Value1 = 16133612;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new MapObjectData1(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new MapObjectData2(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMUnknownType0(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapObjectData6);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5
    ];
  }

  protected override _get(): IMapObjectData6 {
    return IMapObjectData6.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get()
    });
  }

  protected override _set(mapobjectdata: IMapObjectData6): void {
    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);
    this.unknown3.set(mapobjectdata.unknown3);
    this.unknown4.set(mapobjectdata.unknown4);
    this.unknown5.set(mapobjectdata.unknown5);    
  }
}

export default MapObjectData6;
