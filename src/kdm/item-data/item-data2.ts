import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";

const IItemData2 = z.object({
  _kind: z.literal("ItemData2").default("ItemData2"),
  unknown0: KDMI32.schema
});

type IItemData2 = z.infer<typeof IItemData2>;

class ItemData2 extends KDMStruct<IItemData2> {
  public static readonly schema = IItemData2;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData2);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0
    ];
  }

  protected override _get(): IItemData2 {
    return IItemData2.parse({
      unknown0: this.unknown0.get()
    });
  }

  protected override _set(itemdata: IItemData2): void {
    this.unknown0.set(itemdata.unknown0);
  }
}

export default ItemData2;
