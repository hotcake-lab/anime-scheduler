import { Menu, Search, Bell } from 'lucide-react';
import './Header.css';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header className="Header">
      <button className="HeaderButton">
        <Menu size={24} />
      </button>

      <h1 className="HeaderTitle">
        {title}
      </h1>

      <div className="HeaderActions">
        <button className="HeaderButton">
          <Search size={22} />
        </button>

        <button className="HeaderButton">
          <Bell size={22} />
        </button>
      </div>
    </header>
  );
}

export default Header;