import { HiLogout } from "react-icons/hi";
import styled from "styled-components";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const LogoutBtn = styled.button`
  border: 1px solid var(--color-grey-900);
  border-radius: 50%;
  padding: 5px;
`;

function AdminLogout() {
  const { logout, isLoading } = useLogout();

  return (
    <LogoutBtn disabled={isLoading} onClick={logout}>
      {isLoading ? <SpinnerMini /> : <HiLogout />}
    </LogoutBtn>
  );
}

export default AdminLogout;
