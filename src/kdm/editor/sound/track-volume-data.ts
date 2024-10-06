import z from "zod";
import assert from "node:assert/strict";
import type RBuffer from "#buffer/r-buffer";
import type WBuffer from "#buffer/w-buffer";
import KDMObject from "#kdm/editor/common/kdm-object";
import KDMU16 from "#kdm/editor/common/primitive/kdm-u16";
import KDMF32 from "#kdm/editor/common/primitive/kdm-f32";
import KDMU32 from "#kdm/editor/common/primitive/kdm-u32";
import KDMStructure from "#kdm/editor/common/kdm-structure";
import KDMPrimitive from "#kdm/editor/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/editor/common/primitive/kdm-string-pointer";
import KDMF32ArrayPointer from "#kdm/editor/common/primitive/kdm-f32-array-pointer";
import KDMObjectHeading from "../common/kdm-object-heading";

class TrackVolumeDataHeading extends KDMObjectHeading<TrackVolumeData> {
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [this.ouid, this.size0, this.otid, this.size1];
  }

  protected override _build(buffer: WBuffer): void {
    this.size0.set((this.object.sizeof - this.sizeof) / 4);
    this.size1.set((this.object.sizeof - this.sizeof) / 4);
    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);
    assert.equal(this.size0.get(), (this.object.sizeof - this.sizeof) / 4);
    assert.equal(this.size1.get(), (this.object.sizeof - this.sizeof) / 4);
  }
}

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

class TrackVolumeData extends KDMObject<ITrackVolumeData> {
  public static readonly schema = ITrackVolumeData;
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x008E1200;

  public override readonly schema = ITrackVolumeData;
  public override readonly heading = new TrackVolumeDataHeading(this);

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

  public override get objects(): KDMObject[] {
    return [...this.unknown1.array.objects, ...this.unknown2.array.objects, this];
  }

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
      this.unknown14
    ];
  }

  protected override _get(): ITrackVolumeData {
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

  protected override _set(trackvolumedata: ITrackVolumeData): void {
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
  }
}

export default TrackVolumeData;
