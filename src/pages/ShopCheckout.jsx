import styled from "styled-components";

import Header from "../ui/Header/Header";
import HeaderNav from "../ui/Header/HeaderNav";
import HeaderTitle from "../ui/Header/HeaderTitle";
import CheckoutForm from "../features/checkout/ShopCheckoutForm";
import CheckoutSummary from "../features/checkout/ShopCheckoutSummary";

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 15rem 10rem;
  gap: 4.8rem;
`;

const CheckoutBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6.4rem;
`;

function Checkout() {
  return (
    <>
      <Header type="shop">
        <HeaderNav current="Checkout" currentLink="checkout" />
        <HeaderTitle>Check Out</HeaderTitle>
      </Header>

      <CheckoutContainer>
        <CheckoutBox>
          <CheckoutForm />
          <CheckoutSummary />
        </CheckoutBox>
      </CheckoutContainer>
    </>
  );
}

export default Checkout;
