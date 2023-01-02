import Announcement from "@/components/typography/Announcement";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";

const SavingNote = () => {
  return (
    <Announcement>
      <Title fontSize="2rem" fontSizeMobile="1.25rem">
        You can remove a location by clicking on the Heart until it's black, and
        then leave the page to confirm your changes.
      </Title>
    </Announcement>
  );
};

export default SavingNote;
