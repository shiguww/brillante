import z from "zod";
import type KDM from "#/kdm/kdm";
import assert from "node:assert/strict";
import KDMF32 from "../primitive/kdm-f32";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMArray from "#/kdm/common/array/kdm-array";
import KDMStringPointer from "../primitive/kdm-string-pointer";

const IKDMF32Array = KDMArray.baseschema(KDMF32.schema).extend({
  _kind: z.literal("KDMF32Array").default("KDMF32Array")
});

type IKDMF32 = z.infer<typeof KDMF32.schema>;
type IKDMF32Array = z.infer<typeof IKDMF32Array>;

class KDMF32Array extends KDMArray<IKDMF32> {
  public static readonly schema = IKDMF32Array;

  public override entries: Array<KDMF32> = [];

  public constructor(kdm: KDM) {
    super(kdm, KDMF32Array.schema);
  }

  public get element(): KDMF32 {
    return new KDMF32(this.kdm);
  }

  public override get sizeof(): number {
    if (this.entries.length === 0 && !this.nullTerminatorFlag) {
      return 0;
    }

    return KDMF32Array.HEADING_SIZE + (this.nullTerminatorFlag
      ? this.element.sizeof * (this.entries.length + 1)
      : this.element.sizeof * this.entries.length);
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  protected override _get(): IKDMF32Array {
    return IKDMF32Array.parse({
      _refkey: this.refkey,
      entries: this.entries.map((e) => e.get())
    });
  }

  protected override _set(array: IKDMF32Array): void {
    this.refkey = array._refkey;
    this.entries = array.entries.map((data) => new KDMF32(this.kdm).set(data));
  }

  private _prebuild(): void {
    // @ts-expect-error - ???
    const tid = this.kdm.entities.find((e) => e.constructor === KDMF32)?.uid;
    assert(tid !== undefined);

    this.tid.set(tid);

    this.size0.set((this.sizeof - KDMF32Array.HEADING_SIZE) / 4);
    this.size1.set((this.sizeof - KDMF32Array.HEADING_SIZE) / 4);
  }

  protected override _build(buffer: WBuffer): void {
    if (this.entries.length === 0 && !this.nullTerminatorFlag) {
      return;
    }

    this._prebuild();

    this.uid.build(buffer);
    this.size0.build(buffer);

    this.tid.build(buffer);
    this.size1.build(buffer);

    this.entries.forEach((e) => e.build(buffer));

    if (this.nullTerminatorFlag) {
      this.element.build(buffer);
    }
  }

  protected override _parse(buffer: RBuffer): void {
    this.uid.parse(buffer);
    this.size0.parse(buffer);

    this.tid.parse(buffer);
    this.size1.parse(buffer);

    const constructor = this.kdm.entities.find((e) => e.uid === this.tid.get())?.constructor;
    assert(constructor === KDMF32);

    const count = (this.nullTerminatorFlag
      ? this.size0.get() - 1
      : this.size0.get());

    for (let i = 0; i < count; i += 1) {
      const instance = this.element;

      this.entries.push(instance);
      instance.parse(buffer);
    }

    if (this.nullTerminatorFlag) {
      this.element.parse(buffer);
    }
  }
}

export default KDMF32Array;
