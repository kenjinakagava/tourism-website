import Container from "./Container";
import styled from "styled-components";

const Grid = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: 768px) {
    display: grid;
    place-items: center;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Grid;
