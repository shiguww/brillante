import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import EffectData from "./effect-data";

const IEffectDataTable = EffectData.schema.array().array();
type IEffectDataTable = z.infer<typeof IEffectDataTable>;

class EffectDataTable extends KDMTable<IEffectDataTable> {
  public static override readonly name = "effectDataTable";

  public static readonly schema = IEffectDataTable;
  public override readonly schema = IEffectDataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(EffectDataTable.name);

  public override get(): IEffectDataTable {
    return IEffectDataTable.parse(this.data.get());
  }

  public override set(data: IEffectDataTable): this {
    const effectdatatable = IEffectDataTable.parse(data);

    effectdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default EffectDataTable;
