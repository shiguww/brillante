import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "#/kdm/common/kdm-entity";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import type KDMArray from "../array/kdm-array";

const I32_MAX = 2147483647;
const I32_MIN = -2147483648;

const IKDMI32 = z.number().int()
  .max(I32_MAX, `Value must be at most ${I32_MAX}`)
  .min(I32_MIN, `Value must be at least ${I32_MIN}`);

type IKDMI32 = z.infer<typeof IKDMI32>;

class KDMI32 extends KDMEntity<IKDMI32> {
  public static readonly schema = IKDMI32;
  private state = 0;

  public constructor(kdm: KDM) {
    super(kdm, IKDMI32);
  }

  public get number(): number {
    return this.state;
  }

  private set number(number: number) {
    this.state = number;
  }

  public override get sizeof(): number {
    return WBuffer.I32_SIZE;
  }

  public override get arrays(): Array<KDMArray> {
    return [];
  }

  public override get strings(): Array<KDMStringPointer> {
    return [];
  }

  protected override _get(): IKDMI32 {
    return IKDMI32.parse(this.number);
  }

  protected override _set(data: IKDMI32): void {
    this.number = data;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setI32(this.number);
  }

  protected override _parse(buffer: RBuffer): void {
    this.number = buffer.getI32();
  }
}

export default KDMI32;
