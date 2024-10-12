import ShopListingTable from "../shop-listing-table";
import KDMStringPointer from "../../common/pointer/kdm-string-pointer";

class ShopKOOPATable extends ShopListingTable {
  public static override readonly name = "SHOP_KOOPA";
  
  public override readonly name = new KDMStringPointer(this.kdm)
    .set(ShopKOOPATable.name);
}

export default ShopKOOPATable;
