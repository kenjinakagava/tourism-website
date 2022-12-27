import styled from "styled-components";

interface FullSectionProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
}

const FullSection = styled.section<FullSectionProps>`
  min-height: 100vh;
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#f1f5f9"};
`;

export default FullSection;
