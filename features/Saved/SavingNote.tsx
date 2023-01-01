import Announcement from "@/components/typography/Announcement";
import Paragraph from "@/components/typography/Paragraph";

const SavingNote = () => {
  return (
    <Announcement>
      <Paragraph maxWidth="66ch">
        You can remove a location by clicking on the Heart until it's black, and
        then leave the page to confirm your changes.
      </Paragraph>
    </Announcement>
  );
};

export default SavingNote;
