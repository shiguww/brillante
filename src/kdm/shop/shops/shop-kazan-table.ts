import ShopListingTable from "../shop-listing-table";
import KDMStringPointer from "../../common/pointer/kdm-string-pointer";

class ShopKAZANTable extends ShopListingTable {
  public static override readonly name = "SHOP_KAZAN";
  public override readonly name = new KDMStringPointer(this.kdm)
    .set(ShopKAZANTable.name);
}

export default ShopKAZANTable;
