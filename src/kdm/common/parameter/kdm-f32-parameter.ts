import z from "zod";
import assert from "node:assert";
import type KDM from "#/kdm/kdm";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import KDMU16 from "#/kdm/common/primitive/kdm-u16";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../array/kdm-array";

class KDMF32Parameter extends KDMEntity<IKDMF32Parameter> {
  public static get schema(): typeof IKDMF32Parameter {
    return IKDMF32Parameter;
  }

  public readonly uid = new KDMU16(this.kdm);
  public readonly value = new KDMF32(this.kdm);
  public readonly typeid = new KDMU16(this.kdm);
  public readonly unknown0 = new KDMU32(this.kdm);
  public readonly name = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IKDMF32Parameter);
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

  protected override _get(): IKDMF32Parameter {
    return IKDMF32Parameter.parse({
      name: this.name.get(),
      value: this.value.get(),
      unknown0: this.unknown0.get()
    });
  }

  protected override _set(parameter: IKDMF32Parameter): void {
    this.name.set(parameter.name);
    this.value.set(parameter.value);
    this.unknown0.set(parameter.unknown0);
  }

  protected override _build(buffer: WBuffer): void {
    // @ts-expect-error - wtf typescript?
    const typeid = this.kdm.entities.find((e) => e.constructor === KDMF32)?.uid;
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

const IKDMF32Parameter = z.object({
  _kind: z.literal("KDMF32Parameter").default("KDMF32Parameter"),
  value: KDMF32.schema,
  unknown0: KDMU32.schema,
  name: KDMStringPointer.schema,
});

type IKDMF32Parameter = z.infer<typeof IKDMF32Parameter>;
export default KDMF32Parameter;
