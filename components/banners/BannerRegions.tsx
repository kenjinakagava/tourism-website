import Banner from "./Banner";
import RegionsIllustration from "@/public/RegionsIllustration.svg";

const BannerRegions = () => {
  return (
    <Banner
      title="Meet the regions of Brazil"
      isH1={true}
      illustration={RegionsIllustration}
    />
  );
};

export default BannerRegions;
