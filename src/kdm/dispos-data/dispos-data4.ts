import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IDisposData4 = z.object({
  unknown0: KDMStringPointer.schema,
  _structure: z.literal("DisposData4").default("DisposData4")
});

type IDisposData4 = z.infer<typeof IDisposData4>;

class DisposData4 extends KDMStructure<IDisposData4> {
  public static readonly schema = IDisposData4;

  public override readonly unknownSection4Value1 = 14234324;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData4;
  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [this.unknown0];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [this.unknown0];
  }

  public override get(): IDisposData4 {
    return IDisposData4.parse({
      unknown0: this.unknown0.get(),
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData4.parse(data);
    this.unknown0.set(disposdata.unknown0);
    return this;
  }
}

export default DisposData4;
