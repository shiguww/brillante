import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU16 from "#/kdm/common/primitive/kdm-u16";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const IBattleMap1 = z.object({
  _kind: z.literal("BattleMap1").default("BattleMap1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStructArrayPointer.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown6: KDMStringPointer.schema,
  unknown7: KDMStringPointer.schema,
  unknown8: KDMStringPointer.schema,
  unknown9: KDMStringPointer.schema,
  unknown10: KDMStringPointer.schema,
  unknown11: KDMStringPointer.schema,
  unknown12: KDMStringPointer.schema,
  unknown13: KDMStringPointer.schema,
  unknown14: KDMStringPointer.schema,
  unknown15: KDMStringPointer.schema,
  unknown16: KDMStringPointer.schema,
  unknown17: KDMStringPointer.schema,
  unknown18: KDMU16.schema,
  unknown19: KDMU16.schema,
  unknown20: KDMU16.schema,
  unknown21: KDMU16.schema,
  unknown22: KDMU16.schema,
  unknown23: KDMU16.schema,
  unknown24: KDMU16.schema,
  unknown25: KDMU16.schema,
  unknown26: KDMU16.schema,
  unknown27: KDMU16.schema,
  unknown28: KDMU16.schema,
  unknown29: KDMU16.schema
});

type IBattleMap1 = z.infer<typeof IBattleMap1>;

class BattleMap1 extends KDMStruct<IBattleMap1> {
  public static readonly schema = IBattleMap1;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown6 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMStringPointer(this.kdm);
  public readonly unknown8 = new KDMStringPointer(this.kdm);
  public readonly unknown9 = new KDMStringPointer(this.kdm);
  public readonly unknown10 = new KDMStringPointer(this.kdm);
  public readonly unknown11 = new KDMStringPointer(this.kdm);
  public readonly unknown12 = new KDMStringPointer(this.kdm);
  public readonly unknown13 = new KDMStringPointer(this.kdm);
  public readonly unknown14 = new KDMStringPointer(this.kdm);
  public readonly unknown15 = new KDMStringPointer(this.kdm);
  public readonly unknown16 = new KDMStringPointer(this.kdm);
  public readonly unknown17 = new KDMStringPointer(this.kdm);
  public readonly unknown18 = new KDMU16(this.kdm);
  public readonly unknown19 = new KDMU16(this.kdm);
  public readonly unknown20 = new KDMU16(this.kdm);
  public readonly unknown21 = new KDMU16(this.kdm);
  public readonly unknown22 = new KDMU16(this.kdm);
  public readonly unknown23 = new KDMU16(this.kdm);
  public readonly unknown24 = new KDMU16(this.kdm);
  public readonly unknown25 = new KDMU16(this.kdm);
  public readonly unknown26 = new KDMU16(this.kdm);
  public readonly unknown27 = new KDMU16(this.kdm);
  public readonly unknown28 = new KDMU16(this.kdm);
  public readonly unknown29 = new KDMU16(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IBattleMap1);
  }

  public override get fields(): Array<KDMEntity> {
    return [
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
      this.unknown17,
      this.unknown18,
      this.unknown19,
      this.unknown20,
      this.unknown21,
      this.unknown22,
      this.unknown23,
      this.unknown24,
      this.unknown25,
      this.unknown26,
      this.unknown27,
      this.unknown28,
      this.unknown29
    ];
  }

  protected override _get(): IBattleMap1 {
    return IBattleMap1.parse({
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
      unknown17: this.unknown17.get(),
      unknown18: this.unknown18.get(),
      unknown19: this.unknown19.get(),
      unknown20: this.unknown20.get(),
      unknown21: this.unknown21.get(),
      unknown22: this.unknown22.get(),
      unknown23: this.unknown23.get(),
      unknown24: this.unknown24.get(),
      unknown25: this.unknown25.get(),
      unknown26: this.unknown26.get(),
      unknown27: this.unknown27.get(),
      unknown28: this.unknown28.get(),
      unknown29: this.unknown29.get()
    });
  }

  protected override _set(battlemap: IBattleMap1): void {
    this.unknown0.set(battlemap.unknown0);
    this.unknown1.set(battlemap.unknown1);
    this.unknown2.set(battlemap.unknown2);
    this.unknown3.set(battlemap.unknown3);
    this.unknown4.set(battlemap.unknown4);
    this.unknown5.set(battlemap.unknown5);
    this.unknown6.set(battlemap.unknown6);
    this.unknown7.set(battlemap.unknown7);
    this.unknown8.set(battlemap.unknown8);
    this.unknown9.set(battlemap.unknown9);
    this.unknown10.set(battlemap.unknown10);
    this.unknown11.set(battlemap.unknown11);
    this.unknown12.set(battlemap.unknown12);
    this.unknown13.set(battlemap.unknown13);
    this.unknown14.set(battlemap.unknown14);
    this.unknown15.set(battlemap.unknown15);
    this.unknown16.set(battlemap.unknown16);
    this.unknown17.set(battlemap.unknown17);
    this.unknown18.set(battlemap.unknown18);
    this.unknown19.set(battlemap.unknown19);
    this.unknown20.set(battlemap.unknown20);
    this.unknown21.set(battlemap.unknown21);
    this.unknown22.set(battlemap.unknown22);
    this.unknown23.set(battlemap.unknown23);
    this.unknown24.set(battlemap.unknown24);
    this.unknown25.set(battlemap.unknown25);
    this.unknown26.set(battlemap.unknown26);
    this.unknown27.set(battlemap.unknown27);
    this.unknown28.set(battlemap.unknown28);
    this.unknown29.set(battlemap.unknown29);
  }
}

export default BattleMap1;
