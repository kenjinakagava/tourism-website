import Title from "@/components/typography/Title";
import Paragraph from "@/components/typography/Paragraph";
import styled from "styled-components";
import Image from "next/image";
import RegionProps from "./interface";
import BlackFilter from "@/components/layout/BlackFilter";

const Card = styled.div``;

const ContentContainer = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const ImageContainer = styled.div``;

const RegionSlideImage = styled(Image)`
  z-index: -1;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: transparent;
  border-radius: 4px;
`;

const RegionSlideLayout = ({ src, title, paragraph }: RegionProps) => {
  return (
    <Card>
      <ImageContainer>
        <RegionSlideImage src={src} alt="" sizes="100vw" />
        <BlackFilter />
      </ImageContainer>
      <ContentContainer>
        <Title color={"white"}>{title}</Title>
        <Paragraph color={"white"}>{paragraph}</Paragraph>
      </ContentContainer>
    </Card>
  );
};

export default RegionSlideLayout;
