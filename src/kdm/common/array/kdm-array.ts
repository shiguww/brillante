import type KDM from "#/kdm/kdm";
import assert from "node:assert/strict";
import KDMU16 from "#/kdm/common/kdm-u16";
import type WBuffer from "#/buffer/w-buffer";
import KDMStructure from "#/kdm/common/kdm-structure"
import KDMPadding from "#/kdm/common/padding/kdm-padding";
import type KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import MapObjectData7 from "#/kdm/mapobject/mapobject-data7";

type KDMStructureConstructor = (new (kdm: KDM) => KDMStructure);

abstract class KDMArray<T = unknown> extends KDMStructure<T[]> {
  public static readonly HEADING_SIZE = 8;

  protected useNullTerminatorFlag: boolean = false;
  public readonly entries: KDMStructure<T>[] = [];

  public readonly uid = new KDMU16(this.kdm);
  public readonly type = new KDMU16(this.kdm);
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get arrays(): KDMArray[] {
    return [...this.entries.map((e) => e.arrays).flat(), this];
  }

  public override get fields(): Array<KDMStructure> {
    return [this.uid, this.size0, this.type, this.size1];
  }

  public override get strings(): Array<KDMStringPointer> {
    return this.entries.map((e) => e.strings).flat();
  }

  public override get sizeof(): number {
    if (this.entries.length === 0) {
      return 0;
    }

    const element = this.entries.at(0)!;

    return KDMArray.HEADING_SIZE + (this.useNullTerminatorFlag
      ? element.sizeof * (this.entries.length + 1)
      : element.sizeof * this.entries.length);
  }

  public override get(): T[] {
    return this.entries.map((e) => e.get());
  }

  public override build(buffer: WBuffer): this {
    if (this.entries.length === 0) {
      return this;
    }

    this.offset = buffer.offset;
    this.size0.set((this.sizeof - KDMArray.HEADING_SIZE) / 4);

    const entry = this.entries.at(0)!;
    const realfields = entry.fields.filter((f) => !(f instanceof KDMPadding));

    this.size1.set((this.useNullTerminatorFlag
      ? this.entries.length + 1
      : this.entries.length) * realfields.length);

    /* I don't know what the fuck is going on and I don't want to know. */
    if(entry instanceof MapObjectData7) {
      this.size1.set(this.size0.get());
    }

    const constructor = entry.constructor as KDMStructureConstructor;
    const type = this.kdm.findTypeID(constructor);

    assert(type !== null);
    this.type.set(type);

    this.uid.build(buffer);
    this.size0.build(buffer);
    this.type.build(buffer);
    this.size1.build(buffer);

    this.entries.forEach((e) => e.build(buffer));

    if (this.useNullTerminatorFlag) {
      const NULL = new constructor(this.kdm);
      NULL.build(buffer);
    }

    return this;
  }

  public useNullTerminator(useit: boolean): this {
    this.useNullTerminatorFlag = useit;
    return this;
  }
}

export default KDMArray;
