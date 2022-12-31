import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import ToggleSaved from "./ToggleSaved";
interface SaveButtonProps {
  backgroundColor?: string;
  title?: string;
  paragraph?: string;
  image?: string;
  isActive?: boolean;
  isSaved?: boolean;
}

const ButtonContainer = styled.button<SaveButtonProps>`
  display: "flex";
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#f1f5f9"};
  min-width: 36px;
  height: 36px;
  border-radius: 8px;
  svg {
    height: 16px;
    width: 16px;
    fill: ${(props) =>
      props.isActive === true || props.isSaved === true ? "#009739" : "unset"};
  }
`;

const SaveButton = (props: SaveButtonProps) => {
  const card = {
    title: props.title !== undefined ? props.title : "",
    paragraph: props.paragraph !== undefined ? props.paragraph : "",
    image: props.image !== undefined ? props.image : "",
  };
  const [isActive, setIsActive] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    setIsSaved(localStorage.getItem(card.title) ? true : false);
  }, []);
  return (
    <ButtonContainer
      backgroundColor={props.backgroundColor}
      onClick={() => ToggleSaved({ card, setIsActive, setIsSaved })}
      isActive={isActive}
      isSaved={isSaved}
    >
      <FaHeart />
    </ButtonContainer>
  );
};

export default SaveButton;
