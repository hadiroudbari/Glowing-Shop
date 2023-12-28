import { useQuery } from "@tanstack/react-query";
import { getCheckout } from "../../services/apiCheckout";

export function useCheckout() {
  const {
    data: checkout,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["checkout"],
    queryFn: getCheckout,
    retry: false,
  });

  return { checkout, isLoading, error };
}
