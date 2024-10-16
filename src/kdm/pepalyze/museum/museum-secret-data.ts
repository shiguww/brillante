import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDM from "#/kdm/kdm";
import z from "zod";

const IMuseumSecretData = z.object({
  _kind: z.literal("MuseumSecretData").default("MuseumSecretData"),
  unknown2: KDMU32.schema,
  unknown4: KDMU32.schema,
  unknown6: KDMU32.schema,
  unknown8: KDMU32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown7: KDMStringPointer.schema
});

type IMuseumSecretData = z.infer<typeof IMuseumSecretData>;

class MuseumSecretData extends KDMStruct<IMuseumSecretData> {
  public static readonly schema = IMuseumSecretData;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00572BFC;

  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown4 = new KDMU32(this.kdm);
  public readonly unknown6 = new KDMU32(this.kdm);
  public readonly unknown8 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMuseumSecretData);
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

  protected override _get(): IMuseumSecretData {
    return IMuseumSecretData.parse({
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

  protected override _set(secretdata: IMuseumSecretData): void {
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

export default MuseumSecretData;
