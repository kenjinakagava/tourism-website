import styled from "styled-components";

interface FullSectionProps {
  margin?: string;
  padding?: string;
}

const FullSection = styled.section<FullSectionProps>`
  min-height: 100vh;
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

export default FullSection;
