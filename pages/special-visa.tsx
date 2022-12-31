import BannerSpecialVisa from "@/components/banners/BannerSpecialVisa";
import Layout from "@/components/layout/Layout";
import Accordion from "@/features/Accordion/Accordion";
import ContainedSection from "@/components/layout/ContainedSection";
import styled from "styled-components";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import Announcement from "@/components/typography/Announcement";
import List from "@/components/layout/List";

const SpecialVisaSection = styled(ContainedSection)`
  min-height: unset;
  background-color: unset;
  margin-top: 1rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 2rem;
  }
  h2 {
    font-weight: 500;
  }
`;

const SpecialVisa = () => {
  return (
    <Layout
      title="Special Visa | Tourism Brazil"
      description='"Learn about the different types of special visas available for foreign nationals seeking to enter Brazil for work, study, research, or other purposes.'
      banner={<BannerSpecialVisa />}
    >
      <Announcement>
        Besides tourist visas, there are other options for visitors who might
        want to stay a little while longer in the country. Find out more about
        our Special Visa Categories and what they entail.
      </Announcement>
      <SpecialVisaSection>
        <Accordion title="Digital Nomads">
          <Title fontSizeMobile="1.5rem" margin="1rem 0 1rem">
            Digital Nomads
          </Title>
          <Paragraph>
            It is no surprise that Brazil is an excellent destination for
            holidays and vacations. What visitors might not know, however, is
            that they can reside in the country and work remotely with a Digital
            Nomad Visa!
          </Paragraph>
          <Paragraph>
            <strong>
              In order to do so, they have to comply with the following
              requirements:
            </strong>
          </Paragraph>
          <List>
            <li>Be employed by a foreign company</li>
            <li>Be able to do the work remotely</li>
            <li>
              Provide proof of monthly income of US$1,500 or above, or provide
              proof of bank funds in the amount of US$18,000 or above
            </li>
          </List>
          <Paragraph>
            Visas for Digital Nomads are valid for one year, but they are
            renewable for equal periods. Visitors can apply whether they are
            currently in Brazilian territory or not.
          </Paragraph>
        </Accordion>
      </SpecialVisaSection>
      <SpecialVisaSection>
        <Accordion title="Real Estate Investors">
          <Title fontSizeMobile="1.5rem" margin="1rem 0 1rem">
            Real Estate Investors
          </Title>
          <Paragraph>
            Brazil is also a wonderful place when it comes to investment
            opportunities, so much so that real estate investors can apply for a
            specific visa to reside in the country.
          </Paragraph>
          <Paragraph>
            <strong>
              In order to do so, they have to comply with the following
              requirements:
            </strong>
          </Paragraph>
          <List>
            <li>
              Acquisition of urban property in Brazil (built or under
              construction)
            </li>
            <li>
              Properties located in the North and Northeast Regions of the
              country must be priced at
              <strong> R$700,000 (seven hundred thousand reais)</strong> and
              above
            </li>
            <li>
              Properties located in any other region of the country must be
              priced at <strong>R$1,000,000 (one million reais)</strong> and
              above
            </li>
          </List>
          <Paragraph>
            The Real-Estate-Investor Visa allows visitors to reside in Brazil
            for up to four years, after which the immigrant may apply for a
            renewal for indefinite time.
          </Paragraph>
        </Accordion>
      </SpecialVisaSection>
    </Layout>
  );
};

export default SpecialVisa;
