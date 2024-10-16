import z from "zod";
import type KDM from "../kdm";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointerArrayPointer from "../common/primitive/kdm-string-pointer-array-pointer";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMUnknownType0 from "../common/primitive/kdm-unknown-type0";

const IMapObjectData0 = z.object({
  _kind: z.literal("MapObjectData0").default("MapObjectData0"),
  unknown1: KDMStringPointerArrayPointer.schema,
  unknown2: KDMUnknownType0.schema,
  unknown0: KDMStringPointer.schema,
});

type IMapObjectData0 = z.infer<typeof IMapObjectData0>;

class MapObjectData0 extends KDMStruct<IMapObjectData0> {
  public static readonly schema = IMapObjectData0;

  public override readonly unknownSection4Value1 = 16133200;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointerArrayPointer(this.kdm);
  public readonly unknown2 = new KDMUnknownType0(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapObjectData0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): IMapObjectData0 {
    return IMapObjectData0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(mapobjectdata: IMapObjectData0): void {
    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);
  }
}

export default MapObjectData0;
