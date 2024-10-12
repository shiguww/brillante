import z from "zod";
import assert from "node:assert/strict";
import KDMTable from "#/kdm/common/kdm-table";
import LinkData from "#/kdm/link-data/link-data";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMStringPointer from "#/kdm/common/pointer/kdm-string-pointer";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";

const ILinkDataAll = LinkData.schema.array().array();
type ILinkDataAll = z.infer<typeof ILinkDataAll>;

class LinkDataAll extends KDMTable<ILinkDataAll> {
  public static override readonly name = "link_data_all";

  public static readonly schema = ILinkDataAll;
  public override readonly schema = ILinkDataAll;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(false);

  public override readonly name = new KDMStringPointer(this.kdm)
    .set(LinkDataAll.name);

  public override get(): ILinkDataAll {
    return ILinkDataAll.parse(this.data.get());
  }

  public override set(data: ILinkDataAll): this {
    const linkdatatable = ILinkDataAll.parse(data);

    linkdatatable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
    this.data.entries.sort((A, B) => {
      assert(A instanceof KDMGenericArrayPointer);
      assert(A.array.entries.every((e) => e instanceof LinkData));

      assert(B instanceof KDMGenericArrayPointer);
      assert(B.array.entries.every((e) => e instanceof LinkData));

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

export default LinkDataAll;
