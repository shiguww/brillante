import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import KDMStructArray from "#/kdm/common/array/kdm-struct-array";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const REF_NULL = "ref: NULL";

class KDMStructArrayPointer extends KDMEntity<IKDMStructArrayPointer> {
  private _reference: string = REF_NULL;

  public static get schema(): typeof IKDMStructArrayPointer {
    return IKDMStructArrayPointer;
  }

  public constructor(kdm: KDM) {
    super(kdm, IKDMStructArrayPointer);
  }

  public get reference(): string {
    return this._reference;
  }

  private set reference(ref: string) {
    this._reference = ref;
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.array.strings;
  }

  private get array(): KDMStructArray {
    const array = this.kdm.arrays.find((arr) => arr.refkey == this.reference);
    assert(array instanceof KDMStructArray);

    return array;
  }

  protected override _get(): IKDMStructArrayPointer {
    return this.reference;
  }

  protected override _set(reference: IKDMStructArrayPointer): void {
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

    buffer.setU32(array.offset + KDMStructArray.HEADING_SIZE);
  }

  protected override _parse(buffer: RBuffer): void {
    const pointer = buffer.getU32();

    if (pointer === 0) {
      this.reference = REF_NULL;
      return;
    }

    const array = this.kdm.arrays
      .find((arr) => arr.offset !== null && ((arr.offset + KDMStructArray.HEADING_SIZE) === pointer));

    if (array === undefined) {
      this.reference = REF_NULL;
      return;
    }

    assert(array instanceof KDMStructArray);
    this.reference = `ref: ${array.refkey}`;
  }
}

const IKDMStructArrayPointer = z.string()
  .min(1)
  .refine((str) => str.startsWith("ref: "));

type IKDMStructArrayPointer = z.infer<typeof IKDMStructArrayPointer>;
export default KDMStructArrayPointer;
