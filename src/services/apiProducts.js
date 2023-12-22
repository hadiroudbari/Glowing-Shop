import { PAGE_SIZE } from "../utils/constants";
import supabase, { supabaseUrl } from "./supabase";

export async function getProducts({
  sortBy,
  filter,
  page,
  topCategory,
  category,
  shopPageSize,
  priceFilter,
  discountFilter,
}) {
  let query = supabase
    .from("products")
    .select(
      "id, name, pictures, image, categories(id,name), topCategories(id,name), price, stock, discount, description, status",
      { count: "exact" }
    );

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // DISCOUNT FILTER
  if (discountFilter)
    query = query[discountFilter.method || "eq"](
      discountFilter.field,
      discountFilter.value
    );

  // PRICE FILTER
  if (priceFilter)
    query = query
      .gte(priceFilter.field, priceFilter.value[0])
      .lte(priceFilter.field, priceFilter.value[1]);

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
    const from = (page - 1) * (shopPageSize ? shopPageSize : PAGE_SIZE);
    const to = from + (shopPageSize ? shopPageSize : PAGE_SIZE) - 1;

    query = query.range(from, to);
  }

  const { data: products, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return { products, count };
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("* ,categories(*), topCategories(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product not found");
  }

  return data;
}

export async function createUpdateProduct(newProduct, id) {
  const hasImagePath = newProduct.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newProduct.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newProduct.image
    : `${supabaseUrl}/storage/v1/object/public/products/${imageName}`;

  // 1. Create/Edit Cabin
  let query = supabase.from("products");

  // A) CREATE
  if (!id) query = query.insert([{ ...newProduct, image: imagePath }]);

  // B) EDIT
  if (id)
    query = query.update([{ ...newProduct, image: imagePath }]).eq("id", id);

  console.log(newProduct);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    if (id) throw new Error("Product could not be updated");
    else throw new Error("Product could not be created");
  }

  // 2. Upload Image
  if (hasImagePath) return;

  const { error: storageError } = await supabase.storage
    .from("products")
    .upload(imageName, newProduct.image);

  // 3. Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("products").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Products could not be uploaded and the product was not created"
    );
  }

  return data;
}

export async function deleteProduct(id) {
  const { data, error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Products could not be deleted");
  }

  return data;
}
