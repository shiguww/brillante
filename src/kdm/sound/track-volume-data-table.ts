import z from "zod";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";
import TrackVolumeData from "./track-volume-data";

const ITrackVolumeDataTable = TrackVolumeData.schema.array().array();
type ITrackVolumeDataTable = z.infer<typeof ITrackVolumeDataTable>;

class TrackVolumeDataTable extends KDMTable<ITrackVolumeDataTable> {
  public static override readonly name = "trackVolumeDataTable";

  public static readonly schema = ITrackVolumeDataTable;
  public override readonly schema = ITrackVolumeDataTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(TrackVolumeDataTable.name);

  public override get(): ITrackVolumeDataTable {
    return ITrackVolumeDataTable.parse(this.data.get());
  }

  public override set(data: ITrackVolumeDataTable): this {
    const trackvolumedatatable = ITrackVolumeDataTable.parse(data);

    trackvolumedatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default TrackVolumeDataTable;
