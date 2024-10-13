import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";

const IDisposData0 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMU32.schema,
  _structure: z.literal("DisposData0").default("DisposData0")
});

type IDisposData0 = z.infer<typeof IDisposData0>;

class DisposData0 extends KDMStructure<IDisposData0> {
  public static readonly schema = IDisposData0;

  public override readonly unknownSection4Value1 = 14234452;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData0;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMU32(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IDisposData0 {
    return IDisposData0.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData0.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);

    return this;
  }
}

export default DisposData0;
