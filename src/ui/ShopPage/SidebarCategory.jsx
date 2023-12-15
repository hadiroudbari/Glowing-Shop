import styled from "styled-components";
import { Fragment, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

import { useFilterCategories } from "../../features/categories/useCategories";
import { useTopCategories } from "../../features/categories/useCategories";

import Row from "../Row";

const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
`;

const TopCategoryList = styled.ul`
  display: flex;
  flex-direction: column;

  font-size: 1.4rem;
`;

const TopCategoryText = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  position: relative;

  &:hover {
    color: var(--color-grey-900);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-brand-900);
    transition: all 0.3s;
  }

  &:hover::before {
    width: 100%;
  }
`;

const TopCategoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  color: ${(props) =>
    props.active ? "var(--color-grey-900)" : "var(--color-grey-500)"};

  &:hover {
    color: var(--color-grey-900);
  }
`;

const Plus = styled.button`
  margin-right: 5rem;
`;

const Item = styled.li`
  &:hover button {
    color: var(--color-grey-900);
  }
`;

const CategoryText = styled.button`
  font-weight: 600;
`;

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition: all 0.5s ease-in-out;
  color: var(--color-grey-500);
  overflow: hidden;

  margin: 0.75rem 2.4rem;
  height: ${(props) => (props.active ? "100%" : "0")};
`;

function SidebarCategory() {
  const { topCategories } = useTopCategories();
  const { filterCategories } = useFilterCategories();

  const [expander, setExpander] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("sortByCategory", value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <Row>
      <Title>Category</Title>
      <TopCategoryList>
        {topCategories?.map((topCat) => (
          <Fragment key={topCat.id}>
            <TopCategoryItem active={expander === topCat.id}>
              <TopCategoryText
                onClick={() =>
                  setExpander((prev) => (topCat.id === prev ? 0 : topCat.id))
                }
              >
                {topCat.name}
              </TopCategoryText>
              <Plus
                onClick={() =>
                  setExpander((prev) => (topCat.id === prev ? 0 : topCat.id))
                }
              >
                {expander === topCat.id ? <HiMinus /> : <HiPlus />}
              </Plus>
            </TopCategoryItem>

            <CategoryList active={expander === topCat.id}>
              {expander === topCat.id
                ? filterCategories?.map((cat) =>
                    cat.topCategoryId === topCat.id ? (
                      <Item key={cat.id}>
                        <CategoryText onClick={() => handleClick(cat.id)}>
                          {cat.name}
                        </CategoryText>
                      </Item>
                    ) : (
                      ""
                    )
                  )
                : ""}
            </CategoryList>
          </Fragment>
        ))}
      </TopCategoryList>
    </Row>
  );
}

export default SidebarCategory;
