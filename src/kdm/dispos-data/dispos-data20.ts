import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointerArrayPointer from "#/kdm/common/primitive/kdm-string-pointer-array-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IDisposData20 = z.object({
  unknown0: KDMStringPointerArrayPointer.schema,
  unknown1: KDMStringPointerArrayPointer.schema,
  _kind: z.literal("DisposData20").default("DisposData20")
});

type IDisposData20 = z.infer<typeof IDisposData20>;

class DisposData20 extends KDMStruct<IDisposData20> {
  public static readonly schema = IDisposData20;

  public override readonly unknownSection4Value1 = 14234976;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointerArrayPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointerArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData20);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): IDisposData20 {
    return IDisposData20.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(disposdata: IDisposData20): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
  }
}

export default DisposData20;
