import styled from "styled-components";

interface ListProps {
  children: React.ReactNode;
}

const ListStyles = styled.ul`
  font-family: sans-serif;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  list-style-type: disc;
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const List = ({ children }: ListProps) => {
  return <ListStyles>{children}</ListStyles>;
};

export default List;
