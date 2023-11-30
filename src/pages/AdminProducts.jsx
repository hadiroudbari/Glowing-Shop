import AdminProductTableOperations from "../features/products/AdminProductTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AdminProducts() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Product List</Heading>
        <AdminProductTableOperations />
      </Row>
    </>
  );
}

export default AdminProducts;
