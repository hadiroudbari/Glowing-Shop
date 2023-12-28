import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createOrder as createOrderApi } from "../../services/apiOrders";

export function useCreateOrder() {
  const queryClient = useQueryClient();

  const { mutate: createOrder, isLoading: isCreating } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      queryClient.refetchQueries({
        queryKey: ["orders"],
        type: "active",
        exact: true,
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, createOrder };
}
