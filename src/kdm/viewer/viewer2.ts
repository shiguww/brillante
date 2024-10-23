import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const IViewer2 = z.object({
  _kind: z.literal("Viewer2").default("Viewer2"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStructArrayPointer.schema,
  unknown3: KDMI32.schema
});

type IViewer2 = z.infer<typeof IViewer2>;

class Viewer2 extends KDMStruct<IViewer2> {
  public static readonly schema = IViewer2;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown3 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IViewer2);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3
    ];
  }

  protected override _get(): IViewer2 {
    return IViewer2.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(Viewer: IViewer2): void {
    this.unknown0.set(Viewer.unknown0);
    this.unknown1.set(Viewer.unknown1);
    this.unknown2.set(Viewer.unknown2);
    this.unknown3.set(Viewer.unknown3);
  }
}

export default Viewer2;
