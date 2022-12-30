import FullSection from "@/components/layout/FullSection";
import Grid from "@/components/layout/Grid";
import Title from "@/components/typography/Title";
import BannerExperiences from "@/components/banners/BannerExperiences";
import ExperienceCards from "@/features/Cards/ExperienceCards";
import Layout from "@/components/layout/Layout";

const Experiences = () => {
  return (
    <>
      <Layout
        title="Experience Brazil | Tourism Brazil"
        description="Brazil is a country full of adventure and excitement, experience the thrill of Brazil's diverse culture, vibrant cities, and breathtaking natural beauty"
        banner={<BannerExperiences />}
      >
        <FullSection padding="3rem 0">
          <Title textAlign="center">Experiences</Title>
          <Grid>
            <ExperienceCards />
          </Grid>
        </FullSection>
      </Layout>
    </>
  );
};

export default Experiences;
