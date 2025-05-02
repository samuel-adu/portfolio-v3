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

          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link social-link github"
              >
                projects
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link social-link linkedin"
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
}

export default Header;
