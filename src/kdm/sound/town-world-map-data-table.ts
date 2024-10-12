import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import TownWorldMapData from "./town-world-map-data";

const ITownWorldMapDataTable = TownWorldMapData.schema.array().array();
type ITownWorldMapDataTable = z.infer<typeof ITownWorldMapDataTable>;

class TownWorldMapDataTable extends KDMTable<ITownWorldMapDataTable> {
  public static override readonly name = "townWorldMapDataTable";

  public static readonly schema = ITownWorldMapDataTable;
  public override readonly schema = ITownWorldMapDataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(TownWorldMapDataTable.name);

  public override get(): ITownWorldMapDataTable {
    return ITownWorldMapDataTable.parse(this.data.get());
  }

  public override set(data: ITownWorldMapDataTable): this {
    const townworldmapdatatable = ITownWorldMapDataTable.parse(data);

    townworldmapdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default TownWorldMapDataTable;
