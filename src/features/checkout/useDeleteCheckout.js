import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCheckout } from "../../services/apiCheckout";

export function useDeleteCheckout() {
  const queryClient = useQueryClient();

  const { mutate: deleteCheckout, isLoading: isDeleting } = useMutation({
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

  return { isDeleting, deleteCheckout };
}
