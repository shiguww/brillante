import z from "zod";
import type KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";
import KDMStruct from "../common/kdm-struct";
import KDMI32 from "../common/primitive/kdm-i32";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";

const ISecretData = z.object({
  _kind: z.literal("SecretData").default("SecretData"),
  unknown2: KDMI32.schema,
  unknown4: KDMI32.schema,
  unknown6: KDMI32.schema,
  unknown8: KDMI32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown7: KDMStringPointer.schema
});

type ISecretData = z.infer<typeof ISecretData>;

class SecretData extends KDMStruct<ISecretData> {
  public static readonly schema = ISecretData;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00A34120;

  public readonly unknown2 = new KDMI32(this.kdm);
  public readonly unknown4 = new KDMI32(this.kdm);
  public readonly unknown6 = new KDMI32(this.kdm);
  public readonly unknown8 = new KDMI32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ISecretData);
  }

  public override get fields(): Array<KDMEntity> {
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

  protected override _get(): ISecretData {
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

  protected override _set(secretdata: ISecretData): void {
    this.unknown0.set(secretdata.unknown0);
    this.unknown1.set(secretdata.unknown1);
    this.unknown2.set(secretdata.unknown2);
    this.unknown3.set(secretdata.unknown3);
    this.unknown4.set(secretdata.unknown4);
    this.unknown5.set(secretdata.unknown5);
    this.unknown6.set(secretdata.unknown6);
    this.unknown7.set(secretdata.unknown7);
    this.unknown8.set(secretdata.unknown8);
  }
}

export default SecretData;
