import AddProduct from "../features/products/AdminAddProduct";
import AdminProductTableMaktab from "../features/products/AdminProductTableMaktab";
import ProductTableOperations from "../features/products/AdminProductTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AdminProductsMaktab() {
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
        <AdminProductTableMaktab />
      </Row>
    </>
  );
}

export default AdminProductsMaktab;
