import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../array/kdm-array";

const I16_MAX = 32767;
const I16_MIN = -32768;

const IKDMI16 = z.number().int()
  .max(I16_MAX, `Value must be at most ${I16_MAX}`)
  .min(I16_MIN, `Value must be at least ${I16_MIN}`);

type IKDMI16 = z.infer<typeof IKDMI16>;

class KDMI16 extends KDMEntity<IKDMI16> {
  public static readonly schema = IKDMI16;
  private state = 0;

  public constructor(kdm: KDM) {
    super(kdm, IKDMI16);
  }

  public get number(): number {
    return this.state;
  }

  private set number(number: number) {
    this.state = number;
  }

  public override get sizeof(): number {
    return WBuffer.I16_SIZE;
  }

  public override get arrays(): Array<KDMArray> {
    return [];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  protected override _get(): IKDMI16 {
    return IKDMI16.parse(this.number);
  }

  protected override _set(data: IKDMI16): void {
    this.number = data;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setI16(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getI16();
  }
}

export default KDMI16;
