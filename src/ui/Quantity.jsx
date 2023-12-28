import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import styled, { css } from "styled-components";

const Box = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: var(--color-grey-100);
  gap: 0.5rem;
  padding: 0 0.5rem;
  border-radius: 50rem;
`;

const Icon = styled.button`
  padding: 1rem;
`;

const FocusBox = styled.a`
  display: inline-block;

  & span {
    ${(props) =>
      props.active
        ? css`
            position: absolute;
            width: 100%;
            height: 100%;
            inset: 0;
            background: #f5f5f5;
            box-shadow: var(--shadow-md);
            border-radius: 50rem;
            z-index: 10;
          `
        : ""}
  }
`;

const Input = styled.input`
  width: 3rem;
  text-align: center;
  font-weight: 800;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus,
  &:active {
    position: relative;
    z-index: 100;
    outline: none;
  }
`;

function Quantity({ maxCount, onCount, quantity = 1 }) {
  const [count, setCount] = useState(quantity);
  const [input, setInput] = useState(false);

  function increase() {
    if (count >= maxCount) return;
    setCount((prev) => +prev + 1);
    onCount(+count + 1);
  }

  function decrease() {
    if (count === 1) return;
    setCount((prev) => +prev - 1);
    onCount(+count - 1);
  }

  return (
    <Box>
      <Icon onClick={decrease}>
        <HiMinus />
      </Icon>
      <FocusBox active={input}>
        <Input
          type="number"
          value={count}
          onChange={(e) => {
            e.target.value <= maxCount
              ? setCount(+e.target.value)
              : setCount(maxCount);
            e.target.value <= maxCount
              ? onCount(+e.target.value)
              : onCount(maxCount);
          }}
          onFocus={() => setInput((value) => !value)}
          onBlur={() => setInput((value) => !value)}
        />
        <span></span>
      </FocusBox>

      <Icon onClick={increase}>
        <HiPlus />
      </Icon>
    </Box>
  );
}

export default Quantity;
