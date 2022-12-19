import * as img from "@/public/regions/index";
import styled from "styled-components";
import RegionSlideContent from "./RegionSlideContent";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const RegionSlider = () => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <RegionSlideContent
          title="North"
          paragraph="The North of Brazil is a region with many beautiful and
        interesting sights to see."
          buttonText="EXPERIENCE THE NORTH"
          href="/north"
          backgroundImage={img.NorthRegion}
          mapImage={img.NorthMap}
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideContent
          title="Northeast"
          paragraph="The Northeast Region of Brazil is a stunning and diverse region
          that offers something for everyone."
          buttonText="EXPERIENCE THE NORTHEAST"
          href="/northeast"
          backgroundImage={img.NortheastRegion}
          mapImage={img.NortheastMap}
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideContent
          title="Central-West"
          paragraph="The Center-West Region of Brazil is a vibrant and dynamic region
          that offers a wide range of attractions and activities for visitors."
          buttonText="EXPERIENCE THE CENTRAL-WEST"
          href="/northeast"
          backgroundImage={img.CentralWestRegion}
          mapImage={img.CentralWestMap}
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideContent
          title="Southeast"
          paragraph="The southeast region of Brazil is a must-visit destination for
          anyone looking to experience the culture and natural beauty of
          this vibrant country."
          buttonText="EXPERIENCE THE SOUTHEAST"
          href="/northeast"
          backgroundImage={img.SoutheastRegion}
          mapImage={img.SoutheastMap}
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideContent
          title="South"
          paragraph="The south region of Brazil is a breathtaking destination that is
          home to some of the most stunning natural wonders in the world."
          buttonText="EXPERIENCE THE SOUTH"
          href="/northeast"
          backgroundImage={img.SouthRegion}
          mapImage={img.SouthMap}
        />
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default RegionSlider;
