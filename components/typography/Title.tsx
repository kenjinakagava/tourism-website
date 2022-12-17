import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right" | string;
  color?: string;
}

const StyledTitle = styled.h2<Pick<TitleProps, "textAlign" | "color">>`
  font-size: 2.25rem;
  width: 90%;
  margin-bottom: 1rem;
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = ({ children, textAlign, color }: TitleProps) => {
  return (
    <StyledTitle textAlign={textAlign} color={color}>
      {children}
    </StyledTitle>
  );
};

export default Title;
