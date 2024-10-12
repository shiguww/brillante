import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import LockData from "./lock-data";
import MuseumLockData from "./museum/museum-lock-data";

const ILockDataTable = z.union([
  LockData.schema.array().array(),
  MuseumLockData.schema.array().array()
]);

type ILockDataTable = z.infer<typeof ILockDataTable>;

class LockDataTable extends KDMTable<ILockDataTable> {
  public static override readonly name = "lockDataTable";

  public static readonly schema = ILockDataTable;
  public override readonly schema = ILockDataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(LockDataTable.name);

  public override get(): ILockDataTable {
    return ILockDataTable.parse(this.data.get());
  }

  public override set(data: ILockDataTable): this {
    const lockdatatable = ILockDataTable.parse(data);

    lockdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default LockDataTable;
