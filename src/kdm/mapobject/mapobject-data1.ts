import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IMapObjectData1 = z.object({
  unknown0: KDMStringPointer.schema,
  _structure: z.literal("MapObjectData1").default("MapObjectData1")
});

type IMapObjectData1 = z.infer<typeof IMapObjectData1>;

class MapObjectData1 extends KDMStructure<IMapObjectData1> {
  public static readonly schema = IMapObjectData1;

  public override readonly unknownSection4Value1 = 16133216;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IMapObjectData1;
  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IMapObjectData1 {
    return IMapObjectData1.parse({
      unknown0: this.unknown0.get()
    });
  }

  public override set(data: unknown): this {
    const mapobjectdata = IMapObjectData1.parse(data);
    this.unknown0.set(mapobjectdata.unknown0);
    return this;
  }
}

export default MapObjectData1;
