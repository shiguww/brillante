import z from "zod";
import DisposData21 from "./dispos-data21";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";

const IAllDisposDataTbl = DisposData21.schema.array().array();
type IAllDisposDataTbl = z.infer<typeof IAllDisposDataTbl>;

class AllDisposDataTbl extends KDMTable<IAllDisposDataTbl> {
  public static override readonly name = "all_disposDataTbl";

  public static readonly schema = IAllDisposDataTbl;
  public override readonly schema = IAllDisposDataTbl;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(AllDisposDataTbl.name);

  public override get(): IAllDisposDataTbl {
    return IAllDisposDataTbl.parse(this.data.get());
  }

  public override set(data: IAllDisposDataTbl): this {
    const mapdatatable = IAllDisposDataTbl.parse(data);

    mapdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default AllDisposDataTbl;
