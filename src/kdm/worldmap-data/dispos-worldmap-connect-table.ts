import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import DisposWorldMapConnect from "./dispos-worldmap-connect";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";

const IDisposWorldMapConnectTable = DisposWorldMapConnect.schema.array().array();
type IDisposWorldMapConnectTable = z.infer<typeof IDisposWorldMapConnectTable>;

class DisposWorldMapConnectTable extends KDMTable<IDisposWorldMapConnectTable> {
  public static override readonly name = "disposWorldMapConnectTable";

  public static readonly schema = IDisposWorldMapConnectTable;
  public override readonly schema = IDisposWorldMapConnectTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(DisposWorldMapConnectTable.name);

  public override get(): IDisposWorldMapConnectTable {
    return IDisposWorldMapConnectTable.parse(this.data.get());
  }

  public override set(data: IDisposWorldMapConnectTable): this {
    const disposworldmapconnecttable = IDisposWorldMapConnectTable.parse(data);

    disposworldmapconnecttable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default DisposWorldMapConnectTable;
