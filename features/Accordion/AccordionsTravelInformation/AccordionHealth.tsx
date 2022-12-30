import ExternalLink from "@/components/layout/ExternalLink";
import List from "@/components/layout/List";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import AccordionContent from "./AccordionContent";

const HealthAccordionContent = () => {
  return (
    <AccordionContent title="Health">
      <Paragraph>
        Public health services in Brazil are free for foreign tourists.
        Therefore, if you are in an accident, need medical attention, or have
        any health issues, just call the Mobile Emergency Medical Service (SAMU)
        on the toll-free number below.
        <strong>SAMU (Mobile Emergency Medical Service): 192</strong>
      </Paragraph>
      <Title as="h3" fontSize="1.5rem" fontSizeMobile="1.25rem">
        Health Tips
      </Title>
      <List>
        <li>
          Drink lots of water. Brazil is a tropical country, so we recommend
          that you keep hydrated at all times.
        </li>
        <li>
          Wear comfortable clothes. Protect your skin from the sun by wearing a
          hat, a cap, sunglasses, and sunscreen. Avoid staying in the sun
          between 10 am and 4 pm.
        </li>
        <li>
          Brazil continues to follow all security protocols to combat COVID-19.
          In order to reduce the risk of contamination, wear protective masks
          and wash your hands frequently with soap and water. Also, use hand
          sanitizers that contain 70% alcohol, especially after using public
          transport or visiting tourist attractions where there are crowds.
        </li>
      </List>
      <Title as="h3" fontSize="1.5rem" fontSizeMobile="1.25rem">
        Vaccines
      </Title>
      <Paragraph>
        In order to enter Brazil, it is not mandatory to be vaccinated against
        any specific type of disease. However, there are some regions in the
        country where there is a Recommendation for Vaccination (ACRV) before
        the visit. For example, in the regions where cases of yellow fever have
        been documented.
        <ExternalLink href="https://antigo.saude.gov.br/component/content/article/1335-saude-do-viajante/9643-preparativos-para-a-viagem#estrangeiros">
          Source: Ministry of Health
        </ExternalLink>
      </Paragraph>
      <Title as="h3" fontSize="1.5rem" fontSizeMobile="1.25rem">
        Covid-19
      </Title>
      <Paragraph>
        The world was forced to slow down due to the COVID-19 pandemic. However,
        as vaccination advances, your next trip to Brazil can already happen!
      </Paragraph>
    </AccordionContent>
  );
};

export default HealthAccordionContent;
