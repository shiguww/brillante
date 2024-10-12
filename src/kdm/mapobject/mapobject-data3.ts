import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMUnknownType1 from "../common/kdm-unknown-type1";

const IMapObjectData3 = z.object({
  unknown2: KDMUnknownType1.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  _structure: z.literal("MapObjectData3").default("MapObjectData3")
});

type IMapObjectData3 = z.infer<typeof IMapObjectData3>;

class MapObjectData3 extends KDMStructure<IMapObjectData3> {
  public static readonly schema = IMapObjectData3;

  public override readonly unknownSection4Value1 = 16133256;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IMapObjectData3;
  public readonly unknown2 = new KDMUnknownType1(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [
      ...this.fields.filter((f) => f instanceof KDMStringPointer),
      ...this.fields.map((f) => f.strings).flat()
    ];
  }

  public override get(): IMapObjectData3 {
    return IMapObjectData3.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  public override set(data: unknown): this {
    const mapobjectdata = IMapObjectData3.parse(data);

    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);

    return this;
  }
}

export default MapObjectData3;
