import styled from "styled-components";

import { scrollToTop } from "../../utils/helpers";
import { useProduct } from "./useProduct";

import DetailsPictures from "../../ui/ProductDetails/DetailsPictures";
import Header from "../../ui/Header/Header";
import HeaderNav from "../../ui/Header/HeaderNav";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 15rem;
  gap: 4.8rem;
`;

const DetailsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

function ProductDetails() {
  const { product, isLoading } = useProduct();

  if (!isLoading) scrollToTop();

  console.log(product);

  return (
    <>
      <Header>
        <HeaderNav product={product} />
      </Header>

      <DetailsContainer>
        <DetailsBox>
          <DetailsPictures />
        </DetailsBox>
      </DetailsContainer>
    </>
  );
}

export default ProductDetails;
