import z from "zod";
import assert from "node:assert/strict";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import MapObjectData8 from "./mapobject-data8";
import KDMArray from "../common/array/kdm-array";

const CUSTOM_ORDER = [
  "mac_1_00",
  "mac_1_01",
  "mac_1_04",
  "mac_1_05",
  "mac_1_20",
  "mac_1_31",
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
    const all = this.data.entries.map((e) => {
      assert(e instanceof KDMGenericArrayPointer);
      assert(e.array.entries.every((e) => e instanceof MapObjectData8));

      return ({ pointer: e, array: e.array.entries });
    }).flat();

    const before = all.filter((o) => {
      const entry = o.array.at(0);
      assert(entry !== undefined);

      return CUSTOM_ORDER.includes(entry.unknown0.get() || "");
    }).sort((A, B) => {
      const a = A.array.at(0);
      const b = B.array.at(0);

      assert(a !== undefined);
      assert(b !== undefined);

      const x = a.unknown0.get() || "";
      const y = b.unknown0.get() || "";

      return CUSTOM_ORDER.indexOf(x) - CUSTOM_ORDER.indexOf(y); // 2fb0
    });

    const after = all.filter((o) => !before.includes(o));

    return [
      ...before.map((o) => o.array).flat().map((o) => o.unknown1.arrays).flat(),
      ...before.map((o) => o.array).flat().map((o) => o.unknown3.arrays).flat(),
      ...before.map((o) => o.array).flat().map((o) => o.unknown5.arrays).flat(),
      ...before.map((o) => o.array).flat().map((o) => o.unknown7.arrays).flat(),
      ...before.map((o) => o.array).flat().map((o) => o.unknown9.arrays).flat(),

      ...after.map((o) => o.array).flat().map((o) => o.unknown1.arrays).flat(),
      ...after.map((o) => o.array).flat().map((o) => o.unknown3.arrays).flat(),
      ...after.map((o) => o.array).flat().map((o) => o.unknown5.arrays).flat(),
      ...after.map((o) => o.array).flat().map((o) => o.unknown7.arrays).flat(),
      ...after.map((o) => o.array).flat().map((o) => o.unknown9.arrays).flat(),

      ...all.map((o) => o.pointer.array),
      this.data
    ];
  }

  public override get strings(): KDMStringPointer[] {
    const all = this.data.entries.map((e) => {
      assert(e instanceof KDMGenericArrayPointer);
      assert(e.array.entries.every((e) => e instanceof MapObjectData8));

      return e.array.entries;
    }).flat();

    const before = all.filter((o) => CUSTOM_ORDER.includes(o.unknown0.get() || ""));
    const after = all.filter((o) => !before.includes(o));

    return [
      ...before.map((o) => o.unknown1.strings).flat(),
      ...before.map((o) => o.unknown3.strings).flat(),
      ...before.map((o) => o.unknown5.strings).flat(),
      ...before.map((o) => o.unknown7.strings).flat(),
      ...before.map((o) => o.unknown9.strings).flat(),
      ...after.map((o) => o.unknown1.strings).flat(),
      ...after.map((o) => o.unknown3.strings).flat(),
      ...after.map((o) => o.unknown5.strings).flat(),
      ...after.map((o) => o.unknown7.strings).flat(),
      ...after.map((o) => o.unknown9.strings).flat(),
      ...all.map((o) => o.unknown0),
      this.name
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
