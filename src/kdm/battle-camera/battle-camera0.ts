import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMEntity from "../common/kdm-entity";
import type KDM from "../kdm";
import KDMU16 from "../common/primitive/kdm-u16";
import KDMF32 from "../common/primitive/kdm-f32";

const IBattleCamera0 = z.object({
  _kind: z.literal("BattleCamera0").default("BattleCamera0"),
  unknown0: KDMStringPointer.schema,
  unknown1: KDMU16.schema,
  unknown2: KDMU16.schema,
  unknown3: KDMU16.schema,
  unknown4: KDMU16.schema,
  unknown5: KDMU16.schema,
  unknown6: KDMU16.schema,
  unknown7: KDMF32.schema,
  unknown8: KDMF32.schema,
  unknown9: KDMF32.schema,
  unknown10: KDMU16.schema,
  unknown11: KDMU16.schema
});

type IBattleCamera0 = z.infer<typeof IBattleCamera0>;

class BattleCamera0 extends KDMStruct<IBattleCamera0> {
  public static readonly schema = IBattleCamera0;

  public override readonly unknownSection4Value1 = 14234236;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMU16(this.kdm);
  public readonly unknown2 = new KDMU16(this.kdm);
  public readonly unknown3 = new KDMU16(this.kdm);
  public readonly unknown4 = new KDMU16(this.kdm);
  public readonly unknown5 = new KDMU16(this.kdm);
  public readonly unknown6 = new KDMU16(this.kdm);
  public readonly unknown7 = new KDMF32(this.kdm);
  public readonly unknown8 = new KDMF32(this.kdm);
  public readonly unknown9 = new KDMF32(this.kdm);
  public readonly unknown10 = new KDMU16(this.kdm);
  public readonly unknown11 = new KDMU16(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IBattleCamera0);
  }

  public override get fields(): Array<KDMEntity> {
    return [
      this.unknown0, // 4
      this.unknown1, // 6
      this.unknown2, // 8
      this.unknown3, // 10
      this.unknown4, // 12
      this.unknown5, // 14
      this.unknown6, // 16
      this.unknown7, // 20
      this.unknown8, // 24
      this.unknown9, // 28
      this.unknown10, // 30
      this.unknown11  // 32
    ];
  }

  protected override _get(): IBattleCamera0 {
    return IBattleCamera0.parse({
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

  protected override _set(camera: IBattleCamera0): void {
    this.unknown0.set(camera.unknown0);
    this.unknown1.set(camera.unknown1);
    this.unknown2.set(camera.unknown2);
    this.unknown3.set(camera.unknown3);
    this.unknown4.set(camera.unknown4);
    this.unknown5.set(camera.unknown5);
    this.unknown6.set(camera.unknown6);
    this.unknown7.set(camera.unknown7);
    this.unknown8.set(camera.unknown8);
    this.unknown9.set(camera.unknown9);
    this.unknown10.set(camera.unknown10);
    this.unknown11.set(camera.unknown11);
  }
}

export default BattleCamera0;
