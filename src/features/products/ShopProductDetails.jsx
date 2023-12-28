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
import { useNavigate } from "react-router";
import DetailsMore from "../../ui/ProductDetails/DetailsMore";
import { useProducts } from "./useProducts";
import DetailsAlsoLike from "../../ui/ProductDetails/DetailsAlsoLike";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
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

const SpaceLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-grey-200);
  margin: 5rem 0;
`;

function ProductDetails() {
  const { product, isLoading } = useProduct();
  const { products, isLoading: isLoading2 } = useProducts(10);
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  if (isLoading || isLoading2) {
    scrollToTop();
    return <ShopSpinner />;
  }

  if (!product) navigate("/shop");

  const {
    pictures: { images },
    stock,
    image,
  } = product;

  return (
    <>
      <Header>
        <HeaderNav product={product} />
      </Header>

      <DetailsContainer>
        <StyledProductDetails>
          <DetailsPictures images={images} image={image} />
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
            <AddToCart product={product} quantity={count} />
            <DetailsOperations />
            <DetailsInfo product={product} />
          </StyledDetailsBox>
        </StyledProductDetails>
        <SpaceLine />
        <DetailsMore />
        <SpaceLine />
      </DetailsContainer>
      <DetailsAlsoLike products={products} />
    </>
  );
}

export default ProductDetails;
