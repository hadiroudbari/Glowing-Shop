import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getOrders({ sortBy, filter, page }) {
  let query = supabase
    .from("orders")
    .select(
      "id, orderId, created_at, arrived_at, completed_at, customers(*), cart, totalPrice, status, shippingType, paymentMethod",
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

  console.log(orders);

  return { orders, count };
}
