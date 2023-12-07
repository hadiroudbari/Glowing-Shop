import styled from "styled-components";
import GramItem from "./GramItem";

const StyledGramBox = styled.ul`
  display: flex;
  gap: 3.2rem;

  padding: 0 5rem;
`;

function GramBox() {
  return (
    <StyledGramBox>
      <GramItem src="./images/Instagram/instagram-01-320x320.jpg" />
      <GramItem src="./images/Instagram/instagram-02-320x320.jpg" />
      <GramItem src="./images/Instagram/instagram-03-320x320.jpg" />
      <GramItem src="./images/Instagram/instagram-04-320x320.jpg" />
      <GramItem src="./images/Instagram/instagram-05-320x320.jpg" />
    </StyledGramBox>
  );
}

export default GramBox;
