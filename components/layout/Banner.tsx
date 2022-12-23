import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import styled from "styled-components";

interface Props {
  color?: string;
  illustration?: string;
  title: string;
  paragraph?: string;
}

const BannerContainer = styled.div``;

const Banner = ({ color, illustration, title, paragraph }: Props) => {
  return <BannerContainer></BannerContainer>;
};

export default Banner;
