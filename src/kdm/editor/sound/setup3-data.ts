import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMF32 from "#kdm/editor/common/primitive/kdm-f32";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMObjectHeading from "#kdm/editor/common/kdm-object-heading";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";

class Setup3DataHeading extends KDMObjectHeading<Setup3Data> {
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [this.ouid, this.size0, this.otid, this.size1];
  }

  protected override _build(buffer: WBuffer): void {
    this.size0.set((this.object.sizeof - this.sizeof) / 4);
    this.size1.set((this.object.sizeof - this.sizeof) / 4);
    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);
    assert.equal(this.size0.get(), (this.object.sizeof - this.sizeof) / 4);
    assert.equal(this.size1.get(), (this.object.sizeof - this.sizeof) / 4);
  }
}

const ISetup3Data = z.object({
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown0: KDMStringPointer.schema,
  _structure: z.literal("Setup3Data").default("Setup3Data")
});

type ISetup3Data = z.infer<typeof ISetup3Data>;

class Setup3Data extends KDMObject<ISetup3Data> {
  public static readonly schema = ISetup3Data;

  public override readonly schema = ISetup3Data;
  public override readonly heading = new Setup3DataHeading(this);

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E10FC;

  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
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
