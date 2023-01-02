import Announcement from "@/components/typography/Announcement";
import Title from "@/components/typography/Title";
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  color: -webkit-link;
  text-decoration: underline;
`;

const SavedContent = () => {
  return (
    <Announcement>
      <Title fontSize="2rem" fontSizeMobile="1.25rem">
        It seems you haven't saved any places you'd want to go yet, you can do
        so by visiting our{" "}
        <StyledLink href="/experiences">Experiences Page</StyledLink> or our{" "}
        <StyledLink href="/destinations">Destinations Page</StyledLink> and
        clicking on the Heart Button.
      </Title>
    </Announcement>
  );
};

export default SavedContent;
