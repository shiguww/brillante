import z from "zod";
import KDMF32 from "#kdm/common/kdm-f32";
import KDMStructure from "#kdm/common/kdm-structure";

const IKDMF32Array = KDMF32.schema.array();
type IKDMF32Array = z.infer<typeof IKDMF32Array>;

class KDMF32Array extends KDMStructure {
  public static readonly HEADING_SIZE = 8;
  public static readonly schema = IKDMF32Array;

  public entries: KDMF32[] = [];
  private nullTerminatorFlag: boolean = false;
  public override readonly schema = IKDMF32Array;

}
