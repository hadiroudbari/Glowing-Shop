import supabase from "./supabase";

export async function getOrders() {
  const { data: orders, error } = await supabase
    .from("orders")
    .select(
      "id, orderId, created_at, arrived_at, completed_at, customers(*), cart, totalPrice, status, shippingType, paymentMethod"
    );

  if (error) {
    console.error(error);
    throw new Error("orders could not be loaded");
  }

  return orders;
}
