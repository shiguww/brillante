import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const IPaperData1 = z.object({
  _kind: z.literal("PaperData1").default("PaperData1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMI32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMStringPointer.schema
});

type IPaperData1 = z.infer<typeof IPaperData1>;

class PaperData1 extends KDMStruct<IPaperData1> {
  public static readonly schema = IPaperData1;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMI32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IPaperData1);
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

  protected override _get(): IPaperData1 {
    return IPaperData1.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get()
    });
  }

  protected override _set(paperdata: IPaperData1): void {
    this.unknown0.set(paperdata.unknown0);
    this.unknown1.set(paperdata.unknown1);
    this.unknown2.set(paperdata.unknown2);
    this.unknown3.set(paperdata.unknown3);
    this.unknown4.set(paperdata.unknown4);
    this.unknown5.set(paperdata.unknown5);
  }
}

export default PaperData1;
