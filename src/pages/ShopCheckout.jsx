import styled from "styled-components";

import Header from "../ui/Header/Header";
import HeaderNav from "../ui/Header/HeaderNav";
import HeaderTitle from "../ui/Header/HeaderTitle";
import Row from "../ui/Row";
import CheckoutForm from "../features/checkout/ShopCheckoutForm";
import CheckoutSummary from "../features/checkout/ShopCheckoutSummary";

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 15rem 10rem;
  gap: 4.8rem;
`;

function Checkout() {
  return (
    <>
      <Header type="shop">
        <HeaderNav current="Checkout" currentLink="checkout" />
        <HeaderTitle>Check Out</HeaderTitle>
      </Header>

      <CheckoutContainer>
        <Row type="horizontal">
          <CheckoutForm />
          <CheckoutSummary />
        </Row>
      </CheckoutContainer>
    </>
  );
}

export default Checkout;
