import NorthRegion from "../../public/NorthRegion.jpg";
import NortheastRegion from "../../public/NortheastRegion.jpg";
import CentralWestRegion from "../../public/CentralWestRegion.jpg";
import SoutheastRegion from "../../public/SoutheastRegion.jpg";
import SouthRegion from "../../public/SouthRegion.jpg";
import NorthMap from "../../public/NorthMap.png";
import NortheastMap from "../../public/NortheastMap.png";
import Container from "@/components/Container";
import Buttonwithicon from "@/components/Buttonwithicon";
import CentralWestMap from "../../public/CentralWestMap.png";
import SoutheastMap from "../../public/SoutheastMap.png";
import SouthMap from "../../public/SouthMap.png";
import Image from "next/image";
import styled from "styled-components";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import BlackFilter from "@/components/BlackFilter";
import SectionParagraph from "@/components/SectionParagraph";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    height: 100vh;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
  img {
    object-fit: cover;
    height: 100%;
    margin: 0 auto;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  z-index: 51;
  top: 18%;
  left: 10%;
  transform: translateY(-50%);
  * {
    color: white;
  }
`;

const RegionGraphic = styled.div`
  display: block;
  position: absolute;
  bottom: 10%;
  right: 0;
  left: 0;
  z-index: 51;
  @media (min-width: 768px) {
    right: 5rem;
    top: 50%;
    left: unset;
    transform: translateY(-50%);
    bottom: unset;
  }
`;

const RegionSlider = () => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
    >
      <SwiperSlide>
        <Image src={NorthRegion} alt="" />
        <SlideContent>
          <SectionTitle>North</SectionTitle>
          <SectionParagraph>
            The North of Brazil is a region with many beautiful and interesting
            sights to see.
          </SectionParagraph>
          <Buttonwithicon href="/north">EXPERIENCE THE NORTH</Buttonwithicon>
        </SlideContent>
        <RegionGraphic>
          <Image src={NorthMap} alt="" />
        </RegionGraphic>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={NortheastRegion} alt="" />
        <SlideContent>
          <SectionTitle>Northeast</SectionTitle>
          <SectionParagraph>
            The Northeast Region of Brazil is a stunning and diverse region that
            offers something for everyone.
          </SectionParagraph>
          <Buttonwithicon href="/northeast">
            EXPERIENCE THE NORTHEAST
          </Buttonwithicon>
        </SlideContent>
        <RegionGraphic>
          <Image src={NortheastMap} alt="" />
        </RegionGraphic>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={CentralWestRegion} alt="" />
        <SlideContent>
          <SectionTitle>Central-West</SectionTitle>
          <SectionParagraph>
            The Center-West Region of Brazil is a vibrant and dynamic region
            that offers a wide range of attractions and activities for visitors.
          </SectionParagraph>
          <Buttonwithicon href="/central-west">
            EXPERIENCE THE CENTRAL-WEST
          </Buttonwithicon>
        </SlideContent>
        <RegionGraphic>
          <Image src={CentralWestMap} alt="" />
        </RegionGraphic>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SoutheastRegion} alt="" />
        <Container>
          <SlideContent>
            <SectionTitle>Southeast</SectionTitle>
            <SectionParagraph>
              The southeast region of Brazil is a must-visit destination for
              anyone looking to experience the culture and natural beauty of
              this vibrant country.
            </SectionParagraph>
            <Buttonwithicon href="/southeast">
              EXPERIENCE THE SOUTHEAST
            </Buttonwithicon>
          </SlideContent>
          <RegionGraphic>
            <Image src={SoutheastMap} alt="" />
          </RegionGraphic>
        </Container>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SouthRegion} alt="" />
        <SlideContent>
          <SectionTitle>South</SectionTitle>
          <SectionParagraph>
            The south region of Brazil is a breathtaking destination that is
            home to some of the most stunning natural wonders in the world.
          </SectionParagraph>
          <Buttonwithicon href="/south">EXPERIENCE THE SOUTH</Buttonwithicon>
        </SlideContent>
        <RegionGraphic>
          <Image src={SouthMap} alt="" />
        </RegionGraphic>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default RegionSlider;
