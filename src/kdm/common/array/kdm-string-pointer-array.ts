import z from "zod";
import type KDM from "#/kdm/kdm";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMArray from "#/kdm/common/array/kdm-array";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const IKDMStringPointerArray = KDMArray.baseschema(KDMStringPointer.schema).extend({
  _kind: z.literal("KDMStringPointerArray").default("KDMStringPointerArray")
});

type IKDMStringPointer = z.infer<typeof KDMStringPointer.schema>;
type IKDMStringPointerArray = z.infer<typeof IKDMStringPointerArray>;

class KDMStringPointerArray extends KDMArray<IKDMStringPointer> {
  public static readonly schema = IKDMStringPointerArray;

  public override entries: Array<KDMStringPointer> = [];

  public constructor(kdm: KDM) {
    super(kdm, KDMStringPointerArray.schema);
  }

  public get element(): KDMStringPointer {
    return new KDMStringPointer(this.kdm);
  }

  public override get sizeof(): number {
    if (this.entries.length === 0 && !this.nullTerminatorFlag) {
      return 0;
    }

    return KDMStringPointerArray.HEADING_SIZE + (this.nullTerminatorFlag
      ? this.element.sizeof * (this.entries.length + 1)
      : this.element.sizeof * this.entries.length);
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.entries;
  }

  protected override _get(): IKDMStringPointerArray {
    return IKDMStringPointerArray.parse({
      _refkey: this.refkey,
      entries: this.entries.map((e) => e.get())
    });
  }

  protected override _set(array: IKDMStringPointerArray): void {
    this.refkey = array._refkey;
    this.entries = array.entries.map((data) => new KDMStringPointer(this.kdm).set(data));
  }

  private _prebuild(): void {
    // @ts-expect-error - ???
    const tid = this.kdm.entities.find((e) => e.constructor === KDMStringPointer)?.uid;
    assert(tid !== undefined);

    this.tid.set(tid);

    this.size0.set((this.sizeof - KDMStringPointerArray.HEADING_SIZE) / 4);
    this.size1.set((this.sizeof - KDMStringPointerArray.HEADING_SIZE) / 4);
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
    assert(constructor === KDMStringPointer);

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

export default KDMStringPointerArray;
