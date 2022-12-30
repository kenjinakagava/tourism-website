import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import Container from "./Container";
import styled from "styled-components";

interface SafetyCardProps {
  title: string;
  department: string;
  address: string;
  phone: string;
}

const SafetyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
`;

const SafetyCardTop = styled.div`
  background-color: black;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const SafetyCardBottom = styled(Container)`
  width: 90%;
  address {
    font-style: normal;
  }
`;

const SafetyCard = (props: SafetyCardProps) => {
  return (
    <SafetyCardContainer>
      <SafetyCardTop>
        <Title color="white" fontSize="2rem" margin="0">
          {props.title}
        </Title>
      </SafetyCardTop>
      <SafetyCardBottom>
        <Paragraph>{props.department}</Paragraph>
        <Paragraph as="address" fontSizeMobile="1rem" fontSize="1.25rem">
          <strong>Address: </strong>
          {props.address}
        </Paragraph>
        <Paragraph as="address" fontSizeMobile="1rem" fontSize="1.25rem">
          <strong>Phone: </strong>
          {props.phone}
        </Paragraph>
      </SafetyCardBottom>
    </SafetyCardContainer>
  );
};

export default SafetyCard;
