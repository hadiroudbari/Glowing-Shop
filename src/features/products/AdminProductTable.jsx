import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import AdminProductRow from "./AdminProductRow";
import { useProducts } from "./useProducts";

function AdminProductTable() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Spinner />;
  if (!products?.length) return <Empty resourceName="products" />;

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
          data={products}
          render={(product) => (
            <AdminProductRow product={product} key={product.id} />
          )}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default AdminProductTable;
