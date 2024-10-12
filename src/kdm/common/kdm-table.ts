import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMStructure from "#/kdm/common/kdm-structure";
import type KDMArray from "#/kdm/common/array/kdm-array";
import type KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import type KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

abstract class KDMTable<T = unknown> extends KDMStructure<T> {
  public abstract readonly data: KDMGenericArray;
  public abstract readonly name: KDMStringPointer;

  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get arrays(): KDMArray[] {
    return [
      ...this.data.arrays,
      this.data
    ];
  }

  public override get fields(): Array<KDMStructure> {
    return [];
  }

  public override get strings(): KDMStringPointer[] {
    return [
      ...this.data.arrays.map((a) => a.strings).flat(),
      this.name
    ];
  }

  protected abstract sort(): void;

  public override build(buffer: WBuffer): this {
    this.sort();
    this.data.build(buffer);

    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.data.parse(buffer);
    return this;
  }
}

export default KDMTable;
