import z from "zod";
import assert from "node:assert";
import type KDM from "#/kdm/kdm";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import KDMU16 from "#/kdm/common/primitive/kdm-u16";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../array/kdm-array";

class KDMU32Parameter extends KDMEntity<IKDMU32Parameter> {
  public static get schema(): typeof IKDMU32Parameter {
    return IKDMU32Parameter;
  };

  public readonly uid = new KDMU16(this.kdm);
  public readonly value = new KDMU32(this.kdm);
  public readonly typeid = new KDMU16(this.kdm);
  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly name = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IKDMU32Parameter);
  }

  public override get arrays(): Array<KDMArray> {
    return [];
  }
 
  public override get sizeof(): number {
    return this.uid.sizeof
      + this.typeid.sizeof
      + this.name.sizeof
      + this.unknown0.sizeof
      + this.value.sizeof;
  }

  public override get strings(): Array<KDMStringPointer> {
    return [this.name];
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
    // @ts-expect-error - wtf typescript?
    const typeid = this.kdm.entities.find((e) => e.constructor === KDMU32)?.uid;
    assert(typeid !== undefined);

    this.typeid.set(typeid);

    this.uid.build(buffer);
    this.typeid.build(buffer);

    this.name.build(buffer);
    this.unknown0.build(buffer);

    this.value.build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    this.uid.parse(buffer);
    this.typeid.parse(buffer);

    this.name.parse(buffer);
    this.unknown0.parse(buffer);

    this.value.parse(buffer);
  }
}

const IKDMU32Parameter = z.object({
  _kind: z.literal("KDMU32Parameter").default("KDMU32Parameter"),
  value: KDMU32.schema,
  unknown0: KDMU32.schema,
  name: KDMStringPointer.schema
});

type IKDMU32Parameter = z.infer<typeof IKDMU32Parameter>;

export default KDMU32Parameter;
