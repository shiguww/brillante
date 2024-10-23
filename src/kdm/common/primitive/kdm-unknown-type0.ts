import z from "zod";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMEntity from "../kdm-entity";
import type KDM from "#/kdm/kdm";
import type KDMArray from "../array/kdm-array";
import type KDMStringPointer from "./kdm-string-pointer";

const UNKNOWN_TYPE0_MIN = 0;
const UNKNOWN_TYPE0_MAX = 4294967295;

const IKDMUnknownType0 = z.number().int()
  .max(UNKNOWN_TYPE0_MAX, `Value must be at most ${UNKNOWN_TYPE0_MAX}`)
  .min(UNKNOWN_TYPE0_MIN, `Value must be at least ${UNKNOWN_TYPE0_MIN}`);

type IKDMUnknownType0 = z.infer<typeof IKDMUnknownType0>;

class KDMUnknownType0 extends KDMEntity<IKDMUnknownType0> {
  public static readonly schema = IKDMUnknownType0;

  private state = 0;

  public constructor(kdm: KDM) {
    super(kdm, IKDMUnknownType0);
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

  protected override _get(): IKDMUnknownType0 {
    return IKDMUnknownType0.parse(this.state);
  }

  protected override _set(state: IKDMUnknownType0): void {
    this.state = state;
  }

  protected override _build(buffer: WBuffer): void {
    buffer.setU32(this.state);
  }

  protected override _parse(buffer: RBuffer): void {
    this.state = buffer.getU32();
  }
}

export default KDMUnknownType0;
