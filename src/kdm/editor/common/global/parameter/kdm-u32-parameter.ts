import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMU32 from "#kdm/editor/common/primitive/kdm-u32";
import KDMStructure from "#kdm/editor/common/kdm-structure";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";

class KDMU32ParameterHeading extends KDMStructure<never> {
  public readonly uid = new KDMU16(this.kdm);
  public readonly oid = new KDMU16(this.kdm);

  public override readonly schema = z.never();

  public override get fields(): Array<KDMPrimitive> {
    return [this.uid, this.oid];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }
}

const IKDMU32Parameter = z.object({
  value: KDMU32.schema,
  name: KDMStringPointer.schema,
  unknown0: KDMU32.schema.default(0),
  _structure: z.literal("KDMU32Parameter").default("KDMU32Parameter")
});

type IKDMU32Parameter = z.infer<typeof IKDMU32Parameter>;

class KDMU32Parameter extends KDMObject<IKDMU32Parameter> {
  public static readonly OID = 0x0001;
  public static readonly schema = IKDMU32Parameter;

  public readonly value = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly name = new KDMStringPointer(this.kdm);

  public override readonly schema = IKDMU32Parameter;
  public override readonly heading = new KDMU32ParameterHeading(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [...super.fields, this.name, this.unknown0, this.value];
  }

  protected override _get(): IKDMU32Parameter {
    return IKDMU32Parameter.parse({
      name: this.name.get(),
      value: this.value.get(),
      unknown0: this.unknown0.get()
    });
  }

  protected override _set(parameter: IKDMU32Parameter): void {
    this.name.set(parameter.name);
    this.value.set(parameter.value);
    this.unknown0.set(parameter.unknown0);
  }

  protected override _build(buffer: WBuffer): void {
    this.heading.oid.set(KDMU32Parameter.OID);
    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);
    assert.equal(this.heading.oid.get(), KDMU32Parameter.OID);
  }
}

export default KDMU32Parameter;
