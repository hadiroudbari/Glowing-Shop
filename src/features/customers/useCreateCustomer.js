import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCustomer as createCustomerApi } from "../../services/apiCustomers";

export function useCreateCustomer() {
  const queryClient = useQueryClient();

  const { mutate: createCustomer, isLoading: isCreating } = useMutation({
    mutationFn: createCustomerApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
      queryClient.refetchQueries({
        queryKey: ["customers"],
        type: "active",
        exact: true,
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, createCustomer };
}
