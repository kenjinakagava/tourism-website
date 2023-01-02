import * as imgs from "@/public/regions/North";
import { SwiperSlide } from "swiper/react";
import Slider from "../../Slider";
import RegionSlideLayout from "../RegionSlideLayout";

const NorthRegionSlider = () => {
  return (
    <Slider bulletsize="48px">
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Amazonas}
          title="Amazonas"
          paragraph="Amazonas is a state located in the north of Brazil and is home to the Amazon Rainforest, one of the most biodiverse regions in the world. The state is known for its stunning landscapes and rich cultural heritage, making it a must-visit destination for travelers."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Belem}
          title="Belém"
          paragraph="Belém is the capital city of the state of Pará in Brazil and is a vibrant and historic destination with a rich culture and endless attractions to explore. Located at the mouth of the Amazon River, Belém is known for its beautiful beaches, lush rainforests, and delicious cuisine."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.JalapaoStatePark}
          title="Jalapão State Park"
          paragraph="Jalapão State Park is a hidden gem located in the heart of Brazil. With its stunning landscapes and diverse array of flora and fauna, it is a paradise for nature lovers and adventure seekers."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Manaus}
          title="Manaus"
          paragraph="Manaus is a vibrant and culturally rich city located in the heart of the Amazon rainforest. With its rich history, diverse population, and stunning natural surroundings, it is a must-visit destination for anyone interested in exploring the beauty and wonder of the Amazon region."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Tocantins}
          title="Tocantins"
          paragraph="Tocantins is home to several national parks and nature reserves, including the Chapada dos Veadeiros National Park, which is known for its beautiful waterfalls and rock formations. Tocantins is also home to a variety of wildlife, including jaguars, anteaters, and pink dolphins."
        />
      </SwiperSlide>
    </Slider>
  );
};

export default NorthRegionSlider;
