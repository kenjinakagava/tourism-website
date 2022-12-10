import Image from "next/image";
import styled from "styled-components";

import RioDeJaneiro from "../public/Riodejaneiro.jpg";
import Nav from "./Nav";

interface HeaderProps {
  isHero?: boolean;
}

const StyledHeader = styled.header`
  width: 100%;
  min-height: 100vh;
`;

const HeroBanner = styled(Image)`
  block-size: 100vh;
  object-fit: cover;
  position: relative;
  z-index: -1;
`;

const HeroTagline = styled.h1`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 90%;
  color: white;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  filter: drop-shadow(1px 1px 1px #333);
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const GradientText = styled.span`
  background-image: linear-gradient(to right, #a8ff78, #78ffd6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Header = ({ isHero }: HeaderProps) => {
  return (
    <StyledHeader>
      <Nav isHero={isHero} />
      <HeroBanner src={RioDeJaneiro} alt="" priority={true} />
      <HeroTagline>
        Brazil, a <GradientText>paradise</GradientText>
      </HeroTagline>
    </StyledHeader>
  );
};

export default Header;
