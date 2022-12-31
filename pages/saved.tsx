import Layout from "@/components/layout/Layout";
import BannerSaved from "@/components/banners/BannerSaved";
import Announcement from "@/components/typography/Announcement";
import SavedContent from "@/features/Saved/SavedContent";

const Saved = () => {
  return (
    <Layout
      title="Saved Locations"
      description="Save your favorite places in Brazil with our easy-to-use location bookmarking tool. From iconic landmarks and natural wonders to hidden gems and cultural attractions, start planning your dream trip today!"
      banner={<BannerSaved />}
    >
      <SavedContent />
    </Layout>
  );
};

export default Saved;
