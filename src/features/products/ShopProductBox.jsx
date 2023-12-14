import styled from "styled-components";

import ProductItem from "./ShopProductItem";
import { useProducts } from "./useProducts";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  column-gap: 3rem;
  row-gap: 2rem;
  flex-shrink: 10;
`;

function ProductBox({ size = 6, catId }) {
  const { products } = useProducts(size, catId);

  return (
    <ProductsGrid>
      {products?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ProductsGrid>
  );
}

export default ProductBox;
