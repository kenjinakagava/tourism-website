import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f5f9;
  min-width: 36px;
  height: 36px;
  border-radius: 8px;
  svg {
    height: 16px;
    width: 16px;
  }
`;

const SaveButton = () => {
  return (
    <ButtonContainer>
      <FaHeart />
    </ButtonContainer>
  );
};

export default SaveButton;
