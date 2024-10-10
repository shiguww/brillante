import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IMapObjectData2 = z.object({
  unknown0: KDMStringPointer.schema,
  _structure: z.literal("MapObjectData2").default("MapObjectData2")
});

type IMapObjectData2 = z.infer<typeof IMapObjectData2>;

class MapObjectData2 extends KDMStructure<IMapObjectData2> {
  public static readonly schema = IMapObjectData2;

  public override readonly unknownSection4Value1 = 16133232;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IMapObjectData2;
  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0
    ];
  }

  public override get(): IMapObjectData2 {
    return IMapObjectData2.parse({
      unknown0: this.unknown0.get()
    });
  }

  public override set(data: unknown): this {
    const mapobjectdata = IMapObjectData2.parse(data);
    this.unknown0.set(mapobjectdata.unknown0);
    return this;
  }
}

export default MapObjectData2;
