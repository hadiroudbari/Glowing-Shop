import styled from "styled-components";

import Button from "./Button";
import { IoTicketOutline } from "react-icons/io5";

const StyledBeautyItemBox = styled.div`
  position: relative;
  overflow: hidden;

  color: var(--color-grey-0);

  &:hover img {
    transform: scale(1.1);
  }
`;

const StyledBeautyItemImg = styled.img`
  height: 975px;
  transition: all 0.3s;
`;

const StyledBeautyItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  bottom: 5%;
  left: 10%;
`;

const StyledBeautyItemSpan = styled.span`
  font-family: "Allura";
  font-size: 5rem;
`;

const StyledBeautyItemText = styled.p`
  font-size: 4rem;
  font-weight: 600;
`;

function BeautyItem({ src, title, text }) {
  return (
    <StyledBeautyItemBox>
      <StyledBeautyItemImg src={src} alt={title} />
      <StyledBeautyItemTextBox>
        <StyledBeautyItemSpan>{title}</StyledBeautyItemSpan>
        <StyledBeautyItemText>{text}</StyledBeautyItemText>
        <Button>Explore More</Button>
      </StyledBeautyItemTextBox>
    </StyledBeautyItemBox>
  );
}

export default BeautyItem;
