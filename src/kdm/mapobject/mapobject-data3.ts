import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMUnknownType0 from "../common/primitive/kdm-unknown-type0";
import type KDM from "../kdm";

const IMapObjectData3 = z.object({
  _kind: z.literal("MapObjectData3").default("MapObjectData3"),
  unknown2: KDMUnknownType0.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema
});

type IMapObjectData3 = z.infer<typeof IMapObjectData3>;

class MapObjectData3 extends KDMStruct<IMapObjectData3> {
  public static readonly schema = IMapObjectData3;

  public override readonly unknownSection4Value1 = 16133256;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown2 = new KDMUnknownType0(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapObjectData3);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): IMapObjectData3 {
    return IMapObjectData3.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(mapobjectdata: IMapObjectData3): void {
    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);
  }
}

export default MapObjectData3;
