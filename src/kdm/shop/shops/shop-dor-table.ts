import ShopListingTable from "../shop-listing-table";
import KDMStringPointer from "../../common/pointer/kdm-string-pointer";

class ShopDORTable extends ShopListingTable {
  public static override readonly name = "SHOP_DOR";
  public override readonly name = new KDMStringPointer(this.kdm)
    .set(ShopDORTable.name);
}

export default ShopDORTable;
