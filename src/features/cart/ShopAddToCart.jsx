import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import Button from "../../ui/Button";

function AddToCart({ product, quantity }) {
  const [cart, setCart] = useLocalStorageState([], "cart");

  const { id: productId, stock } = product;

  function handleAddToCart(product) {
    const currentItem = cart.find((item) => item.id === productId);

    if (currentItem)
      setCart((prev) =>
        prev.map((item) =>
          item.id === currentItem.id ? { ...item, quantity } : item
        )
      );
    else setCart((prev) => [...prev, { ...product, quantity }]);
  }

  return (
    <>
      {stock ? (
        <Button bg="dark" size="large" onClick={() => handleAddToCart(product)}>
          Add to Bag
        </Button>
      ) : (
        <Button bg="dark" size="large">
          Notify me when in stock !
        </Button>
      )}
    </>
  );
}

export default AddToCart;
