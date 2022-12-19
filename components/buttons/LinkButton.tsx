import styled from "styled-components";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const StyledLink = styled(Link)`
  width: 100%;
  text-align: center;
  font-family: sans-serif;
  display: inline-block;
  cursor: pointer;
  border-radius: 8px;
  padding: 16px;
  font-size: 1rem;
  font-weight: 700;
  transition: transform 0.2s;
  box-shadow: 0 0 0 3px #000000 inset;
  :hover {
    transform: translateY(-2px);
  }
  @media (min-width: 1200px) {
    width: auto;
    text-align: left;
  }
`;

const LinkButton = ({ href, children }: ButtonProps) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

export default LinkButton;
