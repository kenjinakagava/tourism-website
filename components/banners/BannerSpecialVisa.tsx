import Banner from "./Banner";
import SpecialVisaIllustration from "@/public/SpecialVisaIllustration.svg";

const BannerSpecialVisa = () => {
  return (
    <Banner
      title="Special Visa"
      isH1={true}
      illustration={SpecialVisaIllustration}
    />
  );
};

export default BannerSpecialVisa;
