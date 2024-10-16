import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../array/kdm-array";

const IKDMU32 = z.number().int();
type IKDMU32 = z.infer<typeof IKDMU32>;

class KDMU32 extends KDMEntity<IKDMU32> {
  public static readonly schema = IKDMU32;
  private state = 0;

  public constructor(kdm: KDM) {
    super(kdm, IKDMU32);
  }

  public get number(): number {
    return this.state;
  }

  private set number(number: number) {
    this.state = number;
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  public override get arrays(): Array<KDMArray> {
    return [];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  protected override _get(): IKDMU32 {
    return IKDMU32.parse(this.number);
  }

  protected override _set(data: IKDMU32): void {
    this.number = data;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU32(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getU32();
  }
}

export default KDMU32;
