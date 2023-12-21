import AdminProductTableMaktabStock from "../features/products/AdminProductTableMaktabStock";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AdminProductsMaktabStock() {
  return (
    <>
      <Row type="horizontal">
        <Row type="horizontal">
          <Heading as="h1">Stock & Price</Heading>
        </Row>
      </Row>

      <Row>
        <AdminProductTableMaktabStock />
      </Row>
    </>
  );
}

export default AdminProductsMaktabStock;
