import List from "@/components/layout/List";
import Paragraph from "@/components/typography/Paragraph";
import AccordionContent from "./AccordionContent";

const AccordionWeather = () => {
  return (
    <AccordionContent title="Telecommunications">
      <Paragraph>
        The National Telecommunications Agency (ANATEL) is the Brazilian
        authority responsible for phone operations in the country.
      </Paragraph>
      <Paragraph>The country code for Brazil is +55.</Paragraph>
      <Paragraph>
        All Brazilian cities have their own two-digit area codes. Land lines
        have 8 digits in the whole country. Cell phones, on the other hand, have
        9 digits.
      </Paragraph>
      <List>
        <li>
          For long distance calls in the country: 0 + two-digit operator code +
          two-digit city code + desired telephone number.
        </li>
        <li>
          For collect calls, all you have to do is change the 0 for 90 at the
          beginning of the number you will call.
        </li>
        <li>
          For international calls from Brazil: 00 + two-digit operator code +
          country code + city code + desired telephone number.
        </li>
        <li>
          For service lines (900, 0800, 0900, 0300, 800), the operator code is
          not necessary.
        </li>
      </List>
      <Paragraph>
        The use of foreign cell phones in Brazil depends on the technology used
        and its compatibility with Brazilian operators. Check with your operator
        what is required to use your cell phone in Brazil, especially because
        usage rates vary.
      </Paragraph>
    </AccordionContent>
  );
};

export default AccordionWeather;
