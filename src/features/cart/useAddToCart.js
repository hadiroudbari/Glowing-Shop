import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

export function useAddToCart(product, quantity) {
  const queryClient = useQueryClient();
  const [cart, setCart] = useLocalStorageState([], "cart");

  function handleAddToCart(product, quantity) {
    const currentItem = cart.find((item) => item.id === product.id);

    if (currentItem)
      setCart((prev) =>
        prev.map((item) =>
          item.id === currentItem.id ? { ...item, quantity } : item
        )
      );
    else setCart((prev) => [...prev, { ...product, quantity }]);
  }

  const { mutate: addToCart, isLoading: isCreating } = useMutation({
    mutationFn: () => handleAddToCart(product, quantity),
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

  return { isCreating, addToCart };
}
