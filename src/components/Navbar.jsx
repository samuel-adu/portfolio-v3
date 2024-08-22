import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="nav">
          <div className="logo-div mr-auto">
            <Link
              to="/"
              className="mr-auto text-xl lowercase font-bold flex items-center gap-1"
            >
              SamuelAdu
            </Link>
          </div>

          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="https://www.frontendmentor.io/profile/samuel-adu"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link social-link fem"
              >
                <SiFrontendmentor />
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="https://github.com/samuel-adu"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link social-link github"
              >
                <FaGithub />
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="https://www.linkedin.com/in/samuel-oa"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link social-link linkedin"
              >
                <FaLinkedin />
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
