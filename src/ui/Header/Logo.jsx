import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoBox = styled(NavLink)`
  width: 265px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Img = styled.img`
  width: auto;
  height: 50px;
`;

const Text = styled.h1`
  font-weight: 800;
  font-size: 4rem;
`;

function Logo() {
  return (
    <LogoBox to="/home">
      <Img src="/logo.png" alt="LOGO" />
      <Text>GLOWING</Text>
    </LogoBox>
  );
}

export default Logo;
