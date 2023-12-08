import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getCategories({ sortBy, page }) {
  let query = supabase
    .from("categories")
    .select("id, name, icon, topCategories(name)", { count: "exact" });

  // SORT CATEGORY
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // PAGE
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data: categories, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }

  return { categories, count };
}

export async function getTopCategories() {
  const { data: topCategories, error } = await supabase
    .from("topCategories")
    .select("id, name");

  if (error) {
    console.error(error);
    throw new Error("TopCategories could not be loaded");
  }

  return topCategories;
}

export async function getfilterCategories({ topCategory, id }) {
  let query = supabase.from("categories").select("id, name");

  // FILTER TOP-CATEGORY
  if (topCategory || id)
    query = query[topCategory?.method || "eq"](
      topCategory?.field || "topCategoryId",
      topCategory?.value || id
    );

  const { data: filterCategories, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }

  if (id === 0) {
    return [];
  }

  return filterCategories;
}
