import z from "zod";
import WBuffer from "#buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMF32 from "#kdm/editor/common/primitive/kdm-f32";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMObjectHeading from "#kdm/editor/common/kdm-object-heading";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

class KDMF32ArrayHeading extends KDMObjectHeading<KDMF32Array> {
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override readonly schema = z.never();

  public override get fields(): Array<KDMPrimitive> {
    return [this.ouid, this.size0, this.otid, this.size1];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }
}

const IKDMF32Array = KDMF32.schema.array();
type IKDMF32Array = z.infer<typeof IKDMF32Array>;

class KDMF32Array extends KDMObject<IKDMF32Array> {
  public static readonly schema = IKDMF32Array;

  private readonly entries: KDMF32[] = [];

  public override readonly schema = IKDMF32Array;
  public override readonly heading = new KDMF32ArrayHeading(this);

  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get sizeof(): number {
    return this.heading.sizeof + this.entries.map((e) => e.sizeof)
      .reduce((prev, curr) => prev + curr);
  }

  public override get fields(): Array<KDMPrimitive> {
    return [];
  }

  protected override _get(): IKDMF32Array {
    return this.entries.map((e) => e.get());
  }

  protected override _set(data: IKDMF32Array): void {
    data.forEach((data) => this.entries.push(new KDMF32(this.kdm).set(data)));
  }

  protected override _build(buffer: WBuffer): void {
    this.heading.size0.set(this.entries.length);
    this.heading.size1.set(this.entries.length);

    this.heading.build(buffer);
    this.entries.forEach((entry) => entry.build(buffer));
  }

  protected override _parse(buffer: RBuffer): void {
    this.heading.parse(buffer);

    for (let i = 0; i < this.heading.size0.get(); i += 1) {
      const entry = new KDMF32(this.kdm);
      entry.parse(buffer);

      this.entries.push(entry);
    }
  }
}

export default KDMF32Array;
