import styled from "styled-components";

interface FullSectionProps {
  children: React.ReactNode;
}

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
`;

const FullSection = ({ children }: FullSectionProps) => {
  return <Section>{children}</Section>;
};

export default FullSection;
