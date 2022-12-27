import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right" | string;
  color?: string;
  fontSize?: string;
  fontSizeMobile?: string;
}

const Title = styled.h2<
  Pick<TitleProps, "textAlign" | "color" | "fontSize" | "fontSizeMobile">
>`
  font-size: ${(props) =>
    props.fontSizeMobile ? props.fontSizeMobile : "2.25rem"};
  margin-bottom: 1rem;
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  @media (min-width: 768px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "3rem")};
  }
`;

export default Title;
