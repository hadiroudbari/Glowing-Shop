import supabase from "./supabase";

export async function getProducts() {
  const { data: products, error } = await supabase
    .from("products")
    .select(
      "id, name, pictures, categories(name), price, stock, discount, description, status"
    );

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return products;
}
