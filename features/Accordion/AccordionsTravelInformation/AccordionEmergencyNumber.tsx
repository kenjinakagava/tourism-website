import Paragraph from "@/components/typography/Paragraph";
import AccordionContent from "./AccordionContent";
import List from "@/components/layout/List";

const AccordionVisasAndTravel = () => {
  return (
    <AccordionContent title="Emergency Numbers">
      <Paragraph>
        You can call these toll-free numbers from any phone. Most of them are
        available 24 hours a day, 7 days a week.
      </Paragraph>
      <List>
        <li>190: Military Police</li>
        <li>192: Public Paramedics (SAMU)</li>
        <li>193: Fire Department</li>
        <li>191: Federal Highway Police</li>
      </List>
    </AccordionContent>
  );
};

export default AccordionVisasAndTravel;
