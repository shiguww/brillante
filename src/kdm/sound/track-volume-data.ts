import z from "zod";
import KDMF32 from "#/kdm/common/kdm-f32";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMArray from "#/kdm/common/array/kdm-array";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMF32ArrayPointer from "#/kdm/common/pointer/kdm-f32-array-pointer";

const ITrackVolumeData = z.object({
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMU32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMF32.schema,
  unknown8: KDMF32.schema,
  unknown9: KDMF32.schema,
  unknown10: KDMF32.schema,
  unknown11: KDMU32.schema,
  unknown12: KDMF32.schema,
  unknown13: KDMF32.schema,
  unknown14: KDMF32.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMF32ArrayPointer.schema,
  unknown2: KDMF32ArrayPointer.schema,
  _structure: z.literal("TrackVolumeData").default("TrackVolumeData")
});

type ITrackVolumeData = z.infer<typeof ITrackVolumeData>;

class TrackVolumeData extends KDMStructure<ITrackVolumeData> {
  public static readonly schema = ITrackVolumeData;

  public override readonly schema = ITrackVolumeData;
  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x008E1200;

  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMU32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMF32(this.kdm);
  public readonly unknown8 = new KDMF32(this.kdm);
  public readonly unknown9 = new KDMF32(this.kdm);
  public readonly unknown10 = new KDMF32(this.kdm);
  public readonly unknown11 = new KDMU32(this.kdm);
  public readonly unknown12 = new KDMF32(this.kdm);
  public readonly unknown13 = new KDMF32(this.kdm);
  public readonly unknown14 = new KDMF32(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMF32ArrayPointer(this.kdm);
  public readonly unknown2 = new KDMF32ArrayPointer(this.kdm);

  public override get arrays(): KDMArray[] {
    return [...this.unknown1.array.arrays, ...this.unknown2.array.arrays];
  }

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
      this.unknown14
    ];
  }

  public override get(): ITrackVolumeData {
    return ITrackVolumeData.parse({
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
      unknown14: this.unknown14.get()
    });
  }

  public override set(data: ITrackVolumeData): this {
    const trackvolumedata = ITrackVolumeData.parse(data);

    this.unknown0.set(trackvolumedata.unknown0);
    this.unknown1.set(trackvolumedata.unknown1);
    this.unknown2.set(trackvolumedata.unknown2);
    this.unknown3.set(trackvolumedata.unknown3);
    this.unknown4.set(trackvolumedata.unknown4);
    this.unknown5.set(trackvolumedata.unknown5);
    this.unknown6.set(trackvolumedata.unknown6);
    this.unknown7.set(trackvolumedata.unknown7);
    this.unknown8.set(trackvolumedata.unknown8);
    this.unknown9.set(trackvolumedata.unknown9);
    this.unknown10.set(trackvolumedata.unknown10);
    this.unknown11.set(trackvolumedata.unknown11);
    this.unknown12.set(trackvolumedata.unknown12);
    this.unknown13.set(trackvolumedata.unknown13);
    this.unknown14.set(trackvolumedata.unknown14);

    return this;
  }
}

export default TrackVolumeData;
