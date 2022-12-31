import ExternalLink from "@/components/typography/ExternalLink";
import Paragraph from "@/components/typography/Paragraph";
import AccordionContent from "./AccordionContent";

const AccordionCurrencyExchange = () => {
  return (
    <AccordionContent title="Currency and Exchange Rates">
      <Paragraph>
        The currency in Brazil is the REAL (R$). It can be exchanged at banks,
        exchange brokers, travel agencies, and authorized hotels. The official
        exchange rate is published daily in newspapers and specialized websites.
      </Paragraph>
      <Paragraph>
        Both travellers checks and cash are easily exchanged at exchange
        counters. International credit cards are accepted in most hotels,
        restaurants, shops, travel agencies, car rental companies, and other
        companies that provide services to tourists.
      </Paragraph>
      <Paragraph>
        As for the REAL, bills and coins have distinctive features and security
        elements that facilitate their identification. Brazilian banknotes are
        printed in denominations of 2 reals, 5 reals, 10 reals, 20 reals, 50
        reals, 100 reals, and 200 reals. Brazilian coins are minted in
        denominations of 5 centavos, 10 centavos, 25 centavos, 50 centavos, and
        1 Brazilian real.
      </Paragraph>
      <Paragraph>
        <strong>BRAZILIAN BANKNOTES</strong>
      </Paragraph>
      <Paragraph>
        FOR MORE INFORMATION ON EXCHANGE RATES, PLEASE VISIT THE{" "}
        <ExternalLink>CENTRAL BANK</ExternalLink> WEBSITE.
      </Paragraph>
    </AccordionContent>
  );
};

export default AccordionCurrencyExchange;
