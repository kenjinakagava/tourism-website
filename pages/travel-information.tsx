import BannerTravelInformation from "@/components/banners/BannerTravelInformation";
import Layout from "@/components/layout/Layout";
import Accordion from "@/features/Accordion/Accordion";
import ContainedSection from "@/components/layout/ContainedSection";
import styled from "styled-components";
import Announcement from "@/components/typography/Announcement";
import AccordionHealth from "@/features/Accordion/AccordionsTravelInformation/AccordionHealth";
import AccordionSafety from "@/features/Accordion/AccordionsTravelInformation/AccordionSafety";
import AccordionVisasAndTravel from "@/features/Accordion/AccordionsTravelInformation/AccordionVisasAndTravel";
import AccordionEmergencyNumber from "@/features/Accordion/AccordionsTravelInformation/AccordionEmergencyNumber";
import AccordionPowerVoltage from "@/features/Accordion/AccordionsTravelInformation/AccordionPowerVoltage";
import AccordionWeather from "@/features/Accordion/AccordionsTravelInformation/AccordionWeather";
import AccordionTelecommunications from "@/features/Accordion/AccordionsTravelInformation/AccordionTelecommunications";
import AccordionLanguage from "@/features/Accordion/AccordionsTravelInformation/AccordionLanguage";
import AccordionCurrencyExchange from "@/features/Accordion/AccordionsTravelInformation/AccordionCurrencyExchange";
import AccordionUsefulLinks from "@/features/Accordion/AccordionsTravelInformation/AccordionUsefulLinks";

const TravelInformationSection = styled(ContainedSection)`
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

const TravelInformation = () => {
  return (
    <Layout
      title="Travel Information for Brazil | Tourism Brazil"
      description="Get all the travel information you need for your trip to Brazil. Find out about visa requirements, safety tips, popular destinations, and more."
      banner={<BannerTravelInformation />}
    >
      <Announcement>
        Besides tourist visas, there are other options for visitors who might
        want to stay a little while longer in the country. Find out more about
        our Special Visa Categories and what they entail.
      </Announcement>
      <TravelInformationSection>
        <Accordion title="Health">
          <AccordionHealth />
        </Accordion>
      </TravelInformationSection>
      <TravelInformationSection>
        <Accordion title="Safety">
          <AccordionSafety />
        </Accordion>
      </TravelInformationSection>
      <TravelInformationSection>
        <Accordion title="Visas and Travel Papers">
          <AccordionVisasAndTravel />
        </Accordion>
      </TravelInformationSection>
      <TravelInformationSection>
        <Accordion title="Emergency Numbers">
          <AccordionEmergencyNumber />
        </Accordion>
      </TravelInformationSection>
      <TravelInformationSection>
        <Accordion title="Power Voltage">
          <AccordionPowerVoltage />
        </Accordion>
      </TravelInformationSection>
      <TravelInformationSection>
        <Accordion title="Local Weather">
          <AccordionWeather />
        </Accordion>
      </TravelInformationSection>
      <TravelInformationSection>
        <Accordion title="Telecommunications">
          <AccordionTelecommunications />
        </Accordion>
      </TravelInformationSection>
      <TravelInformationSection>
        <Accordion title="Language">
          <AccordionLanguage />
        </Accordion>
      </TravelInformationSection>
      <TravelInformationSection>
        <Accordion title="Currency Exchange and Rates">
          <AccordionCurrencyExchange />
        </Accordion>
      </TravelInformationSection>
      <TravelInformationSection>
        <Accordion title="Useful Links">
          <AccordionUsefulLinks />
        </Accordion>
      </TravelInformationSection>
    </Layout>
  );
};

export default TravelInformation;
