import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CartRow from "./ShopCartRow";
import { useCart } from "./useCart";

function CartTable() {
  const { cart } = useCart();

  if (!cart?.length) return <Empty resourceName="cart" />;

  return (
    <Menus>
      <Table columns="1fr 3fr 2fr 2fr 1.5fr 1fr 0.5fr">
        <Table.Header>
          <div></div>
          <div>Products</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Total Price</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={cart}
          render={(item) => <CartRow item={item} key={item.id} />}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default CartTable;
