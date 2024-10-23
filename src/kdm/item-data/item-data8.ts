import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const IItemData8 = z.object({
  _kind: z.literal("ItemData8").default("ItemData8"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMF32.schema
});

type IItemData8 = z.infer<typeof IItemData8>;

class ItemData8 extends KDMStruct<IItemData8> {
  public static readonly schema = IItemData8;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData8);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3
    ];
  }

  protected override _get(): IItemData8 {
    return IItemData8.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(itemdata: IItemData8): void {
    this.unknown0.set(itemdata.unknown0);
    this.unknown1.set(itemdata.unknown1);
    this.unknown2.set(itemdata.unknown2);
    this.unknown3.set(itemdata.unknown3);
  }
}

export default ItemData8;
