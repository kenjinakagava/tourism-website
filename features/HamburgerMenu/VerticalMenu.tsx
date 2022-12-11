import styled from "styled-components";

interface VerticalMenuProps {
  isOpen: boolean;
}

const MenuScreen = styled.div<VerticalMenuProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  background: white;
  transition: 0.2s ease;
  transform: ${(props) =>
    props.isOpen === true ? "translateY(0)" : "translateY(-150%)"};
`;

const Menu = styled.div`
  position: absolute;
  z-index: 2;
`;

const VerticalMenu = ({ isOpen }: VerticalMenuProps) => {
  return (
    <MenuScreen isOpen={isOpen}>
      <Menu></Menu>
    </MenuScreen>
  );
};

export default VerticalMenu;
