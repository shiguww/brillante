import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const ICharData6 = z.object({
  _kind: z.literal("CharData6").default("CharData6"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStructArrayPointer.schema
});

type ICharData6 = z.infer<typeof ICharData6>;

class CharData6 extends KDMStruct<ICharData6> {
  public static readonly schema = ICharData6;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ICharData6);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): ICharData6 {
    return ICharData6.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(chardata: ICharData6): void {
    this.unknown0.set(chardata.unknown0);
    this.unknown1.set(chardata.unknown1);
    this.unknown2.set(chardata.unknown2);
  }
}

export default CharData6;
