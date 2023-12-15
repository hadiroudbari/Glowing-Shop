import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import Logo from "./Logo";
import NavbarOptions from "./NavbarOptions";
import ScrollToTop from "./ScrollToTop";
import { scrollToTop } from "../../utils/helpers";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.2rem;
  background-color: transparent;

  transition: all 0.4s;
  position: fixed;
  top: 0;
  z-index: 10000;
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
    background-color: var(--color-brand-900);
    transition: all 0.3s;
  }

  &:hover span::before {
    width: 100%;
  }

  &:hover {
    color: var(--color-brand-900);
  }
`;

function Navbar() {
  const navbar = useRef();
  const [scroll, setScroll] = useState(0);

  useEffect(
    function () {
      let oldScrollY = window.scrollY;

      document.addEventListener("scroll", (e) => {
        if (window.scrollY === 0) {
          navbar.current.style.top = 0;
          navbar.current.style.backgroundColor = "transparent";
          navbar.current.style.boxShadow = "none";
          return;
        }
        if (oldScrollY < window.scrollY) {
          navbar.current.style.top = "-100px";
        } else {
          navbar.current.style.top = 0;
          navbar.current.style.backgroundColor = "var(--color-grey-0)";
          navbar.current.style.boxShadow = "var(--shadow-lg)";
        }
        oldScrollY = window.scrollY;
        setScroll(window.scrollY);
      });
    },
    [navbar]
  );

  return (
    <>
      <StyledNavbar ref={navbar}>
        <Logo />
        <NavList>
          <li>
            <NavItem to="/home" onClick={scrollToTop}>
              <span>HOME</span>
            </NavItem>
          </li>
          <li>
            <NavItem to="/shop" onClick={scrollToTop}>
              <span>SHOP</span>
            </NavItem>
          </li>
          <li>
            <NavItem to="/contact" onClick={scrollToTop}>
              <span>CONTACT</span>
            </NavItem>
          </li>
          <li>
            <NavItem to="/about" onClick={scrollToTop}>
              <span>ABOUT</span>
            </NavItem>
          </li>
          <li>
            <NavItem to="/admin" onClick={scrollToTop}>
              <span>ADMIN</span>
            </NavItem>
          </li>
        </NavList>
        <NavbarOptions />
      </StyledNavbar>
      {scroll > 500 ? createPortal(<ScrollToTop />, document.body) : ""}
    </>
  );
}

export default Navbar;
