import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMObjectHeading from "#kdm/editor/common/kdm-object-heading";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";

class GroupDataHeading extends KDMObjectHeading<GroupData> {
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [this.ouid, this.size0, this.otid, this.size1];
  }

  protected override _build(buffer: WBuffer): void {
    this.size0.set((this.object.sizeof - this.sizeof) / 4);
    this.size1.set((this.object.sizeof - this.sizeof) / 4);
    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);
    assert.equal(this.size0.get(), (this.object.sizeof - this.sizeof) / 4);
    assert.equal(this.size1.get(), (this.object.sizeof - this.sizeof) / 4);
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
  public static readonly schema = IGroupData;

  public override readonly schema = IGroupData;
  public override readonly heading = new GroupDataHeading(this);

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E121C;

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
}

export default GroupData;
