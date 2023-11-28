import styled from "styled-components";
import { HiOutlineArrowSmUp } from "react-icons/hi";

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
`;

function ScrollToTop() {
  return (
    <StyledBtn onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <HiOutlineArrowSmUp size={25} />
    </StyledBtn>
  );
}

export default ScrollToTop;
