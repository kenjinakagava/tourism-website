import Nav from "./Nav";
import HeroHeader from "./HeroHeader";
interface HeaderProps {
  isHero?: boolean;
}

const Header = ({ isHero }: HeaderProps) => {
  return (
    <header>
      <Nav />
      {isHero === true ? <HeroHeader /> : null}
    </header>
  );
};

export default Header;
