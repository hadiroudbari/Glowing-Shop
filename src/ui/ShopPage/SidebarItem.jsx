import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import Row from "../Row";

const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 1.4rem;
`;

const Item = styled.li`
  &:hover button {
    color: var(--color-grey-900);
  }
`;

const Text = styled.button`
  font-weight: 600;
  color: var(--color-grey-500);
  position: relative;

  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    color: var(--color-grey-900);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-brand-900);
    transition: all 0.3s;
  }

  &:hover::before {
    width: 100%;
  }
`;

const ColorSpan = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: ${(props) =>
    props.color === "#ffffff" ? "1px solid var(--color-grey-400)" : ""};
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

function SidebarItem({ filterField, options, title }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <Row>
      <Title>{title}</Title>
      <List>
        {options.map((option) => (
          <Item key={option.label}>
            <Text onClick={() => handleClick(option.value)}>
              {filterField === "colors" ? (
                <ColorSpan color={option.color} />
              ) : (
                ""
              )}
              {option.label}
            </Text>
          </Item>
        ))}
      </List>
    </Row>
  );
}

export default SidebarItem;
