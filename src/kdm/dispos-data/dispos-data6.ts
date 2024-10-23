import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI32 from "#/kdm/common/primitive/kdm-i32"
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import type KDM from "../kdm";
import KDMEntity from "../common/kdm-entity";

const IDisposData6 = z.object({
  unknown0: KDMI32.schema,
  unknown1: KDMStructArrayPointer.schema,
  _kind:z.literal("DisposData6").default("DisposData6")
});

type IDisposData6 = z.infer<typeof IDisposData6>;

class DisposData6 extends KDMStruct<IDisposData6> {
  public static readonly schema = IDisposData6;

  public override readonly unknownSection4Value1 = 14234368;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMI32(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData6);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): IDisposData6 {
    return IDisposData6.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(disposdata: IDisposData6): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
  }
}

export default DisposData6;
