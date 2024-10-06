import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMF32 from "#kdm/editor/common/primitive/kdm-f32";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMU32 from "#kdm/editor/common/primitive/kdm-u32";
import KDMObjectHeading from "#kdm/editor/common/kdm-object-heading";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

class UnusedSoundData0Heading extends KDMObjectHeading<UnusedSoundData0> {
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

class UnusedSoundData0 extends KDMObject<never> {
  public static readonly schema = z.never();

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E1120;

  public override readonly schema = z.never();
  public override readonly heading = new UnusedSoundData0Heading(this);

  public readonly unknown0 = new KDMF32(this.kdm);
  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMU32(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5
    ];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): void {
    assert.fail();
  }

  protected override _build(): never {
    assert.fail();
  }

  protected override _parse(): never {
    assert.fail();
  }
}

export default UnusedSoundData0;
