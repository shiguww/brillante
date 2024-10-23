import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMI16 from "#/kdm/common/primitive/kdm-i16";
import KDMI32 from "#/kdm/common/primitive/kdm-i32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const ICharData2 = z.object({
  _kind: z.literal("CharData2").default("CharData2"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStructArrayPointer.schema,
  unknown3: KDMStructArrayPointer.schema,
  unknown4: KDMStructArrayPointer.schema,
  unknown5: KDMStructArrayPointer.schema,
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
  unknown18: KDMStringPointer.schema,
  unknown19: KDMF32.schema,
  unknown20: KDMF32.schema,
  unknown21: KDMI16.schema,
  unknown22: KDMBoolean.schema,
  unknown23: KDMBoolean.schema,
  unknown24: KDMI32.schema,
  unknown25: KDMI32.schema,
  unknown26: KDMStringPointer.schema,
  unknown27: KDMStringPointer.schema,
  unknown28: KDMI32.schema,
  unknown29: KDMI32.schema,
  unknown30: KDMStringPointer.schema,
  unknown31: KDMStringPointer.schema,
  unknown32: KDMStringPointer.schema,
  unknown33: KDMStringPointer.schema,
  unknown34: KDMStringPointer.schema,
  unknown35: KDMStringPointer.schema,
  unknown36: KDMStringPointer.schema,
  unknown37: KDMStringPointer.schema,
  unknown38: KDMF32.schema,
  unknown39: KDMI32.schema,
  unknown40: KDMStringPointer.schema,
  unknown41: KDMStringPointer.schema,
  unknown42: KDMStringPointer.schema,
  unknown43: KDMF32.schema,
  unknown44: KDMStringPointer.schema,
  unknown45: KDMF32.schema
});

type ICharData2 = z.infer<typeof ICharData2>;

class CharData2 extends KDMStruct<ICharData2> {
  public static readonly schema = ICharData2;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown3 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown4 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown5 = new KDMStructArrayPointer(this.kdm);
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
  public readonly unknown18 = new KDMStringPointer(this.kdm);
  public readonly unknown19 = new KDMF32(this.kdm);
  public readonly unknown20 = new KDMF32(this.kdm);
  public readonly unknown21 = new KDMI16(this.kdm);
  public readonly unknown22 = new KDMBoolean(this.kdm);
  public readonly unknown23 = new KDMBoolean(this.kdm);
  public readonly unknown24 = new KDMI32(this.kdm);
  public readonly unknown25 = new KDMI32(this.kdm);
  public readonly unknown26 = new KDMStringPointer(this.kdm);
  public readonly unknown27 = new KDMStringPointer(this.kdm);
  public readonly unknown28 = new KDMI32(this.kdm);
  public readonly unknown29 = new KDMI32(this.kdm);
  public readonly unknown30 = new KDMStringPointer(this.kdm);
  public readonly unknown31 = new KDMStringPointer(this.kdm);
  public readonly unknown32 = new KDMStringPointer(this.kdm);
  public readonly unknown33 = new KDMStringPointer(this.kdm);
  public readonly unknown34 = new KDMStringPointer(this.kdm);
  public readonly unknown35 = new KDMStringPointer(this.kdm);
  public readonly unknown36 = new KDMStringPointer(this.kdm);
  public readonly unknown37 = new KDMStringPointer(this.kdm);
  public readonly unknown38 = new KDMF32(this.kdm);
  public readonly unknown39 = new KDMI32(this.kdm);
  public readonly unknown40 = new KDMStringPointer(this.kdm);
  public readonly unknown41 = new KDMStringPointer(this.kdm);
  public readonly unknown42 = new KDMStringPointer(this.kdm);
  public readonly unknown43 = new KDMF32(this.kdm);
  public readonly unknown44 = new KDMStringPointer(this.kdm);
  public readonly unknown45 = new KDMF32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ICharData2);
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
      this.unknown29,
      this.unknown30,
      this.unknown31,
      this.unknown32,
      this.unknown33,
      this.unknown34,
      this.unknown35,
      this.unknown36,
      this.unknown37,
      this.unknown38,
      this.unknown39,
      this.unknown40,
      this.unknown41,
      this.unknown42,
      this.unknown43,
      this.unknown44,
      this.unknown45
    ];
  }

  protected override _get(): ICharData2 {
    return ICharData2.parse({
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
      unknown29: this.unknown29.get(),
      unknown30: this.unknown30.get(),
      unknown31: this.unknown31.get(),
      unknown32: this.unknown32.get(),
      unknown33: this.unknown33.get(),
      unknown34: this.unknown34.get(),
      unknown35: this.unknown35.get(),
      unknown36: this.unknown36.get(),
      unknown37: this.unknown37.get(),
      unknown38: this.unknown38.get(),
      unknown39: this.unknown39.get(),
      unknown40: this.unknown40.get(),
      unknown41: this.unknown41.get(),
      unknown42: this.unknown42.get(),
      unknown43: this.unknown43.get(),
      unknown44: this.unknown44.get(),
      unknown45: this.unknown45.get()
    });
  }

  protected override _set(chardata: ICharData2): void {
    this.unknown0.set(chardata.unknown0);
    this.unknown1.set(chardata.unknown1);
    this.unknown2.set(chardata.unknown2);
    this.unknown3.set(chardata.unknown3);
    this.unknown4.set(chardata.unknown4);
    this.unknown5.set(chardata.unknown5);
    this.unknown6.set(chardata.unknown6);
    this.unknown7.set(chardata.unknown7);
    this.unknown8.set(chardata.unknown8);
    this.unknown9.set(chardata.unknown9);
    this.unknown10.set(chardata.unknown10);
    this.unknown11.set(chardata.unknown11);
    this.unknown12.set(chardata.unknown12);
    this.unknown13.set(chardata.unknown13);
    this.unknown14.set(chardata.unknown14);
    this.unknown15.set(chardata.unknown15);
    this.unknown16.set(chardata.unknown16);
    this.unknown17.set(chardata.unknown17);
    this.unknown18.set(chardata.unknown18);
    this.unknown19.set(chardata.unknown19);
    this.unknown20.set(chardata.unknown20);
    this.unknown21.set(chardata.unknown21);
    this.unknown22.set(chardata.unknown22);
    this.unknown23.set(chardata.unknown23);
    this.unknown24.set(chardata.unknown24);
    this.unknown25.set(chardata.unknown25);
    this.unknown26.set(chardata.unknown26);
    this.unknown27.set(chardata.unknown27);
    this.unknown28.set(chardata.unknown28);
    this.unknown29.set(chardata.unknown29);
    this.unknown30.set(chardata.unknown30);
    this.unknown31.set(chardata.unknown31);
    this.unknown32.set(chardata.unknown32);
    this.unknown33.set(chardata.unknown33);
    this.unknown34.set(chardata.unknown34);
    this.unknown35.set(chardata.unknown35);
    this.unknown36.set(chardata.unknown36);
    this.unknown37.set(chardata.unknown37);
    this.unknown38.set(chardata.unknown38);
    this.unknown39.set(chardata.unknown39);
    this.unknown40.set(chardata.unknown40);
    this.unknown41.set(chardata.unknown41);
    this.unknown42.set(chardata.unknown42);
    this.unknown43.set(chardata.unknown43);
    this.unknown44.set(chardata.unknown44);
    this.unknown45.set(chardata.unknown45);
  }
}

export default CharData2;
