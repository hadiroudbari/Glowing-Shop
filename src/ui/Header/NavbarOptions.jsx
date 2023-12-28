import styled from "styled-components";

import { CiSearch, CiShoppingCart, CiStar, CiUser } from "react-icons/ci";
import { useCart } from "../../features/cart/useCart";
import { NavLink } from "react-router-dom";

const List = styled.ul`
  display: flex;
  gap: 1.6rem;
`;

const Link = styled(NavLink)`
  position: relative;
  display: inline-block;
  cursor: pointer;

  & span {
    position: absolute;
    top: -3px;
    right: -3px;
    background-color: var(--color-grey-900);
    color: var(--color-grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-size: 1rem;
  }

  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

function NavbarOptions() {
  const { cart } = useCart();

  return (
    <List>
      <li>
        <Link>
          <CiSearch />
        </Link>
      </li>
      <li>
        <Link>
          <CiUser />
        </Link>
      </li>
      <li>
        <Link>
          <CiStar />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <CiShoppingCart />
          {cart?.length > 0 ? <span>{cart.length}</span> : ""}
        </Link>
      </li>
    </List>
  );
}

export default NavbarOptions;
