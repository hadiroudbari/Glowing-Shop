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

function AdminUserAvatar() {
  return (
    <UserBox>
      <StyledAvatar>
        <img src="../images/Blog/post-02-370x450.jpg" alt="Avatar" />
      </StyledAvatar>
      <UsenameText>Josefina W. Newsome</UsenameText>
    </UserBox>
  );
}

export default AdminUserAvatar;
