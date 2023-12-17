import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { CiShoppingCart, CiStar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

import { formatCurrency } from "../../utils/helpers";
import StarRating from "../../ui/StarRating";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Price = styled.span`
  margin-top: 1rem;
  font-weight: 800;
`;

const PriceDiscount = styled.span`
  margin-top: 1rem;
  font-weight: 600;

  font-size: 1.4rem;
  text-decoration: line-through;
  color: var(--color-grey-500);
`;

const Title = styled.p`
  font-weight: 600;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
`;

const ImgBox = styled(NavLink)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 25rem;
  height: 33rem;

  &:hover div:nth-of-type(2) {
    bottom: 0;
  }
`;

const ImgSale = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 1rem;
  border-radius: var(--border-radius-tiny);

  background-color: var(--color-brand-950);
  color: var(--color-grey-0);
  font-weight: 700;
`;

const Img = styled.img`
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  position: absolute;
  bottom: -100px;
  left: 50%;
  transition: all 0.5s;
  transform: translate(-50%, -50%);
`;

const Icon = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 3rem;
    height: 3rem;
  }

  &:hover {
    background-color: var(--color-grey-900);
    color: var(--color-grey-0);
  }
`;

function ProductItem({ product }) {
  const { id: productId, image, price, discount, name } = product;

  return (
    <Box>
      <ImgBox to={`/shop/${productId}`}>
        <Img src={image} alt={name} />
        {discount > 0 ? <ImgSale>-{discount}$</ImgSale> : <div></div>}
        <IconBox>
          <Icon>
            <CiShoppingCart />
          </Icon>
          <Icon>
            <CiStar />
          </Icon>
          <Icon>
            <IoEyeOutline />
          </Icon>
        </IconBox>
      </ImgBox>

      {!discount ? (
        <Price>{formatCurrency(price)}</Price>
      ) : (
        <FlexBox>
          <PriceDiscount>{formatCurrency(price - discount)}</PriceDiscount>
          <Price>{formatCurrency(price)}</Price>
        </FlexBox>
      )}
      <Title>{name}</Title>

      <FlexBox>
        <StarBox>
          <StarRating />
        </StarBox>
        2947 reviews
      </FlexBox>
    </Box>
  );
}

export default ProductItem;
