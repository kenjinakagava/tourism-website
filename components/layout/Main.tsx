import styled from "styled-components";

interface MainProps {
  backgroundColor?: string;
}

const Main = styled.main<MainProps>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#f1f5f9"}; ;
`;

export default Main;
