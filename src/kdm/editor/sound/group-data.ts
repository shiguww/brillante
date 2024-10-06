import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMStructure from "#kdm/editor/common/kdm-structure";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";

class GroupDataHeading extends KDMStructure<never> {
  public readonly uid = new KDMU16(this.kdm);
  public readonly oid = new KDMU16(this.kdm);
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override readonly schema = z.never();

  public override get fields(): Array<KDMPrimitive> {
    return [this.uid, this.size0, this.oid, this.size1];
  }

  protected override _get(): never {
    assert.fail();
  }

  protected override _set(): never {
    assert.fail();
  }
}

const IGroupData = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  _structure: z.literal("GroupData").default("GroupData")
});

type IGroupData = z.infer<typeof IGroupData>;

class GroupData extends KDMObject<IGroupData> {
  public static OID = 0x001B;
  public static readonly SIZEOF = 0x0004;
  public static readonly schema = IGroupData;
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x008E121C;

  public override readonly schema = IGroupData;
  public override readonly heading = new GroupDataHeading(this.kdm);

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
    ];
  }

  protected override _get(): IGroupData {
    return IGroupData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get()
    });
  }

  protected override _set(groupdata: IGroupData): void {
    this.unknown0.set(groupdata.unknown0);
    this.unknown1.set(groupdata.unknown1);
    this.unknown2.set(groupdata.unknown2);
    this.unknown3.set(groupdata.unknown3);
  }

  protected override _build(buffer: WBuffer): void {
    this.heading.oid.set(GroupData.OID);
    this.heading.size0.set(GroupData.SIZEOF);
    this.heading.size1.set(GroupData.SIZEOF);

    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);

    assert.equal(this.heading.oid.get(), GroupData.OID);
    assert.equal(this.heading.size0.get(), GroupData.SIZEOF);
    assert.equal(this.heading.size1.get(), GroupData.SIZEOF);
  }
}

export default GroupData;
