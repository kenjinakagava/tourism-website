import SafetyCard from "@/components/cards/SafetyCard";
import Title from "@/components/typography/Title";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider";
import SliderWrapper from "./SliderWrapper";

const SoutheastSafetySlider = () => {
  return (
    <>
      <Title
        as="h4"
        fontSize="1.75rem"
        fontSizeMobile="1.25rem"
        margin="1rem 0"
      >
        Southeast Police Stations
      </Title>
      <SliderWrapper>
        <Slider isSmall={true} color="black" disableNavigationMobile={true}>
          <SwiperSlide>
            <SafetyCard
              title="Rio de Janeiro"
              address="Avenida Afrânio de Melo Franco, 159 – Leblon"
              phone="+55 (21) 2334-6802 | +55 (21) 2334-6807 | +55 (21) 2332-2893"
              department="Specialized Tourist Police Station – DEAT"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SafetyCard
              title="São Paulo"
              address="Rua Cantareira Nº390 – Centro"
              phone="+55 (11) 3257-4475 | +55 (11) 3120-4417"
              department="Specialized Tourist Police Station – DEATUR"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SafetyCard
              title="Vitória"
              address="Av. Roza Helena Schorling Albuquerque, s/n – Aeroporto"
              phone="+ 55 (27) 3137-9117"
              department="Specialized Tourist Police Station – DPTUR"
            />
          </SwiperSlide>
        </Slider>
      </SliderWrapper>
    </>
  );
};

export default SoutheastSafetySlider;
