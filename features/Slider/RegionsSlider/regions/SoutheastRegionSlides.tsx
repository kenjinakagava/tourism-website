import * as imgs from "@/public/regions/Southeast";
import { SwiperSlide } from "swiper/react";
import Slider from "../../Slider";
import RegionSlideLayout from "../RegionSlideLayout";

const SoutheastRegionSlider = () => {
  return (
    <Slider bulletsize="48px">
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.AtlanticForest}
          title="The Atlantic Forest"
          paragraph="The Atlantic Forest is home to a variety of flora and fauna, including jaguars, monkeys, and a wide range of bird species. Whether you're looking for a relaxing vacation or an action-packed adventure, the Atlantic Forest has something for everyone."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.BeloHorizonte}
          title="Belo Horizonte"
          paragraph="Experience the vibrant culture of Belo Horizonte, the capital of the state of Minas Gerais in the Southeast region of Brazil! In Belo Horizonte, you can also enjoy the city's delicious cuisine, with a wide range of restaurants serving traditional Brazilian dishes as well as international flavors."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.MantiqueiraMountains}
          title="Mantiqueira Mountains"
          paragraph="Escape to the stunning beauty of the Mantiqueira Mountains, a mountain range located in the Southeast region of Brazil! The Mantiqueira Mountains is known for its beautiful scenery and is home to a variety of flora and fauna. It's the perfect destination for nature lovers, hikers, and adventurers."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.RioDeJaneiro}
          title="Rio de Janeiro"
          paragraph="Rio de Janeiro is known for its stunning natural beauty, with iconic landmarks such as the Christ the Redeemer statue and Sugarloaf Mountain. The city is also home to a variety of beaches, from the iconic Copacabana and Ipanema to the more laid-back Flamengo and Glória."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.SãoPaulo}
          title="São Paulo"
          paragraph="São Paulo is a hub for business, culture, and entertainment, with something for everyone. The city is home to a variety of museums, galleries, theaters, and music venues, as well as world-class restaurants, shopping centers, and nightlife."
        />
      </SwiperSlide>
    </Slider>
  );
};

export default SoutheastRegionSlider;
