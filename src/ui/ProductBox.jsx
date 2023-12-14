import styled from "styled-components";

import ShopProductItem from "../features/products/ShopProductItem";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  column-gap: 3rem;
  row-gap: 2rem;
  flex-shrink: 10;
`;

function ProductBox() {
  return (
    <ProductsGrid>
      <ShopProductItem src="./images/Products/product-01.jpg" />
      <ShopProductItem src="./images/Products/product-02.jpg" />
      <ShopProductItem src="./images/Products/product-03.jpg" />
      <ShopProductItem src="./images/Products/product-04.jpg" />
      <ShopProductItem src="./images/Products/product-05.jpg" />
      <ShopProductItem src="./images/Products/product-06.jpg" />
    </ProductsGrid>
  );
}

export default ProductBox;
