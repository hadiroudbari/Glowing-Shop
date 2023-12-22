import styled from "styled-components";

import Logo from "../Header/Logo";
import AdminNav from "./AdminNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 2.4rem;
  border-right: 1px solid var(--color-grey-200);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AdminSidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <AdminNav />
    </StyledSidebar>
  );
}

export default AdminSidebar;
