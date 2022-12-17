import styled from "styled-components";

interface ParagraphProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right" | string;
  color?: string;
}

const StyledParagraph = styled.p<Pick<ParagraphProps, "textAlign" | "color">>`
  max-width: 55ch;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-family: sans-serif;
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Paragraph = ({ children, textAlign, color }: ParagraphProps) => {
  return (
    <StyledParagraph textAlign={textAlign} color={color}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
