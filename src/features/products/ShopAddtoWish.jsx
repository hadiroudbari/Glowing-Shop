import styled from "styled-components";
import { CiStar } from "react-icons/ci";

import FlexRow from "../../ui/FlexRow";

const WishText = styled.p`
  font-weight: 700;
`;

const WishButton = styled.button`
  &:hover {
    color: var(--color-brand-950);
  }
`;

function AddtoWish() {
  return (
    <>
      <WishButton>
        <FlexRow>
          <CiStar size={25} />
          <WishText>Add to Wishlist</WishText>
        </FlexRow>
      </WishButton>
    </>
  );
}

export default AddtoWish;
