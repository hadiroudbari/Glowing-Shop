import AdminOrderTable from "../features/orders/AdminOrderTable";
import AdminOrderTableOperations from "../features/orders/AdminOrderTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AdminOrders() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Orders</Heading>
        <AdminOrderTableOperations />
      </Row>

      <Row>
        <AdminOrderTable />
      </Row>
    </>
  );
}

export default AdminOrders;
