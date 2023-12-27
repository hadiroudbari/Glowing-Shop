import styled from "styled-components";
import { HiEye, HiTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";
import { useDeleteOrder } from "./useDeleteOrder";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import AdminOrderDetails from "./AdminOrderDetails";

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  font-family: "Urbanist";
  text-transform: capitalize;
`;

const Email = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Urbanist";
`;

const TotalPrice = styled.div`
  font-family: "Urbanist";
  font-weight: 800;
`;

const Date = styled.div`
  font-family: "Urbanist";
  font-weight: 600;
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
    props.status === "received" && "var(--color-indigo-700);"};
  background-color: ${(props) =>
    props.status === "pending" && "var(--color-yellow-700);"};
  background-color: ${(props) =>
    props.status === "cancel" && "var(--color-red-600);"};
`;

const StyledId = styled.div`
  font-weight: 900;
`;

function AdminOrderRow({ order }) {
  const { deleteOrder, isDeleting } = useDeleteOrder();

  let firstName, lastName, email;
  if (order.customers) ({ firstName, lastName, email } = order.customers);
  else ({ firstName, lastName, email } = order);

  const { id, status, created_at: date, totalPrice, orderId } = order;

  const formatedDate = date.split("T")[0].split("-").join(".");
  const formatedOrderId = orderId.split("-")[0];

  return (
    <Table.Row>
      <StyledId>{"#" + formatedOrderId}</StyledId>
      <Name>
        {firstName} {lastName}
      </Name>
      <Email>{email}</Email>
      <TotalPrice>{formatCurrency(totalPrice)}</TotalPrice>
      <Status status={status}>{status}</Status>
      <Date>{formatedDate}</Date>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={id} />

            <Menus.List id={id}>
              <Modal.Open opens="details">
                <Menus.Button icon={<HiEye />}>View Details</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />} disabled={isDeleting}>
                  Delete
                </Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="details">
              <AdminOrderDetails order={order} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="order"
                onConfirm={() => deleteOrder(id)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default AdminOrderRow;
