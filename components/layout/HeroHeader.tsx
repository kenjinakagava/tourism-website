import styled from "styled-components";

const HeroTagline = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 76px);
  max-width: 90%;
  margin: 0 auto;
  color: white;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  filter: drop-shadow(1px 1px 1px #333);
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const HeroBanner = styled.div`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-image: url("HomeHeroFHD.webp");
`;

const GradientText = styled.span`
  background-image: linear-gradient(to right, #a8ff78, #78ffd6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const HeroHeader = () => {
  return (
    <>
      <HeroBanner />
      <HeroTagline>
        COME TO<GradientText>BRAZIL</GradientText>
      </HeroTagline>
    </>
  );
};

export default HeroHeader;
