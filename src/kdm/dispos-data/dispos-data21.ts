import z from "zod";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import KDMI32 from "#/kdm/common/primitive/kdm-i32"
import KDMStructArrayPointer from "#/kdm/common/primitive/kdm-struct-array-pointer";
import KDMEntity from "../common/kdm-entity";
import KDMStructArrayPointerArrayPointer from "../common/primitive/kdm-struct-array-pointer-array-pointer";
import type KDM from "../kdm";

const IDisposData21 = z.object({
  unknown0: KDMStringPointer.schema,
  unknown1: KDMStructArrayPointerArrayPointer.schema,
  unknown2: KDMI32.schema,
  unknown3: KDMStructArrayPointerArrayPointer.schema,
  unknown4: KDMI32.schema,
  unknown5: KDMStructArrayPointerArrayPointer.schema,
  unknown6: KDMI32.schema,
  unknown7: KDMStructArrayPointerArrayPointer.schema,
  unknown8: KDMI32.schema,
  unknown9: KDMStructArrayPointer.schema,
  _kind:z.literal("DisposData21").default("DisposData21")
});

type IDisposData21 = z.infer<typeof IDisposData21>;

class DisposData21 extends KDMStruct<IDisposData21> {
  public static readonly schema = IDisposData21;

  public override readonly unknownSection4Value1 = 0x00000000;
  public override readonly unknownSection4Value0 = 0x00000000;

  public readonly unknown0 = new KDMStringPointer(this.kdm);
  public readonly unknown1 = new KDMStructArrayPointerArrayPointer(this.kdm);
  public readonly unknown2 = new KDMI32(this.kdm);
  public readonly unknown3 = new KDMStructArrayPointerArrayPointer(this.kdm);
  public readonly unknown4 = new KDMI32(this.kdm);
  public readonly unknown5 = new KDMStructArrayPointerArrayPointer(this.kdm);
  public readonly unknown6 = new KDMI32(this.kdm);
  public readonly unknown7 = new KDMStructArrayPointerArrayPointer(this.kdm);
  public readonly unknown8 = new KDMI32(this.kdm);
  public readonly unknown9 = new KDMStructArrayPointer(this.kdm);

  public constructor(kdm: KDM) {
    super(kdm, IDisposData21);
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
      this.unknown9
    ];
  }

  protected override _get(): IDisposData21 {
    return IDisposData21.parse({
      unknown0: this.unknown0.get(),
      unknown1: this.unknown1.get(),
      unknown2: this.unknown2.get(),
      unknown3: this.unknown3.get(),
      unknown4: this.unknown4.get(),
      unknown5: this.unknown5.get(),
      unknown6: this.unknown6.get(),
      unknown7: this.unknown7.get(),
      unknown8: this.unknown8.get(),
      unknown9: this.unknown9.get()
    });
  }

  protected override _set(disposdata: IDisposData21): void {
    this.unknown0.set(disposdata.unknown0);
    this.unknown1.set(disposdata.unknown1);
    this.unknown2.set(disposdata.unknown2);
    this.unknown3.set(disposdata.unknown3);
    this.unknown4.set(disposdata.unknown4);
    this.unknown5.set(disposdata.unknown5);
    this.unknown6.set(disposdata.unknown6);
    this.unknown7.set(disposdata.unknown7);
    this.unknown8.set(disposdata.unknown8);
    this.unknown9.set(disposdata.unknown9);
  }
}

export default DisposData21;
