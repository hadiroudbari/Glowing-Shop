import styled from "styled-components";

import { CiSearch, CiShoppingCart, CiStar, CiUser } from "react-icons/ci";

const OptionList = styled.ul`
  display: flex;
  gap: 1.6rem;
`;

const OptionLink = styled.a`
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
`;

function NavbarOptions() {
  return (
    <OptionList>
      <li>
        <OptionLink>
          <CiSearch size={30} />
        </OptionLink>
      </li>
      <li>
        <OptionLink>
          <CiUser size={30} />
        </OptionLink>
      </li>
      <li>
        <OptionLink>
          <CiStar size={30} />
        </OptionLink>
      </li>
      <li>
        <OptionLink>
          <CiShoppingCart size={30} />
          <span>3</span>
        </OptionLink>
      </li>
    </OptionList>
  );
}

export default NavbarOptions;
