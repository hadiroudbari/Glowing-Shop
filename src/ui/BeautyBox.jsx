import styled from "styled-components";

import HeadingBox from "./HeadingBox";
import BeautyItem from "./BeautyItem";
import ShopProductItem from "../features/products/ShopProductItem";

const StyledBeautyBox = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.type === "reverse" ? "row-reverse" : "row"};
  gap: 3rem;

  padding: 0 5rem;
  margin-bottom: 15rem;
`;

const StyledProductsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  column-gap: 3rem;
  row-gap: 2rem;
  flex-shrink: 10;
`;

function BeautyBox({ type, src, title, text }) {
  return (
    <>
      {type === "reverse" ? (
        <HeadingBox>
          <h2>Customer Favorite Beauty Essentials</h2>
          <p>
            Made using clean, non-toxic ingredients, our products are designed
            for everyone.
          </p>
        </HeadingBox>
      ) : (
        <HeadingBox>
          <h2>Shop our Feature products</h2>
          <p>
            Made using clean, non-toxic ingredients, our products are designed
            for everyone.
          </p>
        </HeadingBox>
      )}
      <StyledBeautyBox type={type}>
        <BeautyItem src={src} title={title} text={text} type={type} />
        <StyledProductsBox>
          <ShopProductItem src="./images/Products/product-01.jpg" />
          <ShopProductItem src="./images/Products/product-02.jpg" />
          <ShopProductItem src="./images/Products/product-03.jpg" />
          <ShopProductItem src="./images/Products/product-04.jpg" />
          <ShopProductItem src="./images/Products/product-05.jpg" />
          <ShopProductItem src="./images/Products/product-06.jpg" />
        </StyledProductsBox>
      </StyledBeautyBox>
    </>
  );
}

export default BeautyBox;
