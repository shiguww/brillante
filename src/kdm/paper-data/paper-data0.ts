import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const IPaperData0 = z.object({
  _kind: z.literal("PaperData0").default("PaperData0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMI32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMI32.schema
});

type IPaperData0 = z.infer<typeof IPaperData0>;

class PaperData0 extends KDMStruct<IPaperData0> {
  public static readonly schema = IPaperData0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMI32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMI32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IPaperData0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      this.unknown6
    ];
  }

  protected override _get(): IPaperData0 {
    return IPaperData0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get()
    });
  }

  protected override _set(paperdata: IPaperData0): void {
    this.unknown0.set(paperdata.unknown0);
    this.unknown1.set(paperdata.unknown1);
    this.unknown2.set(paperdata.unknown2);
    this.unknown3.set(paperdata.unknown3);
    this.unknown4.set(paperdata.unknown4);
    this.unknown5.set(paperdata.unknown5);
    this.unknown6.set(paperdata.unknown6);
  }
}

export default PaperData0;
