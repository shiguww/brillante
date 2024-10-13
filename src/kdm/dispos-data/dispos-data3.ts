import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";

const IDisposData3 = z.object({
  unknown0: KDMGenericArrayPointer.schema,
  unknown1: KDMGenericArrayPointer.schema,
  unknown2: KDMU32.schema,
  unknown3: KDMU32.schema,
  _structure: z.literal("DisposData3").default("DisposData3")
});

type IDisposData3 = z.infer<typeof IDisposData3>;

class DisposData3 extends KDMStructure<IDisposData3> {
  public static readonly schema = IDisposData3;

  public override readonly unknownSection4Value1 = 14234308;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData3;
  public readonly unknown0 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown1 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown3 = new KDMU32(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IDisposData3 {
    return IDisposData3.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData3.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
    this.unknown3.set(disposdata.unknown3);

    return this;
  }
}

export default DisposData3;
