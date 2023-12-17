import Button from "../../ui/Button";

function AddToCart({ stock }) {
  return (
    <>
      {stock ? (
        <Button bg="dark" size="large">
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
