import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IGroupData = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  _structure: z.literal("GroupData").default("GroupData")
});

type IGroupData = z.infer<typeof IGroupData>;

class GroupData extends KDMStructure<IGroupData> {
  public static readonly schema = IGroupData;

  public override readonly schema = IGroupData;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E121C;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
    ];
  }

  public override get(): IGroupData {
    return IGroupData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  public override set(data: unknown): this {
    const groupdata = IGroupData.parse(data);

    this.unknown0.set(groupdata.unknown0);
    this.unknown1.set(groupdata.unknown1);
    this.unknown2.set(groupdata.unknown2);
    this.unknown3.set(groupdata.unknown3);

    return this;
  }
}

export default GroupData;
