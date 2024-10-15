import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDM from "#/kdm/kdm";
import z from "zod";


const IMuseumSecretSealData = z.object({
  _kind: z.literal("MuseumSecretSealData").default("MuseumSecretSealData"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
});

type IMuseumSecretSealData = z.infer<typeof IMuseumSecretSealData>;

class MuseumSecretSealData extends KDMStruct<IMuseumSecretSealData> {
  public static readonly schema = IMuseumSecretSealData;

  public override readonly unknownSection4Value0 = 0x000000000;
  public override readonly unknownSection4Value1 = 0x000000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMuseumSecretSealData);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
    ];
  }

  protected override _get(): IMuseumSecretSealData {
    return IMuseumSecretSealData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(secretsealdata: IMuseumSecretSealData): void {
    this.unknown0.set(secretsealdata.unknown0);
    this.unknown1.set(secretsealdata.unknown1);
    this.unknown2.set(secretsealdata.unknown2);
    this.unknown3.set(secretsealdata.unknown3);
  }
}

export default MuseumSecretSealData;
