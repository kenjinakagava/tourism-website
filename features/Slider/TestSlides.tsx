import { SwiperSlide } from "swiper/react";
import RegionSlideLayout from "./RegionsSlider/RegionSlideLayout";
import Alagoas from "@/public/regions/Northeast/Alagoas.webp";
import Belem from "@/public/regions/North/Belem.webp";

const TestSlides = () => {
  return (
    <>
      <SwiperSlide>
        <RegionSlideLayout
          src={Alagoas}
          title="Alagoas"
          paragraph="In Alagoas, visitors can explore the state's rich cultural heritage, visit beautiful beaches, and try delicious local cuisine. The state is also home to several national parks and nature reserves, making it a great destination for nature lovers."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={Belem}
          title="Belém"
          paragraph="Bahia is known for its beautiful beaches, vibrant culture, and historic landmarks. The capital city of Salvador is known for its Afro-Brazilian heritage and is home to the Pelourinho, a UNESCO World Heritage Site."
        />
      </SwiperSlide>
    </>
  );
};

export default TestSlides;
