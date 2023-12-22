import styled from "styled-components";

import FlexRow from "../FlexRow";
import Row from "../Row";

const Key = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

const Value = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const Category = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-grey-500);
`;

const SpaceLine = styled.span`
  width: 2px;
  height: 1.6rem;
  border-radius: 50rem;
  background-color: var(--color-grey-500);
`;

function DetailsInfo({ product }) {
  const {
    categories: { name: categoryName },
    topCategories: { name: topCategoryName },
  } = product;

  return (
    <Row>
      <FlexRow>
        <Key>Sku:</Key>
        <Value>SF09281</Value>
      </FlexRow>
      <FlexRow>
        <Key>Categories:</Key>
        <FlexRow>
          <Category>{topCategoryName}</Category>
          <SpaceLine />
          <Category>{categoryName}</Category>
        </FlexRow>
      </FlexRow>
    </Row>
  );
}

export default DetailsInfo;
