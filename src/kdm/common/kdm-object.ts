import KDMStructure from "#kdm/common/kdm-structure";
import type KDMU16 from "#kdm/common/primitive/kdm-u16";
import type KDMPrimitive from "#kdm/common/primitive/kdm-primitive";

interface KDMObjectHeading extends KDMStructure {
  readonly uid: KDMU16;
}

abstract class KDMObject<T = unknown> extends KDMStructure<T> {
  public abstract readonly heading: KDMObjectHeading;

  public get objects(): KDMObject[] {
    return [this];
  }

  public override get fields(): Array<KDMPrimitive> {
    return this.heading.fields;
  }

  public override get description(): Array<number> {
    return this.fields.filter((f) => !this.heading.fields.includes(f))
      .map((f) => f.description).flat();
  }
}

export default KDMObject;
