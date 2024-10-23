import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const ICharData3 = z.object({
  _kind: z.literal("CharData3").default("CharData3"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStructArrayPointer.schema,
  unknown3: KDMStructArrayPointer.schema,
  unknown4: KDMStructArrayPointer.schema,
  unknown5: KDMStructArrayPointer.schema,
  unknown6: KDMStructArrayPointer.schema,
  unknown7: KDMStructArrayPointer.schema,
  unknown8: KDMStructArrayPointer.schema,
  unknown9: KDMStructArrayPointer.schema,
  unknown10: KDMStructArrayPointer.schema
});

type ICharData3 = z.infer<typeof ICharData3>;

class CharData3 extends KDMStruct<ICharData3> {
  public static readonly schema = ICharData3;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown3 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown4 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown5 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown6 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown7 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown8 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown9 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown10 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ICharData3);
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
      this.unknown9,
      this.unknown10
    ];
  }

  protected override _get(): ICharData3 {
    return ICharData3.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get(),
      unknown7: this.unknown7.get(),
      unknown8: this.unknown8.get(),
      unknown9: this.unknown9.get(),
      unknown10: this.unknown10.get()
    });
  }

  protected override _set(chardata: ICharData3): void {
    this.unknown0.set(chardata.unknown0);
    this.unknown1.set(chardata.unknown1);
    this.unknown2.set(chardata.unknown2);
    this.unknown3.set(chardata.unknown3);
    this.unknown4.set(chardata.unknown4);
    this.unknown5.set(chardata.unknown5);
    this.unknown6.set(chardata.unknown6);
    this.unknown7.set(chardata.unknown7);
    this.unknown8.set(chardata.unknown8);
    this.unknown9.set(chardata.unknown9);
    this.unknown10.set(chardata.unknown10);
  }
}

export default CharData3;
