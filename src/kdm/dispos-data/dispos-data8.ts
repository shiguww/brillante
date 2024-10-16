import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMU32 from "#/kdm/common/primitive/kdm-u32"
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IDisposData8 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMU32.schema,
  unknown2: KDMU32.schema,
  unknown3: KDMU32.schema,
  unknown4: KDMStructArrayPointer.schema,
  unknown5: KDMStructArrayPointer.schema,
  _kind:z.literal("DisposData8").default("DisposData8")
});

type IDisposData8 = z.infer<typeof IDisposData8>;

class DisposData8 extends KDMStruct<IDisposData8> {
  public static readonly schema = IDisposData8;

  public override readonly unknownSection4Value1 = 14234432;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMU32(this.kdm);
  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown3 = new KDMU32(this.kdm);
  public readonly unknown4 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown5 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData8);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5
    ];
  }

  protected override _get(): IDisposData8 {
    return IDisposData8.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
    });
  }

  protected override _set(disposdata: IDisposData8): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
    this.unknown3.set(disposdata.unknown3);
    this.unknown4.set(disposdata.unknown4);
    this.unknown5.set(disposdata.unknown5);
  }
}

export default DisposData8;
