import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";
import KDMF32 from "../common/kdm-f32";
import KDMBoolean from "../common/kdm-boolean";
import KDMU24Padding from "../common/padding/kdm-u24-padding";
import KDMArray from "../common/array/kdm-array";

const IDisposData18 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMGenericArrayPointer.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMBoolean.schema,
  unknown8: KDMU32.schema,
  unknown9: KDMGenericArrayPointer.schema,
  _structure: z.literal("DisposData18").default("DisposData18")
});

type IDisposData18 = z.infer<typeof IDisposData18>;

class DisposData18 extends KDMStructure<IDisposData18> {
  public static readonly schema = IDisposData18;

  public override readonly unknownSection4Value1 = 14234932;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData18;
  
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMGenericArrayPointer(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMBoolean(this.kdm);
  public readonly unknown8 = new KDMU32(this.kdm);
  public readonly unknown9 = new KDMGenericArrayPointer(this.kdm);

  public override get arrays(): KDMArray[] {
    return [
      ...this.unknown2.arrays,
      ...this.unknown9.arrays
    ];
  }

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,               // 00 -> 04
      this.unknown1,               // 04 -> 08
      this.unknown2,               // 08 -> 12
      this.unknown3,               // 12 -> 16
      this.unknown4,               // 16 -> 20
      this.unknown5,               // 20 -> 24
      this.unknown6,               // 24 -> 28
      this.unknown7,               // 28 -> 29
      new KDMU24Padding(this.kdm), // 29 -> 32
      this.unknown8,               // 32 -> 36
      this.unknown9                // 36 -> 40
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [
      ...this.arrays.map((a) => a.strings).flat(),
      ...this.fields.filter((f) => f instanceof KDMStringPointer)
    ];
  }

  public override get(): IDisposData18 {
    return IDisposData18.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get(),
      unknown7: this.unknown7.get(),
      unknown8: this.unknown8.get(),
      unknown9: this.unknown9.get()
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData18.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
    this.unknown3.set(disposdata.unknown3);
    this.unknown4.set(disposdata.unknown4);
    this.unknown5.set(disposdata.unknown5);
    this.unknown6.set(disposdata.unknown6);
    this.unknown7.set(disposdata.unknown7);
    this.unknown8.set(disposdata.unknown8);
    this.unknown9.set(disposdata.unknown9);

    return this;
  }
}

export default DisposData18;
