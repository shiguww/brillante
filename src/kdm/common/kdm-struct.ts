import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import KDMPadding from "#/kdm/common/padding/kdm-padding";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

abstract class KDMStruct<T = unknown> extends KDMEntity<T> {
  public abstract signature0: number;
  public abstract signature1: number;

  public abstract get fields(): Array<KDMEntity>;

  public get realfields(): Array<KDMEntity> {
    return this.fields.filter((f) => !(f instanceof KDMPadding));
  }

  public override get sizeof(): number {
    return this.fields.map((f) => f.sizeof).reduce((prev, curr) => prev + curr);
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.fields.map((f) => f.strings).flat();
  }

  protected override _build(buffer: WBuffer): void {
    this.fields.forEach((f) => f.build(buffer));
  }

  protected override _parse(buffer: RBuffer): void {
    this.fields.forEach((f) => f.parse(buffer));
  }
}

export default KDMStruct;
