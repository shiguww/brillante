import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";
import KDMStringPointerArrayPointer from "../common/primitive/kdm-string-pointer-array-pointer";

const IBattleCommon0 = z.object({
  _kind: z.literal("BattleCommon0").default("BattleCommon0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointerArrayPointer.schema,
});

type IBattleCommon0 = z.infer<typeof IBattleCommon0>;

class BattleCommon0 extends KDMStruct<IBattleCommon0> {
  public static readonly schema = IBattleCommon0;

  public override readonly unknownSection4Value1 = 14234236;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointerArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IBattleCommon0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): IBattleCommon0 {
    return IBattleCommon0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(camera: IBattleCommon0): void {
    this.unknown0.set(camera.unknown0);
    this.unknown1.set(camera.unknown1);
  }
}

export default BattleCommon0;
