export function getCheckout() {
  const cart = JSON.parse(localStorage.getItem("checkout"));

  return cart;
}

export function addToCheckout(data) {
  localStorage.setItem("checkout", JSON.stringify(data));

  return data;
}

export function clearCheckout() {
  localStorage.setItem("checkout", JSON.stringify([]));
}
