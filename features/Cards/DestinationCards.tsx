import Card from "@/components/cards/Card";
import * as imgs from "@/public/destinations";

const DestinationCards = () => {
  return (
    <>
      <Card
        title="Rio de Janeiro"
        paragraph="Experience the excitement and energy of Rio de Janeiro, the breathtakingly beautiful capital of Brazil. From the iconic Christ the Redeemer statue to the lively beaches of Copacabana and Ipanema, Rio has something for everyone."
        src={imgs.RioDeJaneiro.src}
      />
      <Card
        title="São Paulo"
        paragraph="Welcome to São Paulo, the dynamic and cosmopolitan capital of Brazil. As the largest city in the country, São Paulo offers a wealth of cultural and recreational activities for visitors to enjoy. Stroll through the historic downtown area, visit the famous São Paulo Museum of Art, or indulge in the city's delicious culinary scene."
        src={imgs.SaoPaulo.src}
      />
      <Card
        title="Belém"
        paragraph="Discover the rich culture and natural beauty of Belém, the vibrant capital of the Brazilian state of Pará. Located on the banks of the Amazon River, Belém is the gateway to the Amazon rainforest and is known for its historic Ver-o-Peso market and the stunningly beautiful mosque-like Cathedral of Our Lady of Nazareth."
        src={imgs.Belem.src}
      />
      <Card
        title="Florianópolis"
        paragraph="Escape to the paradise of Florianopolis, a stunning island destination located on the southern coast of Brazil. Famous for its crystal clear waters, beautiful beaches, and laid-back lifestyle, Florianopolis is the perfect place to relax and unwind."
        src={imgs.Florianopolis.src}
      />
      <Card
        title="Salvador"
        paragraph="Experience the rich history and vibrant culture of Salvador, the capital of the Brazilian state of Bahia. Located on the northeast coast of Brazil, Salvador is known for its stunning beaches, colorful colonial architecture, and rich Afro-Brazilian culture."
        src={imgs.Salvador.src}
      />
      <Card
        title="Pantanal"
        paragraph="Explore the breathtaking beauty of the Pantanal, the largest wetland in the world and one of Brazil's most biodiverse regions. Located in the center of South America, the Pantanal is home to a staggering array of flora and fauna, including jaguars, capybaras, anacondas."
        src={imgs.Pantanal.src}
      />
    </>
  );
};

export default DestinationCards;
