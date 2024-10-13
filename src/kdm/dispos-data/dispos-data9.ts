import z from "zod";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMU32 from "../common/kdm-u32";

const IDisposData9 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMU32.schema,
  _offset: z.number(),
  _structure: z.literal("DisposData9").default("DisposData9")
});

type IDisposData9 = z.infer<typeof IDisposData9>;

class DisposData9 extends KDMStructure<IDisposData9> {
  public static readonly schema = IDisposData9;

  public override readonly unknownSection4Value1 = 14234452;
  public override readonly unknownSection4Value0 = 0x00000000;

  public override readonly schema = IDisposData9;
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMU32(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [this.unknown0];
  }

  public override get(): IDisposData9 {
    return IDisposData9.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      _offset: this.offset
    });
  }

  public override set(data: unknown): this {
    const disposdata = IDisposData9.parse(data);

    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);

    return this;
  }
}

export default DisposData9;
