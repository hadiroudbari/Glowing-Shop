import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";
import AdminOrderRow from "./AdminOrderRow";
import { useOrders } from "./useOrders";

function AdminOrderTable() {
  const { orders, isLoading, count } = useOrders();

  if (isLoading) return <Spinner />;
  if (!orders?.length) return <Empty resourceName="orders" />;

  return (
    <Menus>
      <Table columns="1.5fr 2fr 2fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>ID</div>
          <div>Name</div>
          <div>Email</div>
          <div>Total</div>
          <div>Status</div>
          <div>Date</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={orders}
          render={(order) => <AdminOrderRow order={order} key={order.id} />}
        ></Table.Body>
      </Table>
      <Pagination count={count} />
    </Menus>
  );
}

export default AdminOrderTable;
