import z from "zod";
import KDMU32 from "#/kdm/common/kdm-u32";
import KDMStructure from "#/kdm/common/kdm-structure";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";

const IMapDataBackground = z.union([
  z.null(),
  z.object({ color: z.string() }),
  z.object({ textures: z.tuple([z.string(), z.string()]) })
]);

type IMapDataBackground = z.infer<typeof IMapDataBackground>;

class MapDataBackground extends KDMStructure<IMapDataBackground> {
  private static readonly COLOR_TEXTURE = "<color>";
  public static readonly schema = IMapDataBackground;

  public override readonly schema = IMapDataBackground;
  public override readonly unknownSection4Value0 = null;
  public override readonly unknownSection4Value1 = null;

  public readonly background0 = new KDMStringPointer(this.kdm);
  public readonly background1 = new KDMStringPointer(this.kdm);

  public override get fields(): KDMStructure[] {
    return [this.background0, this.background1];
  }

  public override get(): IMapDataBackground {
    const bg0 = this.background0.get() || "";
    const bg1 = this.background1.get() || "";

    if (bg0 === "" && bg1 === "") {
      return null;
    }

    if (bg0 === MapDataBackground.COLOR_TEXTURE) {
      return { color: bg1 };
    }

    return { textures: [bg0, bg1] };
  }

  public override set(data: IMapDataBackground): this {
    const background = IMapDataBackground.parse(data);

    if(background === null) {
      this.background0.set(null);
      this.background1.set(null);
      return this;
    }

    if("color" in background) {
      this.background1.set(background.color);
      this.background0.set(MapDataBackground.COLOR_TEXTURE);
      return this;
    }

    this.background0.set(background.textures[0]);
    this.background1.set(background.textures[1]);
    return this;
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

class MapData extends KDMStructure<IMapData> {
  public static readonly schema = IMapData;

  public override readonly unknownSection4Value0 = 0x000000000;
  public override readonly unknownSection4Value1 = 0x000000000;

  public override readonly schema = IMapData;
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

  public override get fields(): Array<KDMStructure> {
    return [
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

  public override get(): IMapData {
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

  public override set(data: unknown): this {
    const mapdata = IMapData.parse(data);

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

    return this;
  }
}

export default MapData;
