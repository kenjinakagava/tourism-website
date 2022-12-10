import Nav from "./Nav";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header>
      <Nav />
      {children}
    </header>
  );
};

export default Header;
