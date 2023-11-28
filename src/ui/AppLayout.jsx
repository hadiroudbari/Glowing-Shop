import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
