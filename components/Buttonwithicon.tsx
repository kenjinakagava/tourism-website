import styled from "styled-components";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const ButtonLink = styled(Link)`
  padding: 1rem;
  display: inline-flex;
  align-items: center;
  text-align: center;
  font-family: sans-serif;
  gap: 1rem;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  background: black;
  width: fit-content;
  svg {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 768px) {
    text-align: left;
  }
`;

// temp name
const Buttonwithicon = ({ children, href }: ButtonProps) => {
  return (
    <ButtonLink href={href}>
      {children}
      <FiArrowRight />
    </ButtonLink>
  );
};

export default Buttonwithicon;
