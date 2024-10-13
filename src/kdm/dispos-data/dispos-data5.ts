import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";
import KDMArray from "../common/array/kdm-array";

const IDisposData5 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMGenericArrayPointer.schema,
  unknown2: KDMU32.schema,
  _structure: z.literal("DisposData5").default("DisposData5")
});

type IDisposData5 = z.infer<typeof IDisposData5>;

class DisposData5 extends KDMStructure<IDisposData5> {
  public static readonly schema = IDisposData5;

  public override readonly unknownSection4Value1 = 14234348;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData5;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown2 = new KDMU32(this.kdm);

  public override get arrays(): KDMArray[] {
    return this.unknown1.arrays;
  }

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [
      ...this.arrays.map((a) => a.strings).flat(),
      ...this.fields.filter((f) => f instanceof KDMStringPointer)
    ];
  }

  public override get(): IDisposData5 {
    return IDisposData5.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData5.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);

    return this;
  }
}

export default DisposData5;