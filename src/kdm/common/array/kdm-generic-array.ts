import z from "zod";
import type KDM from "#/kdm/kdm";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import KDMArray from "#/kdm/common/array/kdm-array";
import type KDMStructure from "#/kdm/common/kdm-structure";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";

const IKDMGenericArray = z.unknown().array();
type IKDMGenericArray = z.infer<typeof IKDMGenericArray>;

type KDMStructureConstructor = (new (kdm: KDM) => KDMStructure);

class KDMGenericArray extends KDMArray<IKDMGenericArray[number]> {
  public static readonly schema = IKDMGenericArray;
  public override readonly schema = IKDMGenericArray;

  public override set(_data: unknown): this {
    const data = IKDMGenericArray.parse(_data);

    data.forEach((data) => {
      const structure = this.kdm.createStructure(data);
      this.entries.push(structure);
    });

    if (this.entries.length !== 0) {
      const constructor = this.entries.at(0)!.constructor as KDMStructureConstructor;
      this.entries.forEach((e) => assert.equal(e.constructor, constructor));
    }

    return this;
  }

  public override parse(buffer: RBuffer): this {
    this.offset = buffer.offset;

    this.uid.parse(buffer);
    this.size0.parse(buffer);
    this.type.parse(buffer);
    this.size1.parse(buffer);

    const type = this.kdm.types.find(([id]) => id === this.type.get());
    assert(type !== undefined);

    const constructor = type[1];

    const instance = new constructor(this.kdm);
    let count = (this.size0.get() * 4) / instance.sizeof;

    if (this.useNullTerminatorFlag) {
      count -= 1;
    }

    for (let i = 0; i < count; i += 1) {
      const entry = new constructor(this.kdm);
      entry.parse(buffer);

      this.entries.push(entry);
    }

    if (this.useNullTerminatorFlag) {
      const entry = new constructor(this.kdm);
      buffer.offset += entry.sizeof;
    }

    this.entries.sort((a, b) => {
      if (a instanceof KDMGenericArrayPointer && b instanceof KDMGenericArrayPointer) {
        return a.array.offset - b.array.offset;
      }

      return a.offset - b.offset;
    });

    return this;
  }
}

export default KDMGenericArray;
