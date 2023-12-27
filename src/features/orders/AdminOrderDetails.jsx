import styled from "styled-components";

import { useUpdateOrder } from "./useUpdateOrder";
import AdminOrderDetailsTable from "./AdminOrderDetailsTable";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledDetails = styled.div`
  min-width: 50rem;
  max-height: 50rem;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  gap: 1.6rem;
  padding: 4.8rem;
`;

const TableBox = styled.div`
  height: fit-content;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin-bottom: 3.2rem;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;

  gap: 4.8rem;
`;

const CenterBtn = styled.div`
  display: flex;
  justify-content: center;
`;

function AdminOrderDetails({ order }) {
  const { updateOrder, isUpdating } = useUpdateOrder();

  const {
    id,
    firstName,
    lastName,
    address,
    phone,
    created_at,
    arrived_at,
    products,
    status,
  } = order;

  function handleUpdate() {
    delete order.customers;
    const newOrder = { ...order, status: "received" };

    updateOrder({ order: newOrder, id });
  }

  return (
    <StyledDetails>
      <List>
        <Item gap="12">
          <p>Name : </p>
          <p>
            {firstName} {lastName}
          </p>
        </Item>
        <Item gap="12">
          <p>Address : </p>
          <p>{address}</p>
        </Item>
        <Item gap="12">
          <p>Phone : </p>
          <p>{phone}</p>
        </Item>
        <Item gap="12">
          <p>Order Date : </p>
          <p>{created_at.split("T")[0]}</p>
        </Item>
        <Item gap="12">
          <p>Order Arrive : </p>
          <p>{arrived_at?.split("T")[0]}</p>
        </Item>
      </List>

      <TableBox>
        <AdminOrderDetailsTable products={JSON.parse(products)} />
      </TableBox>

      {status === "pending" ? (
        <CenterBtn>
          <Button onClick={handleUpdate} disabled={isUpdating}>
            {!isUpdating ? "Mark as Recieved" : <SpinnerMini />}
          </Button>
        </CenterBtn>
      ) : (
        <CenterBtn>
          <List>
            <Item gap="12">
              <p>Arrived At : </p>
              <p>{arrived_at?.split("T")[0]}</p>
            </Item>
          </List>
        </CenterBtn>
      )}
    </StyledDetails>
  );
}

export default AdminOrderDetails;
