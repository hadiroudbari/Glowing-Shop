import styled from "styled-components";

import { CiShoppingCart, CiStar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

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

const Title = styled.p`
  font-weight: 600;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
`;

const ImgBox = styled.a`
  position: relative;
  display: inline-block;
  overflow: hidden;

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
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImgIconBox = styled.div`
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

const ImgIcon = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color-grey-900);
    color: var(--color-grey-0);
  }
`;

function ShopProductItem({ src }) {
  return (
    <Box>
      <ImgBox href="#">
        <Img src={src} alt="Products" />
        <ImgSale>-26%</ImgSale>
        <ImgIconBox>
          <ImgIcon>
            <CiShoppingCart size={30} />
          </ImgIcon>
          <ImgIcon>
            <CiStar size={30} />
          </ImgIcon>
          <ImgIcon>
            <IoEyeOutline size={30} />
          </ImgIcon>
        </ImgIconBox>
      </ImgBox>

      <Price>$29.00</Price>
      <Title>Enriched Duo</Title>

      <Rating>
        <StarBox>
          <StarRating />
        </StarBox>
        2947 reviews
      </Rating>
    </Box>
  );
}

export default ShopProductItem;
