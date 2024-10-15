import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMArray from "./kdm-array";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/array/kdm-struct-array-pointer";

type IKDMStructArrayPointer = z.infer<typeof KDMStructArrayPointer.schema>;

class KDMStructArrayPointerArray extends KDMArray<IKDMStructArrayPointer> {
  public static get schema(): typeof IKDMStructArrayPointerArray {
    return IKDMStructArrayPointerArray;
  }

  public override entries: Array<KDMStructArrayPointer> = [];

  public constructor(kdm: KDM) {
    super(kdm, IKDMStructArrayPointerArray);
  }

  public get element(): KDMStructArrayPointer {
    return new KDMStructArrayPointer(this.kdm);
  }

  public override get sizeof(): number {
    if (this.entries.length === 0 && !this.nullTerminatorFlag) {
      return 0;
    }

    return KDMStructArrayPointerArray.HEADING_SIZE + (this.nullTerminatorFlag
      ? this.element.sizeof * (this.entries.length + 1)
      : this.element.sizeof * this.entries.length);
  }

  public override get strings(): Array<KDMStringPointer> {
    if (this.nullTerminatorFlag) {
      return this.entries.map((e) => e.strings)
        .flat().concat(this.element.strings);
    }

    return this.entries.map((e) => e.strings).flat();
  }

  protected override _get(): IKDMStructArrayPointerArray {
    return IKDMStructArrayPointerArray.parse({
      _refkey: this.refkey,
      entries: this.entries.map((e) => e.get())
    });
  }

  protected override _set(array: IKDMStructArrayPointerArray): void {
    this.refkey = array._refkey;
    this.entries = array.entries.map((data) => new KDMStructArrayPointer(this.kdm).set(data));
  }

  private _prebuild(): void {
    // @ts-expect-error - ???
    const tid = this.kdm.entities.find((e) => e.constructor === KDMStructArrayPointer)?.uid;
    assert(tid !== undefined);

    this.tid.set(tid);

    this.size0.set((this.sizeof - KDMStructArrayPointerArray.HEADING_SIZE) / 4);
    this.size1.set((this.sizeof - KDMStructArrayPointerArray.HEADING_SIZE) / 4);
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
    assert(constructor === KDMStructArrayPointer);

    const count = (this.nullTerminatorFlag
      ? this.size0.get() - 1
      : this.size0.get());

    for (let i = 0; i < count; i += 1) {
      const instance = new KDMStructArrayPointer(this.kdm);

      this.entries.push(instance);
      instance.parse(buffer);
    }

    if (this.nullTerminatorFlag) {
      this.element.parse(buffer);
    }
  }
}

const IKDMStructArrayPointerArray = KDMArray.baseschema(KDMStructArrayPointer.schema).extend({
  _kind: z.literal("KDMStructArrayPointerArray").default("KDMStructArrayPointerArray")
});

type IKDMStructArrayPointerArray = z.infer<typeof IKDMStructArrayPointerArray>;
export default KDMStructArrayPointerArray;
