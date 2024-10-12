import z from "zod";
import ShopListing from "./shop-listing";
import KDMTable from "#/kdm/common/kdm-table";
import KDMGenericArray from "#/kdm/common/array/kdm-generic-array";
import KDMGenericArrayPointer from "#/kdm/common/pointer/kdm-generic-array-pointer";

const IShopListingTable = ShopListing.schema.array().array();
type IShopListingTable = z.infer<typeof IShopListingTable>;

abstract class ShopListingTable extends KDMTable<IShopListingTable> {
  public static readonly schema = IShopListingTable;
  public override readonly schema = IShopListingTable;

  public override readonly data = new KDMGenericArray(this.kdm)
    .useNullTerminator(true);

  public override get(): IShopListingTable {
    return IShopListingTable.parse(this.data.get());
  }

  public override set(data: IShopListingTable): this {
    const shoplistingtable = IShopListingTable.parse(data);

    shoplistingtable.forEach((entry) => this.data.entries.push(
      new KDMGenericArrayPointer(this.kdm).set(entry)
    ));

    return this;
  }

  protected override sort(): void {
  }
}

export default ShopListingTable;
