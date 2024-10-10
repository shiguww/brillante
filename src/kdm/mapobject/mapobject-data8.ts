import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";
import KDMUnknownType1 from "../common/kdm-unknown-type1";
import KDMArray from "../common/array/kdm-array";

const IMapObjectData8 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMGenericArrayPointer.schema,
  unknown2: KDMUnknownType1.schema,
  unknown3: KDMGenericArrayPointer.schema,
  unknown4: KDMUnknownType1.schema,
  unknown5: KDMGenericArrayPointer.schema,
  unknown6: KDMUnknownType1.schema,
  unknown7: KDMGenericArrayPointer.schema,
  unknown8: KDMUnknownType1.schema,
  unknown9: KDMGenericArrayPointer.schema,
  unknown10: KDMUnknownType1.schema,
  _structure: z.literal("MapObjectData8").default("MapObjectData8")
});

type IMapObjectData8 = z.infer<typeof IMapObjectData8>;

class MapObjectData8 extends KDMStructure<IMapObjectData8> {
  public static readonly schema = IMapObjectData8;

  public override readonly unknownSection4Value1 = 0x00000000;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IMapObjectData8;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown2 = new KDMUnknownType1(this.kdm);
  public readonly unknown3 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown4 = new KDMUnknownType1(this.kdm);
  public readonly unknown5 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown6 = new KDMUnknownType1(this.kdm);
  public readonly unknown7 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown8 = new KDMUnknownType1(this.kdm);
  public readonly unknown9 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown10 = new KDMUnknownType1(this.kdm);

  public override get arrays(): Array<KDMArray> {
    return [
      ...this.unknown1.array.arrays,
      ...this.unknown3.array.arrays,
      ...this.unknown5.array.arrays,
      ...this.unknown7.array.arrays,
      ...this.unknown9.array.arrays
    ];
  }

  public override get fields(): Array<KDMStructure> {
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

  public override get(): IMapObjectData8 {
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

  public override set(data: unknown): this {
    const mapobjectdata = IMapObjectData8.parse(data);

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

    return this;
  }
}

export default MapObjectData8;
