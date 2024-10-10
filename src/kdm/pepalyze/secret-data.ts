import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";

const ISecretData = z.object({
  unknown2: KDMU32.schema,
  unknown4: KDMU32.schema,
  unknown6: KDMU32.schema,
  unknown8: KDMU32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown7: KDMStringPointer.schema,
  _structure: z.literal("SecretData").default("SecretData")
});

type ISecretData = z.infer<typeof ISecretData>;

class SecretData extends KDMStructure<ISecretData> {
  public static readonly schema = ISecretData;

  public override readonly schema = ISecretData;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00A34120;

  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown4 = new KDMU32(this.kdm);
  public readonly unknown6 = new KDMU32(this.kdm);
  public readonly unknown8 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      this.unknown6,
      this.unknown7,
      this.unknown8
    ];
  }

  public override get strings(): KDMStringPointer[] {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): ISecretData {
    return ISecretData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get(),
      unknown7: this.unknown7.get(),
      unknown8: this.unknown8.get()
    });
  }

  public override set(data: unknown): this {
    const secretdata = ISecretData.parse(data);

    this.unknown0.set(secretdata.unknown0);
    this.unknown1.set(secretdata.unknown1);
    this.unknown2.set(secretdata.unknown2);
    this.unknown3.set(secretdata.unknown3);
    this.unknown4.set(secretdata.unknown4);
    this.unknown5.set(secretdata.unknown5);
    this.unknown6.set(secretdata.unknown6);
    this.unknown7.set(secretdata.unknown7);
    this.unknown8.set(secretdata.unknown8);

    return this;
  }
}

export default SecretData;
