import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU16Padding from "#/kdm/common/padding/kdm-u16-padding";
import KDMBoolean from "#/kdm/common/primitive/kdm-boolean";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDM from "#/kdm/kdm";
import z from "zod";

const IMuseumLockData = z.object({
  _kind: z.literal("MuseumLockData").default("MuseumLockData"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMU32.schema,
  unknown2: KDMBoolean.schema,
  unknown3: KDMBoolean.schema,
  unknown4: KDMBoolean.schema,
  unknown5: KDMBoolean.schema,
  unknown6: KDMBoolean.schema,
  unknown7: KDMBoolean.schema,
  unknown8: KDMBoolean.schema,
  unknown9: KDMBoolean.schema,
  unknown10: KDMU32.schema,
  unknown11: KDMStringPointer.schema,
  unknown12: KDMStringPointer.schema,
  unknown13: KDMF32.schema,
  unknown14: KDMF32.schema,
  unknown15: KDMF32.schema,
  unknown16: KDMF32.schema,
  unknown17: KDMF32.schema,
  unknown18: KDMF32.schema,
  unknown19: KDMF32.schema,
  unknown20: KDMF32.schema,
  unknown21: KDMStringPointer.schema,
  unknown22: KDMF32.schema,
  unknown23: KDMF32.schema,
  unknown24: KDMF32.schema,
  unknown25: KDMF32.schema,
  unknown26: KDMF32.schema,
  unknown27: KDMBoolean.schema,
  unknown28: KDMBoolean.schema,
  unknown29: KDMU32.schema,
  unknown30: KDMU32.schema,
  unknown31: KDMF32.schema,
  unknown32: KDMF32.schema,
  unknown33: KDMF32.schema,
  unknown34: KDMF32.schema,
  unknown35: KDMF32.schema,
  unknown36: KDMF32.schema,
  unknown37: KDMF32.schema,
  unknown38: KDMF32.schema,
  unknown39: KDMF32.schema,
  unknown40: KDMStringPointer.schema,
  unknown41: KDMStringPointer.schema,
  unknown42: KDMStringPointer.schema,
  unknown43: KDMStringPointer.schema,
  unknown44: KDMStringPointer.schema,
  unknown45: KDMStringPointer.schema,
  unknown46: KDMStringPointer.schema,
  unknown47: KDMStringPointer.schema,
  unknown48: KDMU32.schema,
  unknown49: KDMStringPointer.schema,
  unknown50: KDMF32.schema,
  unknown51: KDMF32.schema,
  unknown52: KDMF32.schema,
  unknown53: KDMF32.schema,
  unknown54: KDMF32.schema,
  unknown55: KDMF32.schema,
  unknown56: KDMF32.schema,
  unknown57: KDMStringPointer.schema,
  unknown58: KDMF32.schema,
  unknown59: KDMF32.schema,
  unknown60: KDMStringPointer.schema,
  unknown61: KDMStringPointer.schema,
  unknown62: KDMStringPointer.schema,
  unknown63: KDMStringPointer.schema,
  unknown64: KDMStringPointer.schema,
  unknown65: KDMStringPointer.schema,
  unknown66: KDMStringPointer.schema,
  unknown67: KDMStringPointer.schema,
  unknown68: KDMStringPointer.schema,
  unknown69: KDMStringPointer.schema,
  unknown70: KDMStringPointer.schema,
  unknown71: KDMStringPointer.schema,
});

type IMuseumLockData = z.infer<typeof IMuseumLockData>;

class MuseumLockData extends KDMStruct<IMuseumLockData> {
  public static readonly schema = IMuseumLockData;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00572BCC;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMU32(this.kdm);
  public readonly unknown2 = new KDMBoolean(this.kdm);
  public readonly unknown3 = new KDMBoolean(this.kdm);
  public readonly unknown4 = new KDMBoolean(this.kdm);
  public readonly unknown5 = new KDMBoolean(this.kdm);
  public readonly unknown6 = new KDMBoolean(this.kdm);
  public readonly unknown7 = new KDMBoolean(this.kdm);
  public readonly unknown8 = new KDMBoolean(this.kdm);
  public readonly unknown9 = new KDMBoolean(this.kdm);
  public readonly unknown10 = new KDMU32(this.kdm);
  public readonly unknown11 = new KDMStringPointer(this.kdm);
  public readonly unknown12 = new KDMStringPointer(this.kdm);
  public readonly unknown13 = new KDMF32(this.kdm);
  public readonly unknown14 = new KDMF32(this.kdm);
  public readonly unknown15 = new KDMF32(this.kdm);
  public readonly unknown16 = new KDMF32(this.kdm);
  public readonly unknown17 = new KDMF32(this.kdm);
  public readonly unknown18 = new KDMF32(this.kdm);
  public readonly unknown19 = new KDMF32(this.kdm);
  public readonly unknown20 = new KDMF32(this.kdm);
  public readonly unknown21 = new KDMStringPointer(this.kdm);
  public readonly unknown22 = new KDMF32(this.kdm);
  public readonly unknown23 = new KDMF32(this.kdm);
  public readonly unknown24 = new KDMF32(this.kdm);
  public readonly unknown25 = new KDMF32(this.kdm);
  public readonly unknown26 = new KDMF32(this.kdm);
  public readonly unknown27 = new KDMBoolean(this.kdm);
  public readonly unknown28 = new KDMBoolean(this.kdm);
  public readonly unknown29 = new KDMU32(this.kdm);
  public readonly unknown30 = new KDMU32(this.kdm);
  public readonly unknown31 = new KDMF32(this.kdm);
  public readonly unknown32 = new KDMF32(this.kdm);
  public readonly unknown33 = new KDMF32(this.kdm);
  public readonly unknown34 = new KDMF32(this.kdm);
  public readonly unknown35 = new KDMF32(this.kdm);
  public readonly unknown36 = new KDMF32(this.kdm);
  public readonly unknown37 = new KDMF32(this.kdm);
  public readonly unknown38 = new KDMF32(this.kdm);
  public readonly unknown39 = new KDMF32(this.kdm);
  public readonly unknown40 = new KDMStringPointer(this.kdm);
  public readonly unknown41 = new KDMStringPointer(this.kdm);
  public readonly unknown42 = new KDMStringPointer(this.kdm);
  public readonly unknown43 = new KDMStringPointer(this.kdm);
  public readonly unknown44 = new KDMStringPointer(this.kdm);
  public readonly unknown45 = new KDMStringPointer(this.kdm);
  public readonly unknown46 = new KDMStringPointer(this.kdm);
  public readonly unknown47 = new KDMStringPointer(this.kdm);
  public readonly unknown48 = new KDMU32(this.kdm);
  public readonly unknown49 = new KDMStringPointer(this.kdm);
  public readonly unknown50 = new KDMF32(this.kdm);
  public readonly unknown51 = new KDMF32(this.kdm);
  public readonly unknown52 = new KDMF32(this.kdm);
  public readonly unknown53 = new KDMF32(this.kdm);
  public readonly unknown54 = new KDMF32(this.kdm);
  public readonly unknown55 = new KDMF32(this.kdm);
  public readonly unknown56 = new KDMF32(this.kdm);
  public readonly unknown57 = new KDMStringPointer(this.kdm);
  public readonly unknown58 = new KDMF32(this.kdm);
  public readonly unknown59 = new KDMF32(this.kdm);
  public readonly unknown60 = new KDMStringPointer(this.kdm);
  public readonly unknown61 = new KDMStringPointer(this.kdm);
  public readonly unknown62 = new KDMStringPointer(this.kdm);
  public readonly unknown63 = new KDMStringPointer(this.kdm);
  public readonly unknown64 = new KDMStringPointer(this.kdm);
  public readonly unknown65 = new KDMStringPointer(this.kdm);
  public readonly unknown66 = new KDMStringPointer(this.kdm);
  public readonly unknown67 = new KDMStringPointer(this.kdm);
  public readonly unknown68 = new KDMStringPointer(this.kdm);
  public readonly unknown69 = new KDMStringPointer(this.kdm);
  public readonly unknown70 = new KDMStringPointer(this.kdm);
  public readonly unknown71 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMuseumLockData);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,  // 000
      this.unknown1,  // 004
      this.unknown2,
      this.unknown3,
      this.unknown4,
      this.unknown5,  // 008
      this.unknown6, 
      this.unknown7, 
      this.unknown8, 
      this.unknown9,  // 012
      this.unknown10, // 016
      this.unknown11, // 020
      this.unknown12, // 024
      this.unknown13, // 028
      this.unknown14, // 032
      this.unknown15, // 036
      this.unknown16, // 040
      this.unknown17, // 044
      this.unknown18, // 048
      this.unknown19, // 052
      this.unknown20, // 056
      this.unknown21, // 060
      this.unknown22, // 064
      this.unknown23, // 068
      this.unknown24, // 072
      this.unknown25, // 076
      this.unknown26, // 080
      this.unknown27,
      this.unknown28,
      new KDMU16Padding(this.kdm), // 084
      this.unknown29, // 088
      this.unknown30, // 092
      this.unknown31, // 096
      this.unknown32, // 100
      this.unknown33, // 104
      this.unknown34, // 108
      this.unknown35, // 112
      this.unknown36, // 116
      this.unknown37, // 120
      this.unknown38, // 124
      this.unknown39, // 128
      this.unknown40, // 132
      this.unknown41, // 136
      this.unknown42, // 140
      this.unknown43, // 144
      this.unknown44, // 148
      this.unknown45, // 152
      this.unknown46, // 156
      this.unknown47, // 160
      this.unknown48, // 164
      this.unknown49, // 168
      this.unknown50, // 172
      this.unknown51, // 176
      this.unknown52, // 180
      this.unknown53, // 184
      this.unknown54, // 188
      this.unknown55, // 192
      this.unknown56, // 196
      this.unknown57, // 200
      this.unknown58, // 204
      this.unknown59, // 208
      this.unknown60, // 212
      this.unknown61, // 216
      this.unknown62, // 220
      this.unknown63, // 224
      this.unknown64, // 228
      this.unknown65, // 232
      this.unknown66, // 236
      this.unknown67, // 240
      this.unknown68, // 244
      this.unknown69, // 248
      this.unknown70, // 252
      this.unknown71  // 256
    ];
  }

  protected override _get(): IMuseumLockData {
    return IMuseumLockData.parse({
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
      unknown45: this.unknown45.get(),
      unknown46: this.unknown46.get(),
      unknown47: this.unknown47.get(),
      unknown48: this.unknown48.get(),
      unknown49: this.unknown49.get(),
      unknown50: this.unknown50.get(),
      unknown51: this.unknown51.get(),
      unknown52: this.unknown52.get(),
      unknown53: this.unknown53.get(),
      unknown54: this.unknown54.get(),
      unknown55: this.unknown55.get(),
      unknown56: this.unknown56.get(),
      unknown57: this.unknown57.get(),
      unknown58: this.unknown58.get(),
      unknown59: this.unknown59.get(),
      unknown60: this.unknown60.get(),
      unknown61: this.unknown61.get(),
      unknown62: this.unknown62.get(),
      unknown63: this.unknown63.get(),
      unknown64: this.unknown64.get(),
      unknown65: this.unknown65.get(),
      unknown66: this.unknown66.get(),
      unknown67: this.unknown67.get(),
      unknown68: this.unknown68.get(),
      unknown69: this.unknown69.get(),
      unknown70: this.unknown70.get(),
      unknown71: this.unknown71.get()
    });
  }

  protected override _set(lockdata: IMuseumLockData): void {
    this.unknown0.set(lockdata.unknown0);
    this.unknown1.set(lockdata.unknown1);
    this.unknown2.set(lockdata.unknown2);
    this.unknown3.set(lockdata.unknown3);
    this.unknown4.set(lockdata.unknown4);
    this.unknown5.set(lockdata.unknown5);
    this.unknown6.set(lockdata.unknown6);
    this.unknown7.set(lockdata.unknown7);
    this.unknown8.set(lockdata.unknown8);
    this.unknown9.set(lockdata.unknown9);
    this.unknown10.set(lockdata.unknown10);
    this.unknown11.set(lockdata.unknown11);
    this.unknown12.set(lockdata.unknown12);
    this.unknown13.set(lockdata.unknown13);
    this.unknown14.set(lockdata.unknown14);
    this.unknown15.set(lockdata.unknown15);
    this.unknown16.set(lockdata.unknown16);
    this.unknown17.set(lockdata.unknown17);
    this.unknown18.set(lockdata.unknown18);
    this.unknown19.set(lockdata.unknown19);
    this.unknown20.set(lockdata.unknown20);
    this.unknown21.set(lockdata.unknown21);
    this.unknown22.set(lockdata.unknown22);
    this.unknown23.set(lockdata.unknown23);
    this.unknown24.set(lockdata.unknown24);
    this.unknown25.set(lockdata.unknown25);
    this.unknown26.set(lockdata.unknown26);
    this.unknown27.set(lockdata.unknown27);
    this.unknown28.set(lockdata.unknown28);
    this.unknown29.set(lockdata.unknown29);
    this.unknown30.set(lockdata.unknown30);
    this.unknown31.set(lockdata.unknown31);
    this.unknown32.set(lockdata.unknown32);
    this.unknown33.set(lockdata.unknown33);
    this.unknown34.set(lockdata.unknown34);
    this.unknown35.set(lockdata.unknown35);
    this.unknown36.set(lockdata.unknown36);
    this.unknown37.set(lockdata.unknown37);
    this.unknown38.set(lockdata.unknown38);
    this.unknown39.set(lockdata.unknown39);
    this.unknown40.set(lockdata.unknown40);
    this.unknown41.set(lockdata.unknown41);
    this.unknown42.set(lockdata.unknown42);
    this.unknown43.set(lockdata.unknown43);
    this.unknown44.set(lockdata.unknown44);
    this.unknown45.set(lockdata.unknown45);
    this.unknown46.set(lockdata.unknown46);
    this.unknown47.set(lockdata.unknown47);
    this.unknown48.set(lockdata.unknown48);
    this.unknown49.set(lockdata.unknown49);
    this.unknown50.set(lockdata.unknown50);
    this.unknown51.set(lockdata.unknown51);
    this.unknown52.set(lockdata.unknown52);
    this.unknown53.set(lockdata.unknown53);
    this.unknown54.set(lockdata.unknown54);
    this.unknown55.set(lockdata.unknown55);
    this.unknown56.set(lockdata.unknown56);
    this.unknown57.set(lockdata.unknown57);
    this.unknown58.set(lockdata.unknown58);
    this.unknown59.set(lockdata.unknown59);
    this.unknown60.set(lockdata.unknown60);
    this.unknown61.set(lockdata.unknown61);
    this.unknown62.set(lockdata.unknown62);
    this.unknown63.set(lockdata.unknown63);
    this.unknown64.set(lockdata.unknown64);
    this.unknown65.set(lockdata.unknown65);
    this.unknown66.set(lockdata.unknown66);
    this.unknown67.set(lockdata.unknown67);
    this.unknown68.set(lockdata.unknown68);
    this.unknown69.set(lockdata.unknown69);
    this.unknown70.set(lockdata.unknown70);
    this.unknown71.set(lockdata.unknown71);
  }
}

export default MuseumLockData;
