import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMStructure from "#kdm/editor/common/kdm-structure";
import KDMPadding from "#kdm/editor/common/primitive/kdm-padding";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";
import KDMUnknownPrimitive1 from "#kdm/editor/common/primitive/kdm-unknown-primitive1";
import KDMObjectHeading from "../common/kdm-object-heading";

class ShopEntryHeading extends KDMObjectHeading<ShopEntry> {
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

const IShopEntry = z.object({
  unknown2: KDMU16.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown4: KDMUnknownPrimitive1.schema,
  _structure: z.literal("ShopEntry").default("ShopEntry")
});

type IShopEntry = z.infer<typeof IShopEntry>;

class ShopEntry extends KDMObject<IShopEntry> {
  public static readonly schema = IShopEntry;

  public override readonly schema = IShopEntry;
  public override readonly heading = new ShopEntryHeading(this);

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown2 = new KDMU16(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMUnknownPrimitive1(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      this.unknown0,
      this.unknown1,
      this.unknown2,
      new KDMPadding(this.kdm, WBuffer.U16_SIZE),
      this.unknown3,
      this.unknown4
    ];
  }

  protected override _get(): IShopEntry {
    return IShopEntry.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get()
    });
  }

  protected override _set(changebgmdata: IShopEntry): void {
    this.unknown0.set(changebgmdata.unknown0);
    this.unknown1.set(changebgmdata.unknown1);
    this.unknown2.set(changebgmdata.unknown2);
    this.unknown3.set(changebgmdata.unknown3);
    this.unknown4.set(changebgmdata.unknown4);
  }
}

export default ShopEntry;
