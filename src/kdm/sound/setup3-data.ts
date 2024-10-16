import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMF32 from "../common/primitive/kdm-f32";
import KDMStruct from "../common/kdm-struct";
import type KDM from "../kdm";

const ISetup3Data = z.object({
  _kind: z.literal("Setup3Data").default("Setup3Data"),
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown0: KDMStringPointer.schema
});

type ISetup3Data = z.infer<typeof ISetup3Data>;

class Setup3Data extends KDMStruct<ISetup3Data> {
  public static readonly schema = ISetup3Data;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E10FC;

  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ISetup3Data);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
    ];
  }

  protected override _get(): ISetup3Data {
    return ISetup3Data.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(setup3data: ISetup3Data): void {
    this.unknown0.set(setup3data.unknown0);
    this.unknown1.set(setup3data.unknown1);
    this.unknown2.set(setup3data.unknown2);
    this.unknown3.set(setup3data.unknown3);
  }
}

export default Setup3Data;
