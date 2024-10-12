import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import SecretSealData from "./secret-seal-data";

const ISecretSealDataTable = SecretSealData.schema.array().array();
type ISecretSealDataTable = z.infer<typeof ISecretSealDataTable>;

class SecretSealDataTable extends KDMTable<ISecretSealDataTable> {
  public static override readonly name = "secretSealDataTable";

  public static readonly schema = ISecretSealDataTable;
  public override readonly schema = ISecretSealDataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(false);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(SecretSealDataTable.name);

  public override get(): ISecretSealDataTable {
    return ISecretSealDataTable.parse(this.data.get());
  }

  public override set(data: ISecretSealDataTable): this {
    const secretsealdatatable = ISecretSealDataTable.parse(data);

    secretsealdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default SecretSealDataTable;
