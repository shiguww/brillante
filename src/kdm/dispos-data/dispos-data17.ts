import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMU32 from "#/kdm/common/primitive/kdm-u32"
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IDisposData17 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMU32.schema,
  _kind:z.literal("DisposData17").default("DisposData17")
});

type IDisposData17 = z.infer<typeof IDisposData17>;

class DisposData17 extends KDMStruct<IDisposData17> {
  public static readonly schema = IDisposData17;

  public override readonly unknownSection4Value1 = 14234880;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData17;
  
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown2 = new KDMU32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData17);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): IDisposData17 {
    return IDisposData17.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(disposdata: IDisposData17): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
  }
}

export default DisposData17;
