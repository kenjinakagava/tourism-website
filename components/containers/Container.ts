import styled from "styled-components";

interface ContainerProps {
  width?: string;
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.width ? props.width : "80%")};
  margin: 0 auto;
`;
export default Container;
