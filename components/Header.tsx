import Image from "next/image";
import styled from "styled-components";

import RioDeJaneiro from "../public/Riodejaneiro.jpg";

const StyledHeader = styled.header`
  inline-size: 100%;
  min-block-size: 100vh;
`;

const HeroBanner = styled(Image)`
  block-size: 100vh;
  object-fit: cover;
  position: relative;
`;

const HeroTagline = styled.h1`
  position: absolute;
  top: 20%;
  left: 0;
  color: white;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  filter: drop-shadow(1px 2px 2px #333);
`;

const GradientText = styled.span`
  background-image: linear-gradient(to right, #a8ff78, #78ffd6);
  -webkit-background-clip: text;
  color: transparent;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeroBanner src={RioDeJaneiro} alt=""></HeroBanner>
      <HeroTagline>
        Brazil, a <GradientText>paradise</GradientText>
      </HeroTagline>
    </StyledHeader>
  );
};

export default Header;
