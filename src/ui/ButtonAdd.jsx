import styled from "styled-components";

const ButtonAdd = styled.button`
  width: 3rem;
  height: 3rem;

  border: 2px solid transparent;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-900);
  color: var(--color-grey-0);
  margin-left: 2rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background-color: transparent;
    color: var(--color-brand-900);
    border-color: var(--color-brand-900);
  }
`;

export default ButtonAdd;
