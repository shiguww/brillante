import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMArray from "#/kdm/common/array/kdm-array";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStringPointerArray from "#/kdm/common/array/kdm-string-pointer-array";

const REF_NULL = "ref: NULL";

class KDMStringPointerArrayPointer extends KDMEntity<IKDMStringPointerArrayPointer> {
  private _reference: string = REF_NULL;

  public static get schema(): typeof IKDMStringPointerArrayPointer {
    return IKDMStringPointerArrayPointer;
  }

  public constructor(kdm: KDM) {
    super(kdm, IKDMStringPointerArrayPointer);
  }

  public get reference(): string {
    return this._reference;
  }

  private set reference(ref: string) {
    this._reference = ref;
  }

  public override get arrays(): Array<KDMArray> {
    if(this.reference === REF_NULL) {
      return [];
    }

    return this.array.arrays;
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get strings(): Array<KDMStringPointer> {
    if(this.reference === REF_NULL) {
      return [];
    }

    return this.array.strings;
  }

  private get array(): KDMStringPointerArray {
    const array = this.kdm.arrays.find((arr) => arr.refkey === this.reference.split("ref: ").at(1));
    assert(array instanceof KDMStringPointerArray);

    return array;
  }

  protected override _get(): IKDMStringPointerArrayPointer {
    return this.reference;
  }

  protected override _set(reference: IKDMStringPointerArrayPointer): void {
    this.reference = reference;
  }

  protected override _build(buffer: WBuffer): void {
    if (this.reference === REF_NULL) {
      buffer.setU32(0);
      return;
    }

    const array = this.kdm.arrays.find((arr) => arr.refkey === this.reference.split("ref: ").at(1));

    assert(array !== undefined);
    assert(array.offset !== null);

    buffer.setU32(array.offset + KDMStringPointerArray.HEADING_SIZE);
  }

  protected override _parse(buffer: RBuffer): void {
    const pointer = buffer.getU32();

    if (pointer === 0) {
      this.reference = REF_NULL;
      return;
    }

    const array = this.kdm.arrays
      .find((arr) => arr.offset !== null && ((arr.offset + KDMStringPointerArray.HEADING_SIZE) === pointer));

    if (array === undefined) {
      this.reference = REF_NULL;
      return;
    }

    assert(array instanceof KDMStringPointerArray);
    this.reference = `ref: ${array.refkey}`;
  }
}

const IKDMStringPointerArrayPointer = z.string()
  .min(1)
  .refine((str) => str.startsWith("ref: "));

type IKDMStringPointerArrayPointer = z.infer<typeof IKDMStringPointerArrayPointer>;
export default KDMStringPointerArrayPointer;
