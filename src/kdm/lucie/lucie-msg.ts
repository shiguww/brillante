import z from "zod";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const ILucieMSG = z.object({
  unknown1: KDMU32.schema,
  unknown0: KDMStringPointer.schema,
  _structure: z.literal("LucieMSG").default("LucieMSG")
});

type ILucieMSG = z.infer<typeof ILucieMSG>;

class LucieMSG extends KDMStructure<ILucieMSG> {
  public static readonly schema = ILucieMSG;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public override readonly schema = ILucieMSG;
  public readonly unknown1 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm)
    .set("\0");

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  public override get strings(): KDMStringPointer[] {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): ILucieMSG {
    return ILucieMSG.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  public override set(data: unknown): this {
    const luciemsg = ILucieMSG.parse(data);

    this.unknown0.set(luciemsg.unknown0);
    this.unknown1.set(luciemsg.unknown1);

    return this;
  }
}

export default LucieMSG;
