import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";
import KDMStringPointerArrayPointer from "../common/primitive/kdm-string-pointer-array-pointer";

const IBattleCamera1 = z.object({
  _kind: z.literal("BattleCamera1").default("BattleCamera1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointerArrayPointer.schema,
});

type IBattleCamera1 = z.infer<typeof IBattleCamera1>;

class BattleCamera1 extends KDMStruct<IBattleCamera1> {
  public static readonly schema = IBattleCamera1;

  public override readonly unknownSection4Value1 = 14234236;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointerArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IBattleCamera1);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): IBattleCamera1 {
    return IBattleCamera1.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(camera: IBattleCamera1): void {
    this.unknown0.set(camera.unknown0);
    this.unknown1.set(camera.unknown1);
  }
}

export default BattleCamera1;
