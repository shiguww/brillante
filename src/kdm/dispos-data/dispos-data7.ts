import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI32 from "#/kdm/common/primitive/kdm-i32"
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMEntity from "../common/kdm-entity";
import KDM from "../kdm";

const IDisposData7 = z.object({
  unknown0: KDMStructArrayPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMI32.schema,
  unknown3: KDMI32.schema,
  _kind:z.literal("DisposData7").default("DisposData7")
});

type IDisposData7 = z.infer<typeof IDisposData7>;

class DisposData7 extends KDMStruct<IDisposData7> {
  public static readonly schema = IDisposData7;

  public override readonly unknownSection4Value1 = 14234396;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown2 = new KDMI32(this.kdm);
  public readonly unknown3 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData7);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3
    ];
  }

  protected override _get(): IDisposData7 {
    return IDisposData7.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(disposdata: IDisposData7): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
    this.unknown3.set(disposdata.unknown3);
  }
}

export default DisposData7;
