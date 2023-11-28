import styled from "styled-components";
import Logo from "./Logo";
import FooterSocial from "./FooterSocial";
import FooterList from "./FooterList";
import FooterContact from "./FooterContact";

const StyledFooterBox = styled.div`
  display: flex;
  gap: 12rem;

  background-color: var(--color-grey-100);
  padding: 12rem 5rem 14.4rem;

  position: relative;

  &::after {
    content: "GLOWING Created By 'Hadi Roudbari' in 2023. ©️ All Rights Reserved.";
    position: absolute;

    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    color: var(--color-grey-500);
    font-size: 1.4rem;
  }
`;

const StyledFooterBoxLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledFooterBoxLogoText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-500);

  width: 300px;
`;

function Footer() {
  return (
    <StyledFooterBox>
      <StyledFooterBoxLogo>
        <Logo />
        <StyledFooterBoxLogoText>
          "Millions of combinations, meaning you get a totally unique piece of
          furniture exactly the way you want it."
        </StyledFooterBoxLogoText>
        <FooterSocial />
      </StyledFooterBoxLogo>
      <FooterList
        title="Useful links"
        array={[
          "New Products",
          "Best Sellers",
          "Bundle & Save",
          "Online Gift Card",
        ]}
      />
      <FooterList
        title="Information"
        array={[
          "Start a Return",
          "Contact Us",
          "Shipping FAQ",
          "Terms & Conditions",
          "Privacy Policy",
        ]}
      />
      <FooterContact />
    </StyledFooterBox>
  );
}

export default Footer;
