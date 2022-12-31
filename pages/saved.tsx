import BannerSaved from "@/components/banners/BannerSaved";
import Card from "@/components/cards/Card";
import FullSection from "@/components/layout/FullSection";
import Grid from "@/components/layout/Grid";
import Layout from "@/components/layout/Layout";
import SavedContent from "@/features/Saved/SavedContent";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  paragraph: string;
  image: string;
}

const Saved = () => {
  //when is saved updates update this useeffect too
  const [savedLocations, setSavedLocations] = useState<Array<Props>>();
  useEffect(() => {
    const locationsKey = Object.keys(localStorage);
    const savedLocations: Array<Props> = [];

    locationsKey.forEach((key) => {
      const value = localStorage.getItem(key);
      if (value !== null && value !== "ally-supports-cache") {
        savedLocations.push(JSON.parse(value));
      }
    });
    setSavedLocations(savedLocations);
    console.log(savedLocations);
  }, []);
  return (
    <Layout
      title="Saved Locations"
      description="Save your favorite places in Brazil with our easy-to-use location bookmarking tool. From iconic landmarks and natural wonders to hidden gems and cultural attractions, start planning your dream trip today!"
      banner={<BannerSaved />}
    >
      <>
        <FullSection padding="3rem 0">
          {savedLocations?.length === 0 ? <SavedContent /> : null}
          <Grid>
            {savedLocations?.map((location) => (
              <Card
                key={location.title}
                title={location.title}
                paragraph={location.paragraph}
                src={location.image}
              />
            ))}
          </Grid>
        </FullSection>
      </>
    </Layout>
  );
};

export default Saved;
