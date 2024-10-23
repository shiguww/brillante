import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const IItemData4 = z.object({
  _kind: z.literal("ItemData4").default("ItemData4"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema
});

type IItemData4 = z.infer<typeof IItemData4>;

class ItemData4 extends KDMStruct<IItemData4> {
  public static readonly schema = IItemData4;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData4);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3
    ];
  }

  protected override _get(): IItemData4 {
    return IItemData4.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(itemdata: IItemData4): void {
    this.unknown0.set(itemdata.unknown0);
    this.unknown1.set(itemdata.unknown1);
    this.unknown2.set(itemdata.unknown2);
    this.unknown3.set(itemdata.unknown3);
  }
}

export default ItemData4;
