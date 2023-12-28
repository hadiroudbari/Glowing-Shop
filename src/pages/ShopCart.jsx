import styled from "styled-components";

import CartTable from "../features/cart/ShopCartTable";
import Header from "../ui/Header/Header";
import HeaderNav from "../ui/Header/HeaderNav";
import HeaderTitle from "../ui/Header/HeaderTitle";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 15rem 10rem;
  gap: 4.8rem;
`;

function Cart() {
  return (
    <>
      <Header type="shop">
        <HeaderNav current="Shopping Cart" currentLink="cart" />
        <HeaderTitle>Shopping Cart</HeaderTitle>
      </Header>

      <CartContainer>
        <CartTable />
      </CartContainer>
    </>
  );
}

export default Cart;
