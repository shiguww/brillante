import z from "zod";
import type KDM from "#/kdm/kdm";
import WBuffer from "#/buffer/w-buffer";
import type RBuffer from "#/buffer/r-buffer";
import KDMString from "#/kdm/common/primitive/kdm-string";
import KDMEntity from "#/kdm/common/kdm-entity";

const IKDMStringPointer = KDMString.schema;
type IKDMStringPointer = z.infer<typeof IKDMStringPointer>;

class KDMStringPointer extends KDMEntity<IKDMStringPointer> {
  public static readonly schema = IKDMStringPointer;
  private state = "";

  public constructor(kdm: KDM) {
    super(kdm, IKDMStringPointer);
  }

  public get string(): string {
    return this.state;
  }

  private set string(string: string) {
    this.state = string;
  }

  public override get strings(): Array<KDMStringPointer> {
    return [this];
  }

  public override get sizeof(): number {
    return WBuffer.U32_SIZE;
  }

  protected override _get(): IKDMStringPointer {
    return IKDMStringPointer.parse(this.string);
  }

  protected override _set(data: IKDMStringPointer): void {
    this.string = data || "";
  }

  protected override _build(buffer: WBuffer): void {
    const pointer = this.kdm.strings.find((s) => s.string === this.string)?.offset;
    buffer.setU32(pointer || 0);
  }

  protected override _parse(buffer: RBuffer): void {
    const pointer = buffer.getU32();
    this.string = this.kdm.strings.find((s) => s.offset === pointer)?.string || "";
  }
}

export default KDMStringPointer;
