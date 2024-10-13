import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMStringPointerArrayPointer from "../common/pointer/kdm-string-pointer-array-pointer";

const IDisposData20 = z.object({
  unknown0: KDMStringPointerArrayPointer.schema,
  unknown1: KDMStringPointerArrayPointer.schema,
  _structure: z.literal("DisposData20").default("DisposData20")
});

type IDisposData20 = z.infer<typeof IDisposData20>;

class DisposData20 extends KDMStructure<IDisposData20> {
  public static readonly schema = IDisposData20;

  public override readonly unknownSection4Value1 = 14234976;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData20;
  public readonly unknown0 = new KDMStringPointerArrayPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointerArrayPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IDisposData20 {
    return IDisposData20.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData20.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);

    return this;
  }
}

export default DisposData20;
