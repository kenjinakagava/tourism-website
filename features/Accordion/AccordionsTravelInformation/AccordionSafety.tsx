import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import AccordionContent from "./AccordionContent";
import MidwestSafetySlider from "@/features/Slider/SafetySlider/MidwestSafetySlider";
import SoutheastSafetySlider from "@/features/Slider/SafetySlider/SoutheastSafetySlider";
import SouthSafetySlider from "@/features/Slider/SafetySlider/SouthSafetySlider";
import NortheastSafetySlider from "@/features/Slider/SafetySlider/NortheastSafetySlider";
import NorthSafetySlider from "@/features/Slider/SafetySlider/NorthSafetySlider";

const HealthAccordionContent = () => {
  return (
    <AccordionContent title="Safety">
      <Paragraph>
        Brazil has increasingly invested in public safety. The country has been
        strengthening security in tourist destinations so tourists who intend to
        visit the country can feel safe when traveling to Brazil.
      </Paragraph>
      <Paragraph>
        The Ministry of Tourism is creating the Safe Tourism Program, a national
        program that focuses on several fields of action to increase tourist
        safety. This way, visitors will be able to enjoy all the wonderful
        attractions Brazil has to offer.
      </Paragraph>
      <Paragraph>
        If there are any incidents, there are police stations all over the
        Brazilian territory. Most capital cities have specialized police
        stations to assist tourists. If you happen to be in a city where there
        is no specialized police station for tourists, you can contact any
        regular police station to file your incident report. This means more
        safety and attention for tourists who come to Brazil.
      </Paragraph>
      <Title as="h3" fontSize="2rem" fontSizeMobile="1.5rem">
        <strong>Specialized Police Stations to Assist Tourists</strong>
      </Title>
      <NorthSafetySlider />
      <NortheastSafetySlider />
      <MidwestSafetySlider />
      <SoutheastSafetySlider />
      <SouthSafetySlider />
    </AccordionContent>
  );
};

export default HealthAccordionContent;
