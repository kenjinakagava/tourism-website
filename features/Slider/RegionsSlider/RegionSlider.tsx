import Slider from "../Slider";

interface RegionSliderProps {
  children: React.ReactNode;
}

const RegionSlider = ({ children }: RegionSliderProps) => {
  return <Slider bulletsize="48px">{children}</Slider>;
};

export default RegionSlider;
