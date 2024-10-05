import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/common/kdm-object";
import KDMF32 from "#kdm/common/primitive/kdm-f32";
import KDMU16 from "#kdm/common/primitive/kdm-u16";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMPrimitive from "#kdm/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/common/primitive/kdm-string-pointer";

class BattleBGMDataHeading extends KDMStructure<never> {
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

const IBattleBGMData = z.object({
  unknown2: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown8: KDMF32.schema,
  unknown10: KDMF32.schema,
  unknown12: KDMF32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown7: KDMStringPointer.schema,
  unknown9: KDMStringPointer.schema,
  unknown11: KDMStringPointer.schema,
  unknown13: KDMStringPointer.schema,
  unknown14: KDMStringPointer.schema,
  unknown15: KDMStringPointer.schema,
  unknown16: KDMStringPointer.schema,
  unknown17: KDMStringPointer.schema,
  _structure: z.literal("BattleBGMData").default("BattleBGMData")
});

type IBattleBGMData = z.infer<typeof IBattleBGMData>;

class BattleBGMData extends KDMObject<IBattleBGMData> {
  public static OID = 0x0019;
  public static readonly SIZEOF = 0x0012;
  public static readonly schema = IBattleBGMData;
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x008E11B8;

  public override readonly schema = IBattleBGMData;
  public override readonly heading = new BattleBGMDataHeading(this.kdm);

  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown8 = new KDMF32(this.kdm);
  public readonly unknown10 = new KDMF32(this.kdm);
  public readonly unknown12 = new KDMF32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMStringPointer(this.kdm);
  public readonly unknown9 = new KDMStringPointer(this.kdm);
  public readonly unknown11 = new KDMStringPointer(this.kdm);
  public readonly unknown13 = new KDMStringPointer(this.kdm);
  public readonly unknown14 = new KDMStringPointer(this.kdm);
  public readonly unknown15 = new KDMStringPointer(this.kdm);
  public readonly unknown16 = new KDMStringPointer(this.kdm);
  public readonly unknown17 = new KDMStringPointer(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,
      this.unknown6,
      this.unknown7,
      this.unknown8,
      this.unknown9,
      this.unknown10,
      this.unknown11,
      this.unknown12,
      this.unknown13,
      this.unknown14,
      this.unknown15,
      this.unknown16,
      this.unknown17
    ];
  }

  protected override _get(): IBattleBGMData {
    return IBattleBGMData.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get(),
      unknown7: this.unknown7.get(),
      unknown8: this.unknown8.get(),
      unknown9: this.unknown9.get(),
      unknown10: this.unknown10.get(),
      unknown11: this.unknown11.get(),
      unknown12: this.unknown12.get(),
      unknown13: this.unknown13.get(),
      unknown14: this.unknown14.get(),
      unknown15: this.unknown15.get(),
      unknown16: this.unknown16.get(),
      unknown17: this.unknown17.get()
    });
  }

  protected override _set(battlebgmdata: IBattleBGMData): void {
    this.unknown0.set(battlebgmdata.unknown0);
    this.unknown1.set(battlebgmdata.unknown1);
    this.unknown2.set(battlebgmdata.unknown2);
    this.unknown3.set(battlebgmdata.unknown3);
    this.unknown4.set(battlebgmdata.unknown4);
    this.unknown5.set(battlebgmdata.unknown5);
    this.unknown6.set(battlebgmdata.unknown6);
    this.unknown7.set(battlebgmdata.unknown7);
    this.unknown8.set(battlebgmdata.unknown8);
    this.unknown9.set(battlebgmdata.unknown9);
    this.unknown10.set(battlebgmdata.unknown10);
    this.unknown11.set(battlebgmdata.unknown11);
    this.unknown12.set(battlebgmdata.unknown12);
    this.unknown13.set(battlebgmdata.unknown13);
    this.unknown14.set(battlebgmdata.unknown14);
    this.unknown15.set(battlebgmdata.unknown15);
    this.unknown16.set(battlebgmdata.unknown16);
    this.unknown17.set(battlebgmdata.unknown17);
  }

  protected override _build(buffer: WBuffer): void {
    this.heading.oid.set(BattleBGMData.OID);
    this.heading.size0.set(BattleBGMData.SIZEOF);
    this.heading.size1.set(BattleBGMData.SIZEOF);

    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);

    assert.equal(this.heading.oid.get(), BattleBGMData.OID);
    assert.equal(this.heading.size0.get(), BattleBGMData.SIZEOF);
    assert.equal(this.heading.size1.get(), BattleBGMData.SIZEOF);
  }
}

export default BattleBGMData;