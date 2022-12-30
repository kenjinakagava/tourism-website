import Banner from "./Banner";
import TravelInformationIllustration from "@/public/TravelInformationIllustration.svg";

const BannerTravelInformation = () => {
  return (
    <Banner
      title="Travel Information"
      isH1={true}
      illustration={TravelInformationIllustration}
    />
  );
};

export default BannerTravelInformation;
