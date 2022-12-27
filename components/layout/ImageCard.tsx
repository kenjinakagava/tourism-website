import { StaticImageData } from "next/image";
import styled from "styled-components";
import Title from "../typography/Title";
import Image from "next/image";
interface ImageCardProps {
  src: StaticImageData;
  title: string;
  isLarge?: boolean;
}

const CardWrapper = styled.div``;

const ImageCard = ({ src, title }: ImageCardProps) => {
  return (
    <CardWrapper>
      <Image src={src} alt=""></Image>
      <Title as={"h3"}>{title}</Title>
    </CardWrapper>
  );
};

export default ImageCard;
