import SafetyCard from "@/components/layout/SafetyCard";
import Title from "@/components/typography/Title";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider";
import SliderWrapper from "./SliderWrapper";

const NorthSafetySlider = () => {
  return (
    <>
      <Title
        as="h4"
        fontSize="1.75rem"
        fontSizeMobile="1.25rem"
        margin="1rem 0"
      >
        North Police Stations
      </Title>
      <SliderWrapper>
        <Slider isSmall={true} color="black" disableNavigationMobile={true}>
          <SwiperSlide>
            <SafetyCard
              title="Manaus"
              address="Second floor of the Manaus International Airport"
              phone="+55 (92) 3652-1656 | +55 (92) 3233-0739"
              department="Specialized Tourist Police Station – DECCT"
            />
          </SwiperSlide>
        </Slider>
      </SliderWrapper>
    </>
  );
};

export default NorthSafetySlider;
