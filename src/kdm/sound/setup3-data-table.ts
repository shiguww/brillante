import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import Setup3Data from "./setup3-data";

const ISetup3DataTable = Setup3Data.schema.array().array();
type ISetup3DataTable = z.infer<typeof ISetup3DataTable>;

class Setup3DataTable extends KDMTable<ISetup3DataTable> {
  public static override readonly name = "setup3DDataTable";

  public static readonly schema = ISetup3DataTable;
  public override readonly schema = ISetup3DataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(Setup3DataTable.name);

  public override get(): ISetup3DataTable {
    return ISetup3DataTable.parse(this.data.get());
  }

  public override set(data: ISetup3DataTable): this {
    const setup3datatable = ISetup3DataTable.parse(data);

    setup3datatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default Setup3DataTable;
