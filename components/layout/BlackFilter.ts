import styled from "styled-components";

interface BlackFilterProps {
  opacity?: number;
}

const BlackFilter = styled.div<BlackFilterProps>`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.opacity ? `rgb(0,0,0,${props.opacity})` : `rgb(0,0,0,0.2)`};
`;

export default BlackFilter;
