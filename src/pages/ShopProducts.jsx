import styled from "styled-components";

import { useProducts } from "../features/products/useProducts";

import Header from "../ui/Header/Header";
import HeaderNav from "../ui/Header/HeaderNav";
import Sidebar from "../ui/ShopPage/Sidebar";
import HeaderTitle from "../ui/Header/HeaderTitle";
import ShopProductOperations from "../features/products/ShopProductOperations";
import Main from "../ui/ShopPage/Main";
import { scrollToTop } from "../utils/helpers";

const ShopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  column-gap: 3rem;
  row-gap: 2rem;
  margin-bottom: 8.6rem;
`;

const ShopBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 5rem;
  gap: 4.8rem;
`;

function Shop() {
  const { products, count, isLoading } = useProducts(9);

  if (!isLoading) scrollToTop(250);

  return (
    <>
      <Header>
        <HeaderNav />
        <HeaderTitle>Explore our Shop</HeaderTitle>
      </Header>
      <ShopBox>
        <ShopProductOperations count={count} />
        <ShopGrid>
          <Sidebar />
          <Main products={products} isLoading={isLoading} count={count} />
        </ShopGrid>
      </ShopBox>
    </>
  );
}

export default Shop;
