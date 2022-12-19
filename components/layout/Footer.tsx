import styled from "styled-components";
import Link from "next/link";
import Title from "../typography/Title";
import Container from "./Container";
import Logo from "./Logo";
const FooterContainer = styled(Container)`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  li {
    font-family: "Dosis", sans-serif;
    font-weight: 700;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NestedList = styled(List)`
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  > a {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <Wrapper>
          <Logo dark={true} version="desktop" />
          <div>
            <Title heading={5} fontSize="1.5rem" fontSizeMobile="1.5rem">
              Menu
            </Title>
            <List>
              <li>
                <NestedList>
                  <li>
                    <Link href="/saved">Saved</Link>
                  </li>
                  <li>
                    <Link href="/regions">Regions</Link>
                  </li>
                  <li>
                    <Link href="/experiences">Experiences</Link>
                  </li>
                </NestedList>
              </li>
              <li>
                <NestedList>
                  <li>
                    <Link href="/destinations">Destinations</Link>
                  </li>
                  <li>
                    <Link href="/special-visa">Special Visa</Link>
                  </li>
                  <li>
                    <Link href="/travel-information">Travel Information</Link>
                  </li>
                </NestedList>
              </li>
            </List>
          </div>
          <div>
            <Title heading={5} fontSize="1.5rem" fontSizeMobile="1.5rem">
              Contact
            </Title>
            <NestedList>
              <li>Email: tourismbrazilofficial@gmail.com</li>
              <li>Phone: +5543999014085</li>
            </NestedList>
          </div>
        </Wrapper>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
