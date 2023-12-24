import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAllFromCart, deleteFromCart } from "../../services/apiCart";

export function useDeleteCart() {
  const queryClient = useQueryClient();

  const { mutate: deleteCart, isLoading: isDeleting } = useMutation({
    mutationFn: deleteFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
      queryClient.refetchQueries({
        queryKey: ["cart"],
        type: "active",
        exact: true,
      });
    },
    onError: (err) => console.log(err),
  });

  return { isDeleting, deleteCart };
}

export function useDeleteAllCart() {
  const queryClient = useQueryClient();

  const { mutate: deleteAllCart, isLoading: isDeleting } = useMutation({
    mutationFn: deleteAllFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
      queryClient.refetchQueries({
        queryKey: ["cart"],
        type: "active",
        exact: true,
      });
    },
    onError: (err) => console.log(err),
  });

  return { isDeleting, deleteAllCart };
}
