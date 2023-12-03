import BeautyBox from "../ui/BeautyBox";
import CategoryBox from "../ui/CategoryBox";
import DiscoverBox from "../ui/DiscoverBox";
import GramBox from "../ui/GramBox";
import Header from "../ui/Header";
import InfoFeatures from "../ui/InfoFeatures";
import Supports from "../ui/Supports";
import Landing from "../ui/Landing";

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
