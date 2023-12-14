import styled from "styled-components";

import Navbar from "./Navbar";

const StyledHeader = styled.header`
  height: ${(props) => (props.type === "home" ? "100vh" : "20vh")};
  position: relative;
`;

function Header({ children, type }) {
  return (
    <StyledHeader type={type}>
      <Navbar />
      {children}
    </StyledHeader>
  );
}

export default Header;
