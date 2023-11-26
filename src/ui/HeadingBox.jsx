import styled from "styled-components";

const StyledHeadingBox = styled.div`
  margin: 8rem 0 6rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & h2 {
    font-size: 4rem;
  }

  & p {
    color: var(--color-grey-500);
    font-weight: 600;
    width: 400px;
  }
`;

function HeadingBox({ children }) {
  return <StyledHeadingBox>{children}</StyledHeadingBox>;
}

export default HeadingBox;
