import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateInCart } from "../../services/apiCart";

export function useUpdateCart() {
  const queryClient = useQueryClient();

  const { mutate: updateCart, isLoading: isUpdating } = useMutation({
    mutationFn: ({ cartId: id, count: quantity }) => UpdateInCart(id, quantity),
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

  return { isUpdating, updateCart };
}
