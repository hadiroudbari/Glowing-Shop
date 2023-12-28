import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getOrders({ sortBy, filter, page }) {
  let query = supabase
    .from("orders")
    .select(
      "id, orderId, created_at, arrived_at, completed_at, customers(*), products, totalPrice, status, shippingType, paymentMethod, firstName, lastName, email, phone, address",
      { count: "exact" }
    );

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // SORT
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

  const { data: orders, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }

  return { orders, count };
}

export async function createUpdateOrder(order, id) {
  const products = JSON.stringify(order.products);

  let query = supabase.from("orders");

  // A) CREATE
  if (!id)
    query = query.insert([
      { ...order, products, status: "pending", isPaid: true },
    ]);

  // B) EDIT
  if (id) query = query.update([order]).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    if (id) throw new Error("Order could not be updated");
    else throw new Error("Order could not be created");
  }

  return data;
}

export async function deleteOrder(id) {
  const { data, error } = await supabase.from("orders").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Order could not be deleted");
  }

  return data;
}
