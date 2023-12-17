import styled from "styled-components";

import { useProducts } from "./useProducts";
import { scrollToTop } from "../../utils/helpers";

import ShopProductOperations from "./ShopProductOperations";
import Sidebar from "../../ui/ShopPage/Sidebar";
import Main from "../../ui/ShopPage/Main";

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 5rem;
  gap: 4.8rem;
`;

const ShopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  column-gap: 3rem;
  row-gap: 2rem;
  margin-bottom: 8.6rem;
`;

function Products() {
  const { products, count, isLoading } = useProducts(9);

  if (!isLoading) scrollToTop(250);

  return (
    <ShopContainer>
      <ShopProductOperations count={count} />
      <ShopGrid>
        <Sidebar />
        <Main products={products} isLoading={isLoading} count={count} />
      </ShopGrid>
    </ShopContainer>
  );
}

export default Products;
