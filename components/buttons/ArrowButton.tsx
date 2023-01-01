import styled from "styled-components";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  children: React.ReactNode;
  href: string;
  backgroundColor?: string;
  color?: string;
}

const ButtonLink = styled(Link)<Pick<Props, "backgroundColor" | "color">>`
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
  color: ${(props) => (props.color ? props.color : "white")};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "black"};
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
const ArrowButton = ({ children, href, color, backgroundColor }: Props) => {
  return (
    <ButtonLink color={color} backgroundColor={backgroundColor} href={href}>
      {children}
      <FiArrowRight />
    </ButtonLink>
  );
};

export default ArrowButton;
