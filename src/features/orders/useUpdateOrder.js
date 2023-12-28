import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUpdateOrder } from "../../services/apiOrders";

export function useUpdateOrder() {
  const queryClient = useQueryClient();

  const { mutate: updateOrder, isLoading: isUpdating } = useMutation({
    mutationFn: ({ order, id }) => createUpdateOrder(order, id),
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

  return { isUpdating, updateOrder };
}
