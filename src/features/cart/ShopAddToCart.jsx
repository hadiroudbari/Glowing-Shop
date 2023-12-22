import Button from "../../ui/Button";
import { useAddToCart } from "./useAddToCart";

function AddToCart({ product, quantity }) {
  const { addToCart } = useAddToCart(product, quantity);

  const { stock } = product;

  return (
    <>
      {stock ? (
        <Button bg="dark" size="large" onClick={() => addToCart()}>
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
