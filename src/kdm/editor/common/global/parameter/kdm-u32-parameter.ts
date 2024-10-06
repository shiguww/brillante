import z from "zod";
import assert from "node:assert";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU32 from "#kdm/editor/common/primitive/kdm-u32";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";
import KDMObjectHeading from "../../kdm-object-heading";
import KDMStructure from "../../kdm-structure";
import KDMU16 from "../../primitive/kdm-u16";

class KDMU32ParameterHeading extends KDMStructure<never> {
  public readonly uid = new KDMU16(this.kdm);
  public readonly type = new KDMU16(this.kdm).set(KDMU32Parameter.TYPE);

  public override readonly schema = z.never();

  public override get fields(): Array<KDMPrimitive> {
    return [this.uid, this.type];
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

class KDMU32Parameter extends KDMStructure<IKDMU32Parameter> {
  public static readonly TYPE = 0x0001;
  public static readonly schema = IKDMU32Parameter;

  public readonly value = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly name = new KDMStringPointer(this.kdm);

  public override readonly schema = IKDMU32Parameter;
  public readonly heading = new KDMU32ParameterHeading(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [...this.heading.fields, this.name, this.unknown0, this.value];
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
}

export default KDMU32Parameter;
