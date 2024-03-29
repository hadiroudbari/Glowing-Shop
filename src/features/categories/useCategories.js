import { useQuery } from "@tanstack/react-query";
import {
  getCategories,
  getTopCategories,
  getfilterCategories,
} from "../../services/apiCategories";
import { useSearchParams } from "react-router-dom";

export function useCategories() {
  const [searchParams] = useSearchParams();

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "id-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { categories, count } = {},
    error,
  } = useQuery({
    queryKey: ["categories", sortBy, page],
    queryFn: () => getCategories({ sortBy, page }),
  });

  return { isLoading, error, categories, count };
}

export function useTopCategories() {
  const {
    isLoading,
    data: topCategories,
    error,
  } = useQuery({
    queryKey: ["topCategories"],
    queryFn: getTopCategories,
  });

  return { isLoading, error, topCategories };
}

export function useFilterCategories(id, filter) {
  const [searchParams] = useSearchParams();

  // FILTER
  const topCategoryId = searchParams.get("sortByTopCategory") || "";
  const topCategory = !topCategoryId
    ? null
    : { field: "topCategoryId", value: topCategoryId, method: "eq" };

  const {
    isLoading,
    data: filterCategories,
    error,
  } = useQuery({
    queryKey: ["filterCategories", topCategory, id, filter],
    queryFn: () => getfilterCategories({ topCategory, id, filter }),
  });

  return { isLoading, error, filterCategories };
}
