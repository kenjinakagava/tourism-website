import * as imgs from "@/public/regions/Northeast";
import { SwiperSlide } from "swiper/react";
import RegionSlideLayout from "../RegionSlideLayout";
import RegionSlider from "../RegionSlider";

const NortheastRegionSlider = () => {
  return (
    <RegionSlider>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Alagoas}
          title="Alagoas"
          paragraph="In Alagoas, visitors can explore the state's rich cultural heritage, visit beautiful beaches, and try delicious local cuisine. The state is also home to several national parks and nature reserves, making it a great destination for nature lovers."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Bahia}
          title="Belém"
          paragraph="Bahia is known for its beautiful beaches, vibrant culture, and historic landmarks. The capital city of Salvador is known for its Afro-Brazilian heritage and is home to the Pelourinho, a UNESCO World Heritage Site."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Ceara}
          title="Ceará"
          paragraph="Ceará is known for its sand dunes and crystal clear waters. Visitors can explore the state's rich cultural heritage, visit beautiful beaches, and try delicious local cuisine."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.Pernambuco}
          title="Pernambuco"
          paragraph="Pernambuco is known for itsvibrant cultural scene. The capital city of Recife is known for its historic center, which is home to several colonial-style buildings. In Pernambuco, visitors can explore the state's rich cultural heritage, visit beautiful beaches, and try delicious local cuisine."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RegionSlideLayout
          src={imgs.RioGrandeDoNorte}
          title="Rio Grande do Norte"
          paragraph="In Rio Grande do Norte, visitors can explore the state's rich cultural history, visit beautiful beaches, and try delicious local cuisine. Whether you're interested in culture, history, or relaxation, Rio Grande do Norte has something for everyone."
        />
      </SwiperSlide>
    </RegionSlider>
  );
};

export default NortheastRegionSlider;
