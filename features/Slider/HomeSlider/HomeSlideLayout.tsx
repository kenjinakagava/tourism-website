import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import Container from "@/components/containers/Container";
import Title from "@/components/typography/Title";
import Paragraph from "@/components/typography/Paragraph";
import BlackFilter from "@/components/layout/BlackFilter";
import ArrowButton from "@/components/buttons/ArrowButton";

interface Props {
  title: string;
  paragraph?: string;
  titleColor?: string;
  paragraphColor?: string;
  backgroundImage: StaticImageData;
  mapImage?: StaticImageData;
  blackFilterOpacity?: number;
  buttonText: string;
  href: string;
  buttonColor?: string;
  buttonBackgroundColor?: string;
}

const SlideContent = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  z-index: 51;
  top: 0;
  left: 0%;
  right: 0%;
  gap: 1rem;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const HomeSlideLayout = (props: Props) => {
  return (
    <>
      <Image src={props.backgroundImage} alt="" fill={true} />
      <SlideContent>
        <Container>
          <Title color={props.titleColor ? props.titleColor : "white"}>
            {props.title}
          </Title>
          <Paragraph
            color={props.paragraphColor ? props.paragraphColor : "white"}
          >
            {props.paragraph}
          </Paragraph>
          <ArrowButton
            href={props.href}
            color={props.buttonColor}
            backgroundColor={props.buttonBackgroundColor}
          >
            {props.buttonText}
          </ArrowButton>
        </Container>
        {props.mapImage !== undefined ? (
          <Image src={props.mapImage} alt="" />
        ) : null}
      </SlideContent>
      <BlackFilter opacity={props.blackFilterOpacity} />
    </>
  );
};

export default HomeSlideLayout;
