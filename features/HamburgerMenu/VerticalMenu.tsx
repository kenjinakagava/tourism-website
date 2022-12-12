import styled from "styled-components";
interface VerticalMenuProps {
  isOpen: boolean;
}

const MenuScreen = styled.div<VerticalMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  transition: 0.2s ease;
  transform: ${(props) =>
    props.isOpen === true ? "translateY(0)" : "translateY(-150%)"};
`;

const MenuWrapper = styled.div`
  padding-top: 34px;
`;

const VerticalMenu = ({ isOpen }: VerticalMenuProps) => {
  return (
    <MenuScreen isOpen={isOpen}>
      <MenuWrapper></MenuWrapper>
    </MenuScreen>
  );
};

export default VerticalMenu;
