import Footer from "@/components/layout/Footer";
import styled from "styled-components";
import StyledTitle from "@/components/typography/Title";
import Header from "@/components/layout/Header";
import FullSection from "@/components/layout/FullSection";
import Paragraph from "@/components/typography/Paragraph";
import {
  NorthRegionSlider,
  NortheastRegionSlider,
  MidwestRegionSlider,
  SoutheastRegionSlider,
  SouthRegionSlider,
} from "@/features/RegionsSlider/regions";

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
      <Header isHero={false} />
      <main>
        <FullSection>
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
        <FullSection>
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
        <FullSection>
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
        <FullSection>
          <RegionsContainer>
            <RegionsTitle>Southeast</RegionsTitle>
            <Paragraph>
              The Southeast of Brazil is home to some of the country's most
              iconic cities, including Rio de Janeiro and São Paulo, which are
              known for their stunning beaches, vibrant nightlife, and cultural
              attractions.
            </Paragraph>
          </RegionsContainer>
          <SoutheastRegionSlider />
        </FullSection>
        <FullSection>
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
      </main>
      <Footer />
    </>
  );
};

export default Regions;
