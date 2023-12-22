import styled from "styled-components";
import { CiChat1, CiShare2 } from "react-icons/ci";

import FlexRow from "../../ui/FlexRow";
import AddtoWish from "../../features/products/ShopAddtoWish";

const StyledText = styled.p`
  font-weight: 700;
`;

const StyledButton = styled.button`
  &:hover {
    color: var(--color-brand-950);
  }
`;

const SpaceLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-grey-200);
  margin-top: 2rem;
`;

function DetailsOperations() {
  return (
    <>
      <FlexRow gap="3.2">
        <AddtoWish />
        <StyledButton>
          <FlexRow>
            <CiShare2 size={25} />
            <StyledText>Share</StyledText>
          </FlexRow>
        </StyledButton>
        <StyledButton>
          <FlexRow>
            <CiChat1 size={25} />
            <StyledText>Comment</StyledText>
          </FlexRow>
        </StyledButton>
      </FlexRow>
      <SpaceLine />
    </>
  );
}

export default DetailsOperations;
