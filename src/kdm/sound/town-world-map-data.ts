import z from "zod";
import KDMF32 from "#kdm/common/kdm-f32";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMStringPointer from "#kdm/common/pointer/kdm-string-pointer";

const ITownWorldMapData = z.object({
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMF32.schema,
  unknown8: KDMF32.schema,
  unknown9: KDMF32.schema,
  unknown10: KDMF32.schema,
  unknown11: KDMF32.schema,
  unknown12: KDMF32.schema,
  unknown13: KDMF32.schema,
  unknown14: KDMF32.schema,
  unknown15: KDMF32.schema,
  unknown16: KDMF32.schema,
  unknown17: KDMF32.schema,
  unknown18: KDMF32.schema,
  unknown19: KDMF32.schema,
  unknown20: KDMF32.schema,
  unknown21: KDMF32.schema,
  unknown22: KDMF32.schema,
  unknown23: KDMF32.schema,
  unknown24: KDMF32.schema,
  unknown25: KDMF32.schema,
  unknown26: KDMF32.schema,
  unknown27: KDMF32.schema,
  unknown28: KDMF32.schema,
  unknown29: KDMF32.schema,
  unknown30: KDMF32.schema,
  unknown31: KDMF32.schema,
  unknown32: KDMF32.schema,
  unknown33: KDMF32.schema,
  unknown34: KDMF32.schema,
  unknown35: KDMF32.schema,
  unknown36: KDMF32.schema,
  unknown37: KDMF32.schema,
  unknown38: KDMF32.schema,
  unknown39: KDMF32.schema,
  unknown40: KDMF32.schema,
  unknown41: KDMF32.schema,
  unknown42: KDMF32.schema,
  unknown43: KDMF32.schema,
  unknown44: KDMF32.schema,
  unknown45: KDMF32.schema,
  unknown46: KDMF32.schema,
  unknown47: KDMF32.schema,
  unknown48: KDMF32.schema,
  unknown49: KDMF32.schema,
  unknown50: KDMF32.schema,
  unknown51: KDMF32.schema,
  unknown52: KDMF32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStringPointer.schema,
  unknown4: KDMStringPointer.schema,
  _structure: z.literal("TownWorldMapData").default("TownWorldMapData")
});

type ITownWorldMapData = z.infer<typeof ITownWorldMapData>;

class TownWorldMapData extends KDMStructure<ITownWorldMapData> {
  public static readonly schema = ITownWorldMapData;

