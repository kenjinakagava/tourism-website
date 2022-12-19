import HamburgerMenu from "features/HamburgerMenu/HamburgerMenu";
import Link from "next/link";
import styled from "styled-components";
import LogoDesktop from "public/LogoDesktop.svg";
import LogoMobile from "public/LogoMobile.svg";
import { FaHeart } from "react-icons/fa";
import Logo from "./Logo";

const NavWrapper = styled.nav`
  width: 100%;
  padding-top: 1rem;
`;

const NavContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;

const NavIconLinks = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: white;
    filter: drop-shadow(0px 1px 1px #333);
  }
  a {
    color: white;
    font-family: "Dosis", sans-serif;
  }
`;

const Nav = () => (
  <NavWrapper>
    <NavContentWrapper>
      <Logo />
      <NavIconLinks>
        <li>
          <Link href="/destinations">Destinations</Link>
        </li>
        <li>
          <Link href="/experiences">Experiences</Link>
        </li>
        <li>
          <Link href="/travel-information">Travel Information</Link>
        </li>
        <li>
          <Link href="/regions">Regions</Link>
        </li>
        <li>
          <Link href="/special-visa">Special Visa</Link>
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
