import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 5rem;
  margin-top: 9.6rem;

  background-color: var(--color-grey-100);
  color: var(--color-grey-500);
  font-size: 1.4rem;
  font-weight: 600;
`;

const CurrentPage = styled(NavLink)`
  color: var(--color-grey-900);
  font-weight: 700;
`;

const SpaceLine = styled.span`
  width: 2rem;
  height: 1.5px;
  margin-top: 2.5px;
  background-color: var(--color-grey-500);
`;

function HeaderNav({ product }) {
  return (
    <StyledNav>
      <NavLink to="/home">Home</NavLink>
      <SpaceLine />
      {product ? (
        <>
          <NavLink to="/shop">Shop</NavLink>
          <SpaceLine />
          <CurrentPage to={`/shop/${product?.id}`}>{product?.name}</CurrentPage>
        </>
      ) : (
        <CurrentPage to="/shop">Shop</CurrentPage>
      )}
    </StyledNav>
  );
}

export default HeaderNav;
