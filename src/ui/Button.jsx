import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 1.2rem 3.6rem;
  margin: 2rem 0 1rem;
  font-weight: 700;

  border-radius: var(--border-radius-tiny);
  border: none;

  background-color: ${(props) =>
    props.bg === "dark"
      ? css`var(--color-grey-900)`
      : css`var(--color-grey-0)`};

  color: ${(props) =>
    props.bg === "dark"
      ? css`var(--color-grey-0)`
      : css`var(--color-grey-900)`};

  &:hover {
    background-color: ${(props) =>
      props.bg === "dark"
        ? css`var(--color-brand-950)`
        : css`var(--color-grey-900)`};

    color: var(--color-grey-0);
  }
`;

function Button({ children, bg }) {
  return <StyledButton bg={bg}>{children}</StyledButton>;
}

export default Button;
