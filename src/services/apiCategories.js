import supabase from "./supabase";

export async function getCategories({ topCategory }) {
  let query = supabase
    .from("categories")
    .select("id, name, icon, topCategories(name)");

  // FILTER
  if (topCategory)
    query = query[topCategory.method || "eq"](
      topCategory.field,
      topCategory.value
    );

  const { data: categories, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }

  return categories;
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
