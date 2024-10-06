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

class ShopEntryHeading extends KDMStructure<never> {
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
  public static OID = 0x001E;
  public static readonly SIZEOF = 0x0005;
  public static readonly schema = IShopEntry;
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x00000000;

  public override readonly schema = IShopEntry;
  public override readonly heading = new ShopEntryHeading(this.kdm);

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

  protected override _build(buffer: WBuffer): void {
    this.heading.oid.set(ShopEntry.OID);
    this.heading.size0.set(ShopEntry.SIZEOF);
    this.heading.size1.set(ShopEntry.SIZEOF);

    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);

    assert.equal(this.heading.oid.get(), ShopEntry.OID);
    assert.equal(this.heading.size0.get(), ShopEntry.SIZEOF);
    assert.equal(this.heading.size1.get(), ShopEntry.SIZEOF);
  }
}

export default ShopEntry;
