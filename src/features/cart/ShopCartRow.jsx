import styled from "styled-components";
import { useEffect, useState } from "react";
import { HiTrash } from "react-icons/hi";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Quantity from "../../ui/Quantity";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Button from "../../ui/Button";
import FlexRow from "../../ui/FlexRow";

import { formatCurrency } from "../../utils/helpers";
import { useDeleteCart } from "./useDeleteCart";
import { useUpdateCart } from "./useUpdateCart";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  height: 6.4rem;
  padding: 1rem;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Product = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Urbanist";
`;

const Price = styled.div`
  font-size: 1.6rem;
  font-family: "Urbanist";
  font-weight: 900;
`;

const PriceDiscount = styled.p`
  font-size: 1.2rem;
  text-decoration: line-through;
  color: var(--color-grey-500);
`;

const TotalPrice = styled.div`
  font-size: 1.6rem;
  font-family: "Urbanist";
  font-weight: 900;
`;

function CartRow({ item }) {
  const { id: cartId, image, name, price, discount, stock, quantity } = item;
  const [count, setCount] = useState(quantity);

  console.log(count);

  const { deleteCart } = useDeleteCart();
  const { updateCart } = useUpdateCart();

  useEffect(
    function () {
      updateCart({ cartId, count });
    },
    [count, cartId, updateCart]
  );

  return (
    <Table.Row>
      <Img src={image} />
      <Product>{name}</Product>

      <Quantity maxCount={stock} onCount={setCount} quantity={quantity} />

      <FlexRow>
        {discount ? <PriceDiscount>{formatCurrency(price)}</PriceDiscount> : ""}
        <Price>{formatCurrency(price - discount)}</Price>
      </FlexRow>

      <TotalPrice>{formatCurrency((price - discount) * quantity)}</TotalPrice>

      <div>
        <Modal>
          <Modal.Open opens="delete">
            <Button bg="dark" size="small">
              <HiTrash />
            </Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="cart"
              onConfirm={() => deleteCart(cartId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CartRow;
