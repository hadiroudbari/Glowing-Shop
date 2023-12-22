import styled from "styled-components";

const Item = styled.li`
  width: 275px;
  height: 275px;
  margin-bottom: 5rem;

  box-shadow: var(--shadow-md);
`;

function GramItem({ src }) {
  return (
    <Item>
      <img src={src} alt="Instagram" />
    </Item>
  );
}

export default GramItem;
