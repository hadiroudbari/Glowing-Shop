import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import StarRating from "../../ui/StarRating";
import FlexRow from "../FlexRow";

const StyledDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-weight: 600;
`;

const Title = styled.p`
  font-size: 3.2rem;
  font-weight: 700;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: 800;
`;

const PriceDiscount = styled.p`
  text-decoration: line-through;
  color: var(--color-grey-500);
`;

const PriceSave = styled.span`
  padding: 0.25rem 1rem;
  border-radius: var(--border-radius-tiny);
  background-color: var(--color-brand-950);
  color: var(--color-grey-0);
  font-weight: 700;
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
`;

const Review = styled.p`
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--color-grey-500);

  &:hover {
    text-decoration: underline;
  }
`;

const ReviewCount = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-grey-900);
`;

const Description = styled.p`
  color: var(--color-grey-500);
  margin: 1rem 0;
`;

const SpaceLine = styled.span`
  width: 2px;
  height: 1.6rem;
  border-radius: 50rem;
  background-color: var(--color-grey-500);
`;

function DetailsBox({ product }) {
  const { price, discount, description, name } = product;

  return (
    <StyledDetailsBox>
      <FlexRow>
        {discount ? <PriceDiscount>{formatCurrency(price)}</PriceDiscount> : ""}
        <Price>{formatCurrency(price - discount)}</Price>
        {discount ? <PriceSave>{formatCurrency(discount)}</PriceSave> : ""}
      </FlexRow>

      <Title>{name}</Title>

      <FlexRow>
        <ReviewCount>4.8</ReviewCount>
        <StarBox>
          <StarRating />
        </StarBox>
        <SpaceLine />
        <Review>Read 2947 reviews</Review>
      </FlexRow>

      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </StyledDetailsBox>
  );
}

export default DetailsBox;
