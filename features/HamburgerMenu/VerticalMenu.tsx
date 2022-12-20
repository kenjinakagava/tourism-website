import styled from "styled-components";
import IconBlock from "./IconBlock";
import {
  FaHeart,
  FaMapMarkedAlt,
  FaQuestion,
  FaPassport,
} from "react-icons/fa";
import { IoFootstepsSharp } from "react-icons/io5";
import { GiSouthAmerica } from "react-icons/gi";
interface VerticalMenuProps {
  isOpen: boolean;
}

const MenuScreen = styled.div<VerticalMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  width: 100%;
  background: white;
  transition: 0.2s ease;
  transform: ${(props) =>
    props.isOpen === true ? "translateY(0)" : "translateY(-150%)"};
`;

const MenuWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const VerticalMenu = ({ isOpen }: VerticalMenuProps) => {
  // this line is required to access the document without facing a problem when starting the site
  // this is because document isn't defined in Nodejs, only in the browser, where window is defined
  if (typeof window !== "undefined") {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
  return (
    <MenuScreen isOpen={isOpen}>
      <MenuWrapper>
        <IconWrapper>
          <IconBlock
            title="Saved"
            href="/saved"
            ariaLabel="View saved locations"
            icon={<FaHeart />}
          />
          <IconBlock
            title="Regions"
            href="/regions"
            ariaLabel="View our Regions"
            size="large"
            icon={<GiSouthAmerica />}
          />
          <IconBlock
            title="Experiences"
            href="/experiences"
            ariaLabel="Discover experiences in Brazil"
            size="large"
            icon={<IoFootstepsSharp />}
          />
          <IconBlock
            title="Destinations"
            href="/destinations"
            ariaLabel="Explore destinations in Brazil"
            size="large"
            icon={<FaMapMarkedAlt />}
          />
          <IconBlock
            title="Special Visa"
            href="/special-visa"
            ariaLabel="Learn about special visas"
            size="large"
            icon={<FaPassport />}
          />
          <IconBlock
            title="Travel Information"
            href="/travel-information"
            ariaLabel="Get travel information for Brazil"
            size="large"
            icon={<FaQuestion />}
          />
        </IconWrapper>
      </MenuWrapper>
    </MenuScreen>
  );
};

export default VerticalMenu;
