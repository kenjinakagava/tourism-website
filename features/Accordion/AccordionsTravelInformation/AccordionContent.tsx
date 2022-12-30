import Container from "@/components/layout/Container";
import Title from "@/components/typography/Title";

interface AccordionContentProps {
  children: React.ReactNode;
  title: string;
}

const AccordionContent = ({ children, title }: AccordionContentProps) => {
  return (
    <>
      <Title as="h3" fontSizeMobile="1.5rem" margin="1rem 0 1rem">
        {title}
      </Title>
      <Container width="95%">{children}</Container>
    </>
  );
};

export default AccordionContent;
