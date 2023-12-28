import styled from "styled-components";

import Row from "../../ui/Row";
import FlexRow from "../../ui/FlexRow";
import { formatCurrency } from "../../utils/helpers";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  height: 6.4rem;
  padding: 1rem;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5);
`;

const Product = styled.div`
  width: 15rem;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Urbanist";

  & p {
    font-size: 1.4rem;
    color: var(--color-grey-600);
  }
`;

const Price = styled.div`
  font-size: 1.6rem;
  font-family: "Urbanist";
  font-weight: 900;
`;

function CartItem({ item }) {
  const { image, name, price, discount, quantity } = item;

  return (
    <Row type="horizontal">
      <FlexRow gap="1.6">
        <Img src={image} />
        <Product>
          {name} <p>Qty : {quantity}</p>
        </Product>
      </FlexRow>
      <Price>{formatCurrency((price - discount) * quantity)}</Price>
    </Row>
  );
}

export default CartItem;
