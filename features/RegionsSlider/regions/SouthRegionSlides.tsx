import * as imgs from "@/public/regions/South";
import { SwiperSlide } from "swiper/react";
import RegionSlideLayout from "../RegionSlideLayout";
import RegionSlider from "../RegionSlider";

const SouthRegionSlider = () => {
  return (
    <RegionSlider>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Curitiba}
          title="Curitiba"
          paragraph="Curitiba is known for its modern architecture and is home to a number of parks and green spaces. The city is also home to a variety of museums and cultural centers, making it a great destination for culture lovers."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Florianopolis}
          title="Florianópolis"
          paragraph="Florianópolis is known for its beautiful beaches and is a popular destination for surfers. The city is also home to a number of parks and green spaces, making it a great destination for nature lovers."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Gramado}
          title="Gramado"
          paragraph="Gramado is known for its charming alpine-style architecture and is a popular destination for winter sports. Whether you're interested in winter sports, nature, or shopping, Gramado has something for everyone. So don't wait - come and experience the magic of this amazing city today!."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.IguacuNationalPark}
          title="Iguaçu National Park"
          paragraph="The Iguaçu National Park is home to the iconic Iguaçu Falls, one of the largest and most spectacular waterfall systems in the world. The park is also home to a variety of flora and fauna, including jaguars, monkeys, and a wide range of bird species."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.PortoAlegre}
          title="Porto Alegre"
          paragraph="Porto Alegre is known for its vibrant cultural scene, with a variety of museums, galleries, and theaters to choose from. The city is also home to a number of music venues, from traditional Brazilian music to contemporary music and beyond."
        />
      </SwiperSlide>
    </RegionSlider>
  );
};

export default SouthRegionSlider;
