import ShopListingTable from "../shop-listing-table";
import KDMStringPointer from "../../common/pointer/kdm-string-pointer";

class ShopTOWNTable extends ShopListingTable {
  public static override readonly name = "SHOP_TOWN";
  public override readonly name = new KDMStringPointer(this.kdm)
    .set(ShopTOWNTable.name);
}

export default ShopTOWNTable;
