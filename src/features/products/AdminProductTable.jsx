import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import AdminProductRow from "./AdminProductRow";
import { useProducts } from "./useProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function AdminProductTable() {
  const { products, isLoading, count } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page");
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (currentPage > pageCount) {
    searchParams.set("page", currentPage - 1);
    setSearchParams(searchParams);
  }

  if (isLoading) return <Spinner />;

  if (!products?.length) return <Empty resourceName="products" />;

  return (
    <Menus>
      <Table columns="0.5fr 1fr 3fr 2fr 1fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
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
      <Pagination count={count} />
    </Menus>
  );
}

export default AdminProductTable;
