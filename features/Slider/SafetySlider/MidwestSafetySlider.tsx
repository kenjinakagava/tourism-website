import SafetyCard from "@/components/cards/SafetyCard";
import Title from "@/components/typography/Title";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider";
import SliderWrapper from "./SliderWrapper";

const MidwestSafetySlider = () => {
  return (
    <>
      <Title
        as="h4"
        fontSize="1.75rem"
        fontSizeMobile="1.25rem"
        margin="1rem 0"
      >
        Midwest Police Stations
      </Title>
      <SliderWrapper>
        <Slider isSmall={true} color="black" disableNavigationMobile={true}>
          <SwiperSlide>
            <SafetyCard
              title="Campo Grande"
              address="Rua Sete de Setembro, nº 2.421 – Centro"
              phone="+55 (67) 3325-2567 | +55 (67) 3382-9271"
              department="Specialized Tourist Police Station – DECAT"
            />
          </SwiperSlide>
        </Slider>
      </SliderWrapper>
    </>
  );
};

export default MidwestSafetySlider;
