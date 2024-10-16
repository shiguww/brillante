import z from "zod";
import KDMEntity from "../common/kdm-entity";
import KDMStruct from "../common/kdm-struct";
import KDMStringPointer from "../common/primitive/kdm-string-pointer";
import KDMU32 from "../common/primitive/kdm-u32";
import MapObjectData1 from "./mapobject-data1";
import type KDM from "../kdm";

const IMapObjectData5 = z.object({
  _kind: z.literal("MapObjectData5").default("MapObjectData5"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMU32.schema,
  unknown2: MapObjectData1.schema,
  unknown3: KDMStringPointer.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown6: KDMU32.schema,
  unknown7: KDMU32.schema,
  unknown8: KDMU32.schema,
  unknown9: KDMU32.schema,
  unknown10: KDMU32.schema,
  unknown11: KDMU32.schema,
  unknown12: KDMStringPointer.schema,
  unknown13: KDMStringPointer.schema,
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
});

type IMapObjectData5 = z.infer<typeof IMapObjectData5>;

class MapObjectData5 extends KDMStruct<IMapObjectData5> {
  public static readonly schema = IMapObjectData5;

  public override readonly unknownSection4Value1 = 16133576;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMU32(this.kdm);
  public readonly unknown2 = new MapObjectData1(this.kdm);
  public readonly unknown3 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown6 = new KDMU32(this.kdm);
  public readonly unknown7 = new KDMU32(this.kdm);
  public readonly unknown8 = new KDMU32(this.kdm);
  public readonly unknown9 = new KDMU32(this.kdm);
  public readonly unknown10 = new KDMU32(this.kdm);
  public readonly unknown11 = new KDMU32(this.kdm);
  public readonly unknown12 = new KDMStringPointer(this.kdm);
  public readonly unknown13 = new KDMStringPointer(this.kdm);
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

  public constructor(kdm: KDM) {
    super(kdm, IMapObjectData5);
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
      this.unknown25
    ];
  }

  protected override _get(): IMapObjectData5 {
    return IMapObjectData5.parse({
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
      unknown25: this.unknown25.get()
    });
  }

  protected override _set(mapobjectdata: IMapObjectData5): void {
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
  }
}

export default MapObjectData5;
