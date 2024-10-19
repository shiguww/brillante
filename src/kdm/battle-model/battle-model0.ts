import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IBattleModel0 = z.object({
  _kind: z.literal("BattleModel0").default("BattleModel0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema
});

type IBattleModel0 = z.infer<typeof IBattleModel0>;

class BattleModel0 extends KDMStruct<IBattleModel0> {
  public static readonly schema = IBattleModel0;

  public override readonly unknownSection4Value1 = 14234236;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IBattleModel0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): IBattleModel0 {
    return IBattleModel0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(disposdata: IBattleModel0): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
  }
}

export default BattleModel0;
