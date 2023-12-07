import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function AdminCategoryTableOperations() {
  return (
    <TableOperations>
      <SortBy
        sortValue="sortBy"
        options={[
          { value: "", label: "Sort by" },
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "id-asc", label: "Sort by id (low first)" },
          { value: "id-desc", label: "Sort by id (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default AdminCategoryTableOperations;
