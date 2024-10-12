import z from "zod";
import RBuffer from "#/buffer/r-buffer";
import WBuffer from "#/buffer/w-buffer";
import assert from "node:assert/strict";
import KDMU16 from "#/kdm/common/kdm-u16";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IKDMU32Parameter = z.object({
  value: KDMU32.schema,
  unknown0: KDMU32.schema,
  name: KDMStringPointer.schema,
  _structure: z.literal("KDMU32Parameter").default("KDMU32Parameter")
});

type IKDMU32Parameter = z.infer<typeof IKDMU32Parameter>;

class KDMU32Parameter extends KDMStructure<IKDMU32Parameter> {
  public override readonly schema = IKDMU32Parameter;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public readonly uid = new KDMU16(this.kdm);
  public readonly type = new KDMU16(this.kdm);
  public readonly value = new KDMU32(this.kdm);
  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly name = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMStructure> {
    return [
      this.uid,
      this.type,
      this.name,
      this.unknown0,
      this.value
    ];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.filter((f) => f instanceof KDMStringPointer);
  }

  public override get(): IKDMU32Parameter {
    return IKDMU32Parameter.parse({
      name: this.name.get(),
      value: this.value.get(),
      unknown0: this.unknown0.get()
    });
  }

  public override set(data: unknown): this {
    const parameter = IKDMU32Parameter.parse(data);

    this.name.set(parameter.name);
    this.value.set(parameter.value);
    this.unknown0.set(parameter.unknown0);

    return this;
  }

  public override build(buffer: WBuffer): this {
    const type = this.kdm.findTypeID(KDMU32);
    assert(type !== null);

    this.type.set(type);

    super.build(buffer);
    return this;
  }

  public override parse(buffer: RBuffer): this {
    super.parse(buffer);
    assert.equal(this.type.get(), this.kdm.findTypeID(KDMU32));

    return this;
  }
}

export default KDMU32Parameter;
