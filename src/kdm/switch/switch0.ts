import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const ISwitch0 = z.object({
  _kind: z.literal("Switch0").default("Switch0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMI32.schema
});

type ISwitch0 = z.infer<typeof ISwitch0>;

class Switch0 extends KDMStruct<ISwitch0> {
  public static readonly schema = ISwitch0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ISwitch0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): ISwitch0 {
    return ISwitch0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(_switch: ISwitch0): void {
    this.unknown0.set(_switch.unknown0);
    this.unknown1.set(_switch.unknown1);
  }
}

export default Switch0;
