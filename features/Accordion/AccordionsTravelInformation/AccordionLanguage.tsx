import List from "@/components/layout/List";
import Paragraph from "@/components/typography/Paragraph";
import AccordionContent from "./AccordionContent";

const AccordionLanguage = () => {
  return (
    <AccordionContent title="Language">
      <Paragraph>
        The official language in Brazil is Portuguese, which comes from
        Portugal, but ours has a different accent and some different idiomatic
        expressions. Many Brazilians speak English and Spanish, and it is also
        possible to meet people who are fluent in other languages, such as
        German, Italian, indigenous dialects, and other languages.
      </Paragraph>
      <Paragraph>
        The list below comprises some basic words and local expressions which
        may help you to get by on your trips to Brazil:
      </Paragraph>
      <List>
        <li>Hi = Olá</li>
        <li>Bye = Tchau</li>
        <li>Yes = Sim</li>
        <li>No = Não</li>
        <li>Maybe = Talvez</li>
        <li>Please = Por favor</li>
        <li>Good morning = Bom dia</li>
        <li>Good afternoon = Boa tarde</li>
        <li>Good evening / Good night = Boa noite</li>
        <li>What’s your name? = Qual é o seu nome?</li>
        <li>My name is… = Meu nome é…</li>
        <li>
          Do you speak English or Spanish? = Você fala inglês ou espanhol?
        </li>
        <li>Thank you = Obrigado</li>
        <li>I’m sorry = Desculpe</li>
        <li>You are welcome = De nada</li>
        <li>Excuse me = Com licença</li>
        <li>Can you give me some information? = Pode me dar uma informação?</li>
        <li>Can you help me? = Pode me ajudar?</li>
        <li>I am lost = Estou perdido</li>
        <li>I don’t understand = Não entendo</li>
        <li>
          Can you speak slowly, please? = Pode falar mais devagar, por favor
        </li>
        <li>Could you please repeat that? = Pode repetir por favor?</li>
        <li>I don’t speak portuguese = Não sei falar português</li>
        <li>
          Is there a bank/restaurant/hotel/taxi stand nearby? = Há algum
          banco/restaurante/ponto de táxi/hotel perto daqui?
        </li>
        <li>How much does this cost? = Quanto custa isso?</li>
        <li>Where can I get… ? = Onde posso conseguir…?</li>
      </List>
    </AccordionContent>
  );
};

export default AccordionLanguage;
