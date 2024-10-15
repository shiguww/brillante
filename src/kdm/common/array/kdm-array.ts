import z from "zod";
import KDMEntity from "#/kdm/common/kdm-entity";
import KDMU16 from "#/kdm/common/primitive/kdm-u16";

abstract class KDMArray<T = unknown> extends KDMEntity<IKDMArray<T>> {
  public static readonly HEADING_SIZE = 8;

  public static get baseschema(): typeof IKDMArray {
    return IKDMArray;
  }

  public nullTerminatorFlag = false;
  public refkey = this.kdm.generateID();
  public entries: Array<KDMEntity<T>> = [];

  public readonly tid = new KDMU16(this.kdm);
  public readonly uid = new KDMU16(this.kdm);
  public readonly size0 = new KDMU16(this.kdm);
  public readonly size1 = new KDMU16(this.kdm);

  public override get arrays(): Array<KDMArray> {
    return [
      ...this.entries.map((e) => e.arrays).flat(),
      this
    ];
  }

  public hasNULLTerminator(): this {
    this.nullTerminatorFlag = true;
    return this;
  }
}

const IKDMArray = <T>(element: z.ZodType<T, any, any>) => z.object({
  _metadata: z.object({
    refkey: z.string(),
    constructor: z.string()
  }),
  entries: element.array()
});

interface IKDMArray<T = unknown> {
  _metadata: {
    refkey: string;
    constructor: string;
  };
  entries: Array<T>;
}

export default KDMArray;
