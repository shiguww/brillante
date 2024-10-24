import z from "zod";
import assert from "node:assert";
import type KDM from "#/kdm/kdm";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import KDMI16 from "#/kdm/common/primitive/kdm-i16";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../array/kdm-array";

class KDMU32Parameter extends KDMEntity<IKDMU32Parameter> {
  public static get schema(): typeof IKDMU32Parameter {
    return IKDMU32Parameter;
  };

  public readonly uid = new KDMI16(this.kdm);
  public readonly value = new KDMI32(this.kdm);
  public readonly typeid = new KDMI16(this.kdm);
  public readonly unknown0 = new KDMI32(this.kdm);
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
      value: this.value.get()
    });
  }

  protected override _set(parameter: IKDMU32Parameter): void {
    this.name.set(parameter.name);
    this.value.set(parameter.value);
  }

  protected override _build(buffer: WBuffer): void {
    // @ts-expect-error - wtf typescript?
    const typeid = this.kdm.entities.find((e) => e.constructor === KDMI32)?.uid;
    assert(typeid !== undefined);

    this.typeid.set(typeid);

    this.uid.build(buffer);
    this.typeid.build(buffer);

    this.name.build(buffer);

    if(this.kdm.parameters.at(-1) !== this) {
      this.unknown0.set(this.kdm.constant + buffer.offset + 32);
    }

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
  value: KDMI32.schema,
  name: KDMStringPointer.schema
});

type IKDMU32Parameter = z.infer<typeof IKDMU32Parameter>;

export default KDMU32Parameter;
