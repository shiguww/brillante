import ShopListingTable from "../shop-listing-table";
import KDMStringPointer from "../../common/pointer/kdm-string-pointer";

class ShopIWATable extends ShopListingTable {
  public static override readonly name = "SHOP_IWA";
  public override readonly name = new KDMStringPointer(this.kdm)
    .set(ShopIWATable.name);
}

export default ShopIWATable;
