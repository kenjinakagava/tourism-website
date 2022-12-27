import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FullSection from "@/components/layout/FullSection";
import styled from "styled-components";
import Container from "@/components/layout/Container";
import Title from "@/components/typography/Title";
import BannerExperiences from "@/components/banners/BannerExperiences";
import ExperienceCards from "@/features/Cards/ExperienceCards";
import DestinationCards from "@/features/Cards/DestinationCards";

const ContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: 768px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ExperiencesSection = styled(FullSection)`
  padding-top: 3rem;
  @media (min-width: 768px) {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ExperiencesAndDestinations = () => {
  return (
    <>
      <Header banner={<BannerExperiences />} />
      <ExperiencesSection id="experiences">
        <Title textAlign="center">Experiences</Title>
        <ContentContainer>
          <ExperienceCards />
        </ContentContainer>
      </ExperiencesSection>
      <FullSection id="destinations" padding="3rem 0 0">
        <Title textAlign="center">Destinations</Title>
        <ContentContainer>
          <DestinationCards />
        </ContentContainer>
      </FullSection>
      <Footer />
    </>
  );
};

export default ExperiencesAndDestinations;
