import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import ChangeBGMData from "./change-bgm-data";

const IChangeBGMDataTable = ChangeBGMData.schema.array().array();
type IChangeBGMDataTable = z.infer<typeof IChangeBGMDataTable>;

class ChangeBGMDataTable extends KDMTable<IChangeBGMDataTable> {
  public static override readonly name = "changeBGMDataTable";

  public static readonly schema = IChangeBGMDataTable;
  public override readonly schema = IChangeBGMDataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(ChangeBGMDataTable.name);

  public override get(): IChangeBGMDataTable {
    return IChangeBGMDataTable.parse(this.data.get());
  }

  public override set(data: IChangeBGMDataTable): this {
    const changebgmdatatable = IChangeBGMDataTable.parse(data);

    changebgmdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default ChangeBGMDataTable;
