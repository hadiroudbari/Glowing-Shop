import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteProduct as deleteProductApi } from "../../services/apiProducts";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProduct } = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      toast.success("Product Successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      queryClient.refetchQueries({
        queryKey: ["products"],
        type: "active",
        exact: true,
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProduct };
}
