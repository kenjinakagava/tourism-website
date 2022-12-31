import styled from "styled-components";
import Image from "next/image";
import Paragraph from "../typography/Paragraph";
import Title from "../typography/Title";
import LinkButton from "../buttons/LinkButton";

interface SplitProps {
  src: { src: string; width: number; height: number };
  alt: string;
  orientation?: "left" | "right";
  title: string;
  paragraph: string;
  textAlign?: "left" | "center" | "right" | string;
  color?: string;
  buttonLabel: string;
  href: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 7.5rem;
  @media (min-width: 768px) {
    align-items: center;
  }
  @media (min-width: 1200px) {
    align-items: unset;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const SplitImage = styled(Image)<
  Pick<SplitProps, "src" | "alt" | "orientation">
>`
  margin-bottom: 1rem;
  border-radius: 4px;
  width: 100%;
  max-width: 600px;
  @media (min-width: 1200px) {
    width: 50%;
    order: ${(props) => `${props.orientation === "left" ? 1 : 2}`};
  }
`;

const SplitContent = styled.div<Pick<SplitProps, "orientation">>`
  margin-bottom: 1rem;
  @media (min-width: 1200px) {
    width: 50%;
    order: ${(props) => `${props.orientation === "left" ? 2 : 1}`};
  }
`;

const SplitContainer = (props: SplitProps) => {
  return (
    <Container>
      <SplitImage
        src={props.src}
        alt={props.alt}
        orientation={props.orientation}
      />
      <SplitContent>
        <Title color={props.color} textAlign={props.textAlign}>
          {props.title}
        </Title>
        <Paragraph color={props.color} textAlign={props.textAlign}>
          {props.paragraph}
        </Paragraph>
        <LinkButton href={props.href}>{props.buttonLabel}</LinkButton>
      </SplitContent>
    </Container>
  );
};

export default SplitContainer;
