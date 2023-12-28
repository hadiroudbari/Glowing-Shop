import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCheckout } from "../../services/apiCheckout";

export function useAddCheckout() {
  const queryClient = useQueryClient();

  const { mutate: addCheckout, isLoading: isCreating } = useMutation({
    mutationFn: addToCheckout,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["checkout"],
      });
      queryClient.refetchQueries({
        queryKey: ["checkout"],
        type: "active",
        exact: true,
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, addCheckout };
}
