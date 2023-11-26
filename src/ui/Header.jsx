import styled from "styled-components";

import Navbar from "../ui/Navbar";
import Landing from "../ui/Landing";

const StyledHeader = styled.header`
  height: 100vh;
`;

function Header() {
  return (
    <StyledHeader>
      <Landing>
        <Navbar />
      </Landing>
    </StyledHeader>
  );
}

export default Header;
