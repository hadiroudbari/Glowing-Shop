import BeautyBox from "../ui/HomePage/BeautyBox";
import CategoryBox from "../ui/HomePage/CategoryBox";
import DiscoverBox from "../ui/HomePage/DiscoverBox";
import GramBox from "../ui/HomePage/GramBox";
import Header from "../ui/Header/Header";
import InfoFeatures from "../ui/HomePage/InfoFeatures";
import Supports from "../ui/HomePage/Supports";
import Landing from "../ui/HomePage/Landing";

function Home() {
  return (
    <>
      <Header type="home">
        <Landing />
      </Header>
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
      <DiscoverBox />
      <GramBox />
    </>
  );
}

export default Home;
