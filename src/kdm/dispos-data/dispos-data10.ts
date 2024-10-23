import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMI32 from "#/kdm/common/primitive/kdm-i32"
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IDisposData10 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMI32.schema,
  _kind:z.literal("DisposData10").default("DisposData10")
});

type IDisposData10 = z.infer<typeof IDisposData10>;

class DisposData10 extends KDMStruct<IDisposData10> {
  public static readonly schema = IDisposData10;

  public override readonly unknownSection4Value1 = 14234476;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown2 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData10);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): IDisposData10 {
    return IDisposData10.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(disposdata: IDisposData10): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
  }
}

export default DisposData10;
