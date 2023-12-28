import supabase from "./supabase";

export async function createCustomer(customer) {
  const { data, error } = await supabase
    .from("customers")
    .insert([customer])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Customer could not be created");
  }

  return data;
}
