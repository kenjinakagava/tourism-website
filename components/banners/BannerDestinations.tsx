import Banner from "./Banner";
import DestinationsIllustration from "@/public/DestinationsIllustration.svg";

const BannerDestinations = () => {
  return (
    <Banner
      title="Top Destination in Brazil"
      isH1={true}
      illustration={DestinationsIllustration}
    />
  );
};

export default BannerDestinations;
