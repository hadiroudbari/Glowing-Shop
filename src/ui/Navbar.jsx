import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "../ui/Logo";
import NavbarOptions from "./NavbarOptions";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  background-color: transparent;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled(NavLink)`
  display: inline-block;
  font-weight: 600;
  padding: 2.4rem;
  transition: all 0.3s;

  & span {
    position: relative;
  }

  & span::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-grey-900);
    transition: all 0.3s;
  }

  &:hover span::before {
    width: 100%;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <NavList>
        <li>
          <NavItem to="/home">
            <span>HOME</span>
          </NavItem>
          <NavItem to="/shop">
            <span>SHOP</span>
          </NavItem>
          <NavItem to="/contact">
            <span>CONTACT</span>
          </NavItem>
          <NavItem to="/about">
            <span>ABOUT</span>
          </NavItem>
          <NavItem to="/admin">
            <span>ADMIN</span>
          </NavItem>
        </li>
      </NavList>
      <NavbarOptions />
    </StyledNavbar>
  );
}

export default Navbar;
