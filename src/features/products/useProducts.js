import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useProducts(shopPageSize, shopCategory) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status") || "active";
  const filter = !filterValue
    ? null
    : { field: "status", value: filterValue, method: "eq" };

  // DISCOUNT FILTER
  const discountFilterValue = searchParams.get("discount");
  const discountFilter =
    !discountFilterValue || discountFilterValue === "all"
      ? null
      : discountFilterValue === "no-discount"
      ? { field: "discount", value: 0, method: "eq" }
      : { field: "discount", value: 0, method: "gt" };

  // PRICE FILTER
  const priceFilterValue = searchParams.get("priceRange");
  const priceFilter =
    !priceFilterValue || priceFilterValue === "all"
      ? null
      : {
          field: "price",
          value: [...priceFilterValue.split("-")],
        };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "id-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // TOP-CATEGORY
  const topCategoryId = searchParams.get("sortByTopCategory") || "";
  const topCategory = !topCategoryId
    ? null
    : { field: "topCategoryId", value: topCategoryId, method: "eq" };

  // CATEGORY
  const categoryId = searchParams.get("sortByCategory") || shopCategory;
  const category = !categoryId
    ? null
    : { field: "categoryId", value: categoryId, method: "eq" };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { products, count } = {},
    error,
  } = useQuery({
    queryKey: [
      "products",
      sortBy,
      filter,
      topCategory,
      category,
      page,
      shopPageSize,
      shopCategory,
      priceFilter,
      discountFilter,
    ],
    queryFn: () =>
      getProducts({
        sortBy,
        filter,
        topCategory,
        category,
        page,
        shopPageSize,
        priceFilter,
        discountFilter,
      }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: [
        "products",
        filter,
        sortBy,
        topCategory,
        category,
        page + 1,
        shopPageSize,
        shopCategory,
        priceFilter,
        discountFilter,
      ],
      queryFn: () =>
        getProducts({
          filter,
          sortBy,
          topCategory,
          category,
          page: page + 1,
          shopPageSize,
          priceFilter,
          discountFilter,
        }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: [
        "products",
        filter,
        sortBy,
        topCategory,
        category,
        page - 1,
        shopPageSize,
        shopCategory,
        priceFilter,
        discountFilter,
      ],
      queryFn: () =>
        getProducts({
          filter,
          sortBy,
          topCategory,
          category,
          page: page - 1,
          shopPageSize,
          priceFilter,
          discountFilter,
        }),
    });

  return { isLoading, error, products, count };
}
