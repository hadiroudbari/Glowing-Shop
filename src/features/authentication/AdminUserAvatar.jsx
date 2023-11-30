import { HiLogout } from "react-icons/hi";
import styled from "styled-components";

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const UsenameText = styled.p`
  font-weight: 600;
`;

const StyledAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;

const LogoutBtn = styled.button`
  border: 1px solid var(--color-grey-900);
  border-radius: 50%;
  padding: 5px;
  background-color: transparent;
`;

function AdminUserAvatar() {
  return (
    <UserBox>
      <StyledAvatar>
        <img src="../images/Blog/post-02-370x450.jpg" alt="Avatar" />
      </StyledAvatar>
      <UsenameText>Josefina W. Newsome</UsenameText>
      <LogoutBtn>
        <HiLogout />
      </LogoutBtn>
    </UserBox>
  );
}

export default AdminUserAvatar;
