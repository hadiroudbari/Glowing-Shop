import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

import UserAvatar from "../../features/authentication/AdminUserAvatar";
import AdminSearch from "../../features/search/AdminSearch";
import Row from "../Row";
import AdminLogout from "../../features/authentication/AdminLogout";

const Header = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeBtn = styled(NavLink)`
  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function AdminHeader() {
  return (
    <Header>
      <AdminSearch />
      <Row type="horizontal" gap="1.6">
        <UserAvatar />
        <AdminLogout />
        <HomeBtn to="/home">
          <HiOutlineHome />
        </HomeBtn>
      </Row>
    </Header>
  );
}

export default AdminHeader;
