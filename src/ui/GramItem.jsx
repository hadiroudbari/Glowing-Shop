import styled from "styled-components";

const StyledGramItem = styled.li`
  width: 275px;
  height: 275px;
  margin-bottom: 5rem;

  box-shadow: var(--shadow-md);
`;

function GramItem({ src }) {
  return (
    <StyledGramItem>
      <img src={src} alt="Instagram" />
    </StyledGramItem>
  );
}

export default GramItem;
