import styled from "styled-components";

import { CiShoppingCart, CiStar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

import StarRating from "../../ui/StarRating";

const StyledProductItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const StyledProductItemPrice = styled.span`
  margin-top: 1rem;
  font-weight: 800;
`;

const StyledProductItemTitle = styled.p`
  font-weight: 600;
`;

const StyledProductItemRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledProductItemStarBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledProductItemImgBox = styled.a`
  position: relative;
  display: inline-block;
  overflow: hidden;

  &:hover div:nth-of-type(2) {
    bottom: 0;
  }
`;

const StyledProductItemImgSale = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 1rem;
  border-radius: var(--border-radius-tiny);

  background-color: var(--color-brand-950);
  color: var(--color-grey-0);
  font-weight: 700;
`;

const StyledProductItemImg = styled.img`
  transition: all 0.3s;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledProductItemImgIconBox = styled.div`
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

const StyledProductItemImgIcon = styled.span`
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
    <StyledProductItemBox>
      <StyledProductItemImgBox href="#">
        <StyledProductItemImg src={src} alt="Products" />
        <StyledProductItemImgSale>-26%</StyledProductItemImgSale>
        <StyledProductItemImgIconBox>
          <StyledProductItemImgIcon>
            <CiShoppingCart size={30} />
          </StyledProductItemImgIcon>
          <StyledProductItemImgIcon>
            <CiStar size={30} />
          </StyledProductItemImgIcon>
          <StyledProductItemImgIcon>
            <IoEyeOutline size={30} />
          </StyledProductItemImgIcon>
        </StyledProductItemImgIconBox>
      </StyledProductItemImgBox>

      <StyledProductItemPrice>$29.00</StyledProductItemPrice>
      <StyledProductItemTitle>Enriched Duo</StyledProductItemTitle>

      <StyledProductItemRating>
        <StyledProductItemStarBox>
          <StarRating />
        </StyledProductItemStarBox>
        2947 reviews
      </StyledProductItemRating>
    </StyledProductItemBox>
  );
}

export default ShopProductItem;
