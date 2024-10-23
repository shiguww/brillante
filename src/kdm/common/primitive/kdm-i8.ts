import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../array/kdm-array";

const I8_MAX = 127;
const I8_MIN = -128;

const IKDMI8 = z.number().int()
  .max(I8_MAX, `Value must be at most ${I8_MAX}`)
  .min(I8_MIN, `Value must be at least ${I8_MIN}`);

type IKDMI8 = z.infer<typeof IKDMI8>;

class KDMI8 extends KDMEntity<IKDMI8> {
  public static readonly schema = IKDMI8;
  private state = 0;

  public constructor(kdm: KDM) {
    super(kdm, IKDMI8);
  }

  public get number(): number {
    return this.state;
  }

  private set number(number: number) {
    this.state = number;
  }

  public override get sizeof(): number {
    return WBuffer.I8_SIZE;
  }

  public override get arrays(): Array<KDMArray> {
    return [];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  protected override _get(): IKDMI8 {
    return IKDMI8.parse(this.number);
  }

  protected override _set(data: IKDMI8): void {
    this.number = data;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setI8(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getI8();
  }
}

export default KDMI8;
