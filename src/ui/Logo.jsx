import styled from "styled-components";

const LogoBox = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledImg = styled.img`
  width: auto;
  height: 50px;
`;

const StyledText = styled.h1`
  font-weight: 800;
  font-size: 4rem;
`;

function Logo() {
  return (
    <LogoBox>
      <StyledImg src="/logo.png" alt="LOGO" />
      <StyledText>GLOWING</StyledText>
    </LogoBox>
  );
}

export default Logo;
