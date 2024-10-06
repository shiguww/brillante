import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMStructure from "#kdm/editor/common/kdm-structure";
import KDMPadding from "#kdm/editor/common/primitive/kdm-padding";
import KDMObjectHeading from "#kdm/editor/common/kdm-object-heading";
import type KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

abstract class KDMObject<T = unknown> extends KDMStructure<T> {
  public abstract readonly heading: KDMObjectHeading<KDMObject<T>>;

  public abstract readonly unknownSection4Value0: null | number;
  public abstract readonly unknownSection4Value1: null | number;

  public get otid(): number {
    const res = this.kdm.types.find((t) => t[1] === this.constructor);

    if(res !== undefined) {
      return res[0];
    }

    return -1;
  }

  public get objects(): KDMObject[] {
    return [this];
  }

  public override get fields(): Array<KDMPrimitive> {
    return this.heading.fields;
  }

  public get bodyfields(): Array<KDMPrimitive> {
    return this.fields
      .filter((field) => !(field instanceof KDMPadding))
      .filter((field) => !this.heading.fields.includes(field));
  }

  protected override _build(buffer: WBuffer): void {
    this.heading.build(buffer);

    this.fields
      .filter((f) => !this.heading.fields.includes(f))
      .forEach((f) => f.build(buffer));
  }

  protected override _parse(buffer: RBuffer): void {
    this.heading.offset = buffer.offset;
    this.heading.parse(buffer);

    this.fields
      .filter((f) => !this.heading.fields.includes(f))
      .forEach((f) => f.parse(buffer));
  }
}

export default KDMObject;
