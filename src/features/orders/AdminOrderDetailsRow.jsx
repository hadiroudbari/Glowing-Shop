import styled from "styled-components";

import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  font-family: "Urbanist";
`;

const TotalPrice = styled.div`
  font-family: "Urbanist";
  font-weight: 800;
`;

const Price = styled.div`
  font-family: "Urbanist";
  font-weight: 600;
`;

const Quantity = styled.div`
  font-family: "Urbanist";
  font-weight: 700;
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  height: 6.4rem;
  padding: 1rem;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

function AdminOrderDetailsRow({ product }) {
  const { name, price, quantity, discount, image } = product;

  return (
    <Table.Row>
      <Img src={image} />
      <Name>{name}</Name>
      <Price>{formatCurrency(price - discount)}</Price>
      <Quantity>{quantity}</Quantity>
      <TotalPrice>{formatCurrency((price - discount) * quantity)}</TotalPrice>
    </Table.Row>
  );
}

export default AdminOrderDetailsRow;
