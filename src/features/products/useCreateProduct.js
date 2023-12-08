import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUpdateProduct } from "../../services/apiProducts";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createProduct, isLoading: isCreating } = useMutation({
    mutationFn: createUpdateProduct,
    onSuccess: () => {
      toast.success("New Product successfully created");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProduct };
}
