import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import type KDM from "../kdm";

const IGroupData = z.object({
  _kind: z.literal("GroupData").default("GroupData"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema
});

type IGroupData = z.infer<typeof IGroupData>;

class GroupData extends KDMStruct<IGroupData> {
  public static readonly schema = IGroupData;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E121C;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IGroupData);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
    ];
  }

  protected override _get(): IGroupData {
    return IGroupData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(groupdata: IGroupData): void {
    this.unknown0.set(groupdata.unknown0);
    this.unknown1.set(groupdata.unknown1);
    this.unknown2.set(groupdata.unknown2);
    this.unknown3.set(groupdata.unknown3);
  }
}

export default GroupData;
