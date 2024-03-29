import AddProduct from "../features/products/AdminAddProduct";
import AdminProductTable from "../features/products/AdminProductTable";
import ProductTableOperations from "../features/products/AdminProductTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AdminProducts() {
  return (
    <>
      <Row type="horizontal">
        <Row type="horizontal">
          <Heading as="h1">All Products</Heading>
          <AddProduct />
        </Row>
        <ProductTableOperations />
      </Row>

      <Row>
        <AdminProductTable />
      </Row>
    </>
  );
}

export default AdminProducts;
