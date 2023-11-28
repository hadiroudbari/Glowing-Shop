import styled from "styled-components";

const StyledFooterList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;
`;

const StyledFooterListTitle = styled.h4`
  font-size: 2.4rem;
`;

const StyledFooterListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledFooterListLink = styled.a`
  font-size: 1.4rem;
  font-weight: 600;

  color: var(--color-grey-500);

  &:hover {
    color: var(--color-brand-900);
    border-bottom: 1px solid var(--color-brand-900);
  }
`;

function FooterList({ title, array }) {
  return (
    <StyledFooterList>
      <StyledFooterListTitle>{title}</StyledFooterListTitle>
      <StyledFooterListItem>
        {array.map((item, i) => (
          <li key={i}>
            <StyledFooterListLink href="">{item}</StyledFooterListLink>
          </li>
        ))}
      </StyledFooterListItem>
    </StyledFooterList>
  );
}

export default FooterList;
