import Link from "next/link";
import styled from "styled-components";

interface IconBlockProps {
  icon?: React.ReactNode;
  title?: string;
  href?: string;
  ariaLabel?: string;
  size?: "small" | "large";
}

const IconBlockWrapper = styled.li<IconBlockProps>`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #f1f5f9;
  border-radius: 16px;
  svg {
    width: 32px;
    height: 32px;
  }
  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Heading = styled.h2`
  font-size: 1rem;
`;

const StyledLink = styled(Link)<IconBlockProps>`
  padding: ${(props) => (props.size === "large" ? "40px 0 " : "20px 0")};
  width: 100%;
`;

const IconBlock = (props: IconBlockProps) => {
  return (
    <IconBlockWrapper size={props.size}>
      <StyledLink href={`${props.href}`} aria-label={props.ariaLabel}>
        {props.icon}
        <Heading>{props.title}</Heading>
      </StyledLink>
    </IconBlockWrapper>
  );
};

export default IconBlock;
