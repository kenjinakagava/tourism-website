import { useState } from "react";
import styled from "styled-components";
import VerticalMenu from "./VerticalMenu";

const Hamburger = styled.li`
  position: relative;
  z-index: 999;
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
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          )}
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
