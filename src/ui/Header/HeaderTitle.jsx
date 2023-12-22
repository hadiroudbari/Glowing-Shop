import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 4.5rem;
  margin: 6.4rem 0;
`;

function HeaderTitle({ children }) {
  return <Title>{children}</Title>;
}

export default HeaderTitle;
