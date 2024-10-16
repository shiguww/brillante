import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMUnknownType0 from "../common/primitive/kdm-unknown-type0";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "../common/primitive/kdm-struct-array-pointer";
import type KDM from "../kdm";

const IMapObjectData8 = z.object({
  _kind: z.literal("MapObjectData8").default("MapObjectData8"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMUnknownType0.schema,
  unknown3: KDMStructArrayPointer.schema,
  unknown4: KDMUnknownType0.schema,
  unknown5: KDMStructArrayPointer.schema,
  unknown6: KDMUnknownType0.schema,
  unknown7: KDMStructArrayPointer.schema,
  unknown8: KDMUnknownType0.schema,
  unknown9: KDMStructArrayPointer.schema,
  unknown10: KDMUnknownType0.schema
});

type IMapObjectData8 = z.infer<typeof IMapObjectData8>;

class MapObjectData8 extends KDMStruct<IMapObjectData8> {
  public static readonly schema = IMapObjectData8;

  public override readonly unknownSection4Value1 = 0x00000000;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown2 = new KDMUnknownType0(this.kdm);
  public readonly unknown3 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown4 = new KDMUnknownType0(this.kdm);
  public readonly unknown5 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown6 = new KDMUnknownType0(this.kdm);
  public readonly unknown7 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown8 = new KDMUnknownType0(this.kdm);
  public readonly unknown9 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown10 = new KDMUnknownType0(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapObjectData8);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      this.unknown6,
      this.unknown7,
      this.unknown8,
      this.unknown9,
      this.unknown10
    ];
  }

  protected override _get(): IMapObjectData8 {
    return IMapObjectData8.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get(),
      unknown7: this.unknown7.get(),
      unknown8: this.unknown8.get(),
      unknown9: this.unknown9.get(),
      unknown10: this.unknown10.get()
    });
  }

  protected override _set(mapobjectdata: IMapObjectData8): void {
    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);
    this.unknown3.set(mapobjectdata.unknown3);
    this.unknown4.set(mapobjectdata.unknown4);
    this.unknown5.set(mapobjectdata.unknown5);
    this.unknown6.set(mapobjectdata.unknown6);
    this.unknown7.set(mapobjectdata.unknown7);
    this.unknown8.set(mapobjectdata.unknown8);
    this.unknown9.set(mapobjectdata.unknown9);
    this.unknown10.set(mapobjectdata.unknown10);
  }
}

export default MapObjectData8;
