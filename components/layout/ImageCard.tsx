import styled from "styled-components";
import Title from "../typography/Title";

interface ImageCardProps {
  src: string;
  title: string;
}

const CardWrapper = styled.div<Pick<ImageCardProps, "src">>`
  margin-top: 1rem;
  margin-left: 1rem;
  background: ${(props) => (props.src ? props.src : "")};
`;

const ImageCard = ({ src, title }: ImageCardProps) => {
  return (
    <CardWrapper src={src}>
      <Title as={"h3"}>{title}</Title>
    </CardWrapper>
  );
};

export default ImageCard;
