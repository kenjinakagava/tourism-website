import styled from "styled-components";

interface ContainedSectionProps {
  margin?: string;
  padding?: string;
}

const ContainedSection = styled.section<ContainedSectionProps>`
  min-height: 100vh;
  width: 80%;
  margin: ${(props) => (props.margin ? props.margin : "6.25rem auto 0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

export default ContainedSection;
