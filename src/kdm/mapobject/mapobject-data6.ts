import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import MapObjectData1 from "./mapobject-data1";
import MapObjectData2 from "./mapobject-data2";
import KDMUnknownType1 from "../common/kdm-unknown-type1";

const IMapObjectData6 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: MapObjectData1.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: MapObjectData2.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: KDMUnknownType1.schema,
  _structure: z.literal("MapObjectData6").default("MapObjectData6")
});

type IMapObjectData6 = z.infer<typeof IMapObjectData6>;

class MapObjectData6 extends KDMStructure<IMapObjectData6> {
  public static readonly schema = IMapObjectData6;

  public override readonly unknownSection4Value1 = 16133612;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IMapObjectData6;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new MapObjectData1(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new MapObjectData2(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMUnknownType1(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IMapObjectData6 {
    return IMapObjectData6.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get()
    });
  }

  public override set(data: unknown): this {
    const mapobjectdata = IMapObjectData6.parse(data);

    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);
    this.unknown3.set(mapobjectdata.unknown3);
    this.unknown4.set(mapobjectdata.unknown4);
    this.unknown5.set(mapobjectdata.unknown5);
    
    return this;
  }
}

export default MapObjectData6;
