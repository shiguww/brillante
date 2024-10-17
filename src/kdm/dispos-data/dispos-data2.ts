import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU32 from "#/kdm/common/primitive/kdm-u32"
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IDisposData2 = z.object({
  unknown0: KDMU32.schema,
  unknown1: KDMStructArrayPointer.schema,
  _kind:z.literal("DisposData2").default("DisposData2")
});

type IDisposData2 = z.infer<typeof IDisposData2>;

class DisposData2 extends KDMStruct<IDisposData2> {
  public static readonly schema = IDisposData2;

  public override readonly unknownSection4Value1 = 14234280;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData2);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): IDisposData2 {
    return IDisposData2.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(data: unknown): this {
    const disposdata = IDisposData2.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);

    return this;
  }
}

export default DisposData2;
