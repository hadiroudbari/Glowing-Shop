import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer/Footer";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
