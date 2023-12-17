import styled from "styled-components";

import { scrollToTop } from "../../utils/helpers";
import { useProduct } from "./useProduct";

import DetailsPictures from "../../ui/ProductDetails/DetailsPictures";
import Header from "../../ui/Header/Header";
import HeaderNav from "../../ui/Header/HeaderNav";
import DetailsBox from "../../ui/ProductDetails/DetailsBox";
import ShopSpinner from "../../ui/ShopSpinner";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10rem;
  padding: 0 15rem;
  gap: 4.8rem;
`;

const StyledDetailsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

function ProductDetails() {
  const { product, isLoading } = useProduct();

  if (isLoading) return <ShopSpinner />;
  if (!isLoading) scrollToTop();

  const {
    pictures: { images },
  } = product;

  return (
    <>
      <Header>
        <HeaderNav product={product} />
      </Header>

      <DetailsContainer>
        <StyledDetailsBox>
          <DetailsPictures images={images} />
          <DetailsBox />
        </StyledDetailsBox>
      </DetailsContainer>
    </>
  );
}

export default ProductDetails;
