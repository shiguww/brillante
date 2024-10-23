import z from "zod";
import type KDM from "#/kdm/kdm";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMU32 from "#/kdm/common/primitive/kdm-u32";
import type KDMEntity from "#/kdm/common/kdm-entity";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";

const ITexture1 = z.object({
  _kind: z.literal("Texture1").default("Texture1"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStringPointer.schema,
  unknown2: KDMStringPointer.schema,
  unknown3: KDMStructArrayPointer.schema,
  unknown4: KDMU32.schema
});

type ITexture1 = z.infer<typeof ITexture1>;

class Texture1 extends KDMStruct<ITexture1> {
  public static readonly schema = ITexture1;

  public override readonly unknownSection4Value0 = 0x00000000;
  public override readonly unknownSection4Value1 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStringPointer(this.kdm);
  public readonly unknown2 = new KDMStringPointer(this.kdm);
  public readonly unknown3 = new KDMStructArrayPointer(this.kdm);
  public readonly unknown4 = new KDMU32(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, ITexture1);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0,
      this.unknown1,
      this.unknown2,
      this.unknown3,
      this.unknown4
    ];
  }

  protected override _get(): ITexture1 {
    return ITexture1.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get()
    });
  }

  protected override _set(texture: ITexture1): void {
    this.unknown0.set(texture.unknown0);
    this.unknown1.set(texture.unknown1);
    this.unknown2.set(texture.unknown2);
    this.unknown3.set(texture.unknown3);
    this.unknown4.set(texture.unknown4);
  }
}

export default Texture1;
