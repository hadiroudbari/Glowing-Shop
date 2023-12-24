import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useCart } from "../cart/useCart";
import CartItem from "../cart/ShopCartItem";
import Row from "../../ui/Row";
import { formatCurrency } from "../../utils/helpers";

const Summary = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding: 4.6rem;
  box-shadow: var(--shadow-md);
  border-radius: 4px;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-grey-300);
`;

const CheckoutText = styled.p`
  font-weight: 700;
`;

const CheckoutPrice = styled.p`
  font-weight: 900;
  font-size: 2.4rem;
`;

function CheckoutSummary() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (acc, cur) => (acc += (cur.price - cur.discount) * cur.quantity),
    0
  );

  return (
    <Summary>
      <Heading as="h2">Order Summary</Heading>
      {cart?.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      <BorderLine />
      <Row type="horizontal">
        <CheckoutText>Total Price: </CheckoutText>
        <CheckoutPrice>{formatCurrency(totalPrice)}</CheckoutPrice>
      </Row>
    </Summary>
  );
}

export default CheckoutSummary;
