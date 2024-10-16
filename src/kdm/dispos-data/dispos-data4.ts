import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";

const IDisposData4 = z.object({
  unknown0: KDMStringPointer.schema,
  _kind:z.literal("DisposData4").default("DisposData4")
});

type IDisposData4 = z.infer<typeof IDisposData4>;

class DisposData4 extends KDMStruct<IDisposData4> {
  public static readonly schema = IDisposData4;

  public override readonly unknownSection4Value1 = 14234324;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData4);
  }

  public override get fields(): Array<KDMEntity> {
    return [this.unknown0];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [this.unknown0];
  }

  protected override _get(): IDisposData4 {
    return IDisposData4.parse({
      unknown0: this.unknown0.get(),
    });
  }

  protected override _set(data: unknown): this {
    const disposdata = IDisposData4.parse(data);
    this.unknown0.set(disposdata.unknown0);
    return this;
  }
}

export default DisposData4;
