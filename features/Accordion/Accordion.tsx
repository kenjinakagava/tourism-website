import Title from "@/components/typography/Title";
import { useState } from "react";
import styled from "styled-components";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  padding-bottom: 1rem;
  width: 100%;
  svg {
    width: 24px;
    height: 24px;
  }
  h2 {
    margin: 0;
  }
`;

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <div>
      <AccordionButton onClick={toggleAccordion}>
        <Title fontSize="1.5rem" fontSizeMobile="1.25rem">
          {title}
        </Title>
        {isOpen === true ? <FiChevronUp /> : <FiChevronDown />}
      </AccordionButton>
      {isOpen === true ? children : null}
    </div>
  );
};

export default Accordion;
