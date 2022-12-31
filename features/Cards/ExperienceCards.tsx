import Card from "@/components/cards/Card";
import * as imgs from "@/public/experiences";

const ExperienceCards = () => {
  return (
    <>
      <Card
        title="Go scuba diving"
        paragraph="Fernando de Noronha is an archipelago located off the coast of Brazil that is known for its crystal-clear waters and excellent scuba diving."
        src={imgs.ScubaDiving.src}
      />
      <Card
        title="Visit the Iguazu Falls"
        paragraph="The Iguazu Falls are one of the most spectacular natural wonders in South America, they're made up of hundreds of cascades and are surrounded by lush rainforest."
        src={imgs.IguazuFalls.src}
      />
      <Card
        title="Go surfing"
        paragraph="The state of Santa Catarina is known for its excellent surf spots and beautiful beaches. Some popular surf destinations in Santa Catarina include Praia da Vila and Praia do Rosa."
        src={imgs.Beach.src}
      />
      <Card
        title="Experience the nightlife"
        paragraph="From the lively bars and clubs of Rio de Janeiro and São Paulo to the cultural music scene of Salvador, Brazil has something for everyone."
        src={imgs.Nightlife.src}
      />
      <Card
        title="Go hiking"
        paragraph="From the Amazon Rainforest to the Pantanal, Brazil is home to many beautiful national parks and natural reserves that are perfect for hiking, camping, and exploring the great outdoors."
        src={imgs.Hiking.src}
      />
      <Card
        title="Learn about Brazil's culture"
        paragraph="Whether you're interested in visiting museums, touring historic neighborhoods, or learning about the country's indigenous cultures, Brazil has something for everyone."
        src={imgs.Culture.src}
      />
    </>
  );
};

export default ExperienceCards;
