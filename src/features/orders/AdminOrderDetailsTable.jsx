import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import AdminOrderDetailsRow from "./AdminOrderDetailsRow";

function AdminOrderDetailsTable({ products }) {
  if (!products?.length) return <Empty resourceName="orders" />;

  return (
    <Menus>
      <Table columns="1fr 3fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </Table.Header>

        <Table.Body
          data={products}
          render={(product) => (
            <AdminOrderDetailsRow product={product} key={product.id} />
          )}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default AdminOrderDetailsTable;
