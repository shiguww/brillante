import z from "zod";
import KDMF32 from "#kdm/common/kdm-f32";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMStringPointer from "#kdm/common/pointer/kdm-string-pointer";

const ISetup3Data = z.object({
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown0: KDMStringPointer.schema,
  _structure: z.literal("Setup3Data").default("Setup3Data")
});

type ISetup3Data = z.infer<typeof ISetup3Data>;

class Setup3Data extends KDMStructure<ISetup3Data> {
  public static readonly schema = ISetup3Data;

  public override readonly schema = ISetup3Data;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E10FC;

  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
    ];
  }

  public override get(): ISetup3Data {
    return ISetup3Data.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  public override set(data: ISetup3Data): this {
    const setup3data = ISetup3Data.parse(data);

    this.unknown0.set(setup3data.unknown0);
    this.unknown1.set(setup3data.unknown1);
    this.unknown2.set(setup3data.unknown2);
    this.unknown3.set(setup3data.unknown3);

    return this;
  }
}

export default Setup3Data;
