import Nav from "./Nav";
import HeroHeader from "./HeroHeader";
interface HeaderProps {
  isHero?: boolean;
  banner?: React.ReactNode;
}

const Header = ({ isHero, banner }: HeaderProps) => {
  return (
    <header>
      <Nav isHero={isHero} />
      {isHero === true ? <HeroHeader /> : null}
      {banner ? banner : null}
    </header>
  );
};

export default Header;
