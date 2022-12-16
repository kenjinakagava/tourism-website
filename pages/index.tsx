import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import SectionImg1 from "../public/Sectionimg1.jpg";
import SectionImg2 from "../public/Sectionimg2.png";
import SplitContainer from "@/components/SplitContainer";
import CenteredSection from "@/components/CenteredSection";
import FullSection from "@/components/FullSection";
import RegionSlider from "features/RegionSlider/RegionSlider";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tourism Brazil</title>
        <meta
          name="description"
          content="Explore the beauty and culture of our city with our award-winning tours. From historic landmarks to hidden gems, we have something for everyone. Book your adventure today and experience the best of our destination."
        />
        <link
          rel="icon"
          href="/FaviconDark.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/FaviconLight.ico"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Header isHero={true} />
      <Main>
        <CenteredSection>
          <SplitContainer
            src={SectionImg1}
            alt={"a"}
            href="/"
            buttonLabel="DISCOVER"
            title="DISCOVER THE BEAUTY OF BRAZIL"
            paragraph="Come and experience the magic of Brazil! With its stunning
              beaches, vibrant culture, and exciting cities, Brazil is the
              perfect destination for your next vacation. From the Amazon
              rainforest to the bustling streets of Rio de Janeiro, Brazil
              offers a wide range of experiences for every type of traveler."
          />
          <SplitContainer
            src={SectionImg2}
            alt={"a"}
            href="/"
            buttonLabel="EXPLORE"
            title="EXPLORE BRAZIL'S NATURAL WONDERS."
            orientation="left"
            paragraph="Brazil is a country rich in natural beauty, from the Amazon rainforest to the beaches of Rio de Janeiro. One of its most famous attractions is the Iguazu Falls, a series of over 275 waterfalls on the border between Brazil and Argentina. These falls are a must-see for anyone interested in experiencing Brazil's stunning flora and landscapes."
          />
        </CenteredSection>
        <FullSection>
          <RegionSlider />
        </FullSection>
      </Main>
    </div>
  );
}
