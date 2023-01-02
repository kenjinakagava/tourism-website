import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  children?: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  isSmall?: boolean;
  inactiveColor?: string;
  inactiveBulletOpacity?: string;
  color?: string;
  disableNavigationMobile?: boolean;
  bulletsize?: string;
}

const StyledSwiper = styled(Swiper)<Props>`
  --swiper-pagination-bullet-inactive-color: ${(props) =>
    props.inactiveColor ? props.inactiveColor : "#f4f4f4"};

  --swiper-pagination-bullet-inactive-opacity: ${(props) =>
    props.inactiveBulletOpacity ? props.inactiveBulletOpacity : "0.5"};

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: ${(props) => (props.bulletsize ? props.bulletsize : "8px")};
    height: ${(props) => (props.bulletsize ? props.bulletsize : "8px")};
  }
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
      bulletsize={props.bulletsize}
      inactiveColor={props.inactiveColor}
      inactiveBulletOpacity={props.inactiveBulletOpacity}
    >
      {props.children}
    </StyledSwiper>
  );
};

export default Slider;
