import styled from "styled-components";
import HeadingBox from "./HeadingBox";
import Button from "./Button";

const CategoryGrid = styled.div`
  display: grid;
  grid-template-areas:
    "item-1 item-2 item-3"
    "item-1 item-4 item-4";

  gap: 2rem;

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
          <Button>Skincare</Button>
        </CategoryItem>

        <CategoryItem style={{ gridArea: "item-2" }}>
          <img src="./images/Categories/banner-15.jpg" alt="Categories" />
          <Button>Bodycare</Button>
        </CategoryItem>

        <CategoryItem style={{ gridArea: "item-3" }}>
          <img src="./images/Categories/banner-16.jpg" alt="Categories" />
          <Button>Accessories</Button>
        </CategoryItem>

        <CategoryItem style={{ gridArea: "item-4" }}>
          <img src="./images/Categories/banner-17.jpg" alt="Categories" />
          <Button>Haircare</Button>
        </CategoryItem>
      </CategoryGrid>
    </>
  );
}

export default CategoryBox;
