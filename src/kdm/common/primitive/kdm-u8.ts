import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../array/kdm-array";

const IKDMU8 = z.number().int();
type IKDMU8 = z.infer<typeof IKDMU8>;

class KDMU8 extends KDMEntity<IKDMU8> {
  public static readonly schema = IKDMU8;
  private state = 0;

  public constructor(kdm: KDM) {
    super(kdm, IKDMU8);
  }

  public get number(): number {
    return this.state;
  }

  private set number(number: number) {
    this.state = number;
  }

  public override get sizeof(): number {
    return WBuffer.U8_SIZE;
  }
  
  public override get arrays(): Array<KDMArray> {
    return [];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  protected override _get(): IKDMU8 {
    return IKDMU8.parse(this.number);
  }

  protected override _set(data: IKDMU8): void {
    this.number = data;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU8(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getU8();
  }
}

export default KDMU8;