  public override readonly schema = ITownWorldMapData;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E12FC;

  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMF32(this.kdm);
  public readonly unknown8 = new KDMF32(this.kdm);
  public readonly unknown9 = new KDMF32(this.kdm);
  public readonly unknown10 = new KDMF32(this.kdm);
  public readonly unknown11 = new KDMF32(this.kdm);
  public readonly unknown12 = new KDMF32(this.kdm);
  public readonly unknown13 = new KDMF32(this.kdm);
  public readonly unknown14 = new KDMF32(this.kdm);
  public readonly unknown15 = new KDMF32(this.kdm);
  public readonly unknown16 = new KDMF32(this.kdm);
  public readonly unknown17 = new KDMF32(this.kdm);
  public readonly unknown18 = new KDMF32(this.kdm);
  public readonly unknown19 = new KDMF32(this.kdm);
  public readonly unknown20 = new KDMF32(this.kdm);
  public readonly unknown21 = new KDMF32(this.kdm);
  public readonly unknown22 = new KDMF32(this.kdm);
  public readonly unknown23 = new KDMF32(this.kdm);
  public readonly unknown24 = new KDMF32(this.kdm);
  public readonly unknown25 = new KDMF32(this.kdm);
  public readonly unknown26 = new KDMF32(this.kdm);
  public readonly unknown27 = new KDMF32(this.kdm);
  public readonly unknown28 = new KDMF32(this.kdm);
  public readonly unknown29 = new KDMF32(this.kdm);
  public readonly unknown30 = new KDMF32(this.kdm);
  public readonly unknown31 = new KDMF32(this.kdm);
  public readonly unknown32 = new KDMF32(this.kdm);
  public readonly unknown33 = new KDMF32(this.kdm);
  public readonly unknown34 = new KDMF32(this.kdm);
  public readonly unknown35 = new KDMF32(this.kdm);
  public readonly unknown36 = new KDMF32(this.kdm);
  public readonly unknown37 = new KDMF32(this.kdm);
  public readonly unknown38 = new KDMF32(this.kdm);
  public readonly unknown39 = new KDMF32(this.kdm);
  public readonly unknown40 = new KDMF32(this.kdm);
  public readonly unknown41 = new KDMF32(this.kdm);
  public readonly unknown42 = new KDMF32(this.kdm);
  public readonly unknown43 = new KDMF32(this.kdm);
  public readonly unknown44 = new KDMF32(this.kdm);
  public readonly unknown45 = new KDMF32(this.kdm);
  public readonly unknown46 = new KDMF32(this.kdm);
  public readonly unknown47 = new KDMF32(this.kdm);
  public readonly unknown48 = new KDMF32(this.kdm);
  public readonly unknown49 = new KDMF32(this.kdm);
  public readonly unknown50 = new KDMF32(this.kdm);
  public readonly unknown51 = new KDMF32(this.kdm);
  public readonly unknown52 = new KDMF32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);


  public override get fields(): Array<KDMStructure> {
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
      this.unknown45,
      this.unknown46,
      this.unknown47,
      this.unknown48,
      this.unknown49,
      this.unknown50,
      this.unknown51,
      this.unknown52
    ];    
  }

  public override get(): ITownWorldMapData {
    return ITownWorldMapData.parse({
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
    });
  }

  public override set(data: unknown): this {
    const townworldmapdata = ITownWorldMapData.parse(data);

    this.unknown0.set(townworldmapdata.unknown0);
    this.unknown1.set(townworldmapdata.unknown1);
    this.unknown2.set(townworldmapdata.unknown2);
    this.unknown3.set(townworldmapdata.unknown3);
    this.unknown4.set(townworldmapdata.unknown4);
    this.unknown5.set(townworldmapdata.unknown5);
    this.unknown6.set(townworldmapdata.unknown6);
    this.unknown7.set(townworldmapdata.unknown7);
    this.unknown8.set(townworldmapdata.unknown8);
    this.unknown9.set(townworldmapdata.unknown9);
    this.unknown10.set(townworldmapdata.unknown10);
    this.unknown11.set(townworldmapdata.unknown11);
    this.unknown12.set(townworldmapdata.unknown12);
    this.unknown13.set(townworldmapdata.unknown13);
    this.unknown14.set(townworldmapdata.unknown14);
    this.unknown15.set(townworldmapdata.unknown15);
    this.unknown16.set(townworldmapdata.unknown16);
    this.unknown17.set(townworldmapdata.unknown17);
    this.unknown18.set(townworldmapdata.unknown18);
    this.unknown19.set(townworldmapdata.unknown19);
    this.unknown20.set(townworldmapdata.unknown20);
    this.unknown21.set(townworldmapdata.unknown21);
    this.unknown22.set(townworldmapdata.unknown22);
    this.unknown23.set(townworldmapdata.unknown23);
    this.unknown24.set(townworldmapdata.unknown24);
    this.unknown25.set(townworldmapdata.unknown25);
    this.unknown26.set(townworldmapdata.unknown26);
    this.unknown27.set(townworldmapdata.unknown27);
    this.unknown28.set(townworldmapdata.unknown28);
    this.unknown29.set(townworldmapdata.unknown29);
    this.unknown30.set(townworldmapdata.unknown30);
    this.unknown31.set(townworldmapdata.unknown31);
    this.unknown32.set(townworldmapdata.unknown32);
    this.unknown33.set(townworldmapdata.unknown33);
    this.unknown34.set(townworldmapdata.unknown34);
    this.unknown35.set(townworldmapdata.unknown35);
    this.unknown36.set(townworldmapdata.unknown36);
    this.unknown37.set(townworldmapdata.unknown37);
    this.unknown38.set(townworldmapdata.unknown38);
    this.unknown39.set(townworldmapdata.unknown39);
    this.unknown40.set(townworldmapdata.unknown40);
    this.unknown41.set(townworldmapdata.unknown41);
    this.unknown42.set(townworldmapdata.unknown42);
    this.unknown43.set(townworldmapdata.unknown43);
    this.unknown44.set(townworldmapdata.unknown44);
    this.unknown45.set(townworldmapdata.unknown45);
    this.unknown46.set(townworldmapdata.unknown46);
    this.unknown47.set(townworldmapdata.unknown47);
    this.unknown48.set(townworldmapdata.unknown48);
    this.unknown49.set(townworldmapdata.unknown49);
    this.unknown50.set(townworldmapdata.unknown50);
    this.unknown51.set(townworldmapdata.unknown51);
    this.unknown52.set(townworldmapdata.unknown52);

    return this;
  }
}

export default TownWorldMapData;
