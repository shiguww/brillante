import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import GroupData from "./group-data";

const IGroupDataTable = GroupData.schema.array().array();
type IGroupDataTable = z.infer<typeof IGroupDataTable>;

class GroupDataTable extends KDMTable<IGroupDataTable> {
  public static override readonly name = "groupDataTable";

  public static readonly schema = IGroupDataTable;
  public override readonly schema = IGroupDataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(GroupDataTable.name);

  public override get(): IGroupDataTable {
    return IGroupDataTable.parse(this.data.get());
  }

  public override set(data: IGroupDataTable): this {
    const groupdatatable = IGroupDataTable.parse(data);

    groupdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default GroupDataTable;
