import styled from "styled-components";
import { HiLogout } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi2";

import UserAvatar from "../features/authentication/AdminUserAvatar";
import AdminSearch from "../features/search/AdminSearch";
import Row from "./Row";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoutBtn = styled.button`
  border: 1px solid var(--color-grey-900);
  border-radius: 50%;
  padding: 5px;
`;

const HomeBtn = styled(NavLink)`
  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function AdminHeader() {
  return (
    <StyledHeader>
      <AdminSearch />
      <Row type="horizontal" gap="1.6">
        <UserAvatar />
        <LogoutBtn>
          <HiLogout />
        </LogoutBtn>
        <HomeBtn to="/home">
          <HiOutlineHome />
        </HomeBtn>
      </Row>
    </StyledHeader>
  );
}

export default AdminHeader;
