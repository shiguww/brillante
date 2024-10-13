import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMStringPointerArrayPointer from "../common/pointer/kdm-string-pointer-array-pointer";
import KDMGenericPointerArrayPointer from "../common/pointer/kdm-generic-pointer-array-pointer";
import KDMU32 from "../common/kdm-u32";
import KDMGenericArrayPointer from "../common/pointer/kdm-generic-array-pointer";

const IDisposData21 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMGenericPointerArrayPointer.schema,
  unknown2: KDMU32.schema,
  unknown3: KDMGenericPointerArrayPointer.schema,
  unknown4: KDMU32.schema,
  unknown5: KDMGenericPointerArrayPointer.schema,
  unknown6: KDMU32.schema,
  unknown7: KDMGenericPointerArrayPointer.schema,
  unknown8: KDMU32.schema,
  unknown9: KDMGenericArrayPointer.schema,
  _structure: z.literal("DisposData21").default("DisposData21")
});

type IDisposData21 = z.infer<typeof IDisposData21>;

class DisposData21 extends KDMStructure<IDisposData21> {
  public static readonly schema = IDisposData21;

  public override readonly unknownSection4Value1 = 0x00000000;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData21;
  public readonly unknown0 = new KDMStringPointerArrayPointer(this.kdm);
  public readonly unknown1 = new KDMGenericPointerArrayPointer(this.kdm);
  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown3 = new KDMGenericPointerArrayPointer(this.kdm);
  public readonly unknown4 = new KDMU32(this.kdm);
  public readonly unknown5 = new KDMGenericPointerArrayPointer(this.kdm);
  public readonly unknown6 = new KDMU32(this.kdm);
  public readonly unknown7 = new KDMGenericPointerArrayPointer(this.kdm);
  public readonly unknown8 = new KDMU32(this.kdm);
  public readonly unknown9 = new KDMGenericArrayPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      this.unknown6,
      this.unknown7,
      this.unknown8,
      this.unknown9
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IDisposData21 {
    return IDisposData21.parse({
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
    const disposdata = IDisposData21.parse(data);

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

export default DisposData21;
