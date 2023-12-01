import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ProductTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "active", label: "Active" },
          { value: "archived", label: "Archived" },
          { value: "disabled", label: "Disabled" },
        ]}
      />

      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "price-asc", label: "Sort by price (low first)" },
          { value: "price-desc", label: "Sort by price (high first)" },
          { value: "stock-asc", label: "Sort by stock (low first)" },
          { value: "stock-desc", label: "Sort by stock (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default ProductTableOperations;
