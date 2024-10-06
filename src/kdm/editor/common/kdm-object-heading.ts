import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import type KDMObject from "#kdm/editor/common/kdm-object";
import KDMStructure from "#kdm/editor/common/kdm-structure";

abstract class KDMObjectHeading<O extends KDMObject<any> = KDMObject> extends KDMStructure<never> {
  public readonly object: O;
  public readonly ouid = new KDMU16(this.kdm);
  public readonly otid = new KDMU16(this.kdm);

  public override readonly schema = z.never();

  public constructor(object: O) {
    super(object.kdm);
    this.object = object;
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }

  protected override _build(buffer: WBuffer): void {
    this.otid.set(this.object.otid);
    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);
    assert.equal(this.otid.get(), this.object.otid);
  }
}

export default KDMObjectHeading;
