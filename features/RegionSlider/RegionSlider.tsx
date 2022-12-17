import NorthRegion from "../../public/NorthRegion.jpg";
import NortheastRegion from "../../public/NortheastRegion.jpg";
import CentralWestRegion from "../../public/CentralWestRegion.jpg";
import SoutheastRegion from "../../public/SoutheastRegion.jpg";
import SouthRegion from "../../public/SouthRegion.jpg";
import NorthMap from "../../public/NorthMap.png";
import NortheastMap from "../../public/NortheastMap.png";
import Container from "@/components/layout/Container";
import Buttonwithicon from "@/components/buttons/ArrowButton";
import CentralWestMap from "../../public/CentralWestMap.png";
import SoutheastMap from "../../public/SoutheastMap.png";
import SouthMap from "../../public/SouthMap.png";
import Image from "next/image";
import styled from "styled-components";
import SectionTitle from "@/components/typography/Title";
import BlackFilter from "@/components/layout/BlackFilter";
import Paragraph from "@/components/typography/Paragraph";
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
  .swiper-pagination-bullet-active {
    background: white;
  }
  img {
    object-fit: cover;
    height: 100%;
    margin: 0 auto;
  }
`;

const SlideContent = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  z-index: 51;
  top: 0;
  left: 0%;
  right: 0%;
  gap: 1rem;
  * {
    color: white;
  }
  @media (min-width: 768px) {
    justify-content: center;
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
      pagination={true}
    >
      <SwiperSlide>
        <Image src={NorthRegion} alt="" fill={true} />
        <SlideContent>
          <Container>
            <SectionTitle>North</SectionTitle>
            <Paragraph>
              The North of Brazil is a region with many beautiful and
              interesting sights to see.
            </Paragraph>
            <Buttonwithicon href="/north">EXPERIENCE THE NORTH</Buttonwithicon>
          </Container>
          <Image src={NorthMap} alt="" />
        </SlideContent>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={NortheastRegion} alt="" />
        <SlideContent>
          <Container>
            <SectionTitle>Northeast</SectionTitle>
            <Paragraph>
              The Northeast Region of Brazil is a stunning and diverse region
              that offers something for everyone.
            </Paragraph>
            <Buttonwithicon href="/northeast">
              EXPERIENCE THE NORTHEAST
            </Buttonwithicon>
          </Container>
          <Image src={NortheastMap} alt="" />
        </SlideContent>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={CentralWestRegion} alt="" />
        <SlideContent>
          <Container>
            <SectionTitle>Central-West</SectionTitle>
            <Paragraph>
              The Center-West Region of Brazil is a vibrant and dynamic region
              that offers a wide range of attractions and activities for
              visitors.
            </Paragraph>
            <Buttonwithicon href="/central-west">
              EXPERIENCE THE CENTRAL-WEST
            </Buttonwithicon>
          </Container>
          <Image src={CentralWestMap} alt="" />
        </SlideContent>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SoutheastRegion} alt="" />
        <SlideContent>
          <Container>
            <SectionTitle>Southeast</SectionTitle>
            <Paragraph>
              The southeast region of Brazil is a must-visit destination for
              anyone looking to experience the culture and natural beauty of
              this vibrant country.
            </Paragraph>
            <Buttonwithicon href="/southeast">
              EXPERIENCE THE SOUTHEAST
            </Buttonwithicon>
          </Container>
          <Image src={SoutheastMap} alt="" />
        </SlideContent>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SouthRegion} alt="" />
        <SlideContent>
          <Container>
            <SectionTitle>South</SectionTitle>
            <Paragraph>
              The south region of Brazil is a breathtaking destination that is
              home to some of the most stunning natural wonders in the world.
            </Paragraph>
            <Buttonwithicon href="/south">EXPERIENCE THE SOUTH</Buttonwithicon>
          </Container>
          <Image src={SouthMap} alt="" />
        </SlideContent>
        <BlackFilter opacity={0.2} />
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default RegionSlider;
