import BeautyBox from "../ui/BeautyBox";
import CategoryBox from "../ui/CategoryBox";
import InfoFeatures from "../ui/InfoFeatures";
import Supports from "../ui/Supports";

function Home() {
  return (
    <div>
      <BeautyBox
        src="./images/Beauty/banner-32.jpg"
        title="Essenstial Items"
        text="Empower Yourself"
      />
      <InfoFeatures />
      <CategoryBox />
      <Supports />
      <BeautyBox
        type="reverse"
        src="./images/Beauty/banner-33.jpg"
        title="Pamper Your Skin"
        text="Empower Yourself"
      />
    </div>
  );
}

export default Home;
