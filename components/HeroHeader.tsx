import Image from "next/image";
import styled from "styled-components";

import RioDeJaneiro from "../public/Riodejaneiro.jpg";
import Header from "./Header";

const HeroBanner = styled(Image)`
  object-fit: cover;
  z-index: -1;
`;

const HeroTagline = styled.h1`
  //
  min-height: calc(100vh - 156px);
  max-width: 90%;
  margin: 0 auto;
  margin-top: 5rem;
  color: white;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  filter: drop-shadow(1px 1px 1px #333);
  @media (min-width: 768px) {
    min-height: calc(100vh - 226px);
    font-size: 5rem;
    margin-top: 10rem;
  }
`;

const GradientText = styled.span`
  background-image: linear-gradient(to right, #a8ff78, #78ffd6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const HeroHeader = () => {
  return (
    <Header>
      <HeroBanner src={RioDeJaneiro} alt="" priority={true} fill={true} />
      <HeroTagline>
        Brazil, a <GradientText>paradise</GradientText>
      </HeroTagline>
    </Header>
  );
};

export default HeroHeader;
