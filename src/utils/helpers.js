export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function scrollToTop(value = 0) {
  return window.scrollTo({ top: value, behavior: "smooth" });
}

export function formatDescription(text) {
  const regex = /(<([^>]+)>)/gi;
  return text.replace(regex, "");
}
