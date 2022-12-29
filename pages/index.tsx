import SectionImg1 from "../public/Sectionimg1.jpg";
import SectionImg2 from "../public/Sectionimg2.png";
import SplitContainer from "../components/layout/SplitContainer";
import ContainedSection from "@/components/layout/ContainedSection";
import FullSection from "@/components/layout/FullSection";
import RegionSlider from "@/features/Slider/HomeSlider/HomeSlider";
import VerticalMenu from "@/features/HamburgerMenu/VerticalMenu";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout
        title="Tourism Brazil"
        description="Come and experience the magic of Brazil! With its stunning beaches, vibrant culture, and exciting cities, Brazil is the perfect destination for your next vacation."
        isHero={true}
        backgroundCoolor="white"
      >
        <ContainedSection backgroundColor="white">
          <SplitContainer
            src={SectionImg1}
            alt={"a"}
            href="/"
            buttonLabel="DISCOVER"
            title="DISCOVER THE BEAUTY OF BRAZIL"
            paragraph="Come and experience the magic of Brazil! With its stunning beaches, vibrant culture, and exciting cities, Brazil is the perfect destination for your next vacation. From the Amazon rainforest to the bustling streets of Rio de Janeiro, Brazil offers a wide range of experiences for every type of traveler."
          />
          <SplitContainer
            src={SectionImg2}
            alt={"a"}
            href="/"
            buttonLabel="EXPLORE"
            title="EXPLORE BRAZIL'S NATURAL WONDERS."
            orientation="left"
            paragraph="Brazil is a country rich in natural beauty, one of its most famous attractions is the Iguazu Falls, a series of over 275 waterfalls on the border between Brazil and Argentina. These falls are a must-see for anyone interested in experiencing Brazil's stunning flora and landscapes."
          />
        </ContainedSection>
        <FullSection>
          <RegionSlider />
        </FullSection>
        <VerticalMenu isOpen={false} />
      </Layout>
    </>
  );
}
