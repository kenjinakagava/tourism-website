import HamburgerMenu from "features/HamburgerMenu/HamburgerMenu";
import Link from "next/link";
import styled from "styled-components";
import LogoDesktop from "../public/LogoDesktop.svg";
import LogoMobile from "../public/LogoMobile.svg";
import { FaSearch, FaHeart } from "react-icons/fa";

const Logo = styled.img`
  width: 60px;
  height: 60px;
  filter: drop-shadow(0px 1px 1px #333);
  @media (min-width: 768px) {
    width: 125px;
    height: 50px;
  }
`;

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
    // Using this selector because I was having a problem when using a styled component to fill the search icon
  }
  svg {
    width: 24px;
    height: 24px;
    fill: white;
    filter: drop-shadow(0px 1px 1px #333);
  }
`;

const Nav = () => (
  <NavWrapper>
    <NavContentWrapper>
      <Link href="/" aria-label="Go to home page">
        <picture>
          <source srcSet={LogoDesktop.src} media="(min-width: 768px)" />
          <Logo src={LogoMobile.src} alt="" />
        </picture>
      </Link>
      <NavIconLinks>
        <li>
          <Link href="/search" aria-label="Go to search page">
            <FaSearch />
          </Link>
        </li>
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
