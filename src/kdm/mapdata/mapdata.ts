import z from "zod";
import RBuffer from "#buffer/r-buffer";
import WBuffer from "#buffer/w-buffer";
import assert from "node:assert/strict";
import KDMObject from "#kdm/common/kdm-object";
import KDMU16 from "#kdm/common/primitive/kdm-u16";
import KDMU32 from "#kdm/common/primitive/kdm-u32";
import KDMStructure from "#kdm/common/kdm-structure";
import KDMPrimitive from "#kdm/common/primitive/kdm-primitive";
import KDMStringPointer from "#kdm/common/primitive/kdm-string-pointer";

const IMapDataBackground = z.union([
  z.null(),
  z.string(),
  z.tuple([z.string(), z.string()])
])

type IMapDataBackground = z.infer<typeof IMapDataBackground>;

class MapDataBackground extends KDMStructure<IMapDataBackground> {
  private static readonly COLOR_TEXTURE = "<color>";
  public static readonly schema = IMapDataBackground;

  private readonly bg1 = new KDMStringPointer(this.kdm);
  private readonly bg2 = new KDMStringPointer(this.kdm);

  public override readonly schema = IMapDataBackground;

  public override get fields(): Array<KDMPrimitive> {
    return [this.bg1, this.bg2];
  }

  protected override _get(): IMapDataBackground {
    const bg1 = this.bg1.get() || "";
    const bg2 = this.bg2.get() || "";

    if (bg1 === "" && bg2 === "") {
      return null;
    }

    if (bg1 === MapDataBackground.COLOR_TEXTURE) {
      return bg2;
    }

    return [bg1, bg2];
  }

  protected override _set(data: IMapDataBackground): void {
    if(data === null) {
      this.bg1.set(null);
      this.bg2.set(null);
      return;
    }

    if(typeof data === "string") {
      this.bg2.set(data);
      this.bg1.set(MapDataBackground.COLOR_TEXTURE);
      return;
    }

    this.bg1.set(data[0]);
    this.bg2.set(data[1]);
  }
}

class MapDataHeading extends KDMStructure<never> {
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

const IMapData = z.object({
  unknown2: KDMU32.schema,
  unknown3: KDMU32.schema,
  unknown10: KDMU32.schema,
  name: KDMStringPointer.schema,
  level: KDMStringPointer.schema,
  model: KDMStringPointer.schema,
  music: KDMStringPointer.schema,
  script: KDMStringPointer.schema,
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown4: KDMStringPointer.schema,
  unknown5: KDMStringPointer.schema,
  unknown6: KDMStringPointer.schema,
  unknown7: KDMStringPointer.schema,
  unknown8: KDMStringPointer.schema,
  unknown9: KDMStringPointer.schema,
  background: MapDataBackground.schema,
  _structure: z.literal("MapData").default("MapData")
});

type IMapData = z.infer<typeof IMapData>;

class MapData extends KDMObject {
  public static OID = 0x0015;
  public static readonly SIZEOF = 0x0012;
  public static readonly schema = IMapData;
  public static readonly UNKNOWN_SECTION4_VALUE_0 = 0x00000000;
  public static readonly UNKNOWN_SECTION4_VALUE_1 = 0x00000000;

  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown3 = new KDMU32(this.kdm);
  public readonly unknown10 = new KDMU32(this.kdm);
  public readonly name = new KDMStringPointer(this.kdm);
  public readonly level = new KDMStringPointer(this.kdm);
  public readonly model = new KDMStringPointer(this.kdm);
  public readonly music = new KDMStringPointer(this.kdm);
  public readonly script = new KDMStringPointer(this.kdm);
  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown4 = new KDMStringPointer(this.kdm);
  public readonly unknown5 = new KDMStringPointer(this.kdm);
  public readonly unknown6 = new KDMStringPointer(this.kdm);
  public readonly unknown7 = new KDMStringPointer(this.kdm);
  public readonly unknown8 = new KDMStringPointer(this.kdm);
  public readonly unknown9 = new KDMStringPointer(this.kdm);
  public readonly background = new MapDataBackground(this.kdm);

  public override readonly schema = IMapData;
  public override readonly heading = new MapDataHeading(this.kdm);

  public override get fields(): Array<KDMPrimitive> {
    return [
      ...super.fields,
      this.name,
      this.level,
      this.model,
      this.unknown0,
      this.unknown1,
      this.unknown2,
      ...this.background.fields,
      this.script,
      this.unknown3,
      this.music,
      this.unknown4,
      this.unknown5,
      this.unknown6,
      this.unknown7,
      this.unknown8,
      this.unknown9,
      this.unknown10
    ];
  }

  protected override _get(): IMapData {
    return IMapData.parse({
      name: this.name.get(),
      level: this.level.get(),
      model: this.model.get(),
      music: this.music.get(),
      script: this.script.get(),
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
      background: this.background.get()
    });
  }

  protected override _set(mapdata: IMapData): void {
    this.name.set(mapdata.name);
    this.level.set(mapdata.level);
    this.model.set(mapdata.model);
    this.music.set(mapdata.music);
    this.script.set(mapdata.script);
    this.unknown0.set(mapdata.unknown0);
    this.unknown1.set(mapdata.unknown1);
    this.unknown2.set(mapdata.unknown2);
    this.unknown3.set(mapdata.unknown3);
    this.unknown4.set(mapdata.unknown4);
    this.unknown5.set(mapdata.unknown5);
    this.unknown6.set(mapdata.unknown6);
    this.unknown7.set(mapdata.unknown7);
    this.unknown8.set(mapdata.unknown8);
    this.unknown9.set(mapdata.unknown9);
    this.unknown10.set(mapdata.unknown10);
    this.background.set(mapdata.background);
  }

  protected override _build(buffer: WBuffer): void {
    this.heading.oid.set(MapData.OID);
    this.heading.size0.set(MapData.SIZEOF);
    this.heading.size1.set(MapData.SIZEOF);

    super._build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    super._parse(buffer);

    assert.equal(this.heading.oid.get(), MapData.OID);
    assert.equal(this.heading.size0.get(), MapData.SIZEOF);
    assert.equal(this.heading.size1.get(), MapData.SIZEOF);
  }
}

export default MapData;
