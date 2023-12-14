import styled from "styled-components";

import HeadingBox from "../HeadingBox";
import BeautyItem from "./BeautyItem";
import ProductBox from "../../features/products/ShopProductBox";

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.type === "reverse" ? "row-reverse" : "row"};
  gap: 3rem;

  padding: 0 5rem;
  margin-bottom: 15rem;
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
      <Box type={type}>
        <BeautyItem src={src} title={title} text={text} type={type} />
        <ProductBox />
      </Box>
    </>
  );
}

export default BeautyBox;
