import ShopListingTable from "../shop-listing-table";
import KDMStringPointer from "../../common/pointer/kdm-string-pointer";

class ShopSNOWTable extends ShopListingTable {
  public static override readonly name = "SHOP_SNOW";
  public override readonly name = new KDMStringPointer(this.kdm)
    .set(ShopSNOWTable.name);
}

export default ShopSNOWTable;
