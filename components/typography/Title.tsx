import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right" | string;
  color?: string;
  fontSize?: string;
  fontSizeMobile?: string;
  margin?: string;
}

const Title = styled.h2<
  Pick<
    TitleProps,
    "textAlign" | "color" | "fontSize" | "fontSizeMobile" | "margin"
  >
>`
  font-size: ${(props) =>
    props.fontSizeMobile ? props.fontSizeMobile : "2.25rem"};
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  margin: ${(props) => (props.margin ? props.margin : "0 0 1rem")};
  @media (min-width: 768px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "3rem")};
  }
`;

export default Title;
