import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const IItemData7 = z.object({
  _kind: z.literal("ItemData7").default("ItemData7"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMU32.schema,
  unknown4: KDMU32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema
});

type IItemData7 = z.infer<typeof IItemData7>;

class ItemData7 extends KDMStruct<IItemData7> {
  public static readonly schema = IItemData7;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMU32(this.kdm);
  public readonly unknown4 = new KDMU32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IItemData7);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      this.unknown6
    ];
  }

  protected override _get(): IItemData7 {
    return IItemData7.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get()
    });
  }

  protected override _set(itemdata: IItemData7): void {
    this.unknown0.set(itemdata.unknown0);
    this.unknown1.set(itemdata.unknown1);
    this.unknown2.set(itemdata.unknown2);
    this.unknown3.set(itemdata.unknown3);
    this.unknown4.set(itemdata.unknown4);
    this.unknown5.set(itemdata.unknown5);
    this.unknown6.set(itemdata.unknown6);
  }
}

export default ItemData7;
