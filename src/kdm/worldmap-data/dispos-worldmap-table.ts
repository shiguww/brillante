import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import DisposWorldMap from "./dispos-worldmap";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";

const IDisposWorldMapTable = DisposWorldMap.schema.array().array();
type IDisposWorldMapTable = z.infer<typeof IDisposWorldMapTable>;

class DisposWorldMapTable extends KDMTable<IDisposWorldMapTable> {
  public static override readonly name = "disposWorldMapTable";

  public static readonly schema = IDisposWorldMapTable;
  public override readonly schema = IDisposWorldMapTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(DisposWorldMapTable.name);

  public override get(): IDisposWorldMapTable {
    return IDisposWorldMapTable.parse(this.data.get());
  }

  public override set(data: IDisposWorldMapTable): this {
    const disposworldmaptable = IDisposWorldMapTable.parse(data);

    disposworldmaptable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default DisposWorldMapTable;
