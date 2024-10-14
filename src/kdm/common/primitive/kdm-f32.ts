import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";

const IKDMF32 = z.number();
type IKDMF32 = z.infer<typeof IKDMF32>;

class KDMF32 extends KDMEntity<IKDMF32> {
  public static readonly schema = IKDMF32;
  private state = 0;

  public constructor(kdm: KDM) {
    super(kdm, IKDMF32);
  }

  public get number(): number {
    return this.state;
  }

  private set number(number: number) {
    this.state = number;
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  public override get sizeof(): number {
    return WBuffer.F32_SIZE;
  }

  protected override _get(): IKDMF32 {
    return IKDMF32.parse(this.number);
  }

  protected override _set(data: IKDMF32): void {
    this.number = data;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setF32(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getF32();
  }
}

export default KDMF32;
