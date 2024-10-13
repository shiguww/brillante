import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";

const IDisposData2 = z.object({
  unknown0: KDMU32.schema,
  unknown1: KDMGenericArrayPointer.schema,
  _structure: z.literal("DisposData2").default("DisposData2")
});

type IDisposData2 = z.infer<typeof IDisposData2>;

class DisposData2 extends KDMStructure<IDisposData2> {
  public static readonly schema = IDisposData2;

  public override readonly unknownSection4Value1 = 14234280;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData2;
  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly unknown1 = new KDMGenericArrayPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IDisposData2 {
    return IDisposData2.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData2.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);

    return this;
  }
}

export default DisposData2;
