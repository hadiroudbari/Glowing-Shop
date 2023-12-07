import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";
import AdminCategoryRow from "./AdminCategoryRow";
import { useCategories } from "./useCategories";

function AdminCategoryTable() {
  const { categories, isLoading, count } = useCategories();

  if (isLoading) return <Spinner />;
  if (!categories?.length) return <Empty resourceName="categories" />;

  return (
    <Menus>
      <Table columns="0.3fr 0.6fr 2fr 2fr 1fr">
        <Table.Header>
          <div></div>
          <div></div>
          <div>Category</div>
          <div>Top-Category</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={categories}
          render={(category) => (
            <AdminCategoryRow category={category} key={category.id} />
          )}
        ></Table.Body>
      </Table>
      <Pagination count={count} />
    </Menus>
  );
}

export default AdminCategoryTable;
