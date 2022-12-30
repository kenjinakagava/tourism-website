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
  isSmall?: boolean;
  color?: string;
  disableNavigationMobile?: boolean;
}

const StyledSwiper = styled(Swiper)<
  Pick<Props, "isSmall" | "color" | "disableNavigationMobile">
>`
  .swiper-wrapper {
    height: ${(props) => (props.isSmall === true ? "auto" : "100vh")};
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => (props.color ? props.color : "white")};
  }
  .swiper-pagination-bullet-active {
    background: ${(props) => (props.color ? props.color : "white")};
  }
  img {
    object-fit: cover;
    height: 100%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: ${(props) => (props.disableNavigationMobile ? "none" : "block")};
    }
  }
`;
const Slider = (props: Props) => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={props.spaceBetween !== undefined ? props.spaceBetween : 0}
      slidesPerView={
        props.slidesPerView !== undefined ? props.slidesPerView : 1
      }
      navigation={true}
      pagination={{ clickable: true }}
      isSmall={props.isSmall}
      color={props.color}
      disableNavigationMobile={props.disableNavigationMobile}
    >
      {props.children}
    </StyledSwiper>
  );
};

export default Slider;
