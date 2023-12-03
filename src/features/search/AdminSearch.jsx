import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

const SearchBox = styled.div`
  display: flex;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
`;

const SearchInput = styled.input`
  border: 1px solid var(--color-grey-100);
  border-right: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-100);
  border-top-left-radius: var(--border-radius-sm);
  border-bottom-left-radius: var(--border-radius-sm);

  transition: all 0.3s;

  height: 5rem;
  width: 30rem;
  padding: 1.6rem;

  &:focus {
    border: 1px solid var(--color-brand-900);
  }
`;

const SearchBtn = styled.button`
  border: none;
  background-color: var(--color-grey-100);

  padding: 0 1.6rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    background-color: var(--color-brand-900);
  }

  &:hover svg {
    color: var(--color-grey-0);
  }
`;

function AdminSearch() {
  return (
    <SearchBox>
      <SearchInput type="text" placeholder="Search Item" />
      <SearchBtn>
        <CiSearch />
      </SearchBtn>
    </SearchBox>
  );
}

export default AdminSearch;
