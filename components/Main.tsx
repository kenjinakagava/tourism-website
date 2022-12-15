import styled from "styled-components";

interface MainProps {
  children: React.ReactNode;
}

const MainWrapper = styled.main``;

const Main = ({ children }: MainProps) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
