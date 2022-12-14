import styled from "styled-components";
import StyledTitle from "@/components/typography/Title";
import FullSection from "@/components/layout/FullSection";
import Paragraph from "@/components/typography/Paragraph";
import BannerRegions from "@/components/banners/BannerRegions";
import {
  NorthRegionSlider,
  NortheastRegionSlider,
  MidwestRegionSlider,
  SoutheastRegionSlider,
  SouthRegionSlider,
} from "@/features/Slider/RegionsSlider/regions";
import Layout from "@/components/layout/Layout";
import RegionSlider from "@/features/Slider/RegionsSlider/RegionSlider";

const RegionsTitle = styled(StyledTitle)`
  padding-top: 1rem;
`;

const RegionsContainer = styled.div`
  padding: 5rem 0;
  margin-left: 2rem;
`;

const Regions = () => {
  return (
    <>
      <Layout
        title="Regions of Brazil | Tourism Brazil"
        description="Explore the diverse regions of Brazil, each with its own unique culture, landscapes, and attractions, in Brazil there's always something for everyone."
        banner={<BannerRegions />}
      >
        <FullSection id="north">
          <RegionsContainer>
            <RegionsTitle>North</RegionsTitle>
            <Paragraph>
              The north of Brazil is a region with a rich history and culture,
              and it is a great destination for anyone looking to explore a new
              and exciting place. The north is home to stunning beaches,
              beautiful landscapes, and vibrant cities.
            </Paragraph>
          </RegionsContainer>
          <NorthRegionSlider />
        </FullSection>
        <FullSection id="northeast">
          <RegionsContainer>
            <RegionsTitle>Northeast</RegionsTitle>
            <Paragraph>
              The northeast of Brazil is a great destination for anyone looking
              to experience the authentic and diverse charm of Brazil. It is
              home to a variety of cultural attractions, including historic
              cities and lively festivals.
            </Paragraph>
          </RegionsContainer>
          <NortheastRegionSlider />
        </FullSection>
        <FullSection id="midwest">
          <RegionsContainer>
            <RegionsTitle>Midwest</RegionsTitle>
            <Paragraph>
              The Midwest is home to a variety of landscapes, including the
              Pantanal, the world's largest wetland, which is home to a diverse
              array of flora and fauna.
            </Paragraph>
          </RegionsContainer>
          <MidwestRegionSlider />
        </FullSection>
        <FullSection id="southeast">
          <RegionsContainer>
            <RegionsTitle>Southeast</RegionsTitle>
            <Paragraph>
              The Southeast of Brazil is home to some of the country's most
              iconic cities, including Rio de Janeiro and S??o Paulo, which are
              known for their stunning beaches, vibrant nightlife, and cultural
              attractions.
            </Paragraph>
          </RegionsContainer>
          <SoutheastRegionSlider />
        </FullSection>
        <FullSection id="south">
          <RegionsContainer>
            <RegionsTitle>South</RegionsTitle>
            <Paragraph>
              The South of Brazil is home to some of the country's most stunning
              landscapes, including the breathtaking Iguazu Falls and the
              Atlantic Forest, which is home to a diverse array of flora and
              fauna.
            </Paragraph>
          </RegionsContainer>
          <SouthRegionSlider />
        </FullSection>
      </Layout>
    </>
  );
};

export default Regions;
