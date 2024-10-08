import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IChangeBGMData = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  _structure: z.literal("ChangeBGMData").default("ChangeBGMData")
});

type IChangeBGMData = z.infer<typeof IChangeBGMData>;

class ChangeBGMData extends KDMStructure<IChangeBGMData> {
  public static readonly schema = IChangeBGMData;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public override readonly schema = IChangeBGMData;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  public override get(): IChangeBGMData {
    return IChangeBGMData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  public override set(data: unknown): this {
    const changebgmdata = IChangeBGMData.parse(data);

    this.unknown0.set(changebgmdata.unknown0);
    this.unknown1.set(changebgmdata.unknown1);
    this.unknown2.set(changebgmdata.unknown2);

    return this;
  }
}

export default ChangeBGMData;
