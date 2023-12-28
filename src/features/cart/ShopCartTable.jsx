import styled from "styled-components";
import { useEffect } from "react";
import { MdClear } from "react-icons/md";

import { useCart } from "./useCart";
import { scrollToTop } from "../../utils/helpers";
import { useClearCart } from "./useDeleteCart";

import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CartRow from "./ShopCartRow";
import CartCheckout from "./ShopCartCheckout";

const ClearText = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-bottom: 1px solid var(--color-grey-900);
  font-weight: 700;
  transition: all 0.4s;

  &:hover {
    color: var(--color-brand-950);
    border-color: var(--color-brand-950);
  }
`;

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-grey-200);
`;

function CartTable() {
  const { cart } = useCart();
  const { clearCart } = useClearCart();

  useEffect(function () {
    scrollToTop();
  }, []);

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
      <ClearText onClick={clearCart}>
        <MdClear size={25} /> Clear Shopping Cart
      </ClearText>
      <BorderLine />
      <CartCheckout />
    </Menus>
  );
}

export default CartTable;
