import z from "zod";
import type KDM from "#kdm/kdm";
import assert from "node:assert/strict";
import KDMU16 from "#kdm/common/kdm-u16";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMArrayPointer from "./kdm-array-pointer";

const IKDMArray = z.unknown().array();
type IKDMArray = z.infer<typeof IKDMArray>;

type KDMStructureConstructor = (new (kdm: KDM) => KDMStructure);

class KDMArray extends KDMStructure<IKDMArray> {
  public static readonly HEADING_SIZE = 8;

  public override readonly schema = IKDMArray;
  public entries: KDMStructure[] = [];
  private nullTerminatorFlag: boolean = false;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public readonly uid = new KDMU16(this.kdm);
  public readonly type = new KDMU16(this.kdm);
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override get arrays(): KDMArray[] {
    return [...this.entries.map((e) => e.arrays).flat(), this];
  }

  public override get fields(): Array<KDMStructure> {
    return [this];
  }

  public override get sizeof(): number {
    if (this.entries.length === 0) {
      return 0;
    }

    const element = this.entries.at(0)!;

    return this.nullTerminatorFlag
      ? element.sizeof * (this.entries.length + 1)
      : element.sizeof * this.entries.length;
  }

  public override get(): IKDMArray {
    return IKDMArray.parse(this.entries.map((e) => e.get()));
  }

  public override set(_data: unknown): this {
    const data = IKDMArray.parse(_data);

    data.forEach((data) => {
      const structure = this.kdm.createStructure(data);
      this.entries.push(structure);
    });

    if (this.entries.length !== 0) {
      const constructor = this.entries.at(0)!.constructor;
      this.entries.forEach((e) => assert.equal(e.constructor, constructor));
    }

    return this;
  }

  public override build(buffer: WBuffer): this {
    if (this.entries.length === 0) {
      return this;
    }

    this.offset = buffer.offset;

    const entry = this.entries.at(0)!;

    const count = (this.nullTerminatorFlag
      ? (this.entries.length + 1) * entry.sizeof
      : this.entries.length * entry.sizeof) / 4;

    this.size0.set(count);
    this.size1.set(count);

    const type = this.kdm.findTypeID(entry.constructor as KDMStructureConstructor);
    assert(type !== null);

    this.type.set(type);

    this.uid.build(buffer);
    this.size0.build(buffer);
    this.type.build(buffer);
    this.size1.build(buffer);

    this.entries.forEach((e) => e.build(buffer));

    if (this.nullTerminatorFlag) {
      const constructor = entry.constructor as KDMStructureConstructor;
      const instance = new constructor(this.kdm);

      instance.build(buffer);
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

    if (this.nullTerminatorFlag) {
      count -= 1;
    }

    for (let i = 0; i < count; i += 1) {
      const entry = new constructor(this.kdm);
      entry.parse(buffer);

      this.entries.push(entry);
    }

    if (this.nullTerminatorFlag) {
      const entry = new constructor(this.kdm);
      buffer.offset += entry.sizeof;
    }

    this.entries = this.entries
      .sort((a, b) => {
        if (a instanceof KDMArrayPointer && b instanceof KDMArrayPointer) {
          return a.array.offset - b.array.offset;
        }

        return a.offset - b.offset;
      });

    return this;
  }

  public useNullTerminator(useit: boolean): this {
    this.nullTerminatorFlag = useit;
    return this;
  }
}

export default KDMArray;
