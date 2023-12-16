import styled from "styled-components";

import { useProducts } from "../../features/products/useProducts";

import ProductItem from "../../features/products/ShopProductItem";
import Pagination from "../Pagination";
import Spinner from "../Spinner";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 4.8rem 0;

  & div {
    width: fit-content;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  column-gap: 3rem;
  row-gap: 5rem;
`;
function Main({ products, isLoading, count }) {
  if (isLoading) return <Spinner />;

  return (
    <StyledMain>
      <ProductsGrid>
        {products?.map((product) => (
          <ProductItem product={product} />
        ))}
      </ProductsGrid>
      <PaginationBox>
        <Pagination count={count} pageSize={9} />
      </PaginationBox>
    </StyledMain>
  );
}

export default Main;
