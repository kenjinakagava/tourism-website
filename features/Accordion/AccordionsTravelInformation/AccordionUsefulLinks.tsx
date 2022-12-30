import ExternalLink from "@/components/layout/ExternalLink";
import List from "@/components/layout/List";
import styled from "styled-components";
import AccordionContent from "./AccordionContent";

const UsefulLinksList = styled(List)`
  li {
    margin-bottom: 1rem;
  }
`;

const AccordionUsefulLinks = () => {
  return (
    <AccordionContent title="Useful Links">
      <UsefulLinksList>
        <li>
          <ExternalLink href="https://www.portalconsular.itamaraty.gov.br/representacoes-do-brasil-no-mundo">
            Brazilian Consular Affairs
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www4.infraero.gov.br/aeroportos/">
            Airports in Brazil
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://antigo.infraestrutura.gov.br/novoguiadopassageiro/">
            Passenger Guide
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.gov.br/pt-br">
            Brazilian Federal Government
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.gov.br/turismo/pt-br">
            Ministry of Tourism
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.gov.br/saude/pt-br/vacinacao">
            Brazilian Vaccination Page
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.gov.br/pt-br/orgaos-do-governo">
            Brazilian Government Agencies
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://countrycode.org/brazil">
            How to Make Calls in Brazil
          </ExternalLink>
        </li>
      </UsefulLinksList>
    </AccordionContent>
  );
};

export default AccordionUsefulLinks;
