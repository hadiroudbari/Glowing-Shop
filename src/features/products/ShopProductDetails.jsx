import styled from "styled-components";
import { useState } from "react";

import { scrollToTop } from "../../utils/helpers";
import { useProduct } from "./useProduct";

import DetailsPictures from "../../ui/ProductDetails/DetailsPictures";
import Header from "../../ui/Header/Header";
import HeaderNav from "../../ui/Header/HeaderNav";
import DetailsBox from "../../ui/ProductDetails/DetailsBox";
import ShopSpinner from "../../ui/ShopSpinner";
import Quantity from "../../ui/Quantity";
import AddToCart from "../cart/ShopAddToCart";
import FlexRow from "../../ui/FlexRow";
import DetailsOperations from "../../ui/ProductDetails/DetailsOperations";
import DetailsInfo from "../../ui/ProductDetails/DetailsInfo";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10rem;
  padding: 0 20rem;
  gap: 4.8rem;
`;

const StyledProductDetails = styled.div`
  display: flex;
  gap: 4.8rem;
`;

const StyledDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Title = styled.p`
  font-weight: 800;
`;

const StockText = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-500);
  font-weight: 600;
`;

function ProductDetails() {
  const { product, isLoading } = useProduct();
  const [count, setCount] = useState();

  if (isLoading) {
    scrollToTop();
    return <ShopSpinner />;
  }

  const {
    pictures: { images },
    stock,
  } = product;

  console.log(count);

  return (
    <>
      <Header>
        <HeaderNav product={product} />
      </Header>

      <DetailsContainer>
        <StyledProductDetails>
          <DetailsPictures images={images} />
          <StyledDetailsBox>
            <DetailsBox product={product} />
            <Title>Quantity :</Title>
            <FlexRow>
              {stock ? <Quantity maxCount={stock} onCount={setCount} /> : ""}
              <StockText>
                {stock
                  ? `${stock} Available in the Stock, Order Now !`
                  : "Sorry, this Product is unavailable !"}
              </StockText>
            </FlexRow>
            <AddToCart stock={stock} />
            <DetailsOperations />
            <DetailsInfo product={product} />
          </StyledDetailsBox>
        </StyledProductDetails>
      </DetailsContainer>
    </>
  );
}

export default ProductDetails;
