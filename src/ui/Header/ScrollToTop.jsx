import styled from "styled-components";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { scrollToTop } from "../../utils/helpers";

const StyledBtn = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;

  background-color: var(--color-grey-0);
  color: var(--color-brand-950);
  box-shadow: var(--shadow-md);
  border: none;

  position: fixed;
  bottom: 5%;
  right: 2%;
  z-index: 9999;

  &:hover {
    background-color: var(--color-brand-950);
    color: var(--color-grey-0);
  }

  &:focus {
    border: none;
    outline: none;
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

function ScrollToTop() {
  return (
    <StyledBtn onClick={scrollToTop}>
      <HiOutlineArrowSmUp />
    </StyledBtn>
  );
}

export default ScrollToTop;
