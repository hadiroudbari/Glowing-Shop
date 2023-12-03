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

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "price-asc", label: "Sort by price (low first)" },
          { value: "price-desc", label: "Sort by price (high first)" },
          { value: "stock-asc", label: "Sort by stock (low first)" },
          { value: "stock-desc", label: "Sort by stock (high first)" },
          { value: "discount-asc", label: "Sort by discount (low first)" },
          { value: "discount-desc", label: "Sort by discount (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default ProductTableOperations;
