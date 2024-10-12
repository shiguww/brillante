import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import SecretData from "./secret-data";

const ISecretDataTable = SecretData.schema.array().array();
type ISecretDataTable = z.infer<typeof ISecretDataTable>;

class SecretDataTable extends KDMTable<ISecretDataTable> {
  public static override readonly name = "secretDataTable";

  public static readonly schema = ISecretDataTable;
  public override readonly schema = ISecretDataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(SecretDataTable.name);

  public override get(): ISecretDataTable {
    return ISecretDataTable.parse(this.data.get());
  }

  public override set(data: ISecretDataTable): this {
    const secretdatatable = ISecretDataTable.parse(data);

    secretdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default SecretDataTable;
