import styled from "styled-components";
import Link from "next/link";
import Title from "../typography/Title";
import Container from "../containers/Container";
import Logo from "./Logo";

const FooterContainer = styled(Container)`
  min-height: clamp(20vh, 30vh, 250px);
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
  gap: 1rem;
  li {
    font-family: "Dosis", sans-serif;
    font-weight: 700;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NestedList = styled(List)`
  font-style: normal;
  font-family: "Dosis", sans-serif;
  font-weight: 700;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const Address = styled(NestedList)``;

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

const NavLink = styled(Link)`
  padding: 1rem 0;
  /* To comply with Lighthouse standards for tap targets (48px width and height) 
  I'm adding a little bit of padding to the first child as its text content 
  "Saved" atm doesn't stretch the element enough to fulfill this requirement.
  */
  &:first-child {
    padding-right: 0.125rem;
  }
`;

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <Wrapper>
          <Logo dark={true} version="desktop" />
          <div>
            <Title as="h3" fontSize="1.5rem" fontSizeMobile="1.5rem">
              Menu
            </Title>
            <List>
              <li>
                <NestedList>
                  <li>
                    <NavLink href="/saved">Saved</NavLink>
                  </li>
                  <li>
                    <NavLink href="/regions">Regions</NavLink>
                  </li>
                  <li>
                    <NavLink href="/experiences">Experiences</NavLink>
                  </li>
                </NestedList>
              </li>
              <li>
                <NestedList>
                  <li>
                    <NavLink href="/destinations">Destinations</NavLink>
                  </li>
                  <li>
                    <NavLink href="/special-visa">Special Visa</NavLink>
                  </li>
                  <li>
                    <NavLink href="/travel-information">
                      Travel Information
                    </NavLink>
                  </li>
                </NestedList>
              </li>
            </List>
          </div>
          <div>
            <Title as="h3" fontSize="1.5rem" fontSizeMobile="1.5rem">
              Contact
            </Title>
            <Address as={"address"}>
              <a href="mailto:tourismbrazilofficial@gmail.com">
                Email: tourismbrazilofficial@gmail.com
              </a>
              <a href="https://wa.me/5543999014085">Phone: +5543999014085</a>
            </Address>
          </div>
        </Wrapper>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
