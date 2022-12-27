import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import Image from "next/image";
import styled from "styled-components";
import Container from "../layout/Container";

interface Props {
  illustration?: string;
  title: string;
  isH1?: boolean;
}

const BannerContainer = styled.div`
  padding: 2rem 0;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    img {
      margin-left: auto;
    }
  }
`;

const BannerContentWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const Banner = ({ illustration, title, isH1 }: Props) => {
  return (
    <BannerContainer>
      <BannerContentWrapper>
        <Title as={isH1 === true ? "h1" : "h2"}>{title}</Title>
        {illustration !== undefined ? (
          <Image src={illustration} alt="" />
        ) : null}
      </BannerContentWrapper>
    </BannerContainer>
  );
};

export default Banner;
