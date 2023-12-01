import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active === "true"
      ? "var(--color-brand-900)"
      : "var(--color-grey-50)"};
  color: ${(props) =>
    props.active === "true" ? "var(--color-brand-50)" : "inherit"};
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-weight: 500;
  font-size: 1.4rem;
  font-family: "Urbanist";

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 2.1rem;
    width: 2.1rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-900);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function exactPage(e) {
    searchParams.set("page", e.target.dataset.page);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
        <RiArrowLeftSLine />
      </PaginationButton>

      {Array.from({ length: pageCount }, (_, i) => (
        <PaginationButton
          key={i}
          onClick={exactPage}
          data-page={i + 1}
          active={currentPage === i + 1 ? "true" : "false"}
        >
          {pageCount < 10 ? "0" + (i + 1) : i + 1}
        </PaginationButton>
      ))}

      <PaginationButton onClick={nextPage} disabled={currentPage === pageCount}>
        <RiArrowRightSLine />
      </PaginationButton>
    </StyledPagination>
  );
}

export default Pagination;
