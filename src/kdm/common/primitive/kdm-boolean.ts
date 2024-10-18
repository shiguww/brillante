import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../array/kdm-array";

const IKDMBoolean = z.boolean();
type IKDMBoolean = z.infer<typeof IKDMBoolean>;

class KDMBoolean extends KDMEntity<IKDMBoolean> {
  public static readonly schema = IKDMBoolean;
  private state = false;

  public constructor(kdm: KDM) {
    super(kdm, IKDMBoolean);
  }

  public get value(): boolean {
    return this.state;
  }

  private set value(value: boolean) {
    this.state = value;
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  public override get arrays(): Array<KDMArray> {
    return [];
  }

  public override get sizeof(): number {
    return WBuffer.U8_SIZE;
  }

  protected override _get(): IKDMBoolean {
    return IKDMBoolean.parse(this.value);
  }

  protected override _set(data: IKDMBoolean): void {
    this.value = data;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU8(Number(this.value));
  }

  protected override _parse(buffer: RBuffer): void {
    this.value = Boolean(buffer.getU8());
  }
}

export default KDMBoolean;
