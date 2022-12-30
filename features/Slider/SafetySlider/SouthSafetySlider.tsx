import SafetyCard from "@/components/layout/SafetyCard";
import Title from "@/components/typography/Title";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider";
import SliderWrapper from "./SliderWrapper";

const SouthSafetySlider = () => {
  return (
    <>
      <Title
        as="h4"
        fontSize="1.75rem"
        fontSizeMobile="1.25rem"
        margin="1rem 0"
      >
        South Police Stations
      </Title>
      <SliderWrapper>
        <Slider isSmall={true} color="black" disableNavigationMobile={true}>
          <SwiperSlide>
            <SafetyCard
              title="Florianópolis"
              address="Rua Sete de Setembro, nº 2.421 – Centro"
              phone="+55 (67) 3325-2567 | +55 (67) 3382-9271"
              department="Specialized Tourist Police Station – DECAT"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SafetyCard
              title="Porto Alegre"
              address="Departure Lounge of Salgado Filho Airport"
              phone="+55 (51) 3358-2255"
              department="Specialized Tourist Police Station – DPTUR"
            />
          </SwiperSlide>
        </Slider>
      </SliderWrapper>
    </>
  );
};

export default SouthSafetySlider;
