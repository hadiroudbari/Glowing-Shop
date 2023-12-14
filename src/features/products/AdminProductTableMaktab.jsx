import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useProducts } from "./useProducts";
import AdminProductRowMaktab from "./AdminProductRowMaktab";
import { PAGE_SIZE } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

function AdminProductTableMaktab() {
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
      <Table columns="0.3fr 0.6fr 3fr 2fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div></div>
          <div>Product</div>
          <div>Category</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={products}
          render={(product) => (
            <AdminProductRowMaktab product={product} key={product.id} />
          )}
        ></Table.Body>
      </Table>
      <Pagination count={count} />
    </Menus>
  );
}

export default AdminProductTableMaktab;