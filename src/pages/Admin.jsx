import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
`;

function Admin() {
  return (
    <div>
      <StyledNav>
        <Link to="/home">home</Link>
        <Link to="dashboard">dashboard</Link>
        <Link to="products">products</Link>
        <Link to="categories">categories</Link>
        <Link to="orders">orders</Link>
        <Link to="settings">settings</Link>
      </StyledNav>
      <Outlet />
    </div>
  );
}

export default Admin;
