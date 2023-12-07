import styled, { css } from "styled-components";

const variations = {
  dark: css`
    color: var(--color-grey-0);
    background-color: var(--color-grey-900);

    &:hover {
      background-color: var(--color-brand-950);
    }
  `,
  light: css`
    color: var(--color-grey-900);
    background: var(--color-grey-0);

    &:hover {
      color: var(--color-grey-0);
      background-color: var(--color-grey-900);
    }
  `,
  green: css`
    color: var(--color-grey-0);
    background-color: var(--color-brand-900);

    &:hover {
      background-color: var(--color-brand-800);
      color: var(--color-grey-0);
    }
  `,
};

const sizes = {
  large: css`
    font-size: 1.8rem;
    font-weight: 800;
  `,

  medium: css`
    font-size: 1.6rem;
    font-weight: 700;
  `,

  small: css`
    font-size: 1.4rem;
    font-weight: 600;
  `,
};

const Button = styled.button`
  padding: 1.2rem 3.6rem;
  margin: 2rem 0 1rem;
  font-weight: 700;

  border-radius: var(--border-radius-tiny);
  border: none;

  ${(props) => variations[props.bg]}
  ${(props) => sizes[props.size]}
`;

Button.defaultProps = {
  variation: "dark",
  size: "medium",
};

export default Button;
