import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
}

const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    height: 100vh;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
  .swiper-pagination-bullet-active {
    background: white;
  }
  img {
    object-fit: cover;
    height: 100%;
    margin: 0 auto;
  }
`;
const Slider = ({ children, spaceBetween, slidesPerView }: Props) => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={spaceBetween !== undefined ? spaceBetween : 0}
      slidesPerView={slidesPerView !== undefined ? slidesPerView : 1}
      navigation={true}
      pagination={{ clickable: true }}
      data-testid="slider"
    >
      {children}
    </StyledSwiper>
  );
};

export default Slider;
