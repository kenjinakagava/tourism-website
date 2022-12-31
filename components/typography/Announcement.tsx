import styled from "styled-components";
import Container from "../containers/Container";

const Announcement = styled(Container)`
  background-color: #f1f5f9;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 2rem 0;
  font-family: sans-serif;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default Announcement;
