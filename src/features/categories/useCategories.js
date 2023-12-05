import { useQuery } from "@tanstack/react-query";
import { getCategories, getTopCategories } from "../../services/apiCategories";
import { useSearchParams } from "react-router-dom";

export function useCategories() {
  const [searchParams] = useSearchParams();
  const topCategoryId = searchParams.get("sortByTopCategory") || "";
  const topCategory = !topCategoryId
    ? null
    : { field: "topCategoryId", value: topCategoryId, method: "eq" };

  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["categories", topCategory],
    queryFn: () => getCategories({ topCategory }),
  });

  return { isLoading, error, categories };
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
