import z from "zod";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import KDMPadding from "#/kdm/common/padding/kdm-padding";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "./array/kdm-array";

abstract class KDMStruct<T extends IKDMStruct = IKDMStruct> extends KDMEntity<T> {
  public abstract unknownSection4Value0: number;
  public abstract unknownSection4Value1: number;

  public static get baseschema(): typeof IKDMStruct {
    return IKDMStruct;
  }

  public abstract get fields(): Array<KDMEntity>;

  public override get arrays(): Array<KDMArray> {
    return this.fields.map((f) => f.arrays).flat();
  }

  public get realfields(): Array<KDMEntity> {
    return this.fields.filter((f) => !(f instanceof KDMPadding));
  }

  public override get sizeof(): number {
    return this.fields.map((f) => f.sizeof).reduce((prev, curr) => prev + curr);
  }

  public override get strings(): Array<KDMStringPointer> {
    return [
      ...this.fields.map((f) => f.strings).flat(),
      ...this.fields.filter((f) => f instanceof KDMStringPointer)
    ];
  }

  protected override _build(buffer: WBuffer): void {
    this.fields.forEach((f) => f.build(buffer));
  }

  protected override _parse(buffer: RBuffer): void {
    this.fields.forEach((f) => f.parse(buffer));
  }
}

const IKDMStruct = z.object({
  _kind: z.string()
});

type IKDMStruct = z.infer<typeof IKDMStruct>;
export default KDMStruct;
