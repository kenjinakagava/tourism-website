import HamburgerMenu from "features/HamburgerMenu/HamburgerMenu";
import Link from "next/link";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import Logo from "./Logo";

interface Props {
  isHero?: boolean;
}

const NavWrapper = styled.nav`
  width: 100%;
  padding-top: 1rem;
`;

const NavContentWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 1rem;
  // Desktop Nav Text
  > ul {
    color: ${(props) => (props.isHero === true ? "white" : "black")};
    font-family: "Dosis", sans-serif;
  }
  // Heart Icon
  > ul svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => (props.isHero === true ? "white" : "black")};
    filter: drop-shadow(0px 1px 1px #333);
  }
  // hamburger menu
  button > svg {
    fill: ${(props) => (props.isHero === true ? "white" : "black")};
  }
`;

const NavIconLinks = styled.ul<Props>`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.25rem;
  }
`;

const Nav = ({ isHero }: Props) => (
  <NavWrapper>
    <NavContentWrapper isHero={isHero}>
      <Logo dark={!isHero} />
      <NavIconLinks>
        <li>
          <Link href="/regions">Regions</Link>
        </li>
        <li>
          <Link href="/experiences-and-destinations#experiences">
            Experiences
          </Link>
        </li>
        <li>
          <Link href="/experiences-and-destinations#destinations">
            Destinations
          </Link>
        </li>
        <li>
          <Link href="/special-visa">Special Visa</Link>
        </li>
        <li>
          <Link href="/travel-information">Travel Information</Link>
        </li>
      </NavIconLinks>
      <NavIconLinks>
        <li>
          <Link href="/saved" aria-label="Go to saved locations page">
            <FaHeart />
          </Link>
        </li>
      </NavIconLinks>
      <HamburgerMenu />
    </NavContentWrapper>
  </NavWrapper>
);

export default Nav;
