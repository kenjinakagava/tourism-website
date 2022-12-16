import styled from "styled-components";

interface ParagraphProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right" | string;
  color?: string;
}

const Paragraph = styled.p<Pick<ParagraphProps, "textAlign" | "color">>`
  max-width: 45ch;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-family: sans-serif;
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const SectionParagraph = ({ children, textAlign, color }: ParagraphProps) => {
  return (
    <Paragraph textAlign={textAlign} color={color}>
      {children}
    </Paragraph>
  );
};

export default SectionParagraph;
