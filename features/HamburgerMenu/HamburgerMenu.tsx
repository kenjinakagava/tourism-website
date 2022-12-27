import { useState } from "react";
import styled from "styled-components";
import VerticalMenu from "./VerticalMenu";
import { FaBars, FaTimes } from "react-icons/fa";

interface HamburgerMenuProps {
  isOpen: boolean;
  isHero?: boolean;
}

const Hamburger = styled.button<HamburgerMenuProps>`
  position: fixed;
  right: 2.5%;
  z-index: 99;
  svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => (props.isOpen === true ? "black" : "white")};
    filter: drop-shadow(0px 1px 1px #333);
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <>
      <Hamburger isOpen={isOpen} aria-label="Open menu" onClick={toggleMenu}>
        {isOpen === true ? (
          <FaTimes data-testid="hamburgermenu-close" />
        ) : (
          <FaBars data-testid="hamburgermenu-open" />
        )}
      </Hamburger>
      <VerticalMenu isOpen={isOpen} />
    </>
  );
};

export default HamburgerMenu;
