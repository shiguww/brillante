import z from "zod";
import assert from "node:assert/strict";
import MapData from "#/kdm/mapdata/mapdata";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";

const IMapDataTable = MapData.schema.array().array();
type IMapDataTable = z.infer<typeof IMapDataTable>;

class MapDataTable extends KDMTable<IMapDataTable> {
  public static override readonly name = "mapDataTable";

  public static readonly schema = IMapDataTable;
  public override readonly schema = IMapDataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(MapDataTable.name);

  public override get(): IMapDataTable {
    return IMapDataTable.parse(this.data.get());
  }

  public override set(data: IMapDataTable): this {
    const mapdatatable = IMapDataTable.parse(data);

    mapdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
    this.data.entries.sort((A, B) => {
      assert(A instanceof KDMGenericArrayPointer);
      assert(A.array.entries.every((e) => e instanceof MapData));

      assert(B instanceof KDMGenericArrayPointer);
      assert(B.array.entries.every((e) => e instanceof MapData));

      const a = A.array.entries.at(0)!;
      const b = B.array.entries.at(0)!;

      const x = a.name.get() || "";
      const y = b.name.get() || "";

      if (x > y) return 1;
      if (x < y) return -1;

      return 0;
    });
  }
}

export default MapDataTable;
