import SafetyCard from "@/components/layout/SafetyCard";
import Title from "@/components/typography/Title";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider";
import SliderWrapper from "./SliderWrapper";

const NortheastSafetySlider = () => {
  return (
    <>
      <Title
        as="h4"
        fontSize="1.75rem"
        fontSizeMobile="1.25rem"
        margin="1rem 0"
      >
        Northeast Police Stations
      </Title>
      <SliderWrapper>
        <Slider isSmall={true} color="black" disableNavigationMobile={true}>
          <SwiperSlide>
            <SafetyCard
              title="Aracaju"
              address="Av. Santos Dumont, S/Nº – Atalaia"
              phone=" +55 (79) 3198-1118 | +55 (79) 3255-2155 | +55 (79) 3226-1400"
              department="Specialized Tourist Police Station"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SafetyCard
              title="Fortaleza"
              address="Rua Costa Barro, nº 1971 – Fortaleza/CE"
              phone="+55 (85) 3101-2488"
              department="Specialized Tourist Police Station – DEPROTUR"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SafetyCard
              title="João Pessoa"
              address="Av. Almirante Tamandaré, nº100 – João Pessoa/PB"
              phone="+55 (83) 3214-8022 | +55 (83) 32478405"
              department="Specialized Tourist Police Station"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SafetyCard
              title="Natal"
              address="Second floor of the Manaus International Airport"
              phone="+55 (92) 3652-1656 | +55 (92) 3233-0739"
              department="Specialized Tourist Police Station - DECCT"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SafetyCard
              title="Recife"
              address="Guararapes International Airport"
              phone="+55 (81) 3184-3437 | +55 (81) 3322-4088 | +55 (81) 3322-4867"
              department="Specialized Tourist Police Station – DPTUR"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SafetyCard
              title="Salvador"
              address="Cruzeiro de São Francisco – Praça Anchieta nº 14 – Centro Histórico"
              phone="+55 (71) 3116-6512"
              department="Specialized Tourist Police Station – DELTUR"
            />
          </SwiperSlide>
        </Slider>
      </SliderWrapper>
    </>
  );
};

export default NortheastSafetySlider;
