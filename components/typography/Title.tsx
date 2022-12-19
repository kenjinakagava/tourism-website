import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right" | string;
  color?: string;
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
  fontSize?: string;
  fontSizeMobile?: string;
}

const StyledTitle = styled.h2<
  Pick<TitleProps, "textAlign" | "color" | "fontSize" | "fontSizeMobile">
>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2.25rem")};
  margin-bottom: 1rem;
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  @media (min-width: 768px) {
    font-size: ${(props) =>
      props.fontSizeMobile ? props.fontSizeMobile : "3rem"};
  }
`;

const Title = ({
  children,
  textAlign,
  color,
  heading,
  fontSize,
  fontSizeMobile,
}: TitleProps) => {
  const headingLevel = heading === undefined ? 2 : heading;
  return (
    <StyledTitle
      textAlign={textAlign}
      color={color}
      as={`h${headingLevel}`}
      fontSize={fontSize}
      fontSizeMobile={fontSizeMobile}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
