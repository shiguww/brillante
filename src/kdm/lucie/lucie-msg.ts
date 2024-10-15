import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const ILucieMSG = z.object({
  unknown1: KDMU32.schema,
  unknown0: KDMStringPointer.schema,
  _kind: z.literal("LucieMSG").default("LucieMSG")
});

type ILucieMSG = z.infer<typeof ILucieMSG>;

class LucieMSG extends KDMStruct<ILucieMSG> {
  public static readonly schema = ILucieMSG;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public override readonly schema = ILucieMSG;
  public readonly unknown1 = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm)
    .set("\0");

  public constructor(kdm: KDM) {
    super(kdm, ILucieMSG);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1
    ];
  }

  protected override _get(): ILucieMSG {
    return ILucieMSG.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get()
    });
  }

  protected override _set(data: unknown): this {
    const luciemsg = ILucieMSG.parse(data);

    this.unknown0.set(luciemsg.unknown0);
    this.unknown1.set(luciemsg.unknown1);

    return this;
  }
}

export default LucieMSG;
