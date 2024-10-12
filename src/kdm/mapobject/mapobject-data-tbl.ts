import z from "zod";
import assert from "node:assert/strict";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import MapObjectData8 from "./mapobject-data8";

const IMapObjectDataTbl = MapObjectData8.schema.array().array();
type IMapObjectDataTbl = z.infer<typeof IMapObjectDataTbl>;

class MapObjectDataTbl extends KDMTable<IMapObjectDataTbl> {
  public static override readonly name = "map_object_data_tbl";

  public static readonly schema = IMapObjectDataTbl;
  public override readonly schema = IMapObjectDataTbl;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(false);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(MapObjectDataTbl.name);

  public override get(): IMapObjectDataTbl {
    return IMapObjectDataTbl.parse(this.data.get());
  }

  public override set(data: IMapObjectDataTbl): this {
    const linkdatatable = IMapObjectDataTbl.parse(data);

    linkdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default MapObjectDataTbl;
