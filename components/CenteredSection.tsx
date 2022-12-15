import styled from "styled-components";

interface CenteredSectionProps {
  children: React.ReactNode;
}

const Section = styled.section`
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  margin-top: 6.25rem;
`;

const CenteredSection = ({ children }: CenteredSectionProps) => {
  return <Section>{children}</Section>;
};

export default CenteredSection;
