import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCheckout } from "../../services/apiCheckout";

export function useDeleteAllCheckout() {
  const queryClient = useQueryClient();

  const { mutate: deleteAllCheckout, isLoading: isDeleting } = useMutation({
    mutationFn: clearCheckout,
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

  return { isDeleting, deleteAllCheckout };
}
