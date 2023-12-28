import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useCart } from "./useCart";
import { formatCurrency } from "../../utils/helpers";

import Row from "../../ui/Row";
import Button from "../../ui/Button";

const Checkout = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding: 2.4rem;
  box-shadow: var(--shadow-md);
  border-radius: 4px;
`;

const CheckoutText = styled.p`
  font-weight: 700;
`;

const CheckoutPrice = styled.p`
  font-weight: 900;
  font-size: 2.4rem;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-grey-300);
`;

function CartCheckout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, cur) => (acc += (cur.price - cur.discount) * cur.quantity),
    0
  );

  return (
    <Checkout>
      <Row type="horizontal">
        <CheckoutText>Total Price: </CheckoutText>
        <CheckoutPrice>{formatCurrency(totalPrice)}</CheckoutPrice>
      </Row>
      <BorderLine />
      <Button onClick={() => navigate("/checkout")}>Check Out</Button>
    </Checkout>
  );
}

export default CartCheckout;
