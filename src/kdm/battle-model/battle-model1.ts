import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";
import KDMU32 from "../common/primitive/kdm-u32";
import KDMStructArrayPointer from "../common/primitive/kdm-struct-array-pointer";

const IBattleModel1 = z.object({
  _kind: z.literal("BattleModel1").default("BattleModel1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMU32.schema,
  unknown4: KDMStructArrayPointer.schema
});

type IBattleModel1 = z.infer<typeof IBattleModel1>;

class BattleModel1 extends KDMStruct<IBattleModel1> {
  public static readonly schema = IBattleModel1;

  public override readonly unknownSection4Value1 = 14234236;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMU32(this.kdm);
  public readonly unknown4 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IBattleModel1);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4
    ];
  }

  protected override _get(): IBattleModel1 {
    return IBattleModel1.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get()
    });
  }

  protected override _set(disposdata: IBattleModel1): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
    this.unknown3.set(disposdata.unknown3);
    this.unknown4.set(disposdata.unknown4);
  }
}

export default BattleModel1;
