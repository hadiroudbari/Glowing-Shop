import styled from "styled-components";

import Logo from "../ui/Header/Logo";
import Heading from "../ui/Heading";
import AdminLoginForm from "../features/authentication/AdminLoginForm";

const LoginLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey-100);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

function AdminLogin() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h1">Log in to your account</Heading>
      <AdminLoginForm />
    </LoginLayout>
  );
}

export default AdminLogin;
