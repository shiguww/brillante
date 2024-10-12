import z from "zod";
import assert from "node:assert/strict";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import MapObjectData8 from "./mapobject-data8";
import KDMArray from "../common/array/kdm-array";

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

  public override get arrays(): KDMArray[] {
    const ORDER = [
      "mac_1_00",
      "mac_1_01",
      "mac_1_04",
      "mac_1_05",
      "mac_1_20",
      "mac_m_00",
      "mac_2_00",
      "mac_2_02",
      "mac_2_22",
      "hei_5_01",
      "hei_5_02",
      "hei_5_03",
      "hei_5_04",
      "hei_5_06",
      "hei_5_11",
      "hei_3_02",
      "hei_3_03",
      "hei_3_05",
      "hei_2_00",
      "hei_2_01",
      "hei_2_02",
      "hei_2_04",
      "hei_4_00",
      "hei_4_01",
      "hei_4_02",
      "hei_4_03",
      "hei_4_04",
      "iwa_4_02"
    ];

    const pointers = this.data.entries.map((e) => {
      assert(e instanceof KDMGenericArrayPointer);
      return e;
    });

    const all = pointers.map((e) => {
      assert(e.array.entries.every((e) => e instanceof MapObjectData8));
      return e.array.entries;
    }).flat();

    const before = all.filter((o) => ORDER.includes(o.unknown0.get() || ""));
    const rest = all.filter((o) => !before.includes(o));

    before.sort((A, B) => {
      const a = A.unknown0.get() || "";
      const b = B.unknown0.get() || "";

      return ORDER.indexOf(a) - ORDER.indexOf(b);
    });

    return [
      ...before.map((o) => o.unknown1.arrays).flat(),
      ...before.map((o) => o.unknown3.arrays).flat(),
      ...before.map((o) => o.unknown5.arrays).flat(),
      ...before.map((o) => o.unknown7.arrays).flat(),
      ...before.map((o) => o.unknown9.arrays).flat(),
      ...rest.map((o) => o.unknown1.arrays).flat(),
      ...rest.map((o) => o.unknown3.arrays).flat(),
      ...rest.map((o) => o.unknown5.arrays).flat(),
      ...rest.map((o) => o.unknown7.arrays).flat(),
      ...rest.map((o) => o.unknown9.arrays).flat(),
      ...pointers.map((p) => p.array).flat(),
      this.data
    ];
  }

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
