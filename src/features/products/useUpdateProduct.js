import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUpdateProduct } from "../../services/apiProducts";

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  const { mutate: updateProduct, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newProductData, id }) => {
      createUpdateProduct(newProductData, id);
    },
    onSuccess: () => {
      toast.success("Product successfully updated");

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

  return { isUpdating, updateProduct };
}
