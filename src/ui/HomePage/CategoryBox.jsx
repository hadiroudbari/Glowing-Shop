import styled from "styled-components";
import HeadingBox from "../HeadingBox";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const CategoryGrid = styled.div`
  display: grid;
  grid-template-areas:
    "item-1 item-2 item-3"
    "item-1 item-4 item-4";

  gap: 2.2rem;

  padding: 0 5rem;
  margin-bottom: 5rem;
`;

const CategoryItem = styled.div`
  position: relative;

  & button {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function CategoryBox() {
  return (
    <>
      <HeadingBox>
        <h2>Shop by Categories</h2>
        <p>Our products are designed for everyone.</p>
      </HeadingBox>
      <CategoryGrid>
        <CategoryItem style={{ gridArea: "item-1" }}>
          <img src="./images/Categories/banner-18.jpg" alt="Categories" />
          <NavLink to="/shop/sortByTopCategory=2">
            <Button bg="light">Skincare</Button>
          </NavLink>
        </CategoryItem>

        <CategoryItem style={{ gridArea: "item-2" }}>
          <img src="./images/Categories/banner-15.jpg" alt="Categories" />
          <NavLink to="/shop/sortByTopCategory=1">
            <Button bg="light">Bodycare</Button>
          </NavLink>
        </CategoryItem>

        <CategoryItem style={{ gridArea: "item-3" }}>
          <img src="./images/Categories/banner-16.jpg" alt="Categories" />
          <NavLink to="/shop/sortByTopCategory=4">
            <Button bg="light">Accessories</Button>
          </NavLink>
        </CategoryItem>

        <CategoryItem style={{ gridArea: "item-4" }}>
          <img src="./images/Categories/banner-17.jpg" alt="Categories" />
          <NavLink to="/shop/sortByTopCategory=3">
            <Button bg="light">Haircare</Button>
          </NavLink>
        </CategoryItem>
      </CategoryGrid>
    </>
  );
}

export default CategoryBox;
