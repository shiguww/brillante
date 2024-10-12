import z from "zod";
import LucieMSG from "#/kdm/lucie/lucie-msg";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";

const ILucieMSGTbl = LucieMSG.schema.array().array();
type ILucieMSGTbl = z.infer<typeof ILucieMSGTbl>;

class LucieMSGTbl extends KDMTable<ILucieMSGTbl> {
  public static override readonly name = "lucieMsgTbl";

  public static readonly schema = ILucieMSGTbl;
  public override readonly schema = ILucieMSGTbl;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(false);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(LucieMSGTbl.name);

  public override get(): ILucieMSGTbl {
    return ILucieMSGTbl.parse(this.data.get());
  }

  public override set(data: ILucieMSGTbl): this {
    const mapdatatable = ILucieMSGTbl.parse(data);

    mapdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default LucieMSGTbl;
