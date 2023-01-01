import styled from "styled-components";
import LogoMobile from "public/LogoMobile.svg";
import LogoDesktop from "public/LogoDesktop.svg";
import LogoMobileDark from "public/LogoMobileDark.svg";
import LogoDesktopDark from "public/LogoDesktopDark.svg";
import Link from "next/link";

interface Props {
  dark?: boolean;
  version?: "desktop" | "mobile";
}

const ResponsiveLogo = styled.img`
  width: 60px;
  height: 60px;
  filter: drop-shadow(0px 1px 1px #333);
  @media (min-width: 900px) {
    width: 125px;
  }
`;

const DesktopLogo = styled.img`
  width: 125px;
  height: 60px;
  filter: drop-shadow(0px 1px 1px #333);
`;

const MobileLogo = styled.img`
  width: 60px;
  height: 60px;
  filter: drop-shadow(0px 1px 1px #333);
`;

const Logo = ({ dark, version }: Props) => {
  if (version === "desktop") {
    return (
      <Link href="/" aria-label="Go back to homepage">
        {dark ? (
          <DesktopLogo src={LogoDesktopDark.src} alt="" />
        ) : (
          <DesktopLogo src={LogoDesktop.src} alt="" />
        )}
      </Link>
    );
  } else if (version === "mobile") {
    return (
      <Link href="/">
        {dark ? (
          <MobileLogo src={LogoMobileDark.src} alt="" />
        ) : (
          <MobileLogo src={LogoMobile.src} alt="" />
        )}
      </Link>
    );
  }
  return (
    <Link href="/" aria-label="Go to home page">
      {dark ? (
        <picture>
          <source srcSet={LogoDesktopDark.src} media="(min-width: 900px)" />
          <ResponsiveLogo src={LogoMobileDark.src} alt="" />
        </picture>
      ) : (
        <picture>
          <source srcSet={LogoDesktop.src} media="(min-width: 900px)" />
          <ResponsiveLogo src={LogoMobile.src} alt="" />
        </picture>
      )}
    </Link>
  );
};

export default Logo;
