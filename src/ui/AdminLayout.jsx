import { Outlet } from "react-router-dom";
import styled from "styled-components";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const StyledAdminLayout = styled.div`
  display: grid;
  grid-template-columns: 32rem 1fr;
  grid-template-rows: 10rem 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-100);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AdminLayout() {
  return (
    <StyledAdminLayout>
      <AdminHeader />
      <AdminSidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAdminLayout>
  );
}

export default AdminLayout;
