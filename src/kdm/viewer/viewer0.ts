import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const IViewer0 = z.object({
  _kind: z.literal("Viewer0").default("Viewer0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema
});

type IViewer0 = z.infer<typeof IViewer0>;

class Viewer0 extends KDMStruct<IViewer0> {
  public static readonly schema = IViewer0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IViewer0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  protected override _get(): IViewer0 {
    return IViewer0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  protected override _set(Viewer: IViewer0): void {
    this.unknown0.set(Viewer.unknown0);
    this.unknown1.set(Viewer.unknown1);
    this.unknown2.set(Viewer.unknown2);
  }
}

export default Viewer0;
