import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import LogoDesktop from "../public/LogoDesktop.svg";
import LogoMobileWhite from "../public/LogoMobileWhite.svg";
import HamburgerMenu from "./HamburgerMenu";

const StyledNav = styled.nav`
  width: 100%;
  padding-top: 1rem;
`;

const NavContentWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Image)`
  width: 60px;
  height: 60px;
  filter: drop-shadow(0px 1px 1px #333);
  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopLogo = styled(Image)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 125px;
    height: 50px;
    filter: drop-shadow(0px 1px 1px #333);
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  // Using this selector because I was having a problem when using a styled component to fill the search icon
  svg {
    fill: white;
    filter: drop-shadow(0px 1px 1px #333);
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <NavContentWrapper>
        <Link href="/" aria-label="Go to home page">
          <Logo src={LogoMobileWhite} alt="" />
          <DesktopLogo src={LogoDesktop} alt="" />
        </Link>
        <NavList>
          <li>
            <Link href="/search" aria-label="Go to search page">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/saved" aria-label="Go to saved locations page">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" />
              </svg>
            </Link>
          </li>
          <HamburgerMenu />
        </NavList>
      </NavContentWrapper>
    </StyledNav>
  );
};

export default Nav;
