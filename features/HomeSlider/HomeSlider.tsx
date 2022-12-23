import * as img from "@/public/home/index";
import HomeSlideLayout from "./HomeSlideLayout";
import Slider from "../shared/Slider";
import { SwiperSlide } from "swiper/react";

const HomeSlider = () => {
  return (
    <Slider>
      <SwiperSlide>
        <HomeSlideLayout
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
        <HomeSlideLayout
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
        <HomeSlideLayout
          title="Midwest"
          paragraph="The Midwest Region of Brazil is a vibrant and dynamic region
          that offers a wide range of attractions and activities for visitors."
          buttonText="EXPERIENCE THE MIDWEST"
          href="/northeast"
          backgroundImage={img.MidwestRegion}
          mapImage={img.MidwestMap}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HomeSlideLayout
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
        <HomeSlideLayout
          title="South"
          paragraph="The south region of Brazil is a breathtaking destination that is
          home to some of the most stunning natural wonders in the world."
          buttonText="EXPERIENCE THE SOUTH"
          href="/northeast"
          backgroundImage={img.SouthRegion}
          mapImage={img.SouthMap}
        />
      </SwiperSlide>
    </Slider>
  );
};

export default HomeSlider;
