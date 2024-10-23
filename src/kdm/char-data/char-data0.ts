import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const ICharData0 = z.object({
  _kind: z.literal("CharData0").default("CharData0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema
});

type ICharData0 = z.infer<typeof ICharData0>;

class CharData0 extends KDMStruct<ICharData0> {
  public static readonly schema = ICharData0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ICharData0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): ICharData0 {
    return ICharData0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(chardata: ICharData0): void {
    this.unknown0.set(chardata.unknown0);
    this.unknown1.set(chardata.unknown1);
  }
}

export default CharData0;
