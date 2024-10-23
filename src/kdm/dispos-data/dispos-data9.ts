import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMI32 from "#/kdm/common/primitive/kdm-i32"
import KDMEntity from "../common/kdm-entity";
import KDM from "../kdm";

const IDisposData9 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMI32.schema,
  _kind:z.literal("DisposData9").default("DisposData9")
});

type IDisposData9 = z.infer<typeof IDisposData9>;

class DisposData9 extends KDMStruct<IDisposData9> {
  public static readonly schema = IDisposData9;

  public override readonly unknownSection4Value1 = 14234452;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData9;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData9);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): IDisposData9 {
    return IDisposData9.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(disposdata: IDisposData9): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
  }
}

export default DisposData9;
