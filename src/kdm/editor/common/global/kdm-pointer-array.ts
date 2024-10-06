import z from "zod";
import WBuffer from "#buffer/w-buffer";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMObjectHeading from "#kdm/editor/common/kdm-object-heading";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";

class KDMPointerArrayHeading extends KDMObjectHeading<KDMPointerArray> {
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override readonly schema = z.never();

  public override get fields(): Array<KDMPrimitive> {
    return [this.ouid, this.size0, this.otid, this.size1];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }
}

const IKDMPointerArray = z.unknown().array();
type IKDMPointerArray = z.infer<typeof IKDMPointerArray>;

class KDMPointerArray extends KDMObject<IKDMPointerArray> {
  public static readonly schema = IKDMPointerArray;

  private nullTerminatorFlag = true;
  public readonly entries: KDMObject[] = [];

  public override readonly schema = IKDMPointerArray;
  public override readonly heading = new KDMPointerArrayHeading(this);

  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public override get objects(): KDMObject[] {
    return [...this.entries, this];
  }

  public override get sizeof(): number {
    return this.heading.sizeof + (this.nullTerminatorFlag
      ? (this.entries.length + 1) * WBuffer.U32_SIZE
      : this.entries.length * WBuffer.U32_SIZE);
  }

  public override get fields(): Array<KDMPrimitive> {
    return [];
  }

  public get size(): number {
    return this.heading.size0.get();
  }

  public set size(size: number) {
    this.heading.size0.set(size);
    this.heading.size1.set(size);
  }

  protected override _get(): IKDMPointerArray {
    return this.entries.map((e) => e.get());
  }

  protected override _set(data: IKDMPointerArray): void {
    data.forEach((data) => this.entries.push(this.kdm.createObject(data)));
  }

  protected override _build(buffer: WBuffer): void {
    this.heading.size0.set(this.entries.length);
    this.heading.size1.set(this.entries.length);

    if (this.nullTerminatorFlag) {
      this.heading.size0.set(this.entries.length + 1);
      this.heading.size1.set(this.entries.length + 1);
    }

    this.heading.build(buffer);
    this.entries.forEach((entry) => buffer.setU32(entry.offset + 8));

    if (this.nullTerminatorFlag) {
      buffer.setU32(0x00000000);
    }
  }

  protected override _parse(buffer: RBuffer): void {
    this.heading.parse(buffer);
    const count = this.heading.size0.get();

    for (let i = 0; i < count; i += 1) {
      const pointer = buffer.getU32();

      if (pointer === 0 && this.nullTerminatorFlag) {
        break;
      }

      const object = buffer.with(pointer - 8, (buffer) => this.kdm.parseObject(buffer));
      this.entries.push(object);
    }

    this.entries.sort((a, b) => a.offset - b.offset);
  }

  public useNullTerminator(useit: boolean): this {
    this.nullTerminatorFlag = useit;
    return this;
  }
}

export default KDMPointerArray;
