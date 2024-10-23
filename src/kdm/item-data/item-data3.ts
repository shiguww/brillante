import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMU16 from "#/kdm/common/primitive/kdm-u16";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const IItemData3 = z.object({
  _kind: z.literal("ItemData3").default("ItemData3"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMU16.schema,
  unknown2: KDMU16.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMStructArrayPointer.schema,
  unknown5: KDMStructArrayPointer.schema
});

type IItemData3 = z.infer<typeof IItemData3>;

class ItemData3 extends KDMStruct<IItemData3> {
  public static readonly schema = IItemData3;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMU16(this.kdm);
  public readonly unknown2 = new KDMU16(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown5 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData3);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5
    ];
  }

  protected override _get(): IItemData3 {
    return IItemData3.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get()
    });
  }

  protected override _set(itemdata: IItemData3): void {
    this.unknown0.set(itemdata.unknown0);
    this.unknown1.set(itemdata.unknown1);
    this.unknown2.set(itemdata.unknown2);
    this.unknown3.set(itemdata.unknown3);
    this.unknown4.set(itemdata.unknown4);
    this.unknown5.set(itemdata.unknown5);
  }
}

export default ItemData3;
