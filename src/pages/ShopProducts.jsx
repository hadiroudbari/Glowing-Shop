import Header from "../ui/Header/Header";
import HeaderNav from "../ui/Header/HeaderNav";
import Sidebar from "../ui/ShopPage/Sidebar";
import HeaderTitle from "../ui/Header/HeaderTitle";
import ShopProductOperations from "../features/products/ShopProductOperations";
import styled from "styled-components";
import Row from "../ui/Row";
import { useProducts } from "../features/products/useProducts";

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
  const { products } = useProducts(9);

  return (
    <div>
      <Header>
        <HeaderNav />
        <HeaderTitle>Explore our Shop</HeaderTitle>
      </Header>
      <ShopBox>
        <ShopProductOperations />
        <ShopGrid>
          <Sidebar />
          <main>Main</main>
        </ShopGrid>
      </ShopBox>
    </div>
  );
}

export default Shop;
