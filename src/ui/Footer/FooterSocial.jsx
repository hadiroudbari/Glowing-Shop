import styled from "styled-components";

import {
  PiInstagramLogo,
  PiTelegramLogo,
  PiTwitterLogo,
  PiWhatsappLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

const Box = styled.ul`
  display: flex;
  gap: 1.6rem;
`;

const Item = styled.a`
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

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  &:hover {
    background-color: var(--color-grey-0);
    color: var(--color-brand-950);
    border: 2px solid var(--color-brand-950);
  }
`;

function FooterSocial() {
  return (
    <Box>
      <li>
        <Item>
          <PiInstagramLogo />
        </Item>
      </li>
      <li>
        <Item>
          <PiWhatsappLogo />
        </Item>
      </li>
      <li>
        <Item>
          <PiTelegramLogo />
        </Item>
      </li>
      <li>
        <Item>
          <PiTwitterLogo />
        </Item>
      </li>
      <li>
        <Item>
          <PiYoutubeLogo />
        </Item>
      </li>
    </Box>
  );
}

export default FooterSocial;
