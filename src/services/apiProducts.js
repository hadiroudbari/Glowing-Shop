import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getProducts({
  sortBy,
  filter,
  page,
  topCategory,
  category,
}) {
  let query = supabase
    .from("products")
    .select(
      "id, name, pictures, categories(name), topCategories(name), price, stock, discount, description, status",
      { count: "exact" }
    );

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // TOP-CATEGORY
  if (topCategory)
    query = query[topCategory.method || "eq"](
      topCategory.field,
      topCategory.value
    );

  // CATEGORY
  if (category)
    query = query[category.method || "eq"](category.field, category.value);

  // PAGE
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data: products, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return { products, count };
}
