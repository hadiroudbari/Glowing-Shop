import AdminAddCategory from "../features/categories/AdminAddCategory";
import AdminCategoryTable from "../features/categories/AdminCategoryTable";
import AdminCategoryTableOperations from "../features/categories/AdminCategoryTableOperations";
import Heading from "../ui/Heading";
import Pagination from "../ui/Pagination";
import Row from "../ui/Row";

function AdminCategories() {
  return (
    <>
      <Row type="horizontal">
        <Row type="horizontal">
          <Heading as="h1">All Categories</Heading>
          <AdminAddCategory />
        </Row>
        <AdminCategoryTableOperations />
      </Row>

      <Row>
        <AdminCategoryTable />
        <Pagination count={50} />
      </Row>
    </>
  );
}

export default AdminCategories;
