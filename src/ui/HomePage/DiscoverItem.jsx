import styled, { css } from "styled-components";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: ${(props) => (props.type === "small" ? "0" : "1")};
  gap: 1rem;

  position: relative;
  height: 450px;
  margin-bottom: 15rem;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;

  color: ${(props) =>
    props.type === "small" ? "var(--color-grey-900)" : "var(--color-grey-0)"};
`;

const Text = styled.p`
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

const Header = styled.h2`
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
    <Box type={type}>
      <img src={src} alt={title} />
      <TextBox type={type}>
        {type === "small" ? (
          <>
            <Header as="h4">{title}</Header>
            <Text as="p">{text}</Text>
          </>
        ) : (
          <>
            <Text>{text}</Text>
            <Header>{title}</Header>
          </>
        )}
        <NavLink to="/shop">
          <Button bg="light">{btn}</Button>
        </NavLink>
      </TextBox>
    </Box>
  );
}

export default DiscoverItem;
