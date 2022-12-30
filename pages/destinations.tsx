import BannerDestinations from "@/components/banners/BannerDestinations";
import FullSection from "@/components/layout/FullSection";
import Grid from "@/components/layout/Grid";
import Layout from "@/components/layout/Layout";
import Title from "@/components/typography/Title";
import DestinationCards from "@/features/Cards/DestinationCards";

const Destinations = () => {
  return (
    <Layout
      title="Top Destinations in Brazil | Tourism Brazil"
      description="Discover the diverse and vibrant destinations of Brazil, visit the historic city of Salvador, or relax in the laid-back beach town of Florianopolis."
      banner={<BannerDestinations />}
    >
      <FullSection padding="3rem 0">
        <Title textAlign="center">Destination</Title>
        <Grid>
          <DestinationCards />
        </Grid>
      </FullSection>
    </Layout>
  );
};

export default Destinations;
