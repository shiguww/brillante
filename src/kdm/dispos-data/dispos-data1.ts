import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";

const IDisposData1 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMGenericArrayPointer.schema,
  unknown2: KDMU32.schema,
  _structure: z.literal("DisposData1").default("DisposData1")
});

type IDisposData1 = z.infer<typeof IDisposData1>;

class DisposData1 extends KDMStructure<IDisposData1> {
  public static readonly schema = IDisposData1;

  public override readonly unknownSection4Value1 = 14234260;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData1;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown2 = new KDMU32(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IDisposData1 {
    return IDisposData1.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData1.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);

    return this;
  }
}

export default DisposData1;
