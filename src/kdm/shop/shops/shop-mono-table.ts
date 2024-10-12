import ShopListingTable from "../shop-listing-table";
import KDMStringPointer from "../../common/pointer/kdm-string-pointer";

class ShopMONOTable extends ShopListingTable {
  public static override readonly name = "SHOP_MONO";
  public override readonly name = new KDMStringPointer(this.kdm)
    .set(ShopMONOTable.name);
}

export default ShopMONOTable;
