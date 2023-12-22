import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;
`;

const ListTitle = styled.h4`
  font-size: 2.4rem;
`;

const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListLink = styled.a`
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
    <List>
      <ListTitle>{title}</ListTitle>
      <ListItem>
        {array.map((item, i) => (
          <li key={i}>
            <ListLink href="">{item}</ListLink>
          </li>
        ))}
      </ListItem>
    </List>
  );
}

export default FooterList;
