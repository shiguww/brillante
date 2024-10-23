import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const IItemData0 = z.object({
  _kind: z.literal("ItemData0").default("ItemData0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema
});

type IItemData0 = z.infer<typeof IItemData0>;

class ItemData0 extends KDMStruct<IItemData0> {
  public static readonly schema = IItemData0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): IItemData0 {
    return IItemData0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(itemdata: IItemData0): void {
    this.unknown0.set(itemdata.unknown0);
    this.unknown1.set(itemdata.unknown1);
  }
}

export default ItemData0;
