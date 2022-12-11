import { useState } from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";
import MenuIcon from "./MenuIcon";
import VerticalMenu from "./VerticalMenu";

const Hamburger = styled.li`
  position: relative;
  z-index: 99;
  svg {
    fill: white;
    filter: drop-shadow(0px 1px 1px #333);
  }
  @media (min-width: 768px) {
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
      <Hamburger>
        <button aria-label="Open menu" onClick={toggleMenu}>
          {isOpen ? <CloseButton /> : <MenuIcon />}
        </button>
      </Hamburger>
      {/* 
        this isn't in the conditional "isOpen ? <VerticalMenu isOpen={isOpen}/>"
        because that would break the transition, my guess is that it happens
        because the component is being rendered in an already open state.
        */}
      <VerticalMenu isOpen={isOpen} />
    </>
  );
};

export default HamburgerMenu;
