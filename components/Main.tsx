import styled from "styled-components";

interface MainProps {
  children: React.ReactNode;
}

const MainWrapper = styled.main`
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  margin-top: 6.25rem;
`;

const Main = ({ children }: MainProps) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
