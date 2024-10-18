import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMArray from "#/kdm/common/array/kdm-array";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMF32Array from "../array/kdm-f32-array";

class KDMF32ArrayPointer extends KDMEntity<IKDMF32ArrayPointer> {
  private _reference: null | string = null;

  public static get schema(): typeof IKDMF32ArrayPointer {
    return IKDMF32ArrayPointer;
  }

  public constructor(kdm: KDM) {
    super(kdm, IKDMF32ArrayPointer);
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

  private get array(): KDMF32Array {
    const array = this.kdm.arrays.find((arr) => arr.refkey === this.reference);
    assert(array instanceof KDMF32Array);

    return array;
  }

  protected override _get(): IKDMF32ArrayPointer {
    return IKDMF32ArrayPointer.parse({
      refkey: this.reference
    });
  }

  protected override _set(reference: IKDMF32ArrayPointer): void {
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

    buffer.setU32(array.offset + KDMF32Array.HEADING_SIZE);
  }

  protected override _parse(buffer: RBuffer): void {
    const pointer = buffer.getU32();

    if (pointer === 0) {
      this.reference = null;
      return;
    }

    const array = this.kdm.arrays
      .find((arr) => arr.offset !== null && ((arr.offset + KDMF32Array.HEADING_SIZE) === pointer));

    assert(array instanceof KDMF32Array);
    this.reference = array.refkey;
  }

  public override toJSON(): object {
    if (this.reference === null) {
      return ({ ...super.toJSON(), _pointer: null });
    }

    return ({ ...super.toJSON(), _pointer: this.array.offset });
  }
}

const IKDMF32ArrayPointer = z.object({
  _kind: z.literal("KDMF32ArrayPointer").default("KDMF32ArrayPointer"),
  refkey: z.string().nullable()
});

type IKDMF32ArrayPointer = z.infer<typeof IKDMF32ArrayPointer>;
export default KDMF32ArrayPointer;
