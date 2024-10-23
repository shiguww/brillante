import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMU24Padding from "../common/padding/kdm-u24-padding";

const ICharData5 = z.object({
  _kind: z.literal("CharData5").default("CharData5"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStructArrayPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown6: KDMStringPointer.schema,
  unknown7: KDMU32.schema,
  unknown8: KDMBoolean.schema
});

type ICharData5 = z.infer<typeof ICharData5>;

class CharData5 extends KDMStruct<ICharData5> {
  public static readonly schema = ICharData5;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown6 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMU32(this.kdm);
  public readonly unknown8 = new KDMBoolean(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ICharData5);
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
      this.unknown8,
      new KDMU24Padding(this.kdm)
    ];
  }

  protected override _get(): ICharData5 {
    return ICharData5.parse({
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

  protected override _set(chardata: ICharData5): void {
    this.unknown0.set(chardata.unknown0);
    this.unknown1.set(chardata.unknown1);
    this.unknown2.set(chardata.unknown2);
    this.unknown3.set(chardata.unknown3);
    this.unknown4.set(chardata.unknown4);
    this.unknown5.set(chardata.unknown5);
    this.unknown6.set(chardata.unknown6);
    this.unknown7.set(chardata.unknown7);
    this.unknown8.set(chardata.unknown8);
  }
}

export default CharData5;
