import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import MapObjectData3 from "./mapobject-data3";
import KDMUnknownType1 from "../common/kdm-unknown-type1";

const IMapObjectData7 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: MapObjectData3.schema,
  unknown3: KDMUnknownType1.schema,
  _structure: z.literal("MapObjectData7").default("MapObjectData7")
});

type IMapObjectData7 = z.infer<typeof IMapObjectData7>;

class MapObjectData7 extends KDMStructure<IMapObjectData7> {
  public static readonly schema = IMapObjectData7;

  public override readonly unknownSection4Value1 = 16133640;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IMapObjectData7;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new MapObjectData3(this.kdm);
  public readonly unknown3 = new KDMUnknownType1(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [
      ...this.fields.filter((f) => f instanceof KDMStringPointer),
      ...this.fields.map((f) => f.strings).flat()
    ];
  }

  public override get(): IMapObjectData7 {
    return IMapObjectData7.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  public override set(data: unknown): this {
    const mapobjectdata = IMapObjectData7.parse(data);

    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);
    this.unknown3.set(mapobjectdata.unknown3);
    
    return this;
  }
}

export default MapObjectData7;
