import styled from "styled-components";
import { HiPencil, HiTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateProductForm from "./AdminCreateProductForm";

const Img = styled.img`
  display: block;
  width: 6.4rem;
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
  font-family: "Urbanist";
  font-weight: 800;
`;

const Stock = styled.div`
  font-family: "Urbanist";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Urbanist";
  font-weight: 800;
  color: var(--color-brand-900);
`;

function AdminProductRow() {
  const discount = 15;

  return (
    <Table.Row>
      <Img src="../images/Products/product-01-330x440.jpg" />
      <Product>Flowers cotton dress</Product>
      <div>BodySplash</div>
      <Price>{formatCurrency("23")}</Price>
      <Stock>50</Stock>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>Active</div>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={1} />

            <Menus.List id={1}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateProductForm cabinToEdit="" />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete resourceName="cabins" />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default AdminProductRow;
