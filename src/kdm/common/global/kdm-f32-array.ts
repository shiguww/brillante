import z from "zod";
import WBuffer from "#buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import KDMObject from "#kdm/common/kdm-object";
import KDMF32 from "#kdm/common/primitive/kdm-f32";
import KDMU16 from "#kdm/common/primitive/kdm-u16";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMPrimitive from "#kdm/common/primitive/kdm-primitive";

class KDMF32ArrayHeading extends KDMStructure<never> {
  public readonly uid = new KDMU16(this.kdm);
  public readonly oid = new KDMU16(this.kdm);
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override readonly schema = z.never();

  public override get fields(): Array<KDMPrimitive> {
    return [this.uid, this.size0, this.oid, this.size1];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }

  protected override _build(buffer: WBuffer): void {
    this.oid.set(KDMF32Array.OID);
    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);

    assert.equal(this.size0.get(), this.size1.get());
    assert.equal(this.oid.get(), KDMF32Array.OID);
  }
}

const IKDMF32Array = KDMF32.schema.array();
type IKDMF32Array = z.infer<typeof IKDMF32Array>;

class KDMF32Array extends KDMObject<IKDMF32Array> {
  public static readonly OID = 0x0000;
  public static readonly schema = IKDMF32Array;

  private readonly entries: KDMF32[] = [];

  public override readonly schema = IKDMF32Array;
  public override readonly heading = new KDMF32ArrayHeading(this.kdm);

  public override get sizeof(): number {
    return this.heading.sizeof + this.entries.map((e) => e.sizeof)
      .reduce((prev, curr) => prev + curr);
  }

  public override get fields(): Array<KDMPrimitive> {
    return [];
  }

  public get size(): number {
    return this.heading.size0.get();
  }

  public set size(size: number) {
    this.heading.size0.set(size);
    this.heading.size1.set(size);
  }

  protected override _get(): IKDMF32Array {
    return this.entries.map((e) => e.get());
  }

  protected override _set(data: IKDMF32Array): void {
    data.forEach((data) => this.entries.push(new KDMF32(this.kdm).set(data)));
  }

  protected override _build(buffer: WBuffer): void {
    this.size = this.entries.length;

    this.heading.build(buffer);
    this.entries.forEach((entry) => entry.build(buffer));
  }

  protected override _parse(buffer: RBuffer): void {
    this.heading.parse(buffer);

    for (let i = 0; i < this.size; i += 1) {
      const entry = new KDMF32(this.kdm);
      entry.parse(buffer);

      this.entries.push(entry);
    }
  }
}

export default KDMF32Array;
