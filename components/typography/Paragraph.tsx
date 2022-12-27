import styled from "styled-components";

interface ParagraphProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right" | string;
  color?: string;
  fontSize?: string;
  fontSizeMobile?: string;
  maxWidth?: string;
}

const Paragraph = styled.p<
  Pick<
    ParagraphProps,
    "textAlign" | "color" | "fontSize" | "fontSizeMobile" | "maxWidth"
  >
>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "55ch")};
  margin-bottom: 1rem;
  font-size: ${(props) =>
    props.fontSizeMobile ? props.fontSizeMobile : "1.25rem"};
  font-family: sans-serif;
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  @media (min-width: 768px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.75rem")};
  }
`;

export default Paragraph;
