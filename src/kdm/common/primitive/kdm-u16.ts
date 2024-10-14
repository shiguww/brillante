import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const IKDMU16 = z.number().int();
type IKDMU16 = z.infer<typeof IKDMU16>;

class KDMU16 extends KDMEntity<IKDMU16> {
  public static readonly schema = IKDMU16;
  private state = 0;

  public constructor(kdm: KDM) {
    super(kdm, IKDMU16);
  }

  public get number(): number {
    return this.state;
  }

  private set number(number: number) {
    this.state = number;
  }

  public override get sizeof(): number {
    return WBuffer.U16_SIZE;
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  protected override _get(): IKDMU16 {
    return IKDMU16.parse(this.number);
  }

  protected override _set(data: IKDMU16): void {
    this.number = data;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU16(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getU16();
  }
}

export default KDMU16;
