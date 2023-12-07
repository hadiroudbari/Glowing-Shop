import styled from "styled-components";
import HeadingBox from "./HeadingBox";
import DiscoverItem from "./DiscoverItem";

const StyledDiscoverBox = styled.div`
  display: flex;
  gap: 2rem;

  padding: 0 5rem;
`;

function DiscoverBox() {
  return (
    <>
      <HeadingBox>
        <h2>More to Discover</h2>
        <p>
          Our bundles were designed to conveniently package your tanning
          essentials while saving you money.
        </p>
      </HeadingBox>
      <StyledDiscoverBox>
        <DiscoverItem
          src="./images/Hero/hero-slider-26.jpg"
          title="Discover Our Autumn Skincare"
          text="NEW COLLECTION"
          btn="Explore More"
        />
        <DiscoverItem
          type="small"
          src="./images/Discover/banner-08.jpg"
          title="25% off Everything"
          text="Makeup with extended range in colors for every human."
          btn="Shop Sale"
        />
      </StyledDiscoverBox>
    </>
  );
}

export default DiscoverBox;
