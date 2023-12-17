import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import ProductItem from "../../features/products/ShopProductItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 15rem;
  padding: 0 10rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-grey-900);
  text-align: center;

  margin-bottom: 5rem;
`;

function DetailsAlsoLike({ products }) {
  return (
    <Container>
      <Title>You may also like</Title>
      <Swiper
        loop={true}
        setWrapperSize={true}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        navigation={{
          enabled: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default DetailsAlsoLike;
