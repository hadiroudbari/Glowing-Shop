import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiHome,
  HiOutlineCog6Tooth,
  HiRectangleGroup,
  HiShoppingBag,
  HiShoppingCart,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-900);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-900);
  }
`;

function AdminNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="dashboard">
            <HiHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="products">
            <HiShoppingBag />
            <span>Products</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="categories">
            <HiRectangleGroup />
            <span>Categories</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="orders">
            <HiShoppingCart />
            <span>Orders</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default AdminNav;
