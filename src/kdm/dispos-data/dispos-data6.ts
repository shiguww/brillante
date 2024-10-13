import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";
import KDMArray from "../common/array/kdm-array";

const IDisposData6 = z.object({
  unknown0: KDMU32.schema,
  unknown1: KDMGenericArrayPointer.schema,
  _structure: z.literal("DisposData6").default("DisposData6")
});

type IDisposData6 = z.infer<typeof IDisposData6>;

class DisposData6 extends KDMStructure<IDisposData6> {
  public static readonly schema = IDisposData6;

  public override readonly unknownSection4Value1 = 14234368;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData6;
  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly unknown1 = new KDMGenericArrayPointer(this.kdm);

  public override get arrays(): KDMArray[] {
    return this.unknown1.arrays;
  }

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.unknown1.strings
  }

  public override get(): IDisposData6 {
    return IDisposData6.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData6.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);

    return this;
  }
}

export default DisposData6;
