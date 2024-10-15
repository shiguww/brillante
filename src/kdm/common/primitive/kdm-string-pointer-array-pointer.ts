import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMArray from "#/kdm/common/array/kdm-array";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStringPointerArray from "#/kdm/common/array/kdm-string-pointer-array";

class KDMStringPointerArrayPointer extends KDMEntity<IKDMStringPointerArrayPointer> {
  private _reference: null | string = null;

  public static get schema(): typeof IKDMStringPointerArrayPointer {
    return IKDMStringPointerArrayPointer;
  }

  public constructor(kdm: KDM) {
    super(kdm, IKDMStringPointerArrayPointer);
  }

  public get reference(): null | string {
    return this._reference;
  }

  private set reference(ref: null | string) {
    this._reference = ref;
  }

  public override get arrays(): Array<KDMArray> {
    if (this.reference === null) {
      return [];
    }

    return this.array.arrays;
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get strings(): Array<KDMStringPointer> {
    if (this.reference === null) {
      return [];
    }

    return this.array.strings;
  }

  private get array(): KDMStringPointerArray {
    const array = this.kdm.arrays.find((arr) => arr.refkey === this.reference);
    assert(array instanceof KDMStringPointerArray);

    return array;
  }

  protected override _get(): IKDMStringPointerArrayPointer {
    return IKDMStringPointerArrayPointer.parse({
      refkey: this.reference
    });
  }

  protected override _set(reference: IKDMStringPointerArrayPointer): void {
    this.reference = reference.refkey;
  }

  protected override _build(buffer: WBuffer): void {
    if (this.reference === null) {
      buffer.setU32(0);
      return;
    }

    const array = this.kdm.arrays.find((arr) => arr.refkey === this.reference);

    assert(array !== undefined);
    assert(array.offset !== null);

    buffer.setU32(array.offset + KDMStringPointerArray.HEADING_SIZE);
  }

  protected override _parse(buffer: RBuffer): void {
    const pointer = buffer.getU32();

    if (pointer === 0) {
      this.reference = null;
      return;
    }

    const array = this.kdm.arrays
      .find((arr) => arr.offset !== null && ((arr.offset + KDMStringPointerArray.HEADING_SIZE) === pointer));

    assert(array instanceof KDMStringPointerArray);
    this.reference = array.refkey;
  }
}

const IKDMStringPointerArrayPointer = z.object({
  _kind: z.literal("KDMStringPointerArrayPointer").default("KDMStringPointerArrayPointer"),
  refkey: z.string().nullable()
});

type IKDMStringPointerArrayPointer = z.infer<typeof IKDMStringPointerArrayPointer>;
export default KDMStringPointerArrayPointer;
