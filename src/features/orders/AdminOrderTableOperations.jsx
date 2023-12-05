import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function AdminOrderTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "received", label: "Received" },
          { value: "pending", label: "Pending" },
          { value: "cancel", label: "Cancel" },
        ]}
      />

      <SortBy
        sortValue="sortBy"
        options={[
          { value: "", label: "Sort by" },
          { value: "totalPrice-asc", label: "Sort by price (low first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by price (high first)",
          },
          { value: "created_at-asc", label: "Sort by date (low first)" },
          { value: "created_at-desc", label: "Sort by date (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default AdminOrderTableOperations;
