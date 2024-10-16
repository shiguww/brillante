import z from "zod";
import type KDM from "#/kdm/kdm";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../common/array/kdm-array";

class MapDataBackground extends KDMEntity<IMapDataBackground> {
  private static readonly COLOR_TEXTURE = "<color>";

  public static get schema(): typeof IMapDataBackground {
    return IMapDataBackground;
  }

  public readonly background0 = new KDMStringPointer(this.kdm);
  public readonly background1 = new KDMStringPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IMapDataBackground);
  }

  public override get arrays(): Array<KDMArray> {
    return [];
  }

  public override get sizeof(): number {
    return this.background0.sizeof + this.background1.sizeof;
  }

  public override get strings(): Array<KDMStringPointer> {
    return [this.background0, this.background1];
  }

  protected override _get(): IMapDataBackground {
    const bg0 = this.background0.get();
    const bg1 = this.background1.get();

    if(bg0 === null && bg1 === null) {
      return IMapDataBackground.parse({ none: true });
    }

    if(bg0 === MapDataBackground.COLOR_TEXTURE) {
      return IMapDataBackground.parse({ color: bg1 });
    }

    return IMapDataBackground.parse({ textures: [bg0, bg1] });
  }

  protected override _set(background: IMapDataBackground): void {
    if("none" in background) {
      this.background0.set(null);
      this.background1.set(null);
      return;
    }

    if("color" in background) {
      this.background1.set(background.color);
      this.background0.set(MapDataBackground.COLOR_TEXTURE);
      return;
    }

    this.background0.set(background.textures[0]);
    this.background1.set(background.textures[1]);
  }

  protected override _build(buffer: WBuffer): void {
    this.background0.build(buffer);
    this.background1.build(buffer);
  }

  protected override _parse(buffer: RBuffer): void {
    this.background0.parse(buffer);
    this.background1.parse(buffer);
  }
}

const IMapDataBackground = z.object({
  _kind: z.literal("MapDataBackground").default("MapDataBackground")
}).and(z.union([
  z.object({ none: z.literal(true) }),
  z.object({ color: KDMStringPointer.schema }),
  z.object({ textures: z.tuple([KDMStringPointer.schema, KDMStringPointer.schema]) })
]));

type IMapDataBackground = z.infer<typeof IMapDataBackground>;

class MapData extends KDMStruct<IMapData> {
  public static get schema(): typeof IMapData {
    return IMapData;
  }

  public override unknownSection4Value0 = 0x00000000;
  public override unknownSection4Value1 = 0x00000000;

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

  public constructor(kdm: KDM) {
    super(kdm, IMapData);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.name,
      this.level,
      this.model,
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.background.background0,
      this.background.background1,
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
}

const IMapData = z.object({
  _kind: z.literal("MapData").default("MapData"),
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
});

type IMapData = z.infer<typeof IMapData>;
export default MapData;
