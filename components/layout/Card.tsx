import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import Container from "./Container";
import SaveButton from "@/features/Saved/SaveButton";

interface CardProps {
  src: StaticImageData;
  title: string;
  paragraph?: string;
}

const CardContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 1px #f1f1f1;
  border-radius: 8px 8px 8px 0;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  img {
    border-radius: 8px 8px 0 0;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  height: 100%;
  > button {
    align-self: flex-end;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const CardContentContainer = styled(Container)`
  width: 90%;
  margin-top: 0.5rem;
  max-width: 400px;
`;

const Card = ({ src, title, paragraph }: CardProps) => {
  return (
    <CardContainer>
      <Image src={src} alt="" width={400} height={267} />

      <CardContentContainer>
        <Title fontSizeMobile="1.25rem" fontSize="1.5rem" as={"h3"}>
          {title}
        </Title>
        {paragraph ? (
          <Paragraph fontSizeMobile="1rem" fontSize="1rem">
            {paragraph}
          </Paragraph>
        ) : null}
      </CardContentContainer>
      <Wrapper>
        <SaveButton />
      </Wrapper>
    </CardContainer>
  );
};

export default Card;
