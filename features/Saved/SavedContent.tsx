import Announcement from "@/components/typography/Announcement";
import Paragraph from "@/components/typography/Paragraph";
import Link from "next/link";

const SavedContent = () => {
  return (
    <Announcement>
      <Paragraph maxWidth="66ch">
        It seems you haven't saved any places you'd want to go yet, you can do
        so by visiting our <Link href="/experiences">Experiences Page</Link> or
        our <Link href="/destinations">Destinations Page</Link> and clicking on
        the Heart Button.
      </Paragraph>
    </Announcement>
  );
};

export default SavedContent;
