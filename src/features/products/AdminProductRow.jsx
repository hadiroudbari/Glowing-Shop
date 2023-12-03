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

const Status = styled.div`
  font-family: "Urbanist";
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;

  width: fit-content;
  text-align: center;
  padding: 0.5rem 1.4rem;

  border-radius: 5rem;
  color: var(--color-grey-0);
  background-color: ${(props) =>
    props.status === "active" && "var(--color-brand-900);"};
  background-color: ${(props) =>
    props.status === "archived" && "var(--color-yellow-700);"};
  background-color: ${(props) =>
    props.status === "disabled" && "var(--color-red-800);"};
`;

function AdminProductRow({ product }) {
  return (
    <Table.Row>
      <Img src={product.pictures.images[0]} />
      <Product>{product.name}</Product>
      <div>{product.categories.name}</div>
      <Price>{formatCurrency(product.price)}</Price>
      <Stock>{product.stock}</Stock>
      {product.discount ? (
        <Discount>{formatCurrency(product.discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <Status status={product.status}>{product.status}</Status>
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
