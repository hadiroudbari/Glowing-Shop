import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
`;

function AppLayout() {
  return (
    <div>
      <StyledNav>
        <Link to="home">home</Link>
        <Link to="shop">shop</Link>
        <Link to="about">about</Link>
        <Link to="contact">contact</Link>
        <Link to="cart">cart</Link>
        <Link to="orders">orders</Link>
        <Link to="checkout">checkout</Link>
        <Link to="profile">profile</Link>
        <Link to="admin">admin</Link>
      </StyledNav>
      <Outlet />
    </div>
  );
}

export default AppLayout;
