import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import { useCategories, useTopCategories } from "../categories/useCategories";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function ProductTableOperations() {
  const { topCategories, isLoading } = useTopCategories();
  const { categories, isLoading: isLoading2 } = useCategories();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("searchBy");
  const cuttentTopCategory = searchParams.get("sortByTopCategory");

  useEffect(
    function () {
      if (currentFilter === "category") {
        searchParams.delete("sortBy");
        searchParams.delete("status");
        setSearchParams(searchParams);
      }
    },
    [currentFilter, searchParams, setSearchParams]
  );

  if (isLoading || isLoading2) return;

  // console.log(currentTopCategory);
  // console.log(topCategories);
  console.log(categories);
  // console.log(currentFilter);

  return (
    <TableOperations>
      <Filter
        filterField="searchBy"
        options={[
          { value: "details", label: "By Details" },
          { value: "category", label: "By Category" },
        ]}
      />{" "}
      :::::
      {currentFilter === "category" ? (
        <>
          <SortBy
            sortValue="sortByTopCategory"
            options={[
              { value: "", label: "Top-Category" },
              ...topCategories.map((topCategory) => {
                return { value: topCategory.id, label: topCategory.name };
              }),
            ]}
          />

          {cuttentTopCategory && (
            <SortBy
              sortValue="sortByCategory"
              options={[
                { value: "", label: "Category" },
                ...categories.map((category) => {
                  return { value: category.id, label: category.name };
                }),
              ]}
            />
          )}
        </>
      ) : (
        <>
          <Filter
            filterField="status"
            options={[
              { value: "active", label: "Active" },
              { value: "archived", label: "Archived" },
              { value: "disabled", label: "Disabled" },
            ]}
          />
          <SortBy
            sortValue="sortBy"
            options={[
              { value: "", label: "Sort by" },
              { value: "name-asc", label: "Sort by name (A-Z)" },
              { value: "name-desc", label: "Sort by name (Z-A)" },
              { value: "price-asc", label: "Sort by price (low first)" },
              { value: "price-desc", label: "Sort by price (high first)" },
              { value: "stock-asc", label: "Sort by stock (low first)" },
              { value: "stock-desc", label: "Sort by stock (high first)" },
              { value: "discount-asc", label: "Sort by discount (low first)" },
              {
                value: "discount-desc",
                label: "Sort by discount (high first)",
              },
            ]}
          />
        </>
      )}
    </TableOperations>
  );
}

export default ProductTableOperations;
