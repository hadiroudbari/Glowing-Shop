import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      {/* <Footer /> */}
    </StyledAppLayout>
  );
}

export default AppLayout;
