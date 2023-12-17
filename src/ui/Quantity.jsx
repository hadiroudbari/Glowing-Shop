import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import styled from "styled-components";

const Box = styled.div`
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

const Count = styled.span`
  padding: 1rem;
  font-weight: 800;
`;

function Quantity({ maxCount, onCount }) {
  const [count, setCount] = useState(1);

  function increase() {
    if (count === maxCount) return;
    setCount((prev) => prev + 1);
    onCount(count + 1);
  }

  function decrease() {
    if (count === 1) return;
    setCount((prev) => prev - 1);
    onCount(count - 1);
  }

  return (
    <Box>
      <Icon onClick={decrease}>
        <HiMinus />
      </Icon>
      <Count>{count}</Count>
      <Icon onClick={increase}>
        <HiPlus />
      </Icon>
    </Box>
  );
}

export default Quantity;
