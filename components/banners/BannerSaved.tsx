import Banner from "./Banner";
import SavedIllustration from "@/public/SavedIllustration.svg";

const BannerSaved = () => {
  return (
    <Banner
      title="My Favorite Places"
      isH1={true}
      illustration={SavedIllustration}
    />
  );
};

export default BannerSaved;
