import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteOrder as deleteOrderApi } from "../../services/apiOrders";

export function useDeleteOrder() {
  const queryClient = useQueryClient();

  const { mutate: deleteOrder, isLoading: isDeleting } = useMutation({
    mutationFn: deleteOrderApi,
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

  return { isDeleting, deleteOrder };
}
