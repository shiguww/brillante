import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMI32 from "../common/primitive/kdm-i32";
import MapObjectData1 from "./mapobject-data1";
import type KDM from "../kdm";

const IMapObjectData4 = z.object({
  _kind: z.literal("MapObjectData4").default("MapObjectData4"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMI32.schema,
  unknown2: MapObjectData1.schema,
  unknown3: KDMStringPointer.schema,

  unknown4: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown6: KDMStringPointer.schema,
  unknown7: KDMStringPointer.schema,

  unknown8: KDMI32.schema,
  unknown9: KDMI32.schema,
  unknown10: KDMI32.schema,
  unknown11: KDMI32.schema,

  unknown12: KDMI32.schema,
  unknown13: KDMI32.schema,
  unknown14: KDMStringPointer.schema,
  unknown15: KDMStringPointer.schema,

  unknown16: KDMStringPointer.schema,
  unknown17: KDMStringPointer.schema,
  unknown18: KDMStringPointer.schema,
  unknown19: KDMStringPointer.schema,

  unknown20: KDMStringPointer.schema,
  unknown21: KDMStringPointer.schema,
  unknown22: KDMStringPointer.schema,
  unknown23: KDMStringPointer.schema,

  unknown24: KDMStringPointer.schema,
  unknown25: KDMStringPointer.schema,
  unknown26: KDMStringPointer.schema,
  unknown27: KDMStringPointer.schema,

  unknown28: KDMStringPointer.schema,
  unknown29: KDMStringPointer.schema,
  unknown30: KDMStringPointer.schema,
  unknown31: KDMStringPointer.schema,

  unknown32: KDMStringPointer.schema,
  unknown33: KDMStringPointer.schema,
  unknown34: KDMStringPointer.schema,
  unknown35: KDMStringPointer.schema,

  unknown36: KDMStringPointer.schema,
  unknown37: KDMStringPointer.schema,
  unknown38: KDMStringPointer.schema,
  unknown39: KDMStringPointer.schema,

  unknown40: KDMStringPointer.schema,
  unknown41: KDMStringPointer.schema,
  unknown42: KDMStringPointer.schema,
  unknown43: KDMStringPointer.schema,

  unknown44: KDMStringPointer.schema,
  unknown45: KDMStringPointer.schema,
  unknown46: KDMStringPointer.schema,
  unknown47: KDMStringPointer.schema,
});

type IMapObjectData4 = z.infer<typeof IMapObjectData4>;

class MapObjectData4 extends KDMStruct<IMapObjectData4> {
  public static readonly schema = IMapObjectData4;

  public override readonly unknownSection4Value1 = 16133460;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMI32(this.kdm);
  public readonly unknown2 = new MapObjectData1(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);

  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown6 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMStringPointer(this.kdm);

  public readonly unknown8 = new KDMI32(this.kdm);
  public readonly unknown9 = new KDMI32(this.kdm);
  public readonly unknown10 = new KDMI32(this.kdm);
  public readonly unknown11 = new KDMI32(this.kdm);

  public readonly unknown12 = new KDMI32(this.kdm);
  public readonly unknown13 = new KDMI32(this.kdm);
  public readonly unknown14 = new KDMStringPointer(this.kdm);
  public readonly unknown15 = new KDMStringPointer(this.kdm);

  public readonly unknown16 = new KDMStringPointer(this.kdm);
  public readonly unknown17 = new KDMStringPointer(this.kdm);
  public readonly unknown18 = new KDMStringPointer(this.kdm);
  public readonly unknown19 = new KDMStringPointer(this.kdm);

  public readonly unknown20 = new KDMStringPointer(this.kdm);
  public readonly unknown21 = new KDMStringPointer(this.kdm);
  public readonly unknown22 = new KDMStringPointer(this.kdm);
  public readonly unknown23 = new KDMStringPointer(this.kdm);

  public readonly unknown24 = new KDMStringPointer(this.kdm);
  public readonly unknown25 = new KDMStringPointer(this.kdm);
  public readonly unknown26 = new KDMStringPointer(this.kdm);
  public readonly unknown27 = new KDMStringPointer(this.kdm);

  public readonly unknown28 = new KDMStringPointer(this.kdm);
  public readonly unknown29 = new KDMStringPointer(this.kdm);
  public readonly unknown30 = new KDMStringPointer(this.kdm);
  public readonly unknown31 = new KDMStringPointer(this.kdm);

  public readonly unknown32 = new KDMStringPointer(this.kdm);
  public readonly unknown33 = new KDMStringPointer(this.kdm);
  public readonly unknown34 = new KDMStringPointer(this.kdm);
  public readonly unknown35 = new KDMStringPointer(this.kdm);

  public readonly unknown36 = new KDMStringPointer(this.kdm);
  public readonly unknown37 = new KDMStringPointer(this.kdm);
  public readonly unknown38 = new KDMStringPointer(this.kdm);
  public readonly unknown39 = new KDMStringPointer(this.kdm);

  public readonly unknown40 = new KDMStringPointer(this.kdm);
  public readonly unknown41 = new KDMStringPointer(this.kdm);
  public readonly unknown42 = new KDMStringPointer(this.kdm);
  public readonly unknown43 = new KDMStringPointer(this.kdm);

  public readonly unknown44 = new KDMStringPointer(this.kdm);
  public readonly unknown45 = new KDMStringPointer(this.kdm);
  public readonly unknown46 = new KDMStringPointer(this.kdm);
  public readonly unknown47 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapObjectData4);
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
      this.unknown45,
      this.unknown46,
      this.unknown47
    ];    
  }

  protected override _get(): IMapObjectData4 {
    return IMapObjectData4.parse({
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
      unknown47: this.unknown47.get()
    });
  }

  protected override _set(mapobjectdata: IMapObjectData4): void {
    this.unknown0.set(mapobjectdata.unknown0);
    this.unknown1.set(mapobjectdata.unknown1);
    this.unknown2.set(mapobjectdata.unknown2);
    this.unknown3.set(mapobjectdata.unknown3);
    this.unknown4.set(mapobjectdata.unknown4);
    this.unknown5.set(mapobjectdata.unknown5);
    this.unknown6.set(mapobjectdata.unknown6);
    this.unknown7.set(mapobjectdata.unknown7);
    this.unknown8.set(mapobjectdata.unknown8);
    this.unknown9.set(mapobjectdata.unknown9);
    this.unknown10.set(mapobjectdata.unknown10);
    this.unknown11.set(mapobjectdata.unknown11);
    this.unknown12.set(mapobjectdata.unknown12);
    this.unknown13.set(mapobjectdata.unknown13);
    this.unknown14.set(mapobjectdata.unknown14);
    this.unknown15.set(mapobjectdata.unknown15);
    this.unknown16.set(mapobjectdata.unknown16);
    this.unknown17.set(mapobjectdata.unknown17);
    this.unknown18.set(mapobjectdata.unknown18);
    this.unknown19.set(mapobjectdata.unknown19);
    this.unknown20.set(mapobjectdata.unknown20);
    this.unknown21.set(mapobjectdata.unknown21);
    this.unknown22.set(mapobjectdata.unknown22);
    this.unknown23.set(mapobjectdata.unknown23);
    this.unknown24.set(mapobjectdata.unknown24);
    this.unknown25.set(mapobjectdata.unknown25);
    this.unknown26.set(mapobjectdata.unknown26);
    this.unknown27.set(mapobjectdata.unknown27);
    this.unknown28.set(mapobjectdata.unknown28);
    this.unknown29.set(mapobjectdata.unknown29);
    this.unknown30.set(mapobjectdata.unknown30);
    this.unknown31.set(mapobjectdata.unknown31);
    this.unknown32.set(mapobjectdata.unknown32);
    this.unknown33.set(mapobjectdata.unknown33);
    this.unknown34.set(mapobjectdata.unknown34);
    this.unknown35.set(mapobjectdata.unknown35);
    this.unknown36.set(mapobjectdata.unknown36);
    this.unknown37.set(mapobjectdata.unknown37);
    this.unknown38.set(mapobjectdata.unknown38);
    this.unknown39.set(mapobjectdata.unknown39);
    this.unknown40.set(mapobjectdata.unknown40);
    this.unknown41.set(mapobjectdata.unknown41);
    this.unknown42.set(mapobjectdata.unknown42);
    this.unknown43.set(mapobjectdata.unknown43);
    this.unknown44.set(mapobjectdata.unknown44);
    this.unknown45.set(mapobjectdata.unknown45);
    this.unknown46.set(mapobjectdata.unknown46);
    this.unknown47.set(mapobjectdata.unknown47);    
  }
}

export default MapObjectData4;
