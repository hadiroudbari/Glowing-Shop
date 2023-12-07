import styled, { css } from "styled-components";
import Button from "./Button";

const StyledDiscoverItemBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: ${(props) => (props.type === "small" ? "0" : "1")};
  gap: 1rem;

  position: relative;
  height: 450px;
  margin-bottom: 15rem;
`;

const StyledDiscoverItemTextBox = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;

  color: ${(props) =>
    props.type === "small" ? "var(--color-grey-900)" : "var(--color-grey-0)"};
`;

const StyledDiscoverItemText = styled.p`
  font-weight: 600;

  ${(props) =>
    props.as === "p" &&
    css`
      font-size: 1.4rem;
      width: 200px;
      margin-top: 1.6rem;
      margin-bottom: 2.4rem;
    `};
`;

const StyledDiscoverItemHeader = styled.h2`
  width: 300px;
  margin-top: 1.6rem;
  font-size: 3.5rem;

  ${(props) =>
    props.as === "h4" &&
    css`
      font-weight: 600;
      font-size: 3rem;
    `};
`;

function DiscoverItem({ type, src, title, text, btn }) {
  return (
    <StyledDiscoverItemBox type={type}>
      <img src={src} alt={title} />
      <StyledDiscoverItemTextBox type={type}>
        {type === "small" ? (
          <>
            <StyledDiscoverItemHeader as="h4">{title}</StyledDiscoverItemHeader>
            <StyledDiscoverItemText as="p">{text}</StyledDiscoverItemText>
          </>
        ) : (
          <>
            <StyledDiscoverItemText>{text}</StyledDiscoverItemText>
            <StyledDiscoverItemHeader>{title}</StyledDiscoverItemHeader>
          </>
        )}
        <Button bg="light">{btn}</Button>
      </StyledDiscoverItemTextBox>
    </StyledDiscoverItemBox>
  );
}

export default DiscoverItem;
