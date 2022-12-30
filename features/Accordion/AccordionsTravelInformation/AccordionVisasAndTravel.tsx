import ExternalLink from "@/components/layout/ExternalLink";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import AccordionContent from "./AccordionContent";

const AccordionVisasAndTravel = () => {
  return (
    <AccordionContent title="Visas and Travel Papers">
      <Paragraph>
        Visas are required for foreigners to enter and stay in the Brazilian
        territory for any period of time. They are granted by the Brazilian
        Consular Offices abroad. Citizens of Mercosur member states do not need
        a visa to enter and stay in Brazil, the need only a valid passport or
        national identity document. Citizens of Australia, Canada, the United
        States of America, Japan, and the European Union are also exempt from
        visas to enter the Brazilian territory, and only need a valid passport.
        Visitor visas may be granted for different purposes, such as tourism,
        business, transit, and artistic or sports activities. Visitors on this
        type of visa are allowed to stay for a maximum of ninety days.
      </Paragraph>
      <Title as="h3" fontSize="1.5rem" fontSizeMobile="1.25rem">
        Do you need a visa?
      </Title>
      <Paragraph>
        To find out if you need a visa to travel to Brazil,{" "}
        <ExternalLink
          display="inline-block"
          href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil#voceprecisa"
        >
          click here.
        </ExternalLink>
        Brazil’s visa policy is based on the principle of reciprocity. This
        basically means that most countries that require visas from Brazilian
        citizens to enter their territories will also need a visa to travel to
        Brazil. Under current Brazilian immigration law (Law 13,445 of 2017),
        visa exemption may only be granted by the Brazilian authorities on a
        reciprocal basis, and through mutual understanding on the matter, except
        for the circumstances described in Decree 9,731 of 2019. Brazil
        currently has bilateral agreements on visa waivers with approximately 90
        countries.
      </Paragraph>
      <Title as="h3" fontSize="1.5rem" fontSizeMobile="1.25rem">
        Where to apply for a visa:
      </Title>
      <Paragraph>
        Itamaraty, the headquarters of the Ministry of Foreign Affairs in
        Brazil, is the government agency responsible for granting visas. This
        occurs through its{" "}
        <ExternalLink href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/reparticoes-consulares-do-brasil/reparticoes-consulares-do-brasil">
          Embassies, Consulates General, Consulates, and Vice-Consulates
        </ExternalLink>{" "}
        abroad. Foreigners who wish to apply for a visa to travel to Brazil
        should contact Brazilian Consular Representations abroad in order to
        obtain more information on the application process.
      </Paragraph>
    </AccordionContent>
  );
};

export default AccordionVisasAndTravel;
