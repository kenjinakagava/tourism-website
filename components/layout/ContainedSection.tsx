import styled from "styled-components";

interface ContainedSectionProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
}

const ContainedSection = styled.section<ContainedSectionProps>`
  min-height: 100vh;
  width: 80%;
  margin: ${(props) => (props.margin ? props.margin : "6.25rem auto 0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#f1f5f9"};
`;

export default ContainedSection;
