import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function AdminOrderTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "received", label: "Received" },
          { value: "pending", label: "Pending" },
          { value: "cancel", label: "Cancel" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "price-asc", label: "Sort by price (low first)" },
          { value: "price-desc", label: "Sort by price (high first)" },
          { value: "date-asc", label: "Sort by date (low first)" },
          { value: "date-desc", label: "Sort by date (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default AdminOrderTableOperations;
