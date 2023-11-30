import styled from "styled-components";

import UserAvatar from "../features/authentication/AdminUserAvatar";
import AdminSearch from "../features/search/AdminSearch";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function AdminHeader() {
  return (
    <StyledHeader>
      <AdminSearch />
      <UserAvatar />
    </StyledHeader>
  );
}

export default AdminHeader;
