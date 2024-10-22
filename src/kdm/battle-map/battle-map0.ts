import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const IBattleMap0 = z.object({
  _kind: z.literal("BattleMap0").default("BattleMap0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMF32.schema,
  unknown2: KDMF32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMF32.schema,
  unknown8: KDMU32.schema,
  unknown9: KDMU32.schema,
  unknown10: KDMU32.schema,
  unknown11: KDMU32.schema,
  unknown12: KDMU32.schema,
  unknown13: KDMU32.schema,
  unknown14: KDMU32.schema,
  unknown15: KDMU32.schema,
  unknown16: KDMU32.schema,
  unknown17: KDMU32.schema
});

type IBattleMap0 = z.infer<typeof IBattleMap0>;

class BattleMap0 extends KDMStruct<IBattleMap0> {
  public static readonly schema = IBattleMap0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMF32(this.kdm);
  public readonly unknown2 = new KDMF32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMF32(this.kdm);
  public readonly unknown8 = new KDMU32(this.kdm);
  public readonly unknown9 = new KDMU32(this.kdm);
  public readonly unknown10 = new KDMU32(this.kdm);
  public readonly unknown11 = new KDMU32(this.kdm);
  public readonly unknown12 = new KDMU32(this.kdm);
  public readonly unknown13 = new KDMU32(this.kdm);
  public readonly unknown14 = new KDMU32(this.kdm);
  public readonly unknown15 = new KDMU32(this.kdm);
  public readonly unknown16 = new KDMU32(this.kdm);
  public readonly unknown17 = new KDMU32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IBattleMap0);
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
      this.unknown17
    ];
  }

  protected override _get(): IBattleMap0 {
    return IBattleMap0.parse({
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

  protected override _set(battlemap: IBattleMap0): void {
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
  }
}

export default BattleMap0;
