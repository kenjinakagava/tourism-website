import Paragraph from "@/components/typography/Paragraph";
import Image from "next/image";
import AccordionContent from "./AccordionContent";
import Plug from "@/public/Plug.webp";

const AccordionVisasAndTravel = () => {
  return (
    <AccordionContent title="Power Voltage">
      <Paragraph>
        Power voltage in Brazil varies between 110V and 220V, depending on the
        location you’re in. Many Brazilian hotels offer electric outlets in both
        voltages, and you can easily find portable voltage transformers in
        electrical supply stores.
      </Paragraph>
      <Paragraph>
        Power outlets in Brazil are type N and have the standard 3-pin sockets.
        For safety, the outlets are recessed. This way, plugs have to be fully
        inserted into the outlet for power to pass through, thus preventing
        accidental contact with live plugs.
      </Paragraph>
      <Paragraph>
        Power outlet adapters can be easily found at electrical supply stores or
        at airport convenience stores.
      </Paragraph>
      <Paragraph>
        <strong>
          Power outlets in Brazil have the standard 3-pin socket for type-N
          plugs:
        </strong>
      </Paragraph>
      <Image src={Plug} alt="" />
    </AccordionContent>
  );
};

export default AccordionVisasAndTravel;
