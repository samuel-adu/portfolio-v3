import { Link } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="nav__logo">
            Samuel Adu
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
}

export default Header;
