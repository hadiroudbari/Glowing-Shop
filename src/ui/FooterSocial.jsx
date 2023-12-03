import styled from "styled-components";

import {
  PiInstagramLogo,
  PiTelegramLogo,
  PiTwitterLogo,
  PiWhatsappLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

const StyledSocialBox = styled.ul`
  display: flex;
  gap: 1.6rem;
`;

const StyledSocialItem = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-brand-950);
  color: var(--color-grey-0);
  border: 2px solid var(--color-grey-0);

  &:hover {
    background-color: var(--color-grey-0);
    color: var(--color-brand-950);
    border: 2px solid var(--color-brand-950);
  }
`;

function FooterSocial() {
  return (
    <StyledSocialBox>
      <li>
        <StyledSocialItem>
          <PiInstagramLogo size={25} />
        </StyledSocialItem>
      </li>
      <li>
        <StyledSocialItem>
          <PiWhatsappLogo size={25} />
        </StyledSocialItem>
      </li>
      <li>
        <StyledSocialItem>
          <PiTelegramLogo size={25} />
        </StyledSocialItem>
      </li>
      <li>
        <StyledSocialItem>
          <PiTwitterLogo size={25} />
        </StyledSocialItem>
      </li>
      <li>
        <StyledSocialItem>
          <PiYoutubeLogo size={25} />
        </StyledSocialItem>
      </li>
    </StyledSocialBox>
  );
}

export default FooterSocial;
