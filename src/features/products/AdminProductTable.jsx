import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import AdminProductRow from "./AdminProductRow";

function AdminProductTable() {
  return (
    <Menus>
      <Table columns="0.6fr 2.2fr 1.5fr 1fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Product</div>
          <div>Category</div>
          <div>Price</div>
          <div>Stock</div>
          <div>Discount</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={[
            {
              id: 1,
              name: "Hadi",
            },
            {
              id: 2,
              name: "Hadi",
            },
            {
              id: 3,
              name: "Hadi",
            },
            {
              id: 4,
              name: "Hadi",
            },
          ]}
          render={(product) => (
            <AdminProductRow product={product} key={product.id} />
          )}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default AdminProductTable;
