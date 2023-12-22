import styled from "styled-components";

import ProductItem from "./ShopProductItem";
import { useProducts } from "./useProducts";
import ShopSpinner from "../../ui/ShopSpinner";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  column-gap: 3rem;
  row-gap: 2rem;
  flex-shrink: 10;
`;

function ProductBox({ size = 6, catId }) {
  const { products, isLoading } = useProducts(size, catId);

  if (isLoading) return <ShopSpinner />;

  return (
    <ProductsGrid>
      {products?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ProductsGrid>
  );
}

export default ProductBox;
