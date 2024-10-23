import z from "zod";
import type KDM from "../kdm";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const IDisposData3 = z.object({
  unknown0: KDMStructArrayPointer.schema,
  unknown1: KDMStructArrayPointer.schema,
  unknown2: KDMI32.schema,
  unknown3: KDMI32.schema,
  _kind:z.literal("DisposData3").default("DisposData3")
});

type IDisposData3 = z.infer<typeof IDisposData3>;

class DisposData3 extends KDMStruct<IDisposData3> {
  public static readonly schema = IDisposData3;

  public override readonly unknownSection4Value1 = 14234308;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown2 = new KDMI32(this.kdm);
  public readonly unknown3 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData3);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3
    ];
  }

  protected override _get(): IDisposData3 {
    return IDisposData3.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(data: unknown): this {
    const disposdata = IDisposData3.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
    this.unknown3.set(disposdata.unknown3);

    return this;
  }
}

export default DisposData3;
