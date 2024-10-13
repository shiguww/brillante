import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";
import KDMArray from "../common/array/kdm-array";

const IDisposData8 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMU32.schema,
  unknown2: KDMU32.schema,
  unknown3: KDMU32.schema,
  unknown4: KDMGenericArrayPointer.schema,
  unknown5: KDMGenericArrayPointer.schema,
  _structure: z.literal("DisposData8").default("DisposData8")
});

type IDisposData8 = z.infer<typeof IDisposData8>;

class DisposData8 extends KDMStructure<IDisposData8> {
  public static readonly schema = IDisposData8;

  public override readonly unknownSection4Value1 = 14234432;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData8;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMU32(this.kdm);
  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown3 = new KDMU32(this.kdm);
  public readonly unknown4 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown5 = new KDMGenericArrayPointer(this.kdm);

  public override get arrays(): KDMArray[] {
    return [
      ...this.unknown4.arrays,
      ...this.unknown5.arrays
    ];
  }

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [
      ...this.arrays.map((a) => a.strings).flat(),
      ...this.fields.filter((f) => f instanceof KDMStringPointer)
    ];
  }

  public override get(): IDisposData8 {
    return IDisposData8.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData8.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
    this.unknown3.set(disposdata.unknown3);
    this.unknown4.set(disposdata.unknown4);
    this.unknown5.set(disposdata.unknown5);

    return this;
  }
}

export default DisposData8;
