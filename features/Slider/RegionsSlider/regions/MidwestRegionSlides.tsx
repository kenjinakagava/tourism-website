import * as imgs from "@/public/regions/Midwest";
import { SwiperSlide } from "swiper/react";
import RegionSlideLayout from "../RegionSlideLayout";
import RegionSlider from "../RegionSlider";

const MidwestRegionSlider = () => {
  return (
    <RegionSlider>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Brasilia}
          title="Brasilia"
          paragraph="Brasília is the capital city of Brazil and is known for its modernist architecture and futuristic design. The city was built from scratch in the 1950s and is known for its distinctive urban layout, which was designed by Brazilian architect Oscar Niemeyer."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.CaldasNovas}
          title="Caldas Novas"
          paragraph="Located in the state of Goiás, Caldas Novas is a popular destination for those seeking relaxation and rejuvenation. The city is known for its thermal baths, which are filled with naturally heated mineral water that is said to have therapeutic properties."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.CampoGrande}
          title="Campo Grande"
          paragraph="This vibrant and welcoming city is known for its diverse culture, beautiful natural surroundings, and endless attractions. In Campo Grande, visitors can explore the city's historic landmarks, visit beautiful parks and gardens, and try delicious local cuisine."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.OuroPreto}
          title="Ouro Preto"
          paragraph="In Ouro Preto, you can explore the city's winding streets and marvel at the beautiful colonial-style buildings. You can also visit museums and galleries, learn about the city's rich history, and enjoy traditional Brazilian cuisine."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Pantanal}
          title="Pantanal"
          paragraph="The Pantanal is the world's largest wetland area and is home to a diverse range of flora and fauna, including jaguars, caimans, anacondas, and a variety of bird species. It's the perfect destination for nature lovers, birdwatchers, and adventurers."
        />
      </SwiperSlide>
    </RegionSlider>
  );
};

export default MidwestRegionSlider;
