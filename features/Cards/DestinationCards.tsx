import Card from "@/components/layout/Card";
import * as imgs from "@/public/destinations";

const DestinationCards = () => {
  return (
    <>
      <Card title="Rio de Janeiro" src={imgs.RioDeJaneiro} />
      <Card title="São Paulo" src={imgs.SaoPaulo} />
      <Card title="Belém" src={imgs.Belem} />
      <Card title="Florianópolis" src={imgs.Florianopolis} />
      <Card title="Salvador" src={imgs.Salvador} />
      <Card title="Pantanal" src={imgs.Pantanal} />
    </>
  );
};

export default DestinationCards;
