import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMF32 from "#/kdm/common/primitive/kdm-f32";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const ITexture0 = z.object({
  _kind: z.literal("Texture0").default("Texture0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMU32.schema,
  unknown3: KDMF32.schema,
  unknown4: KDMF32.schema,
  unknown5: KDMF32.schema,
  unknown6: KDMF32.schema,
  unknown7: KDMF32.schema,
  unknown8: KDMF32.schema,
  unknown9: KDMF32.schema,
  unknown10: KDMF32.schema,
  unknown11: KDMF32.schema
});

type ITexture0 = z.infer<typeof ITexture0>;

class Texture0 extends KDMStruct<ITexture0> {
  public static readonly schema = ITexture0;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMU32(this.kdm);
  public readonly unknown3 = new KDMF32(this.kdm);
  public readonly unknown4 = new KDMF32(this.kdm);
  public readonly unknown5 = new KDMF32(this.kdm);
  public readonly unknown6 = new KDMF32(this.kdm);
  public readonly unknown7 = new KDMF32(this.kdm);
  public readonly unknown8 = new KDMF32(this.kdm);
  public readonly unknown9 = new KDMF32(this.kdm);
  public readonly unknown10 = new KDMF32(this.kdm);
  public readonly unknown11 = new KDMF32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ITexture0);
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
      this.unknown11
    ];
  }

  protected override _get(): ITexture0 {
    return ITexture0.parse({
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
      unknown11: this.unknown11.get()
    });
  }

  protected override _set(texture: ITexture0): void {
    this.unknown0.set(texture.unknown0);
    this.unknown1.set(texture.unknown1);
    this.unknown2.set(texture.unknown2);
    this.unknown3.set(texture.unknown3);
    this.unknown4.set(texture.unknown4);
    this.unknown5.set(texture.unknown5);
    this.unknown6.set(texture.unknown6);
    this.unknown7.set(texture.unknown7);
    this.unknown8.set(texture.unknown8);
    this.unknown9.set(texture.unknown9);
    this.unknown10.set(texture.unknown10);
    this.unknown11.set(texture.unknown11);
  }
}

export default Texture0;
