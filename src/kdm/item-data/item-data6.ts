import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const IItemData6 = z.object({
  _kind: z.literal("ItemData6").default("ItemData6"),
  unknown0: KDMU32.schema,
  unknown1: KDMStructArrayPointer.schema
});

type IItemData6 = z.infer<typeof IItemData6>;

class ItemData6 extends KDMStruct<IItemData6> {
  public static readonly schema = IItemData6;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData6);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): IItemData6 {
    return IItemData6.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(itemdata: IItemData6): void {
    this.unknown0.set(itemdata.unknown0);
    this.unknown1.set(itemdata.unknown1);
  }
}

export default ItemData6;
