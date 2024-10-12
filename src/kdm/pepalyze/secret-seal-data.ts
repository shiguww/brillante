import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const ISecretSealData = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  _structure: z.literal("SecretSealData").default("SecretSealData")
});

type ISecretSealData = z.infer<typeof ISecretSealData>;

class SecretSealData extends KDMStructure<ISecretSealData> {
  public static readonly schema = ISecretSealData;

  public override readonly schema = ISecretSealData;
  public override readonly unknownSection4Value0 = 0x000000000;
  public override readonly unknownSection4Value1 = 0x000000000;

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

  public override get strings(): KDMStringPointer[] {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): ISecretSealData {
    return ISecretSealData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  public override set(data: unknown): this {
    const secretsealdata = ISecretSealData.parse(data);

    this.unknown0.set(secretsealdata.unknown0);
    this.unknown1.set(secretsealdata.unknown1);
    this.unknown2.set(secretsealdata.unknown2);
    this.unknown3.set(secretsealdata.unknown3);

    return this;
  }
}

export default SecretSealData;
