import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMUnknownType0 from "../common/kdm-unknown-type0";
import KDMUnknownType1 from "../common/kdm-unknown-type1";

const IMapObjectData0 = z.object({
  unknown1: KDMUnknownType0.schema,
  unknown2: KDMUnknownType1.schema,
  unknown0: KDMStringPointer.schema,
  _structure: z.literal("MapObjectData0").default("MapObjectData0")
});

type IMapObjectData0 = z.infer<typeof IMapObjectData0>;

class MapObjectData0 extends KDMStructure<IMapObjectData0> {
  public static readonly schema = IMapObjectData0;

  public override readonly unknownSection4Value1 = 16133200;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IMapObjectData0;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMUnknownType0(this.kdm);
  public readonly unknown2 = new KDMUnknownType1(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IMapObjectData0 {
    return IMapObjectData0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  public override set(data: unknown): this {
    const mapobjectdata = IMapObjectData0.parse(data);

    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);

    return this;
  }
}

export default MapObjectData0;
