import Paragraph from "@/components/typography/Paragraph";
import AccordionContent from "./AccordionContent";

const AccordionWeather = () => {
  return (
    <AccordionContent title="Local Weather">
      <Paragraph>
        Brazil has tropical weather. The average annual temperature is 28°C in
        the North region and 20°C in the South of the country. Brazilian winter
        is between June and September, and in some cities in the South and
        Southeast of the country, temperatures drop below 0°C, with frost and
        snow. In the summer, it is possible to enjoy the 40°C heat in cities
        like Rio de Janeiro and Salvador, for example. Summer in Brazil is the
        best time to go to the beach, drink coconut water, swim in the sea, and
        sunbathe.
      </Paragraph>
      <Paragraph>
        When packing for your trip, please choose light and comfortable clothes.
        Items such as hats, caps, sunglasses, and sunscreen are useful to
        protect your skin from the sun. In forest areas, such as the Amazon and
        the Pantanal, we recommend the use of closed-toe shoes, long-sleeved
        t-shirts and shirts (preferably in light colors), long pants, and a hat
        to keep insects away.
      </Paragraph>
      <Paragraph>
        <strong>THE SEASONS IN BRAZIL</strong>
        <br /> Summer: December to March.
        <br /> Fall: March to June.
        <br /> Winter: June to September.
        <br /> Spring: September to December.
      </Paragraph>
    </AccordionContent>
  );
};

export default AccordionWeather;
